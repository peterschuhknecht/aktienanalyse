#!/usr/bin/env python3
"""Validate Market Monitor data before investment analysis.

Default mode is read-only. Use --write-issues to persist open findings to
data_quality_issues with an explicit SQLite transaction.
"""

from __future__ import annotations

import argparse
import datetime as dt
import re
import sqlite3
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable


DETECTED_BY = "tools/market_monitor_validate.py"
SEVERITY_RANK = {"info": 0, "warning": 1, "blocker": 2}
ACTIVE_STATUSES = ("active", "watch")


@dataclass(frozen=True)
class Issue:
    issue_type: str
    severity: str
    symbol: str | None
    field_name: str | None
    observed_value: str | None
    expected_rule: str
    source: str | None = None
    source_url: str | None = None
    notes: str | None = None


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Run Market Monitor data-quality checks."
    )
    parser.add_argument(
        "--db",
        default="05_data/market_monitor.sqlite",
        help="Path to the SQLite database.",
    )
    parser.add_argument(
        "--cache",
        default="05_data/latest_quotes.md",
        help="Path to latest_quotes.md for Markdown-vs-DB checks.",
    )
    parser.add_argument(
        "--write-issues",
        action="store_true",
        help="Persist current findings to data_quality_issues.",
    )
    parser.add_argument(
        "--max-rows",
        type=int,
        default=80,
        help="Maximum findings to print.",
    )
    return parser.parse_args()


def connect(db_path: Path) -> sqlite3.Connection:
    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys=ON;")
    return conn


def table_or_view_exists(conn: sqlite3.Connection, name: str) -> bool:
    row = conn.execute(
        """
        SELECT 1
        FROM sqlite_master
        WHERE name = ?
          AND type IN ('table', 'view')
        """,
        (name,),
    ).fetchone()
    return row is not None


def parse_number(value: str | None) -> float | None:
    if value is None:
        return None
    text = value.strip()
    if not text or text.lower() in {"n/a", "n/b", "na", "null", "none", "-"}:
        return None
    text = text.replace("%", "").replace("+", "").replace(",", "")
    text = re.sub(r"\s+", "", text)
    try:
        return float(text)
    except ValueError:
        return None


def split_markdown_row(line: str) -> list[str]:
    return [cell.strip() for cell in line.strip().strip("|").split("|")]


def primary_symbol(raw_symbol: str, company: str) -> str | None:
    symbol = raw_symbol.split("/")[0].strip()
    if symbol.lower() == "private":
        name = company.strip().upper().replace(" ", "")
        if name == "SPACEX":
            return "SPACEX.PRIVATE"
        if name == "XAI":
            return "XAI.PRIVATE"
        return None
    return symbol or None


def parse_latest_quotes_cache(cache_path: Path) -> dict[str, dict[str, str | float | None]]:
    if not cache_path.exists():
        return {}

    rows: dict[str, dict[str, str | float | None]] = {}
    lines = cache_path.read_text(encoding="utf-8").splitlines()
    in_quotes_table = False
    headers: list[str] = []

    for line in lines:
        if not line.startswith("|"):
            if in_quotes_table:
                break
            continue

        cells = split_markdown_row(line)
        normalized = [cell.lower() for cell in cells]

        if not in_quotes_table:
            if "unternehmen" in normalized and "symbol" in normalized and "kurs" in normalized:
                headers = cells
                in_quotes_table = True
            continue

        if set("".join(cells)) <= {"-", ":"}:
            continue
        if len(cells) != len(headers):
            continue

        row = dict(zip(headers, cells))
        company = row.get("Unternehmen", "")
        symbol = primary_symbol(row.get("Symbol", ""), company)
        if not symbol:
            continue

        rows[symbol] = {
            "company": company,
            "price": parse_number(row.get("Kurs")),
            "currency": row.get("Waehrung"),
            "source": row.get("Quelle"),
            "raw_price": row.get("Kurs"),
        }

    return rows


def fetch_latest_quotes(conn: sqlite3.Connection) -> dict[str, sqlite3.Row]:
    if not table_or_view_exists(conn, "latest_quote_snapshots"):
        return {}
    rows = conn.execute("SELECT * FROM latest_quote_snapshots").fetchall()
    return {row["symbol"]: row for row in rows}


def fetch_symbols(conn: sqlite3.Connection) -> dict[str, sqlite3.Row]:
    rows = conn.execute("SELECT * FROM symbols").fetchall()
    return {row["symbol"]: row for row in rows}


def collect_view_issues(conn: sqlite3.Connection) -> list[Issue]:
    issues: list[Issue] = []

    if table_or_view_exists(conn, "stale_quotes"):
        for row in conn.execute("SELECT * FROM stale_quotes").fetchall():
            field = "price_date" if row["price_date"] else "quote_snapshot"
            observed = row["price_date"] or "missing"
            issues.append(
                Issue(
                    issue_type="stale_quote",
                    severity=row["severity"],
                    symbol=row["symbol"],
                    field_name=field,
                    observed_value=str(observed),
                    expected_rule="Aktive/Watch-Symbole brauchen einen frischen, positiven Quote-Snapshot.",
                    source=row["source"],
                    notes=row["issue_summary"],
                )
            )

    if table_or_view_exists(conn, "quote_outlier_candidates"):
        for row in conn.execute("SELECT * FROM quote_outlier_candidates").fetchall():
            observed_parts = [
                f"price={row['price']}",
                f"return_1d={row['return_1d']}",
                f"distance_52w_high={row['distance_52w_high']}",
            ]
            issues.append(
                Issue(
                    issue_type="quote_outlier",
                    severity=row["severity"],
                    symbol=row["symbol"],
                    field_name="quote_snapshot",
                    observed_value=", ".join(observed_parts),
                    expected_rule="Quote-Felder muessen in plausiblen Wertebereichen liegen.",
                    source=row["source"],
                    notes=row["issue_summary"],
                )
            )

    if table_or_view_exists(conn, "missing_required_fundamentals"):
        for row in conn.execute("SELECT * FROM missing_required_fundamentals").fetchall():
            issues.append(
                Issue(
                    issue_type="missing_required_fundamentals",
                    severity=row["severity"],
                    symbol=row["symbol"],
                    field_name="fundamentals_snapshots",
                    observed_value="missing_or_incomplete",
                    expected_rule="Aktive/Watch-Symbole brauchen aktuelle Bewertungs-, Wachstums-, Margen- oder Guidance-Felder.",
                    notes=row["issue_summary"],
                )
            )

    return issues


def collect_integrity_issues(conn: sqlite3.Connection) -> list[Issue]:
    issues: list[Issue] = []
    integrity = conn.execute("PRAGMA integrity_check;").fetchone()[0]
    if integrity != "ok":
        issues.append(
            Issue(
                issue_type="sqlite_integrity",
                severity="blocker",
                symbol=None,
                field_name="PRAGMA integrity_check",
                observed_value=str(integrity),
                expected_rule="SQLite integrity_check muss ok ergeben.",
            )
        )
    return issues


def collect_schema_issues(conn: sqlite3.Connection) -> list[Issue]:
    required = [
        "data_quality_issues",
        "stale_quotes",
        "quote_outlier_candidates",
        "cache_db_mismatches",
        "missing_required_fundamentals",
    ]
    issues: list[Issue] = []
    for name in required:
        if not table_or_view_exists(conn, name):
            issues.append(
                Issue(
                    issue_type="missing_schema_object",
                    severity="blocker",
                    symbol=None,
                    field_name=name,
                    observed_value="missing",
                    expected_rule=f"Schemaobjekt {name} muss vorhanden sein.",
                )
            )
    return issues


def collect_cache_db_issues(
    cache_path: Path,
    symbols: dict[str, sqlite3.Row],
    latest_quotes: dict[str, sqlite3.Row],
) -> list[Issue]:
    issues: list[Issue] = []
    cache_rows = parse_latest_quotes_cache(cache_path)

    if not cache_rows:
        return [
            Issue(
                issue_type="cache_parse",
                severity="warning",
                symbol=None,
                field_name=str(cache_path),
                observed_value="no_quote_rows",
                expected_rule="latest_quotes.md muss eine parsebare Kursdaten-Tabelle enthalten.",
            )
        ]

    for symbol, row in cache_rows.items():
        if symbol.endswith(".PRIVATE"):
            continue
        if symbol not in symbols:
            issues.append(
                Issue(
                    issue_type="cache_unknown_symbol",
                    severity="warning",
                    symbol=None,
                    field_name="symbol",
                    observed_value=symbol,
                    expected_rule="Jedes Cache-Symbol muss in symbols existieren.",
                    source=str(row.get("source") or ""),
                )
            )
            continue

        db_row = latest_quotes.get(symbol)
        if not db_row:
            issues.append(
                Issue(
                    issue_type="cache_db_mismatch",
                    severity="warning",
                    symbol=symbol,
                    field_name="quote_snapshot",
                    observed_value="cache_only",
                    expected_rule="latest_quotes.md und latest_quote_snapshots muessen dieselben relevanten Symbole abdecken.",
                    source=str(row.get("source") or ""),
                )
            )
            continue

        cache_price = row["price"]
        db_price = db_row["price"]
        if cache_price is not None and db_price is not None:
            tolerance = max(0.01, abs(float(db_price)) * 0.001)
            delta = abs(float(cache_price) - float(db_price))
            if delta > tolerance:
                severity = "blocker" if delta > abs(float(db_price)) * 0.02 else "warning"
                issues.append(
                    Issue(
                        issue_type="cache_db_mismatch",
                        severity=severity,
                        symbol=symbol,
                        field_name="price",
                        observed_value=f"cache={cache_price}, db={db_price}",
                        expected_rule="Kurs im Markdown-Cache muss zum neuesten SQLite-Snapshot passen.",
                        source=str(row.get("source") or db_row["source"]),
                    )
                )

        cache_currency = row.get("currency")
        db_currency = db_row["currency"]
        if cache_currency and db_currency and str(cache_currency) != str(db_currency):
            issues.append(
                Issue(
                    issue_type="cache_db_mismatch",
                    severity="warning",
                    symbol=symbol,
                    field_name="currency",
                    observed_value=f"cache={cache_currency}, db={db_currency}",
                    expected_rule="Waehrung im Markdown-Cache muss zum neuesten SQLite-Snapshot passen.",
                    source=str(row.get("source") or db_row["source"]),
                )
            )

    for symbol, sym_row in symbols.items():
        if sym_row["active_status"] not in ACTIVE_STATUSES or symbol.endswith(".PRIVATE"):
            continue
        if symbol not in cache_rows:
            issues.append(
                Issue(
                    issue_type="cache_db_mismatch",
                    severity="warning",
                    symbol=symbol,
                    field_name="symbol",
                    observed_value="db_only",
                    expected_rule="Aktive/Watch-Symbole aus SQLite muessen im latest_quotes.md-Cache auftauchen.",
                )
            )

    return issues


def collect_missing_momentum_issues(conn: sqlite3.Connection) -> list[Issue]:
    if not table_or_view_exists(conn, "latest_quote_snapshots"):
        return []
    rows = conn.execute(
        """
        SELECT sym.symbol,
               lq.return_1m,
               lq.return_3m,
               lq.distance_52w_high,
               lq.source
        FROM symbols sym
        JOIN latest_quote_snapshots lq ON lq.symbol = sym.symbol
        WHERE sym.active_status IN ('active', 'watch')
          AND sym.symbol NOT LIKE '%.PRIVATE'
          AND (
            lq.return_1m IS NULL
            OR lq.return_3m IS NULL
            OR lq.distance_52w_high IS NULL
          )
        ORDER BY sym.group_name, sym.symbol
        """
    ).fetchall()

    issues: list[Issue] = []
    for row in rows:
        missing = []
        if row["return_1m"] is None:
            missing.append("return_1m")
        if row["return_3m"] is None:
            missing.append("return_3m")
        if row["distance_52w_high"] is None:
            missing.append("distance_52w_high")
        issues.append(
            Issue(
                issue_type="missing_momentum_fields",
                severity="warning",
                symbol=row["symbol"],
                field_name=",".join(missing),
                observed_value="NULL",
                expected_rule="Momentum- und 52W-Felder sollten fuer aktive/Watch-Symbole befuellt sein.",
                source=row["source"],
            )
        )
    return issues


def dedupe_issues(issues: Iterable[Issue]) -> list[Issue]:
    seen: set[tuple[str, str | None, str | None, str | None, str]] = set()
    deduped: list[Issue] = []
    for issue in issues:
        key = (
            issue.issue_type,
            issue.symbol,
            issue.field_name,
            issue.observed_value,
            issue.expected_rule,
        )
        if key in seen:
            continue
        seen.add(key)
        deduped.append(issue)
    return deduped


def write_issues(conn: sqlite3.Connection, issues: list[Issue]) -> None:
    if not table_or_view_exists(conn, "data_quality_issues"):
        raise RuntimeError("data_quality_issues table is missing; apply schema first")

    now = dt.datetime.now().isoformat(timespec="seconds")
    conn.isolation_level = None
    conn.execute("PRAGMA foreign_keys=ON;")
    conn.execute("BEGIN IMMEDIATE;")
    try:
        conn.execute(
            """
            UPDATE data_quality_issues
            SET status = 'resolved',
                resolved_at = ?
            WHERE status = 'open'
              AND detected_by = ?
            """,
            (now, DETECTED_BY),
        )
        for issue in issues:
            conn.execute(
                """
                INSERT INTO data_quality_issues (
                  created_at,
                  resolved_at,
                  status,
                  issue_type,
                  severity,
                  symbol,
                  field_name,
                  observed_value,
                  expected_rule,
                  source,
                  source_url,
                  detected_by,
                  notes
                )
                VALUES (?, NULL, 'open', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                ON CONFLICT(issue_type, symbol, field_name, observed_value, expected_rule, detected_by)
                DO UPDATE SET
                  status = 'open',
                  resolved_at = NULL,
                  severity = excluded.severity,
                  source = excluded.source,
                  source_url = excluded.source_url,
                  notes = excluded.notes,
                  created_at = excluded.created_at
                """,
                (
                    now,
                    issue.issue_type,
                    issue.severity,
                    issue.symbol,
                    issue.field_name,
                    issue.observed_value,
                    issue.expected_rule,
                    issue.source,
                    issue.source_url,
                    DETECTED_BY,
                    issue.notes,
                ),
            )
        conn.execute("COMMIT;")
    except Exception:
        conn.execute("ROLLBACK;")
        raise


def print_summary(issues: list[Issue], max_rows: int) -> None:
    counts = {"blocker": 0, "warning": 0, "info": 0}
    for issue in issues:
        counts[issue.severity] = counts.get(issue.severity, 0) + 1

    print(
        "Datenqualitaetspruefung: "
        f"{counts.get('blocker', 0)} blocker, "
        f"{counts.get('warning', 0)} warning, "
        f"{counts.get('info', 0)} info"
    )

    sorted_issues = sorted(
        issues,
        key=lambda item: (
            -SEVERITY_RANK.get(item.severity, 0),
            item.issue_type,
            item.symbol or "",
            item.field_name or "",
        ),
    )
    for issue in sorted_issues[:max_rows]:
        symbol = issue.symbol or "-"
        field = issue.field_name or "-"
        observed = f" observed={issue.observed_value}" if issue.observed_value else ""
        note = f" note={issue.notes}" if issue.notes else ""
        print(
            f"[{issue.severity.upper()}] {issue.issue_type} "
            f"symbol={symbol} field={field}{observed}{note}"
        )
    if len(sorted_issues) > max_rows:
        print(f"... {len(sorted_issues) - max_rows} weitere Befunde unterdrueckt")


def exit_code(issues: list[Issue]) -> int:
    highest = max((SEVERITY_RANK.get(issue.severity, 0) for issue in issues), default=0)
    if highest >= SEVERITY_RANK["blocker"]:
        return 2
    if highest >= SEVERITY_RANK["warning"]:
        return 1
    return 0


def main() -> int:
    args = parse_args()
    db_path = Path(args.db)
    cache_path = Path(args.cache)

    if not db_path.exists():
        print(f"SQLite-Datenbank fehlt: {db_path}", file=sys.stderr)
        return 2

    with connect(db_path) as conn:
        issues: list[Issue] = []
        issues.extend(collect_integrity_issues(conn))
        issues.extend(collect_schema_issues(conn))
        issues.extend(collect_view_issues(conn))
        issues.extend(
            collect_cache_db_issues(
                cache_path=cache_path,
                symbols=fetch_symbols(conn),
                latest_quotes=fetch_latest_quotes(conn),
            )
        )
        issues.extend(collect_missing_momentum_issues(conn))
        issues = dedupe_issues(issues)

        if args.write_issues:
            write_issues(conn, issues)

    print_summary(issues, args.max_rows)
    return exit_code(issues)


if __name__ == "__main__":
    raise SystemExit(main())
