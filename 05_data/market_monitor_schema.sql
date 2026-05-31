PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS schema_migrations (
  version TEXT PRIMARY KEY,
  applied_at TEXT NOT NULL DEFAULT (datetime('now')),
  description TEXT NOT NULL
);

INSERT OR IGNORE INTO schema_migrations (version, description)
VALUES ('001', 'Initial market monitor schema for quote, news, event, signal and thesis history');

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

CREATE VIEW IF NOT EXISTS unprocessed_news AS
SELECT *
FROM news_items
WHERE processed_to_markdown = 0
ORDER BY news_date DESC, discovered_at DESC;

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
