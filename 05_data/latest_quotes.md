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
| Datum/Zeit | 2026-05-30, ca. 08:08 Europe/Berlin |
| Ausloeser | Automation: KI Aktien Analyse / Nutzerfrage: Gibt es Neuigkeiten? |
| Quelle | StockAnalysis.com Kursseiten fuer Aktien; StockAnalysis KRX/TYO/EPA fuer Korea, Kioxia und Schneider; U.S. Treasury Daily Treasury Rates und Real Yield Curve; Barchart/WallStreetNumbers als VIX-Sekundaercheck |
| Hinweis | Wochenend-Refresh: US-Daten bleiben Schlusskurse vom 2026-05-29 plus wenige After-Hours-Indikationen; Korea/Japan sind Schlusskurse vom 2026-05-29; Schneider ist Euronext-Paris-Kurs vom 2026-05-29. Dell-Zahlen aus der Primaermeldung wurden korrigiert: Q1-FY2027 AI-optimized server revenue USD 16.132B, ISG revenue USD 29.009B, Gesamtumsatz USD 43.842B. |

## Kursdaten

| Unternehmen | Symbol | Kurs | Waehrung | Tagesveraenderung | 1M | 3M | 52W-Hoch-Abstand | Quelle | Abrufzeit | Notiz |
|---|---:|---:|---|---:|---:|---:|---:|---|---|---|
| SK Hynix | 000660.KS | 2,333,000 | KRW | +1.92% | n/b | n/b | ca. 1.9% unter Hoch 2,379,000 | StockAnalysis KRX:000660 | 2026-05-29 close | Market cap ca. KRW 1,652.46T, PE 22.09, Forward PE 7.21, 1Y ca. +1,022%, erwarteter Earnings Date 2026-07-23 |
| Micron Technology | MU | 971.00 | USD | +5.14% | n/b | n/b | ca. 1.0% unter Hoch 981.00 | StockAnalysis MU | 2026-05-29 close; after-hours 964.78, -0.64% | Market cap ca. USD 1.10T, Revenue TTM USD 58.12B (+85.5%), PE 45.68, Forward PE 10.27, Earnings Date 2026-06-24 |
| SanDisk | SNDK | 1,694.98 | USD | +3.25% | n/b | n/b | ca. 0.8% unter Hoch 1,708.83 | StockAnalysis SNDK | 2026-05-29 close; after-hours 1,683.81, -0.66% | Market cap ca. USD 251.01B, PE 57.06, Forward PE 10.41; sehr starkes Momentum, Rueckschlagsrisiko bleibt hoch |
| Seagate Technology | STX | 879.80 | USD | -0.10% | n/b | n/b | ca. 2.8% unter Hoch 905.39 | StockAnalysis STX | 2026-05-29 close; after-hours 879.20, -0.07% | Market cap ca. USD 199.06B, PE 83.32, Forward PE 36.88; HDD-Watchlist positiv, aber nicht reaktiviert |
| Western Digital | WDC | 531.21 | USD | +0.01% | n/b | n/b | ca. 4.0% unter Hoch 553.50 | StockAnalysis WDC | 2026-05-29 close; after-hours 529.10, -0.40% | Market cap ca. USD 183.10B, PE 29.09, Forward PE 34.21; HDD-Watchlist positiv, aber kein neues hartes Reaktivierungssignal |
| Arista Networks | ANET | 159.47 | USD | +2.70% | n/b | n/b | ca. 11.3% unter Hoch 179.80 | StockAnalysis ANET | 2026-05-29 close | Market cap ca. USD 200.81B, PE 54.80, Forward PE 42.11 |
| Broadcom | AVGO | 446.77 | USD | +4.73% | n/b | n/b | ca. 0.5% unter Hoch 448.90 | StockAnalysis AVGO | 2026-05-29 close | Market cap ca. USD 2.12T, PE 87.07, Forward PE 33.44, Earnings Date 2026-06-03 |
| Marvell Technology | MRVL | 205.00 | USD | +0.08% | n/b | n/b | ca. 6.1% unter Hoch 218.26 | StockAnalysis MRVL | 2026-05-29 close | Market cap ca. USD 179.33B, PE 70.81, Forward PE 45.28; Q1-FY2027-AI-Bookings bleiben Follow-on-Trigger |
| Vertiv | VRT | 315.71 | USD | +0.49% | n/b | n/b | ca. 16.9% unter Hoch 379.94 | StockAnalysis VRT | 2026-05-29 close | Market cap ca. USD 121.27B, PE 79.34, Forward PE 46.26 |
| Samsung Electronics | 005930.KS / SSNLF | 317,000 | KRW | +5.84% | n/b | n/b | ca. 1.9% unter Hoch 323,000 | StockAnalysis KRX:005930 | 2026-05-29 close | Market cap ca. KRW 2,015.75T, PE 25.44, Forward PE 6.28, 1Y ca. +467%; HBM4E-Sample-Signal bleibt wichtig |
| Eaton | ETN | 400.60 | USD | -0.33% | n/b | n/b | ca. 8.0% unter Hoch 435.43 | StockAnalysis ETN | 2026-05-29 close | Market cap ca. USD 155.55B, PE 39.19, Forward PE 28.46 |
| GE Vernova | GEV | 968.32 | USD | -2.78% | n/b | n/b | ca. 18.1% unter Hoch 1,181.95 | StockAnalysis GEV | 2026-05-29 close | Market cap ca. USD 260.21B, PE 28.33, Forward PE 52.36; Ruecksetzer nach starker Power-/Grid-Rallye beachten |
| Corning | GLW | 181.16 | USD | -0.84% | n/b | n/b | ca. 14.5% unter Hoch 211.79 | StockAnalysis GLW | 2026-05-29 close | Market cap ca. USD 155.91B, PE 87.18, Forward PE 53.71; Optics-/Fiber-These intakt, aber Bewertung gelb |
| Constellation Energy | CEG | 287.75 | USD | +0.50% | n/b | n/b | ca. 30.3% unter Hoch 412.70 | StockAnalysis CEG | 2026-05-29 close | Market cap ca. USD 103.93B, PE 24.57, Forward PE 24.45 |
| Vistra | VST | 160.23 | USD | -0.03% | n/b | n/b | ca. 27.1% unter Hoch 219.82 | StockAnalysis VST | 2026-05-29 close | Market cap ca. USD 54.03B, PE 27.05, Forward PE 17.44 |
| Bloom Energy | BE | 285.00 | USD | -1.73% | n/b | n/b | ca. 11.7% unter Hoch 322.83 | StockAnalysis BE | 2026-05-29 close | Market cap ca. USD 81.07B, PE 11,965, Forward PE 123.53; weiter hochspekulativ und bewertungsempfindlich |
| Applied Materials | AMAT | 450.06 | USD | +0.08% | n/b | n/b | ca. 2.7% unter Hoch 462.40 | StockAnalysis AMAT | 2026-05-29 close | Market cap ca. USD 357.17B, PE 42.33, Forward PE 30.72; AI/WFE-Kommentar von CEO als positives Branchensignal |
| Lam Research | LRCX | 318.18 | USD | +0.06% | n/b | n/b | ca. 4.5% unter Hoch 333.33 | StockAnalysis LRCX | 2026-05-29 close | Market cap ca. USD 397.91B, PE 60.06, Forward PE 42.46 |
| ASML | ASML | 1,612.76 | USD | +0.44% | n/b | n/b | ca. 2.5% unter Hoch 1,654.20 | StockAnalysis ASML | 2026-05-29 close | Market cap ca. USD 622.37B, PE 53.96, Forward PE 40.88, Earnings Date 2026-07-15 |
| Amkor Technology | AMKR | 69.56 | USD | -1.45% | n/b | n/b | ca. 12.2% unter Hoch 79.23 | StockAnalysis AMKR | 2026-05-29 close | Market cap ca. USD 17.24B, PE 40.01, Forward PE 31.68; advanced-packaging-Readthrough bleibt positiv, Kurs kurzfristig schwach |
| NVIDIA | NVDA | 211.14 | USD | -1.45% | n/b | n/b | ca. 10.7% unter Hoch 236.54 | StockAnalysis NVDA | 2026-05-29 close | Market cap ca. USD 5.11T, PE 32.34, Forward PE 21.24; COMPUTEX/GTC-Taipei und Photonics-Kontext wichtig |
| AMD | AMD | 516.10 | USD | -0.38% | n/b | n/b | ca. 2.1% unter Hoch 527.20 | StockAnalysis AMD | 2026-05-29 close | Market cap ca. USD 841.55B, PE 172.10, Forward PE 59.35; Momentum stark, Bewertung sehr anspruchsvoll |
| Intel | INTC | 114.68 | USD | -5.14% | n/b | n/b | ca. 13.6% unter Hoch 132.75 | StockAnalysis INTC | 2026-05-29 close | Market cap ca. USD 576.38B, Forward PE 108.83, negative TTM EPS; deutlich schwaecherer Compute-/Foundry-Readthrough |
| Microsoft | MSFT | 450.24 | USD | +5.45% | n/b | n/b | ca. 18.9% unter Hoch 555.45 | StockAnalysis MSFT | 2026-05-29 close | Market cap ca. USD 3.34T, PE 26.82, Forward PE 24.36; AI-Software-/Cloud-Nachfragekontext positiv |
| Amazon | AMZN | 270.64 | USD | -1.23% | n/b | n/b | ca. 2.8% unter Hoch 278.56 | StockAnalysis AMZN | 2026-05-29 close | Market cap ca. USD 2.91T, PE 32.37, Forward PE 32.45; AWS-/AI-Capex-Kontext, kurzfristig gemischt |
| Alphabet | GOOGL | 380.34 | USD | -2.51% | n/b | n/b | ca. 6.9% unter Hoch 408.61 | StockAnalysis GOOGL | 2026-05-29 close | Market cap ca. USD 4.61T, PE 29.02, Forward PE 30.39 |
| Meta Platforms | META | 632.51 | USD | -0.44% | n/b | n/b | ca. 20.6% unter Hoch 796.25 | StockAnalysis META | 2026-05-29 close | Market cap ca. USD 1.61T, PE 23.01, Forward PE 19.27; Cloud-/AI-capacity-Kontext beobachten |
| Oracle | ORCL | 225.78 | USD | +10.84% | n/b | n/b | ca. 34.7% unter Hoch 345.72 | StockAnalysis ORCL | 2026-05-29 close | Market cap ca. USD 649.35B, PE 40.51, Forward PE 29.99, Earnings Date 2026-06-08 laut Finanzdatenanbieter; starker AI-/Cloud-Readthrough |
| Dell Technologies | DELL | 420.91 | USD | +32.76% | n/b | n/b | ca. 1.9% unter Hoch 429.15 | StockAnalysis DELL | 2026-05-29 close | Market cap ca. USD 273.41B, PE 33.65, Forward PE 23.16; neues hartes AI-Server-/Storage-Nachfragesignal |
| Tesla | TSLA | 435.79 | USD | -1.43% | n/b | n/b | ca. 12.6% unter Hoch 498.83 | StockAnalysis TSLA | 2026-05-29 close | Market cap ca. USD 1.64T, PE 423.80, Forward PE 202.64; AI-/Robotik-Kontext, aber FSD-/Robotaxi-Readthrough gemischt |
| Kioxia | 285A.T | 65,850 | JPY | +7.46% | n/b | n/b | ca. 2.2% unter Hoch 67,340 | StockAnalysis TYO:285A | 2026-05-29 close | Market cap ca. JPY 35.96T, PE 65.25, Forward PE 7.91; sehr starkes NAND-Readthrough fuer SanDisk |
| Schneider Electric | SU.PA / SBGSY | 269.95 | EUR | +1.01% | n/b | n/b | ca. 6.2% unter Hoch 287.90 | StockAnalysis EPA:SU | 2026-05-29 close | Market cap ca. EUR 151.69B, PE 36.83, Forward PE 26.29; AI-Datacenter-Power/Cooling-Kontext bestaetigt |
| SpaceX | Private | n/a | n/a | n/a | n/a | n/a | n/a | Nicht boersennotiert | 2026-05-30 | Nur Nachfrage-/TeraFab-Kontext, kein Kurs |
| xAI | Private | n/a | n/a | n/a | n/a | n/a | n/a | Nicht boersennotiert | 2026-05-30 | Nur AI-Workload-/Inference-Kontext, kein Kurs |

## Makro-Overlay

| Signal | Aktueller Datenpunkt | Quelle | Einordnung |
|---|---:|---|---|
| US 10Y Treasury Yield | 4.45% am 2026-05-29 | U.S. Treasury Daily Treasury Rates | Unveraendert zu 2026-05-28; bleibt Bewertungsgegenwind |
| US 2Y Treasury Yield | 3.98% am 2026-05-29 | U.S. Treasury Daily Treasury Rates | Leicht niedriger als 3.99% am 2026-05-28 |
| US 10Y Real Yield | 2.07% am 2026-05-29 | U.S. Treasury Daily Treasury Par Real Yield Curve Rates | Leicht hoeher als 2.06% am 2026-05-28; weiter hoch fuer Growth-Multiples |
| US High Yield OAS | 2.71% am 2026-05-27 | FRED BAMLH0A0HYM2 | Kein akuter Kreditstress |
| Chicago Fed NFCI | -0.510 am 2026-05-22 | FRED NFCI | Finanzbedingungen weiter locker |
| ICE US Dollar Index | 99.22 am 2026-05-27 20:00 | YCharts | Kein neues USD-Stresssignal; als Sekundaerquelle nur Makro-Cross-Check |
| VIX | ca. 15.3 am 2026-05-29 | Barchart/WallStreetNumbers, Sekundaercheck | Kein Volatilitaetsstress; nur Timing-/Crowding-Signal, weil nicht ueber Cboe sauber automatisiert verifiziert |

## Alert-Notizen

- Refresh 2026-05-30 08:08 CEST: US-Schlusskurse vom 2026-05-29 bestaetigen die Memory-/AI-Infrastruktur-Rallye statt sie zu brechen: Micron +5.14%, SanDisk +3.25%, Broadcom +4.73%, Arista +2.70%, Oracle +10.84%, Microsoft +5.45% und Dell +32.76%. NVIDIA, AMD und Hyperscaler waren gemischt; Intel fiel -5.14%.
- Dell ist der neue harte Nachfrage-Readthrough: Q1-FY2027 Gesamtumsatz USD 43.842B (+88% YoY), ISG-Umsatz USD 29.009B (+181% YoY), AI-optimized server revenue USD 16.132B (+757% YoY), AI orders USD 24.4B und FY27-AI-Server-Erwartung ca. USD 60B verbessern das Umfeld fuer Memory, Storage, Networking und Power, erhoehen aber zugleich Crowding-Risiko in AI-Infrastrukturwerten.
- Depotwerte bleiben besser, aber ueberhitzt: SK Hynix, Micron und SanDisk stehen sehr nahe an Hochs; SanDisk und Micron zeigen die hoechste kurzfristige Beta.
- HDD-/Nearline-Watchlist bleibt leicht positiv, aber unveraendert Beobachtung: STX/WDC lieferten am 2026-05-29 keine neuen operativen Reaktivierungsdaten.
- Follow-on-Watchlist bleibt aktiv: Broadcom-Q2 am 2026-06-03 ist der naechste harte Pruefpunkt; Samsung bleibt durch HBM4E-Samples wichtig; Dell wird als Nachfrageproxy aufgenommen.
- Makro ist neutral bis leicht gemischt: 2Y leicht niedriger, 10Y unveraendert, 10Y Real Yield minimal hoeher; Nominal- und Realzinsen bleiben absolut hoch.
