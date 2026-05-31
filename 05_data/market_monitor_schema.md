# Market Monitor Schema

Zweck: Diese Datei beschreibt die strukturierte Datenebene fuer Kurse, Fundamentaldaten, News, Events und Signale. Markdown bleibt die Wissens- und Entscheidungsbasis; strukturierte Daten dienen fuer Historie, Berechnung und Alerts.

## Umgesetzte Dateien

Primaere Datenebene: lokale SQLite-Datei `05_data/market_monitor.sqlite`.

Versionierte Struktur:

- `05_data/market_monitor_schema.sql`: technisches SQLite-Schema.
- `05_data/market_monitor_seed.sql`: initiales Symboluniversum.
- `05_data/market_monitor_usage.md`: Agenten-Nutzung und Pflichtworkflow.

CSV-Fallback: einzelne CSV-Dateien mit denselben Feldern, falls SQLite temporär nicht genutzt werden kann. Das waere ein Fallback, nicht der Zielzustand.

Die Datenbank oder CSV-Historie soll keine alten Markdown-Notizen ersetzen. Sie soll wiederholbare Fragen beantworten:

- Welche Werte haben 1M/3M relative Staerke?
- Welche Werte steigen schneller als EPS-/Umsatzschaetzungen?
- Welche News sind These-relevant und noch nicht verarbeitet?
- Welche Alerts wurden wann ausgeloest?
- Welche Watchlist-Werte verbessern sich gegen Depotwerte?

## Tabellen

### symbols

| Feld | Typ | Zweck |
|---|---|---|
| symbol | text | Primaerer Ticker |
| company | text | Unternehmensname |
| market | text | Handelsplatz/Land |
| currency | text | Kurswaehrung |
| group_name | text | Depot, HDD-Watchlist, Follow-on, erweitert, Hintergrund |
| thesis_bucket | text | HBM/DRAM, NAND, HDD, Networking, Power, WFE usw. |
| active_status | text | active, watch, background, sold |
| source_note | text | Broker-/Tickerhinweis |

### quote_snapshots

| Feld | Typ | Zweck |
|---|---|---|
| captured_at | datetime | Abrufzeit |
| price_date | date | Kursdatum |
| symbol | text | Ticker |
| price | real | Kurs |
| market_cap | real | Marktkapitalisierung |
| return_1d | real | Rendite 1 Tag |
| return_5d | real | Rendite 5 Tage |
| return_1m | real | Rendite 1 Monat |
| return_3m | real | Rendite 3 Monate |
| return_ytd | real | YTD |
| distance_52w_high | real | Abstand zum 52W-Hoch |
| benchmark_symbol | text | Nasdaq 100, SMH, Peer-Gruppe usw. |
| relative_strength | text | besser, schlechter, gleich, unklar |
| source | text | Quelle |
| source_quality | text | Quellenqualitaet |

### fundamentals_snapshots

| Feld | Typ | Zweck |
|---|---|---|
| captured_at | datetime | Abrufzeit |
| period | text | TTM, FY, FQ, Forward |
| symbol | text | Ticker |
| revenue_growth_yoy | real | Umsatzwachstum |
| eps_growth_expected | real | erwartetes EPS-Wachstum |
| pe_ttm | real | TTM-KGV |
| pe_forward | real | Forward-KGV |
| peg | real | PEG |
| peg_method | text | Berechnungsmethode |
| gross_margin | real | Bruttomarge |
| operating_margin | real | operative Marge |
| fcf_margin | real | Free-Cash-Flow-Marge |
| net_debt | real | Netto-Schulden oder Netto-Cash |
| capex | real | Capex |
| inventory_trend | text | steigend, fallend, stabil, unklar |
| guidance_summary | text | knappe Guidance |
| source | text | Quelle |
| source_date | date | Quelldatum |
| source_quality | text | Quellenqualitaet |

### news_items

| Feld | Typ | Zweck |
|---|---|---|
| discovered_at | datetime | Fundzeit |
| news_date | date | Nachrichtendatum |
| symbol | text | Ticker oder betroffenes Universum |
| category | text | Earnings, Guidance, Analyst, Kunde, Produktion, Preise, Makro, Risiko |
| headline | text | Titel |
| summary | text | Relevanz in 1-3 Saetzen |
| impact | text | Bullish, Bearish, Mixed, Neutral |
| thesis_effect | text | bestaetigt, schwaecht, veraendert, unklar |
| source | text | Quelle |
| url | text | Link |
| source_quality | text | Quellenqualitaet |
| keep_until | date | Retention-Datum |
| processed_to_markdown | boolean | in Unternehmensakte/Log verarbeitet? |

### signal_snapshots

| Feld | Typ | Zweck |
|---|---|---|
| captured_at | datetime | Abrufzeit |
| symbol | text | Ticker |
| momentum_status | text | dreht hoch, positiv, neutral, schwach, kippt |
| environment_status | text | besser, schlechter, unveraendert, unklar |
| valuation_status | text | guenstig, fair, anspruchsvoll, ueberhitzt, unklar |
| alert_status | text | kein Alert, Watch, Alert, Red Flag |
| signal_reason | text | kurze Begruendung |
| action_required | text | none, latest_news, company_file, evaluation_log, open_question |

### event_calendar

| Feld | Typ | Zweck |
|---|---|---|
| event_date | date | Datum |
| event_time | text | Uhrzeit und Zeitzone |
| symbol | text | Ticker |
| event_type | text | Earnings, Conference, Product, Industry, Macro |
| event_name | text | Name |
| importance | text | hoch, mittel, niedrig |
| status | text | bestaetigt, erwartet, TBD, unbestaetigt |
| relevance | text | Warum wichtig |
| source | text | Quelle |

### macro_snapshots

| Feld | Typ | Zweck |
|---|---|---|
| captured_at | datetime | Abrufzeit |
| signal_date | date | Datenstand |
| macro_signal | text | z. B. US 10Y, Real Yield, HY OAS, VIX |
| market_area | text | Rates, Credit, Volatility, USD, Sentiment usw. |
| latest_value | real | Numerischer Wert, falls verfuegbar |
| value_text | text | Textwert, falls kein sauberer numerischer Wert |
| trend_1w_1m | text | Kurztrend |
| risk_status | text | besser, schlechter, unveraendert, Red Flag, unklar |
| source | text | Quelle |
| source_quality | text | Quellenqualitaet |

### industry_signal_snapshots

| Feld | Typ | Zweck |
|---|---|---|
| captured_at | datetime | Abrufzeit |
| signal_date | date | Datenstand |
| signal_name | text | Name des Branchensignals |
| market_segment | text | DRAM, HBM, NAND, HDD, GPU-Compute, Capex usw. |
| latest_value | real | Numerischer Wert, falls verfuegbar |
| value_text | text | Textwert, falls noetig |
| trend_1w_1m | text | Kurztrend |
| confirmation_status | text | Unbestaetigt, bestaetigt, widerspruechlich |
| source | text | Quelle |
| source_quality | text | Quellenqualitaet |

### peer_snapshots, portfolio_positions, thesis_events, run_log

Diese Tabellen halten Peer-Vergleiche, optionale persoenliche Portfolio-Daten, These-/Entscheidungsereignisse und Laufprotokolle. Technische Details stehen in `05_data/market_monitor_schema.sql`.

## Datenqualitaetsregeln

- Jeder Snapshot braucht Quelle, Datum und Quellenqualitaet.
- Fehlende Werte bleiben leer oder `TBD`; sie werden nicht geraten.
- Aggregatoren duerfen fuer Kurse und schnelle Uebersicht genutzt werden, aber kritische Bewertungsdaten nach Moeglichkeit mit Primaerquelle oder hochwertigem Finanzdatenanbieter pruefen.
- Zeitreihen nie aus `latest_quotes.md` rekonstruieren, wenn eine echte Historie verfuegbar ist.
- Bei Widerspruch zwischen Datenbank und Markdown gilt: Primaerquelle pruefen, Konflikt in `03_state/open_questions.md` notieren, danach beide Ebenen bereinigen.

## Agenten-Workflow

1. Markdown-Kontext nach `AGENTS.md` lesen.
2. Relevante Symbole aus `05_data/covered_symbols.md` bestimmen.
3. Neue Daten in strukturierte Historie `05_data/market_monitor.sqlite` schreiben.
4. `05_data/latest_quotes.md` und `05_data/latest_news.md` nur als aktuellen Cache pflegen.
5. Echte Signalwechsel in Markdown verdichten: Unternehmensakte, Watchlist, `03_state/evaluation_log.md`.
