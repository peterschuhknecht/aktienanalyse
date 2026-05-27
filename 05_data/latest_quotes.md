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
| Datum/Zeit | 2026-05-27, ca. Europe/Berlin |
| Ausloeser | Nutzerfrage zu Branchenbereichen mit Micron-/UBS-aehnlichem Re-Rating-Potenzial |
| Quelle | StockAnalysis.com Kursseiten |
| Hinweis | Fokus auf Re-Rating-Kandidaten aus Speicher, Custom Silicon, AI-Netzwerk, Power/Cooling/Grid und WFE |

## Kursdaten

| Unternehmen | Symbol | Kurs | Waehrung | Tagesveraenderung | 1M | 3M | 52W-Hoch-Abstand | Quelle | Abrufzeit | Notiz |
|---|---:|---:|---|---:|---:|---:|---:|---|---|---|
| SK Hynix | 000660.KS | 2,331,000 | KRW | +13.60% | TBD | TBD | near 52W high | StockAnalysis KRX:000660 | 2026-05-27 11:48 KST | PE 13.26, Forward PE 6.34, 1Y +1,048%, Earnings Date 2026-07-23 |
| Micron Technology | MU | 895.88 | USD | +19.29% | TBD | TBD | 2.3% below high | StockAnalysis MU | 2026-05-26 close; after-hours 914.62, +2.09% | PE 42.14, Forward PE 9.56, market cap ca. USD 1.01T, Earnings Date 2026-06-24 |
| SanDisk | SNDK | 1,589.55 | USD | +7.50% | TBD | TBD | 3.2% below high | StockAnalysis SNDK | 2026-05-26 close; after-hours 1,617.30, +1.75% | PE 53.51, Forward PE 9.80 |
| Seagate Technology | STX | 845.76 | USD | +4.06% | TBD | TBD | 2.0% below high | StockAnalysis STX | 2026-05-26 close; after-hours 851.77, +0.71% | PE 80.10, Forward PE 35.45 |
| Arista Networks | ANET | 158.01 | USD | +2.58% | TBD | TBD | 12.1% below high | StockAnalysis ANET | 2026-05-26 close; after-hours 159.48, +0.93% | PE 54.30, Forward PE 41.72 |
| Broadcom | AVGO | 422.01 | USD | +1.90% | TBD | TBD | 4.6% below high | StockAnalysis AVGO | 2026-05-26 close; after-hours 423.95, +0.46% | PE 82.25, Forward PE 31.56, market cap ca. USD 2.00T |
| Marvell Technology | MRVL | 208.26 | USD | +6.08% | TBD | TBD | at/near high | StockAnalysis MRVL | 2026-05-26 close; after-hours 213.58, +2.55% | PE 67.84, Forward PE 54.09, Earnings Date 2026-05-27 |
| Vertiv | VRT | 323.91 | USD | -1.08% | TBD | TBD | 14.7% below high | StockAnalysis VRT | 2026-05-26 close; after-hours 325.58, +0.52% | PE 81.40, Forward PE 47.59 |
| Western Digital | WDC | 524.65 | USD | +8.34% | TBD | TBD | 2.1% below high | StockAnalysis WDC | 2026-05-26 close; after-hours 529.93, +1.01% | PE 28.73, Forward PE 33.79, market cap ca. USD 180.84B |
| Eaton | ETN | 403.13 | USD | +3.01% | TBD | TBD | 7.4% below high | StockAnalysis ETN | 2026-05-26 close; after-hours 405.00, +0.46% | PE 39.44, Forward PE 28.63 |
| GE Vernova | GEV | 1,070.47 | USD | +3.05% | TBD | TBD | 9.4% below high | StockAnalysis GEV | 2026-05-26 close; after-hours 1,072.50, +0.19% | PE 31.32, Forward PE 57.88 |
| Applied Materials | AMAT | 454.89 | USD | +5.26% | TBD | TBD | at 52W high | StockAnalysis AMAT | 2026-05-26 close; after-hours 455.01, +0.03% | PE 42.78, Forward PE 31.10 |
| Lam Research | LRCX | 322.68 | USD | +5.68% | TBD | TBD | at 52W high | StockAnalysis LRCX | 2026-05-26 close; after-hours 323.05, +0.11% | PE 57.67, Forward PE 40.81 |
| Corning | GLW | 196.17 | USD | +1.09% | TBD | TBD | 7.4% below high | StockAnalysis GLW | 2026-05-26 close; after-hours 197.17, +0.51% | PE 94.40, Forward PE 58.16 |
| Samsung Electronics | 005930.KS / SSNLF | 299,000 | KRW | +2.22% | TBD | TBD | 1.0% below high | StockAnalysis KRX:005930 | 2026-05-26 close | PE 23.99, Forward PE 5.92, 1Y +451.66% |
| NVIDIA | NVDA | 212.72 | USD | -1.21% | TBD | TBD | 10.1% below high | StockAnalysis NVDA | 2026-05-26 12:11 EDT | PE 32.98, Forward PE 21.59 |
| Tesla | TSLA | 429.12 | USD | +0.73% | TBD | TBD | 14.0% below high | StockAnalysis TSLA | 2026-05-26 12:27 EDT | PE 416.50, Forward PE 198.09; relevant als TeraFab-/AI-demand Kontext |

## Alert-Notizen

- Micron, SK Hynix, SanDisk, Seagate, WDC und Samsung handeln sehr nahe an 52W-Hochs. Das bestaetigt Momentum, erhoeht aber Rueckschlagsrisiko.
- Micron +19.29%, SK Hynix +13.60%, SanDisk +7.50% und Seagate +4.06% zeigen, dass der UBS-/AI-Memory-Impuls auf das Depot durchschlaegt, aber am staerksten bei HBM/DRAM.
- Unter den Follow-on-Werten sind Broadcom, Marvell, Arista, Vertiv, Eaton, GE Vernova, AMAT, LRCX und Corning bereits hoch bewertet oder nahe Hochs. Re-Rating-Potenzial existiert, aber Rueckschlagsrisiko ist breit erhoeht.
