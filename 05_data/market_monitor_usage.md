# Market Monitor Nutzung

Zweck: Diese Datei verankert, wie Agenten die lokale SQLite-Datenbank nutzen. Markdown bleibt die Wissens-, Thesen- und Entscheidungsebene. SQLite ist die Mess-, Historien- und Alert-Ebene.

## Dateien

| Datei | Rolle |
|---|---|
| `05_data/market_monitor.sqlite` | Lokale laufende SQLite-Datenbank |
| `05_data/market_monitor_schema.sql` | Versioniertes, idempotentes Schema |
| `05_data/market_monitor_seed.sql` | Initiales Symboluniversum aus `05_data/covered_symbols.md` |
| `05_data/market_monitor_schema.md` | Fachliche Beschreibung der Tabellen |
| `05_data/latest_quotes.md` | Menschlich lesbarer aktueller Kurs-Cache |
| `05_data/latest_news.md` | Menschlich lesbarer aktueller News-Cache |
| `05_data/upcoming_events.md` | Menschlich lesbarer aktueller Event-Cache |
| `02_context/watchlist_ai_operator_signals.md` | Menschlich lesbares Operator-/Research-Signal-Radar |
| `tools/market_monitor_validate.py` | Read-only Quality Gate fuer SQLite- und Markdown-Cache-Konsistenz; mit `--write-issues` persistiert es Befunde |

## Grundregel

- In SQLite speichern: wiederholbare Daten, Verlauf, Snapshots, Quellen-Metadaten, Alerts, Retention-Status.
- In Markdown speichern: These, Einordnung, Entscheidungen, Gegenargumente, offene Fragen, Reports.
- Aussagen getrackter Operatoren und Research-Personen gehoeren in `person_statements`; Personen selbst gehoeren in `people`.
- Bei Widerspruch zwischen SQLite und Markdown gilt: Primaerquelle pruefen, Konflikt in `03_state/open_questions.md` notieren und danach beide Ebenen bereinigen.
- Jede schreibende SQLite-Verbindung muss explizit mit `PRAGMA foreign_keys=ON;` starten, weil SQLite diese Einstellung pro Verbindung behandelt.

## Initialisierung

Vom Repository-Root:

```sh
sqlite3 05_data/market_monitor.sqlite ".read 05_data/market_monitor_schema.sql"
sqlite3 05_data/market_monitor.sqlite ".read 05_data/market_monitor_seed.sql"
sqlite3 05_data/market_monitor.sqlite "PRAGMA integrity_check;"
python3 tools/market_monitor_validate.py
```

Bei manuellen Inserts oder Updates:

```sh
sqlite3 05_data/market_monitor.sqlite "PRAGMA foreign_keys=ON; BEGIN IMMEDIATE; ... COMMIT;"
```

## Pflichtnutzung bei Marktanalysen

Bei jeder sachlichen Aktien-, Depot-, Branchen-, Watchlist- oder Zukunftsanfrage:

1. Repository-Rundgang nach `AGENTS.md` ausfuehren.
2. `05_data/market_monitor_usage.md` und `05_data/market_monitor_schema.md` pruefen.
3. Relevante Symbole aus `05_data/covered_symbols.md` und `symbols` bestimmen.
4. Relevante P1/P2/P3-Personen aus `02_context/watchlist_ai_operator_signals.md` und `active_people` bestimmen.
5. Frische Kurse, News, Events, Makro- und Fundamentaldaten aus hochwertigen Quellen abrufen.
6. Relevante Operator-/Research-Aussagen aus hochwertigen Quellen abrufen und nach `Hard`, `Medium` oder `Soft` klassifizieren.
7. Neue strukturierte Daten in SQLite schreiben:
   - Kurse in `quote_snapshots`
   - Fundamentaldaten in `fundamentals_snapshots`
   - News in `news_items`
   - Operator-/Research-Aussagen in `person_statements`
   - Signale in `signal_snapshots`
   - Termine in `event_calendar`
   - Makro in `macro_snapshots`
   - Branchensignale in `industry_signal_snapshots`
8. `latest_quotes.md`, `latest_news.md` und `upcoming_events.md` als lesbare Caches aktualisieren.
9. Quality Gate ausfuehren: `python3 tools/market_monitor_validate.py`; bei Blockern keine Bewertung, Kauf-/Verkaufsfolgerung oder These-Aenderung formulieren, bevor die betroffenen Daten gegen eine hochwertige Quelle geprueft wurden.
10. Nur echte These-, Risiko-, Alert- oder Entscheidungswechsel in Unternehmensakten, Watchlists und `03_state/evaluation_log.md` verdichten.

Bei jedem Schreibvorgang gilt: `PRAGMA foreign_keys=ON;` setzen, dann in einer Transaktion schreiben. Wenn der Schreibvorgang nur ein Test ist, am Ende `ROLLBACK` statt `COMMIT` nutzen.

## Nuetzliche Abfragen

```sh
sqlite3 -header -column 05_data/market_monitor.sqlite "SELECT symbol, company, group_name, active_status FROM symbols ORDER BY group_name, symbol;"
```

```sh
sqlite3 -header -column 05_data/market_monitor.sqlite "SELECT symbol, price, return_1d, distance_52w_high, source FROM latest_quote_snapshots ORDER BY symbol;"
```

```sh
sqlite3 -header -column 05_data/market_monitor.sqlite "SELECT event_date, event_time, symbol, event_name, importance FROM events_next_5_days;"
```

```sh
sqlite3 -header -column 05_data/market_monitor.sqlite "SELECT news_date, symbol, headline, thesis_effect, action_required FROM unprocessed_news LIMIT 20;"
```

```sh
sqlite3 -header -column 05_data/market_monitor.sqlite "SELECT symbol, alert_status, signal_reason, action_required FROM alert_candidates;"
```

```sh
sqlite3 -header -column 05_data/market_monitor.sqlite "SELECT track_priority, name, organization, signal_domain FROM active_people ORDER BY track_priority, organization, name;"
```

```sh
sqlite3 -header -column 05_data/market_monitor.sqlite "SELECT statement_date, name, organization, headline, evidence_level, action_required FROM person_signal_alerts LIMIT 20;"
```

```sh
sqlite3 -header -column 05_data/market_monitor.sqlite "SELECT severity, issue_type, symbol, field_name, observed_value FROM data_quality_issues WHERE status = 'open' ORDER BY severity DESC, created_at DESC;"
```

## Quality Gate

Der Validator ist standardmaessig read-only:

```sh
python3 tools/market_monitor_validate.py
```

Exit-Codes:

| Code | Bedeutung | Folge |
|---:|---|---|
| 0 | Keine Blocker oder Warnungen | Analyse kann normal fortfahren |
| 1 | Warnungen | Analyse darf fortfahren, aber Datenluecken im Fazit nennen |
| 2 | Blocker | Keine harte Bewertung oder Depotentscheidung ohne Gegenpruefung |

Persistente Befunde werden nur auf explizite Anforderung geschrieben:

```sh
python3 tools/market_monitor_validate.py --write-issues
```

Dabei gilt wie bei jedem schreibenden SQLite-Zugriff: `PRAGMA foreign_keys=ON;`, `BEGIN IMMEDIATE;` und `COMMIT` fuer echte Daten. Der Validator setzt diese Regeln selbst.

## Datenqualitaet

- Fehlende Werte bleiben `NULL`; keine Schaetzungen erfinden.
- Jeder Snapshot braucht Quelle, Quelldatum oder Abrufzeit und Quellenqualitaet.
- Quality-Gate-Blocker aus `data_quality_issues`, `stale_quotes`, `quote_outlier_candidates` oder `cache_db_mismatches` muessen vor einer Bewertungs- oder Depotfolgerung geklaert werden.
- Fremdschluessel auf `symbols(symbol)` duerfen nicht umgangen werden; unbekannte Symbole zuerst in `symbols`, `05_data/covered_symbols.md` und bei Bedarf `05_data/market_monitor_seed.sql` ergaenzen.
- `person_statements.evidence_level` trennt Fakten von Meinung: `Hard` = Daten/Guidance/Kunden/Backlog/Capex/Regulierung, `Medium` = Roadmap mit Lieferkettenbezug, `Soft` = Meinung/Narrativ. `Soft` darf keine These veraendern.
- Aggregatoren duerfen fuer Kursueberblick genutzt werden; Bewertungs- und These-aendernde Daten nach Moeglichkeit gegen Primaerquelle oder hochwertigen Finanzdatenanbieter pruefen.
- Nachrichten juenger als 30 Tage koennen in `latest_news.md` bleiben. Aeltere Nachrichten bleiben in SQLite erhalten; in Markdown bleiben sie nur, wenn sie These, Bewertung, Katalysator oder Red-Flag weiter beeinflussen.

## Pflege

- Wenn `05_data/covered_symbols.md` geaendert wird, auch `symbols` und `05_data/market_monitor_seed.sql` aktualisieren.
- Wenn `02_context/watchlist_ai_operator_signals.md` geaendert wird, auch `people` und `05_data/market_monitor_seed.sql` aktualisieren.
- Wenn neue Datenarten noetig werden, zuerst `05_data/market_monitor_schema.md` fachlich aktualisieren, dann `05_data/market_monitor_schema.sql` erweitern.
- Nach Schemaaenderungen `PRAGMA integrity_check;` ausfuehren und das Ergebnis in `03_state/evaluation_log.md` oder `03_state/task_plan.md` kurz vermerken.
