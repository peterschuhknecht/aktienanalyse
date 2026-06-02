PRAGMA foreign_keys = ON;

BEGIN IMMEDIATE;

CREATE TABLE IF NOT EXISTS schema_migrations (
  version TEXT PRIMARY KEY,
  applied_at TEXT NOT NULL DEFAULT (datetime('now')),
  description TEXT NOT NULL
);

INSERT OR IGNORE INTO schema_migrations (version, description)
VALUES ('001', 'Initial market monitor schema for quote, news, event, signal and thesis history');

INSERT OR IGNORE INTO schema_migrations (version, description)
VALUES ('002', 'Add operator signal people and person statement tracking');

INSERT OR IGNORE INTO schema_migrations (version, description)
VALUES ('003', 'Add data quality issue tracking and validation views');

CREATE TABLE IF NOT EXISTS symbols (
  symbol TEXT PRIMARY KEY,
  company TEXT NOT NULL,
  market TEXT,
  currency TEXT,
  group_name TEXT NOT NULL,
  thesis_bucket TEXT,
  active_status TEXT NOT NULL CHECK (active_status IN ('active', 'watch', 'background', 'sold', 'inactive')),
  source_note TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS people (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  organization TEXT NOT NULL,
  role TEXT NOT NULL,
  signal_domain TEXT NOT NULL,
  track_priority TEXT NOT NULL CHECK (track_priority IN ('P1', 'P2', 'P3')),
  track_status TEXT NOT NULL DEFAULT 'active' CHECK (track_status IN ('active', 'watch', 'inactive')),
  rationale TEXT NOT NULL,
  official_source_url TEXT,
  source_quality TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE(name, organization)
);

CREATE INDEX IF NOT EXISTS idx_people_priority_status
ON people(track_priority, track_status, organization, name);

CREATE TABLE IF NOT EXISTS person_statements (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  person_id INTEGER NOT NULL REFERENCES people(id),
  statement_date TEXT NOT NULL,
  discovered_at TEXT NOT NULL DEFAULT (datetime('now')),
  source TEXT NOT NULL,
  url TEXT,
  headline TEXT NOT NULL,
  summary TEXT NOT NULL,
  evidence_level TEXT NOT NULL CHECK (evidence_level IN ('Hard', 'Medium', 'Soft', 'Unknown')),
  affected_universe TEXT,
  symbol TEXT REFERENCES symbols(symbol),
  impact TEXT CHECK (impact IN ('Bullish', 'Bearish', 'Mixed', 'Neutral', 'Unknown')),
  thesis_effect TEXT CHECK (thesis_effect IN ('bestaetigt', 'schwaecht', 'veraendert', 'unklar', 'keiner')),
  action_required TEXT,
  keep_until TEXT,
  processed_to_markdown INTEGER NOT NULL DEFAULT 0 CHECK (processed_to_markdown IN (0, 1)),
  notes TEXT,
  UNIQUE(person_id, statement_date, headline, url)
);

CREATE INDEX IF NOT EXISTS idx_person_statements_person_date
ON person_statements(person_id, statement_date DESC, discovered_at DESC);

CREATE INDEX IF NOT EXISTS idx_person_statements_processing
ON person_statements(processed_to_markdown, evidence_level, keep_until);

CREATE INDEX IF NOT EXISTS idx_person_statements_symbol_date
ON person_statements(symbol, statement_date DESC, discovered_at DESC);

CREATE TABLE IF NOT EXISTS quote_snapshots (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  captured_at TEXT NOT NULL,
  price_date TEXT NOT NULL,
  symbol TEXT NOT NULL REFERENCES symbols(symbol),
  price REAL,
  currency TEXT,
  market_cap REAL,
  market_cap_currency TEXT,
  return_1d REAL,
  return_5d REAL,
  return_1m REAL,
  return_3m REAL,
  return_ytd REAL,
  distance_52w_high REAL,
  benchmark_symbol TEXT,
  relative_strength TEXT,
  source TEXT NOT NULL,
  source_url TEXT,
  source_quality TEXT NOT NULL,
  notes TEXT
);

CREATE INDEX IF NOT EXISTS idx_quote_snapshots_symbol_date
ON quote_snapshots(symbol, price_date DESC, captured_at DESC);

CREATE TABLE IF NOT EXISTS fundamentals_snapshots (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  captured_at TEXT NOT NULL,
  source_date TEXT,
  period TEXT NOT NULL,
  symbol TEXT NOT NULL REFERENCES symbols(symbol),
  currency TEXT,
  revenue_ttm REAL,
  revenue_growth_yoy REAL,
  eps_ttm REAL,
  eps_growth_expected REAL,
  pe_ttm REAL,
  pe_forward REAL,
  peg REAL,
  peg_method TEXT,
  gross_margin REAL,
  operating_margin REAL,
  fcf_margin REAL,
  net_debt REAL,
  capex REAL,
  inventory_trend TEXT,
  guidance_summary TEXT,
  source TEXT NOT NULL,
  source_url TEXT,
  source_quality TEXT NOT NULL,
  notes TEXT
);

CREATE INDEX IF NOT EXISTS idx_fundamentals_symbol_period
ON fundamentals_snapshots(symbol, period, captured_at DESC);

CREATE TABLE IF NOT EXISTS news_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  discovered_at TEXT NOT NULL,
  news_date TEXT NOT NULL,
  symbol TEXT REFERENCES symbols(symbol),
  affected_universe TEXT,
  category TEXT NOT NULL,
  headline TEXT NOT NULL,
  summary TEXT NOT NULL,
  impact TEXT CHECK (impact IN ('Bullish', 'Bearish', 'Mixed', 'Neutral', 'Unknown')),
  thesis_effect TEXT CHECK (thesis_effect IN ('bestaetigt', 'schwaecht', 'veraendert', 'unklar', 'keiner')),
  source TEXT NOT NULL,
  url TEXT,
  source_quality TEXT NOT NULL,
  keep_until TEXT,
  processed_to_markdown INTEGER NOT NULL DEFAULT 0 CHECK (processed_to_markdown IN (0, 1)),
  action_required TEXT,
  notes TEXT,
  UNIQUE(news_date, symbol, headline, url)
);

CREATE INDEX IF NOT EXISTS idx_news_items_symbol_date
ON news_items(symbol, news_date DESC, discovered_at DESC);

CREATE INDEX IF NOT EXISTS idx_news_items_processing
ON news_items(processed_to_markdown, keep_until);

CREATE TABLE IF NOT EXISTS signal_snapshots (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  captured_at TEXT NOT NULL,
  symbol TEXT NOT NULL REFERENCES symbols(symbol),
  momentum_status TEXT,
  environment_status TEXT,
  valuation_status TEXT,
  alert_status TEXT NOT NULL DEFAULT 'kein Alert',
  signal_reason TEXT NOT NULL,
  action_required TEXT,
  source TEXT,
  source_quality TEXT,
  notes TEXT
);

CREATE INDEX IF NOT EXISTS idx_signal_snapshots_symbol_time
ON signal_snapshots(symbol, captured_at DESC);

CREATE TABLE IF NOT EXISTS event_calendar (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  event_date TEXT NOT NULL,
  event_time TEXT,
  symbol TEXT REFERENCES symbols(symbol),
  affected_universe TEXT,
  event_type TEXT NOT NULL,
  event_name TEXT NOT NULL,
  importance TEXT NOT NULL CHECK (importance IN ('hoch', 'mittel', 'niedrig', 'unklar')),
  status TEXT NOT NULL CHECK (status IN ('bestaetigt', 'erwartet', 'TBD', 'unbestaetigt')),
  relevance TEXT NOT NULL,
  source TEXT NOT NULL,
  source_url TEXT,
  source_quality TEXT NOT NULL,
  action_after_event TEXT,
  processed_to_markdown INTEGER NOT NULL DEFAULT 0 CHECK (processed_to_markdown IN (0, 1)),
  notes TEXT,
  UNIQUE(event_date, symbol, event_name)
);

CREATE INDEX IF NOT EXISTS idx_event_calendar_date
ON event_calendar(event_date, importance);

CREATE TABLE IF NOT EXISTS macro_snapshots (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  captured_at TEXT NOT NULL,
  signal_date TEXT NOT NULL,
  macro_signal TEXT NOT NULL,
  market_area TEXT NOT NULL,
  latest_value REAL,
  value_text TEXT,
  trend_1w_1m TEXT,
  risk_status TEXT,
  source TEXT NOT NULL,
  source_url TEXT,
  source_quality TEXT NOT NULL,
  interpretation TEXT,
  action_required TEXT,
  notes TEXT
);

CREATE INDEX IF NOT EXISTS idx_macro_snapshots_signal_date
ON macro_snapshots(macro_signal, signal_date DESC, captured_at DESC);

CREATE TABLE IF NOT EXISTS industry_signal_snapshots (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  captured_at TEXT NOT NULL,
  signal_date TEXT NOT NULL,
  signal_name TEXT NOT NULL,
  market_segment TEXT NOT NULL,
  latest_value REAL,
  value_text TEXT,
  trend_1w_1m TEXT,
  confirmation_status TEXT,
  source TEXT NOT NULL,
  source_url TEXT,
  source_quality TEXT NOT NULL,
  interpretation TEXT,
  action_required TEXT,
  notes TEXT
);

CREATE INDEX IF NOT EXISTS idx_industry_signal_segment_date
ON industry_signal_snapshots(market_segment, signal_date DESC, captured_at DESC);

CREATE TABLE IF NOT EXISTS peer_snapshots (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  captured_at TEXT NOT NULL,
  snapshot_date TEXT NOT NULL,
  peer_group TEXT NOT NULL,
  symbol TEXT NOT NULL REFERENCES symbols(symbol),
  portfolio_status TEXT,
  revenue_growth_yoy REAL,
  eps_growth_expected REAL,
  pe_forward REAL,
  peg REAL,
  peg_method TEXT,
  gross_margin REAL,
  operating_margin REAL,
  fcf_margin REAL,
  net_debt_or_cash REAL,
  capex_trend TEXT,
  inventory_trend TEXT,
  relative_strength TEXT,
  next_catalyst TEXT,
  opportunity_cost_status TEXT,
  source TEXT NOT NULL,
  source_quality TEXT NOT NULL,
  notes TEXT
);

CREATE INDEX IF NOT EXISTS idx_peer_snapshots_group_date
ON peer_snapshots(peer_group, snapshot_date DESC);

CREATE TABLE IF NOT EXISTS portfolio_positions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  captured_at TEXT NOT NULL,
  symbol TEXT NOT NULL REFERENCES symbols(symbol),
  position_size REAL,
  portfolio_weight REAL,
  entry_price REAL,
  current_price REAL,
  unrealized_return REAL,
  target_weight REAL,
  max_weight REAL,
  currency TEXT,
  thesis_bucket TEXT,
  correlation_risk TEXT,
  liquidity_risk TEXT,
  reduction_trigger TEXT,
  add_trigger TEXT,
  source TEXT,
  source_quality TEXT,
  notes TEXT
);

CREATE INDEX IF NOT EXISTS idx_portfolio_positions_symbol_time
ON portfolio_positions(symbol, captured_at DESC);

CREATE TABLE IF NOT EXISTS thesis_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  event_at TEXT NOT NULL,
  symbol TEXT REFERENCES symbols(symbol),
  event_type TEXT NOT NULL,
  title TEXT NOT NULL,
  fact_summary TEXT,
  assumption_summary TEXT,
  thesis_effect TEXT,
  decision_summary TEXT,
  markdown_path TEXT,
  source TEXT,
  source_quality TEXT,
  notes TEXT
);

CREATE INDEX IF NOT EXISTS idx_thesis_events_symbol_time
ON thesis_events(symbol, event_at DESC);

CREATE TABLE IF NOT EXISTS run_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  run_started_at TEXT NOT NULL,
  run_finished_at TEXT,
  trigger TEXT NOT NULL,
  scope TEXT,
  sources_checked TEXT,
  files_updated TEXT,
  result_summary TEXT,
  data_quality_notes TEXT
);

CREATE TABLE IF NOT EXISTS data_quality_issues (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  resolved_at TEXT,
  status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'resolved', 'ignored')),
  issue_type TEXT NOT NULL,
  severity TEXT NOT NULL CHECK (severity IN ('info', 'warning', 'blocker')),
  symbol TEXT REFERENCES symbols(symbol),
  field_name TEXT,
  observed_value TEXT,
  expected_rule TEXT NOT NULL,
  source TEXT,
  source_url TEXT,
  detected_by TEXT NOT NULL,
  notes TEXT,
  UNIQUE(issue_type, symbol, field_name, observed_value, expected_rule, detected_by)
);

CREATE INDEX IF NOT EXISTS idx_data_quality_issues_status
ON data_quality_issues(status, severity, issue_type, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_data_quality_issues_symbol
ON data_quality_issues(symbol, status, created_at DESC);

CREATE VIEW IF NOT EXISTS latest_quote_snapshots AS
SELECT q.*
FROM quote_snapshots q
WHERE q.id = (
  SELECT q2.id
  FROM quote_snapshots q2
  WHERE q2.symbol = q.symbol
  ORDER BY q2.price_date DESC, q2.captured_at DESC, q2.id DESC
  LIMIT 1
);

CREATE VIEW IF NOT EXISTS latest_fundamentals_snapshots AS
SELECT f.*
FROM fundamentals_snapshots f
WHERE f.id = (
  SELECT f2.id
  FROM fundamentals_snapshots f2
  WHERE f2.symbol = f.symbol AND f2.period = f.period
  ORDER BY f2.captured_at DESC, f2.id DESC
  LIMIT 1
);

CREATE VIEW IF NOT EXISTS latest_signal_snapshots AS
SELECT s.*
FROM signal_snapshots s
WHERE s.id = (
  SELECT s2.id
  FROM signal_snapshots s2
  WHERE s2.symbol = s.symbol
  ORDER BY s2.captured_at DESC, s2.id DESC
  LIMIT 1
);

CREATE VIEW IF NOT EXISTS active_people AS
SELECT id,
       name,
       organization,
       role,
       signal_domain,
       track_priority,
       track_status,
       rationale,
       official_source_url,
       source_quality
FROM people
WHERE track_status IN ('active', 'watch')
ORDER BY track_priority, organization, name;

CREATE VIEW IF NOT EXISTS unprocessed_news AS
SELECT *
FROM news_items
WHERE processed_to_markdown = 0
ORDER BY news_date DESC, discovered_at DESC;

CREATE VIEW IF NOT EXISTS unprocessed_person_statements AS
SELECT ps.*,
       p.name,
       p.organization,
       p.role,
       p.signal_domain,
       p.track_priority
FROM person_statements ps
JOIN people p ON p.id = ps.person_id
WHERE ps.processed_to_markdown = 0
ORDER BY ps.statement_date DESC, ps.discovered_at DESC;

CREATE VIEW IF NOT EXISTS person_signal_alerts AS
SELECT ps.id,
       ps.statement_date,
       ps.discovered_at,
       p.name,
       p.organization,
       p.role,
       p.track_priority,
       p.signal_domain,
       ps.symbol,
       ps.affected_universe,
       ps.headline,
       ps.summary,
       ps.evidence_level,
       ps.impact,
       ps.thesis_effect,
       ps.action_required,
       ps.source,
       ps.url
FROM person_statements ps
JOIN people p ON p.id = ps.person_id
WHERE ps.processed_to_markdown = 0
  AND ps.evidence_level IN ('Hard', 'Medium')
  AND (
    ps.action_required IS NOT NULL
    OR ps.thesis_effect IN ('bestaetigt', 'schwaecht', 'veraendert', 'unklar')
  )
ORDER BY ps.statement_date DESC, ps.discovered_at DESC;

CREATE VIEW IF NOT EXISTS news_retention_review AS
SELECT *
FROM news_items
WHERE keep_until IS NOT NULL
  AND date(keep_until) <= date('now', 'localtime')
ORDER BY keep_until ASC, news_date DESC;

CREATE VIEW IF NOT EXISTS events_next_5_days AS
SELECT *
FROM event_calendar
WHERE date(event_date) BETWEEN date('now', 'localtime') AND date('now', 'localtime', '+5 days')
ORDER BY event_date ASC, importance ASC;

CREATE VIEW IF NOT EXISTS stale_quotes AS
SELECT sym.symbol,
       sym.company,
       sym.group_name,
       sym.active_status,
       lq.price_date,
       lq.captured_at,
       lq.price,
       lq.source,
       CASE
         WHEN lq.id IS NULL THEN 'blocker'
         WHEN lq.price IS NULL THEN 'blocker'
         WHEN date(lq.price_date) < date('now', 'localtime', '-3 days') THEN 'warning'
         ELSE 'info'
       END AS severity,
       CASE
         WHEN lq.id IS NULL THEN 'Kein Quote-Snapshot vorhanden'
         WHEN lq.price IS NULL THEN 'Quote-Snapshot ohne Preis'
         WHEN date(lq.price_date) < date('now', 'localtime', '-3 days') THEN 'Quote aelter als drei Kalendertage'
         ELSE 'Quote aktuell'
       END AS issue_summary
FROM symbols sym
LEFT JOIN latest_quote_snapshots lq ON lq.symbol = sym.symbol
WHERE sym.active_status IN ('active', 'watch')
  AND sym.symbol NOT LIKE '%.PRIVATE'
  AND (
    lq.id IS NULL
    OR lq.price IS NULL
    OR date(lq.price_date) < date('now', 'localtime', '-3 days')
  )
ORDER BY severity DESC, sym.group_name, sym.symbol;

CREATE VIEW IF NOT EXISTS quote_outlier_candidates AS
SELECT lq.symbol,
       sym.company,
       lq.price_date,
       lq.price,
       lq.currency,
       lq.return_1d,
       lq.return_5d,
       lq.return_1m,
       lq.return_3m,
       lq.distance_52w_high,
       lq.market_cap,
       lq.source,
       CASE
         WHEN lq.price IS NULL OR lq.price <= 0 THEN 'blocker'
         WHEN abs(lq.return_1d) > 25 THEN 'warning'
         WHEN abs(lq.return_5d) > 40 THEN 'warning'
         WHEN abs(lq.return_1m) > 80 THEN 'warning'
         WHEN abs(lq.return_3m) > 150 THEN 'warning'
         WHEN lq.distance_52w_high < -100 OR lq.distance_52w_high > 50 THEN 'warning'
         WHEN lq.market_cap IS NOT NULL AND lq.market_cap <= 0 THEN 'warning'
         WHEN sym.currency IS NOT NULL AND lq.currency IS NOT NULL AND sym.currency <> lq.currency THEN 'warning'
         ELSE 'info'
       END AS severity,
       trim(
         CASE WHEN lq.price IS NULL OR lq.price <= 0 THEN 'Preis fehlt oder ist nicht positiv; ' ELSE '' END ||
         CASE WHEN abs(lq.return_1d) > 25 THEN '1D-Rendite > 25%; ' ELSE '' END ||
         CASE WHEN abs(lq.return_5d) > 40 THEN '5D-Rendite > 40%; ' ELSE '' END ||
         CASE WHEN abs(lq.return_1m) > 80 THEN '1M-Rendite > 80%; ' ELSE '' END ||
         CASE WHEN abs(lq.return_3m) > 150 THEN '3M-Rendite > 150%; ' ELSE '' END ||
         CASE WHEN lq.distance_52w_high < -100 OR lq.distance_52w_high > 50 THEN '52W-Abstand ausserhalb Plausibilitaetsband; ' ELSE '' END ||
         CASE WHEN lq.market_cap IS NOT NULL AND lq.market_cap <= 0 THEN 'Marktkapitalisierung nicht positiv; ' ELSE '' END ||
         CASE WHEN sym.currency IS NOT NULL AND lq.currency IS NOT NULL AND sym.currency <> lq.currency THEN 'Waehrung weicht vom Symbolstamm ab; ' ELSE '' END
       ) AS issue_summary
FROM latest_quote_snapshots lq
JOIN symbols sym ON sym.symbol = lq.symbol
WHERE sym.active_status IN ('active', 'watch')
  AND sym.symbol NOT LIKE '%.PRIVATE'
  AND (
    lq.price IS NULL
    OR lq.price <= 0
    OR abs(lq.return_1d) > 25
    OR abs(lq.return_5d) > 40
    OR abs(lq.return_1m) > 80
    OR abs(lq.return_3m) > 150
    OR lq.distance_52w_high < -100
    OR lq.distance_52w_high > 50
    OR (lq.market_cap IS NOT NULL AND lq.market_cap <= 0)
    OR (sym.currency IS NOT NULL AND lq.currency IS NOT NULL AND sym.currency <> lq.currency)
  )
ORDER BY severity DESC, lq.symbol;

CREATE VIEW IF NOT EXISTS missing_required_fundamentals AS
SELECT sym.symbol,
       sym.company,
       sym.group_name,
       sym.active_status,
       CASE
         WHEN NOT EXISTS (
           SELECT 1
           FROM fundamentals_snapshots f
           WHERE f.symbol = sym.symbol
         ) THEN 'warning'
         WHEN NOT EXISTS (
           SELECT 1
           FROM latest_fundamentals_snapshots lf
           WHERE lf.symbol = sym.symbol
             AND (
               lf.pe_forward IS NOT NULL
               OR lf.revenue_growth_yoy IS NOT NULL
               OR lf.eps_growth_expected IS NOT NULL
               OR lf.gross_margin IS NOT NULL
               OR lf.operating_margin IS NOT NULL
               OR lf.fcf_margin IS NOT NULL
               OR lf.guidance_summary IS NOT NULL
             )
         ) THEN 'warning'
         ELSE 'info'
       END AS severity,
       CASE
         WHEN NOT EXISTS (
           SELECT 1
           FROM fundamentals_snapshots f
           WHERE f.symbol = sym.symbol
         ) THEN 'Keine Fundamentals-Snapshots vorhanden'
         ELSE 'Fundamentals-Snapshots ohne zentrale Bewertungs-/Wachstumsfelder'
       END AS issue_summary
FROM symbols sym
WHERE sym.active_status IN ('active', 'watch')
  AND sym.symbol NOT LIKE '%.PRIVATE'
  AND (
    NOT EXISTS (
      SELECT 1
      FROM fundamentals_snapshots f
      WHERE f.symbol = sym.symbol
    )
    OR NOT EXISTS (
      SELECT 1
      FROM latest_fundamentals_snapshots lf
      WHERE lf.symbol = sym.symbol
        AND (
          lf.pe_forward IS NOT NULL
          OR lf.revenue_growth_yoy IS NOT NULL
          OR lf.eps_growth_expected IS NOT NULL
          OR lf.gross_margin IS NOT NULL
          OR lf.operating_margin IS NOT NULL
          OR lf.fcf_margin IS NOT NULL
          OR lf.guidance_summary IS NOT NULL
        )
    )
  )
ORDER BY sym.group_name, sym.symbol;

CREATE VIEW IF NOT EXISTS cache_db_mismatches AS
SELECT *
FROM data_quality_issues
WHERE status = 'open'
  AND issue_type = 'cache_db_mismatch'
ORDER BY severity DESC, created_at DESC;

CREATE VIEW IF NOT EXISTS alert_candidates AS
SELECT s.symbol,
       sym.company,
       sym.group_name,
       s.captured_at,
       s.momentum_status,
       s.environment_status,
       s.valuation_status,
       s.alert_status,
       s.signal_reason,
       s.action_required
FROM latest_signal_snapshots s
JOIN symbols sym ON sym.symbol = s.symbol
WHERE s.alert_status IN ('Watch', 'Alert', 'Red Flag')
ORDER BY s.captured_at DESC, s.alert_status DESC;

COMMIT;
