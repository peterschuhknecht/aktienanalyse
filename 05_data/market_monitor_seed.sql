PRAGMA foreign_keys = ON;

INSERT OR IGNORE INTO symbols (symbol, company, market, currency, group_name, thesis_bucket, active_status, source_note) VALUES
('000660.KS', 'SK Hynix', 'Korea', 'KRW', 'Depot', 'HBM/DRAM/LPDDR', 'active', NULL),
('MU', 'Micron Technology', 'USA', 'USD', 'Depot', 'HBM/DRAM/LPDDR/NAND', 'active', NULL),
('SNDK', 'SanDisk', 'USA', 'USD', 'Depot', 'NAND/Enterprise-SSD', 'active', NULL),
('STX', 'Seagate Technology', 'USA', 'USD', 'HDD-Watchlist', 'HDD/Nearline', 'watch', 'Ehemaliger Depotwert; verkauft, weiter beobachten'),
('WDC', 'Western Digital', 'USA', 'USD', 'HDD-Watchlist', 'HDD/Nearline', 'watch', NULL),
('ANET', 'Arista Networks', 'USA', 'USD', 'Follow-on', 'Networking/Ethernet AI Fabric', 'watch', NULL),
('AVGO', 'Broadcom', 'USA', 'USD', 'Follow-on', 'Custom Silicon/Networking', 'watch', NULL),
('MRVL', 'Marvell Technology', 'USA', 'USD', 'Follow-on', 'Custom Silicon/Interconnect', 'watch', NULL),
('VRT', 'Vertiv', 'USA', 'USD', 'Follow-on', 'Power/Cooling', 'watch', NULL),
('005930.KS', 'Samsung Electronics', 'Korea', 'KRW', 'Follow-on', 'HBM/DRAM/NAND/Foundry', 'watch', 'Alternative OTC: SSNLF'),
('ETN', 'Eaton', 'USA', 'USD', 'Erweiterte Watchlist', 'Power/Grid', 'watch', NULL),
('GEV', 'GE Vernova', 'USA', 'USD', 'Erweiterte Watchlist', 'Power/Grid', 'watch', NULL),
('GLW', 'Corning', 'USA', 'USD', 'Erweiterte Watchlist', 'Optics/Fiber', 'watch', NULL),
('CEG', 'Constellation Energy', 'USA', 'USD', 'Erweiterte Watchlist', 'Power Generation', 'watch', NULL),
('VST', 'Vistra', 'USA', 'USD', 'Erweiterte Watchlist', 'Power Generation', 'watch', NULL),
('BE', 'Bloom Energy', 'USA', 'USD', 'Erweiterte Watchlist', 'On-site Power', 'watch', NULL),
('AMAT', 'Applied Materials', 'USA', 'USD', 'Erweiterte Watchlist', 'WFE', 'watch', NULL),
('LRCX', 'Lam Research', 'USA', 'USD', 'Erweiterte Watchlist', 'WFE', 'watch', NULL),
('ASML', 'ASML', 'USA/Niederlande', 'USD', 'Erweiterte Watchlist', 'WFE/Lithografie', 'watch', NULL),
('AMKR', 'Amkor Technology', 'USA', 'USD', 'Erweiterte Watchlist', 'Advanced Packaging', 'watch', NULL),
('NVDA', 'NVIDIA', 'USA', 'USD', 'Hintergrund', 'GPU/AI Demand', 'background', NULL),
('AMD', 'AMD', 'USA', 'USD', 'Hintergrund', 'GPU/AI Compute', 'background', NULL),
('INTC', 'Intel', 'USA', 'USD', 'Hintergrund', 'Compute/Foundry', 'background', NULL),
('MSFT', 'Microsoft', 'USA', 'USD', 'Hintergrund', 'Hyperscaler/AI Capex', 'background', NULL),
('AMZN', 'Amazon', 'USA', 'USD', 'Hintergrund', 'Hyperscaler/AI Capex', 'background', NULL),
('GOOGL', 'Alphabet', 'USA', 'USD', 'Hintergrund', 'Hyperscaler/AI Capex', 'background', NULL),
('META', 'Meta Platforms', 'USA', 'USD', 'Hintergrund', 'Hyperscaler/AI Capex', 'background', NULL),
('ORCL', 'Oracle', 'USA', 'USD', 'Hintergrund', 'Cloud/Datacenter Capex', 'background', NULL),
('DELL', 'Dell Technologies', 'USA', 'USD', 'Hintergrund', 'AI Server/Storage Demand Proxy', 'background', NULL),
('TSLA', 'Tesla', 'USA', 'USD', 'Hintergrund', 'AI/Robotik Demand', 'background', NULL),
('SPACEX.PRIVATE', 'SpaceX', 'USA', NULL, 'Hintergrund', 'Private AI/Compute Context', 'background', 'Nicht boersennotiert'),
('XAI.PRIVATE', 'xAI', 'USA', NULL, 'Hintergrund', 'Private AI Workload Context', 'background', 'Nicht boersennotiert'),
('285A.T', 'Kioxia', 'Japan', 'JPY', 'Hintergrund', 'NAND Readthrough', 'background', NULL),
('SU.PA', 'Schneider Electric', 'Frankreich', 'EUR', 'Hintergrund', 'Power/Cooling/Datacenter Infrastructure', 'background', 'Alternative OTC: SBGSY');

INSERT INTO run_log (
  run_started_at,
  run_finished_at,
  trigger,
  scope,
  sources_checked,
  files_updated,
  result_summary,
  data_quality_notes
)
SELECT
  '2026-05-30 08:46:37 CEST',
  '2026-05-30 08:46:37 CEST',
  'Nutzerauftrag: SQLite-Datenebene umsetzen',
  'Schema und Symbol-Seed',
  'Repository-Kontext und covered_symbols.md',
  '05_data/market_monitor_schema.sql; 05_data/market_monitor_seed.sql; 05_data/market_monitor.sqlite',
  'Lokale SQLite-Datenbank initialisiert; Markdown bleibt Entscheidungsbasis, SQLite haelt Verlauf und strukturierte Snapshots.',
  'Initial nur Symboluniversum und Run-Log gesetzt; Kurs-/News-/Fundamental-Historie wird ab den naechsten Marktlaeufen fortgeschrieben.'
WHERE NOT EXISTS (
  SELECT 1 FROM run_log
  WHERE trigger = 'Nutzerauftrag: SQLite-Datenebene umsetzen'
);
