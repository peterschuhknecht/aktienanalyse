PRAGMA foreign_keys = ON;

BEGIN IMMEDIATE;

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
('285A.T', 'Kioxia', 'Japan', 'JPY', 'Erweiterte Watchlist', 'NAND/Enterprise-SSD', 'watch', 'SanDisk-JV-Readthrough; aktiver Deep-Dive-Kandidat seit 2026-06-01'),
('SU.PA', 'Schneider Electric', 'Frankreich', 'EUR', 'Hintergrund', 'Power/Cooling/Datacenter Infrastructure', 'background', 'Alternative OTC: SBGSY');

INSERT OR IGNORE INTO people (name, organization, role, signal_domain, track_priority, track_status, rationale, official_source_url, source_quality) VALUES
('Jensen Huang', 'NVIDIA', 'Co-founder, President and CEO', 'GPU, AI Factory, accelerator roadmap, networking and storage readthrough', 'P1', 'active', 'Sets the external roadmap for AI racks, Rubin/Blackwell successors, HBM demand, networking, storage and AI factory architecture.', 'https://www.nvidia.com/en-gb/about-nvidia/board-of-directors/jensen-huang/', 'official'),
('Sanjay Mehrotra', 'Micron Technology', 'Chairman, President and CEO', 'HBM, DRAM, LPDDR and NAND', 'P1', 'active', 'Direct operator signal for Micron supply, pricing, HBM qualification, NAND exposure, margins and capex.', 'https://www.micron.com/about/company/leadership/sanjay-mehrotra', 'official'),
('Kwak Noh-Jung', 'SK hynix', 'President and CEO', 'HBM, DRAM, LPDDR and memory capacity', 'P1', 'active', 'Direct operator signal for SK hynix HBM leadership, capacity allocation, customer demand and memory-cycle discipline.', 'https://www.skhynix.com/company/UI-FR-CP0301/', 'official'),
('David Goeckeler', 'SanDisk', 'Chairman and CEO', 'NAND, enterprise SSD and Flash supply chain', 'P1', 'active', 'Direct operator signal for SanDisk NAND/enterprise SSD pricing, LTAs, JV exposure, capex and margin visibility.', 'https://www.sandisk.com/en-gb/company/about-us', 'official'),
('Hiroo Ota', 'Kioxia', 'President and CEO', 'NAND, enterprise SSD and SanDisk JV readthrough', 'P1', 'active', 'Direct operator signal for Kioxia NAND cycle, SSD-and-storage mix, capex, JV economics and SanDisk readthrough.', 'https://www.kioxia-holdings.com/en-jp/news/2026/20260527-1.html', 'official'),
('Hock E. Tan', 'Broadcom', 'President and CEO', 'Custom AI silicon, networking and infrastructure software', 'P1', 'active', 'High-signal operator for hyperscaler ASIC demand, AI networking, bookings, margins and customer concentration.', 'https://www.broadcom.com/company/about-us/executives/hock-e-tan', 'official'),
('Matt Murphy', 'Marvell Technology', 'Chairman and CEO', 'Custom AI silicon, optics, interconnect and data infrastructure', 'P1', 'active', 'High-signal operator for custom XPU programs, optics/interconnect, data-center growth, margins and bookings.', 'https://www.marvell.com/company/leadership/bod-matt-murphy.html', 'official'),
('Jayshree V. Ullal', 'Arista Networks', 'Chief Executive Officer and Chairperson', 'Ethernet AI fabric, cloud networking and AI clusters', 'P1', 'active', 'Direct operator signal for Ethernet AI fabric adoption, cloud titan orders, AI networking architecture and competitive pressure from NVIDIA.', 'https://www.arista.com/en/company/management-team', 'official'),
('Michael Dell', 'Dell Technologies', 'Chairman and CEO', 'AI servers, AI factories, enterprise infrastructure and demand proxy', 'P1', 'active', 'Founder-operator signal for AI-server demand, customer deployment behavior, infrastructure bottlenecks and storage attach.', 'https://www.dell.com/en-us/dt/corporate/about-us/leadership/michael-dell.htm', 'official'),
('Jeff Clarke', 'Dell Technologies', 'Vice Chairman and Chief Operating Officer', 'AI servers, ISG operations, supply chain and infrastructure planning', 'P1', 'active', 'Operational signal for Dell ISG, AI-server backlog, supply constraints, memory/storage attach, procurement and margins.', 'https://www.dell.com/en-us/lp/dt/jeff-clarke', 'official'),
('Dave Mosley', 'Seagate Technology', 'Chairman and CEO', 'HDD, nearline, HAMR and mass-capacity storage', 'P1', 'active', 'Direct operator signal for HDD capacity, HAMR/Mozaic ramp, LTAs, exabytes, pricing and AI data-retention demand.', 'https://www.seagate.com/gb/en/our-story/dave-mosley/', 'official'),
('Irving Tan', 'Western Digital', 'Chief Executive Officer', 'HDD, nearline and storage supply chain', 'P1', 'active', 'Direct operator signal for post-separation WDC HDD strategy, capacity, customers, supply chain and AI-data storage demand.', 'https://www.westerndigital.com/company/leadership', 'official'),
('Giordano Albertazzi', 'Vertiv', 'Chief Executive Officer', 'Datacenter power, cooling and critical infrastructure', 'P1', 'active', 'Direct operator signal for liquid cooling, power modules, backlog, execution risk and AI-datacenter physical bottlenecks.', 'https://investors.vertiv.com/corporate-governance/executive-management/person-details/default.aspx?ItemId=1588efd7-1146-4d28-bfc6-d082e48005ac', 'official'),
('Satya Nadella', 'Microsoft', 'Chairman and CEO', 'Azure AI demand, AI adoption and hyperscaler capex', 'P2', 'active', 'Hyperscaler demand proxy for AI infrastructure, Azure AI adoption, model deployment and capex tone.', 'https://news.microsoft.com/exec/satya-nadella/', 'official'),
('Amy Hood', 'Microsoft', 'Executive Vice President and Chief Financial Officer', 'Cloud capex, AI gross margins, depreciation and free cash flow', 'P2', 'active', 'Financial operator signal for AI capex intensity, cloud margins, depreciation pressure and operating leverage.', 'https://news.microsoft.com/source/exec/amy-hood/', 'official'),
('Andy Jassy', 'Amazon', 'President and CEO', 'AWS strategy, cloud demand and AI capex', 'P2', 'active', 'Hyperscaler demand proxy for AWS AI infrastructure, capex discipline, Trainium/Inferentia and customer migration behavior.', 'https://www.aboutamazon.com/about-us', 'official'),
('Matt Garman', 'Amazon Web Services', 'Chief Executive Officer, AWS', 'AWS compute, storage, AI infrastructure and customer demand', 'P2', 'active', 'Direct AWS operator signal for compute/storage services, AI infrastructure customer demand and cloud architecture.', 'https://ir.aboutamazon.com/officers-and-directors/person-details/default.aspx?ItemId=80f6622c-efcb-4cce-94a7-591fb3d9a335', 'official'),
('Sundar Pichai', 'Google and Alphabet', 'CEO of Google and Alphabet', 'AI models, TPU, Google Cloud and capex direction', 'P2', 'active', 'Hyperscaler signal for AI adoption, TPU strategy, capex intensity and frontier-model competition.', 'https://about.google/company-info/', 'official'),
('Thomas Kurian', 'Google Cloud', 'CEO, Google Cloud', 'Cloud AI infrastructure, enterprise AI and Google Cloud demand', 'P2', 'active', 'Direct cloud operator signal for Google Cloud AI infrastructure, customer adoption and AI workload growth.', 'https://cloud.google.com/blog/topics/google-cloud-next/welcome-to-google-cloud-next24', 'official'),
('Mark Zuckerberg', 'Meta Platforms', 'Founder, Chairman and CEO', 'AI model training, datacenter capex and AI products', 'P2', 'active', 'Hyperscaler signal for AI capex, model-training scale, talent strategy and infrastructure demand.', 'https://investor.atmeta.com/leadership-and-governance/default.aspx?section=management', 'official'),
('Susan Li', 'Meta Platforms', 'Chief Financial Officer', 'AI capex, depreciation, free cash flow and infrastructure spending', 'P2', 'active', 'Financial operator signal for Meta AI capex, infrastructure depreciation, free cash flow and expense discipline.', 'https://investor.atmeta.com/leadership-and-governance/default.aspx?section=management', 'official'),
('Larry Ellison', 'Oracle', 'Executive Chairman and Chief Technology Officer', 'OCI, AI cloud, datacenter scale and AI training demand', 'P2', 'active', 'High-signal cloud operator for OCI AI training/inference demand, large cloud contracts and datacenter scale.', 'https://www.oracle.com/us/corporate/press/executives/ellison/index.html', 'official'),
('Clay Magouyrk', 'Oracle', 'Chief Executive Officer', 'Oracle Cloud Infrastructure and AI datacenters', 'P2', 'active', 'Direct OCI operator signal for AI training/inference infrastructure, customer demand, regions and gigawatt-scale datacenters.', 'https://www.oracle.com/apac/corporate/executives/clay-magouyrk/', 'official'),
('Mike Sicilia', 'Oracle', 'Chief Executive Officer', 'AI applications, industry clouds and applied AI demand', 'P2', 'active', 'Operator signal for enterprise AI application adoption and Oracle cloud pull-through from AI applications.', 'https://www.oracle.com/anz/corporate/executives/mike-sicilia/', 'official'),
('Sam Altman', 'OpenAI', 'CEO', 'Frontier model demand, AI infrastructure, Stargate and model-lab capex', 'P2', 'active', 'Frontier-lab demand proxy for compute, memory, storage, networking, power and regulatory AI-infrastructure signals.', 'https://openai.com/index/review-completed-altman-brockman-to-continue-to-lead-openai/', 'official'),
('Dario Amodei', 'Anthropic', 'CEO and co-founder', 'Frontier model demand, AI safety, enterprise AI and model-lab capex', 'P2', 'active', 'Frontier-lab demand proxy for model scaling, compute needs, AI-safety constraints and enterprise AI adoption.', 'https://www.anthropic.com/news/anthropic-raises-124-million-to-build-more-reliable-general-ai-systems', 'official'),
('Andrej Karpathy', 'Anthropic / Eureka Labs', 'AI researcher and educator; Anthropic pre-training team', 'Frontier model research, AI education, coding agents and model-training direction', 'P2', 'active', 'High-signal technical forecaster; track for model-training direction, coding-agent adoption, AI education and changes in compute intensity. Treat as research signal unless backed by hard data.', 'https://karpathy.ai/', 'personal official / high-quality secondary for current role'),
('Ilya Sutskever', 'Safe Superintelligence', 'Co-founder and CEO', 'Frontier model research, superintelligence, AI safety and compute demand', 'P2', 'active', 'High-signal frontier researcher/operator; track for SSI direction, safety-capability scaling, talent/capital signals and compute partnerships. Treat as research signal unless backed by hard data.', 'https://ssi.inc/', 'company official / high-quality secondary for role'),
('Elon Musk', 'xAI / Tesla', 'Founder, xAI; CEO, Tesla', 'Private AI compute, xAI datacenters, Tesla AI, robotics and power demand', 'P3', 'watch', 'Noisy but potentially important signal for private AI compute, datacenter scale, power demand, chips, robotics and Tesla-related AI demand.', 'https://ir.tesla.com/corporate/elon-musk', 'official for Tesla; xAI claims require separate verification');

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

COMMIT;
