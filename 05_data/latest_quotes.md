# Latest Quotes Cache

Zweck: Aktuelle Kurse und Performance-Daten fuer das Wertpapier-Universum aus `05_data/covered_symbols.md` speichern.

## Refresh-Regel

- Bei jeder sachlichen Aktien-, Depot-, Branchen-, Watchlist- oder Zukunftsanfrage aktualisieren.
- Fuer Kurse und Kennzahlen bevorzugt Boersenplaetze, Unternehmensquellen, SEC/Boersenmeldungen oder etablierte Finanzdatenanbieter nutzen; Quelle und Abrufzeit immer notieren.
- Kennzahlen aus Aggregatoren nur verwenden, wenn Datum und Anbieter klar sind; bei kritischen Bewertungsfragen nach Moeglichkeit mit Primaer- oder Zweitquelle gegenpruefen.
- Quelle und Abrufzeit notieren.
- Wenn ein Symbol nicht abrufbar ist, Grund notieren und einen alternativen Ticker oder Handelsplatz in `03_state/open_questions.md` festhalten.
- Fuer aktuelle Depotwerte immer aktualisieren.
- Fuer Watchlist- und Hintergrundwerte aktualisieren, wenn sie in der Anfrage relevant sind oder als moeglicher Alert-Kandidat dienen.

## Letzter Refresh

| Feld | Wert |
|---|---|
| Datum/Zeit | 2026-05-29, ca. 11:55 Europe/Berlin |
| Ausloeser | Nutzerfrage: Gibt es Neuigkeiten? |
| Quelle | StockAnalysis.com Kursseiten fuer Aktien; U.S. Treasury Daily Treasury Rates und Real Yield Curve fuer Zinsen/Realzins |
| Hinweis | Teilrefresh fuer aktive Depotwerte, HDD-/Nearline-Watchlist, primaere Follow-on-Werte und Makro-Overlay; US-Kurse sind Schluss-/After-Hours-Daten vom 2026-05-28, Korea-Daten intraday vom 2026-05-29 |

## Kursdaten

| Unternehmen | Symbol | Kurs | Waehrung | Tagesveraenderung | 1M | 3M | 52W-Hoch-Abstand | Quelle | Abrufzeit | Notiz |
|---|---:|---:|---|---:|---:|---:|---:|---|---|---|
| SK Hynix | 000660.KS | 2,325,000 | KRW | +1.57% | n/b | n/b | nahe Tages-/52W-Hoch 2,379,000 | StockAnalysis KRX:000660 | 2026-05-29 12:08 KST | Market cap ca. KRW 1,621.29T, PE 21.67, Forward PE 7.08, 1Y +1,018%, Earnings Date 2026-07-23 |
| Micron Technology | MU | 923.52 | USD | -0.53% | n/b | n/b | ca. 3.4% unter Hoch | StockAnalysis MU | 2026-05-28 close; after-hours 935.67, +1.32% | Market cap ca. USD 1.04T, Revenue TTM USD 58.12B (+85.5%), PE 43.44, Forward PE 9.80, Earnings Date 2026-06-24 |
| SanDisk | SNDK | 1,641.64 | USD | +3.25% | n/b | n/b | direkt am 52W-Hoch 1,697.96 intraday | StockAnalysis SNDK | 2026-05-28 close; after-hours 1,648.00, +0.39% | Market cap ca. USD 243.11B, PE 55.26, Forward PE 10.08; hohes Momentum und Rueckschlagsrisiko bleiben |
| Seagate Technology | STX | 880.72 | USD | +1.16% | n/b | n/b | nahe 52W-Hoch 905.39 | StockAnalysis STX | 2026-05-28 close; after-hours 886.25, +0.63% | Market cap ca. USD 197.48B, PE 83.41, Forward PE 36.92; HDD-Watchlist positiv, aber nicht reaktiviert |
| Western Digital | WDC | 531.18 | USD | +0.11% | n/b | n/b | nahe 52W-Hoch 553.50 | StockAnalysis WDC | 2026-05-28 close; after-hours 534.16, +0.56% | Market cap ca. USD 183.09B, PE 29.09, Forward PE 34.21; HDD-Watchlist positiv, aber kein neues hartes Reaktivierungssignal |
| Arista Networks | ANET | 155.27 | USD | +0.62% | n/b | n/b | ca. 14% unter Hoch | StockAnalysis ANET | 2026-05-28 close; after-hours 157.20, +1.24% | Market cap ca. USD 195.52B, PE 53.35, Forward PE 41.00 |
| Broadcom | AVGO | 426.58 | USD | +1.12% | n/b | n/b | ca. 4% unter Hoch | StockAnalysis AVGO | 2026-05-28 close; after-hours 431.41, +1.13% | Market cap ca. USD 2.02T, PE 83.14, Forward PE 31.98, Earnings Date 2026-06-03 |
| Marvell Technology | MRVL | 204.83 | USD | +3.09% | n/b | n/b | ca. 6% unter Hoch | StockAnalysis MRVL | 2026-05-28 close; after-hours 203.35, -0.72% | Market cap ca. USD 179.12B, PE 70.75, Forward PE 45.27; Q1-FY2027-AI-Bookings bleiben Follow-on-Trigger |
| Vertiv | VRT | 314.18 | USD | -1.75% | n/b | n/b | ca. 17% unter Hoch | StockAnalysis VRT | 2026-05-28 close; after-hours 316.50, +0.74% | Market cap ca. USD 120.68B, PE 78.96, Forward PE 46.04 |
| Samsung Electronics | 005930.KS / SSNLF | 311,500 | KRW | +4.01% | n/b | n/b | nahe 52W-Hoch 323,000 | StockAnalysis KRX:005930 | 2026-05-29 12:28 KST | PE 24.03, Forward PE 5.93, 1Y +457.25%; positiver Speicher-Peer-Readthrough |
| Eaton | ETN | 406.37 | USD | +0.80% | n/b | n/b | ca. 7% unter Hoch | StockAnalysis ETN | 2026-05-27 close; pre-market 2026-05-28 404.81, -0.38% | PE 39.75, Forward PE 28.87 |
| GE Vernova | GEV | 1,031.89 | USD | -3.60% | n/b | n/b | ca. 13% unter Hoch | StockAnalysis GEV | 2026-05-27 close; pre-market 2026-05-28 1,030.93, -0.09% | PE 30.20, Forward PE 55.80 |
| Corning | GLW | 190.89 | USD | -2.69% | n/b | n/b | ca. 10% unter Hoch | StockAnalysis GLW | 2026-05-27 close; pre-market 2026-05-28 188.90, -1.04% | PE 91.86, Forward PE 56.59 |
| Constellation Energy | CEG | 288.68 | USD | -4.27% | n/b | n/b | ca. 30% unter Hoch | StockAnalysis CEG | 2026-05-27 close; pre-market 2026-05-28 287.56, -0.39% | PE 24.65, Forward PE 24.53 |
| Vistra | VST | 160.15 | USD | -2.68% | n/b | n/b | ca. 27% unter Hoch | StockAnalysis VST | 2026-05-27 close; pre-market 2026-05-28 158.81, -0.84% | PE 27.03, Forward PE 17.43 |
| Bloom Energy | BE | 293.80 | USD | -2.84% | n/b | n/b | ca. 9% unter Hoch | StockAnalysis BE | 2026-05-27 close; pre-market 2026-05-28 291.60, -0.75% | Forward PE 127.34, Analystenziel laut Aggregator unter Kurs |
| Applied Materials | AMAT | 448.25 | USD | -1.46% | n/b | n/b | nahe Hoch | StockAnalysis AMAT | 2026-05-27 close; pre-market 2026-05-28 447.80, -0.10% | PE 42.16, Forward PE 30.60 |
| Lam Research | LRCX | 318.93 | USD | -1.16% | n/b | n/b | nahe Hoch | StockAnalysis LRCX | 2026-05-27 close; pre-market 2026-05-28 317.34, -0.50% | PE 60.24, Forward PE 42.59 |
| ASML | ASML | 1,597.87 | USD | -2.09% | n/b | n/b | ca. 3% unter Hoch | StockAnalysis ASML | 2026-05-27 close; pre-market 2026-05-28 1,603.34, +0.34% | PE 53.42, Forward PE 40.64, Earnings Date 2026-07-15 |
| Amkor Technology | AMKR | 72.19 | USD | -1.73% | n/b | n/b | ca. 9% unter Hoch | StockAnalysis AMKR | 2026-05-27 close; pre-market 2026-05-28 71.00, -1.65% | PE 41.52, Forward PE 32.87 |
| NVIDIA | NVDA | 212.60 | USD | -1.05% | n/b | n/b | ca. 10% unter Hoch | StockAnalysis NVDA | 2026-05-27 close; pre-market 2026-05-28 210.85, -0.82% | Market cap ca. USD 5.15T, PE 32.56, Forward PE 21.39 |
| AMD | AMD | 495.54 | USD | -1.66% | n/b | n/b | nahe Hoch | StockAnalysis AMD | 2026-05-27 close; pre-market 2026-05-28 486.53, -1.82% | PE 165.25, Forward PE 56.99 |
| Intel | INTC | 121.77 | USD | -1.42% | n/b | n/b | ca. 8% unter Hoch | StockAnalysis INTC | 2026-05-27 close; pre-market 2026-05-28 118.00, -3.10% | Forward PE 115.60, negative TTM EPS |
| Microsoft | MSFT | 412.67 | USD | -0.81% | n/b | n/b | ca. 26% unter Hoch | StockAnalysis MSFT | 2026-05-27 close; pre-market 2026-05-28 416.98, +1.04% | PE 24.58, Forward PE 22.32 |
| Amazon | AMZN | 271.85 | USD | +2.47% | n/b | n/b | ca. 2% unter Hoch | StockAnalysis AMZN | 2026-05-27 close; pre-market 2026-05-28 270.50, -0.50% | PE 32.51, Forward PE 32.59 |
| Alphabet | GOOGL | 388.83 | USD | -0.01% | n/b | n/b | ca. 5% unter Hoch | StockAnalysis GOOGL | 2026-05-27 close; pre-market 2026-05-28 386.96, -0.48% | PE 29.67, Forward PE 31.07 |
| Meta Platforms | META | 635.26 | USD | +3.74% | n/b | n/b | ca. 20% unter Hoch | StockAnalysis META | 2026-05-27 close; pre-market 2026-05-28 635.32, +0.01% | PE 23.11, Forward PE 19.35 |
| Oracle | ORCL | 190.96 | USD | -1.09% | n/b | n/b | ca. 45% unter Hoch | StockAnalysis ORCL | 2026-05-27 close; pre-market 2026-05-28 194.88, +2.05% | PE 34.27, Forward PE 25.37, Earnings Date 2026-06-08 laut Finanzdatenanbieter |
| Tesla | TSLA | 440.36 | USD | +1.56% | n/b | n/b | ca. 12% unter Hoch | StockAnalysis TSLA | 2026-05-27 close; pre-market 2026-05-28 433.30, -1.60% | PE 428.24, Forward PE 204.76; relevant als TeraFab-/AI-demand Kontext |
| Kioxia | 285A.T | 61,280 | JPY | +1.21% | n/b | n/b | ca. 9% unter Hoch | StockAnalysis TYO:285A | 2026-05-28 15:30 JST | PE 60.00, Forward PE 7.33, NAND-Readthrough fuer SanDisk |
| Schneider Electric | SU.PA / SBGSY | 267.70 | EUR | -0.46% | n/b | n/b | ca. 7% unter Hoch | StockAnalysis EPA:SU | 2026-05-28 12:25 CET | PE 36.69, Forward PE 26.11 |
| SpaceX | Private | n/a | n/a | n/a | n/a | n/a | n/a | Nicht boersennotiert | 2026-05-28 | Nur Nachfrage-/TeraFab-Kontext, kein Kurs |
| xAI | Private | n/a | n/a | n/a | n/a | n/a | n/a | Nicht boersennotiert | 2026-05-28 | Nur AI-Workload-/Inference-Kontext, kein Kurs |

## Makro-Overlay

| Signal | Aktueller Datenpunkt | Quelle | Einordnung |
|---|---:|---|---|
| US 10Y Treasury Yield | 4.45% am 2026-05-28 | U.S. Treasury Daily Treasury Rates | Leicht niedriger als 4.50% am 2026-05-26; bleibt Bewertungsgegenwind |
| US 2Y Treasury Yield | 3.99% am 2026-05-28 | U.S. Treasury Daily Treasury Rates | Leicht niedriger als 4.01% am 2026-05-26 |
| US 10Y Real Yield | 2.06% am 2026-05-28 | U.S. Treasury Daily Treasury Par Real Yield Curve Rates | Leicht niedriger als 2.10% am 2026-05-26; weiter hoch fuer Growth-Multiples |
| US High Yield OAS | 2.71% am 2026-05-27 | FRED BAMLH0A0HYM2 | Kein akuter Kreditstress |
| Chicago Fed NFCI | -0.510 am 2026-05-22 | FRED NFCI | Finanzbedingungen weiter locker |
| ICE US Dollar Index | 99.22 am 2026-05-27 20:00 | YCharts | Kein neues USD-Stresssignal; als Sekundaerquelle nur Makro-Cross-Check |

## Alert-Notizen

- Refresh 2026-05-29: SK Hynix und Samsung laufen in Korea weiter positiv; SanDisk, STX, WDC, MRVL und AVGO schlossen am 2026-05-28 positiv, Micron gab leicht nach, drehte aber nachboerslich ins Plus.
- Memory/HDD-Momentum bleibt stark: SK Hynix notierte am 2026-05-29 intraday +1.57%; SanDisk, Seagate und WDC bleiben nahe 52W-Hochs.
- Statusupdate 2026-05-28: Seagate wurde laut Nutzerangabe aus dem Depot genommen. STX bleibt wegen moeglicher HDD-/Nearline-Folgewelle auf Beobachtung; SK Hynix, Micron und SanDisk sind die aktiven Depotwerte.
- Kurze Abkuehlung sichtbar: Micron, SanDisk, Marvell, AMD und Intel sind im US-Pre-Market am 2026-05-28 schwach. Das ist noch kein Bruch der These, aber ein Timing-/Positionsgroessen-Risiko nach der Memory-Rallye.
- Reuters-/StockAnalysis-Newsfeeds bestaetigen die Trillion-Dollar-Club-/Crowding-Komponente bei Micron, SK Hynix und Samsung; Fundamentaldaten bleiben positiv, aber Momentum ist sehr dicht am Ueberhitzungsbereich.
- Marvell ist der neue harte Follow-on-Pruefpunkt: Aktie faellt am Earnings-Tag, aber Q1-FY2027-Guidance und AI-Bookings verbessern die Custom-Silicon-/Networking-These.
- Power/Cooling/Grid und WFE bleiben fundamental gestuetzt, aber mehrere Werte handeln mit sehr hohen Forward-Multiples; Bloom Energy ist besonders spekulativ.
- Makro ist nicht alarmierend: Zinsen und Realzinsen sind hoch, aber Kreditstress bleibt niedrig und Finanzbedingungen sind locker. Bewertungssensitivitaet bleibt der Hauptrisikokanal.
