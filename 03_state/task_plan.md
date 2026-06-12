# Task Plan

## Aktive Prioritaeten

- [x] Datenarchitektur auf CSV-only umstellen; alte Datenbank- und Toolpflicht entfernen.
- [x] Zusaetzliche Kontextoptimierungen umgesetzt: `AGENTS.md` weiter gekuerzt, CSV-first-Regel verankert, Report-Retention 7-14 Tage festgelegt.
- [ ] Aktuelle Ticker, Handelsplaetze, Positionsgroessen, Einstandskurse und Basiswaehrungen fuer SK Hynix, Micron, SanDisk und Kioxia klaeren.
- [ ] `latest_quotes.csv`, `monitoring_status.csv` und `peer_benchmarks.csv` mit vollstaendigen 1M/3M-/52W-/OHLC-Feldern und frischen Fundamentals befuellen.
- [x] US Payrolls 2026-06-05, Treasury 2026-06-05 und VIX-Sprung im Makro-/Rates-Overlay nachgezogen.
- [ ] Eurostat-Q1-Update bei naechstem EU-Makro-Rundgang nachziehen, falls als relevanter AI-/Capex-/Rates-Treiber noetig.
- [ ] USD-FX-Quelle fuer SK Hynix/Kioxia und nicht-US-Depotwerte festlegen; aktuelle USD-Angaben bleiben bis dahin approximativ.
- [ ] `decision_gate_results.csv` fuer Micron-Q3 und Kioxia-Securities-Report am 2026-06-24 vorbereiten.
- [ ] SanDisk-Mizuho 2026-06-09 direkt nach Webcast/Transcript nachziehen: Enterprise-SSD-Nachfrage, NAND-Preise, LTAs, Margen, Inventar, Capex, FCF. Eventseite und Transcript-Summary sind verarbeitet, aber noch kein harter Detailabgleich.
- [ ] Kioxia-Jun-11-Intradaykurs gegen TSE/Broker-Schluss und frische FX-Quelle verifizieren; StockAnalysis zeigte Jun-11-Intraday und Jun-10-Schluss, aber noch keine formale Broker-/Schlusskursbasis.
- [x] US CPI 2026-06-10 und Oracle Q4 2026-06-10 gegen AI-Capex-, Cloud-, GPU-/Storage- und Makro-Gates verarbeitet; Ergebnis: Nachfragebeleg hart positiv, Timing/FCF/Finanzierung/Makro gemischt bis belastend.
- [ ] Oracle-Q4-Call/Transcript nachziehen: konkrete GPU-, Memory-, Storage-, Power-, Cooling- und Supplier-Hinweise, Kundenprepayments, Capex-Phasing und Marginpfad.
- [ ] Jun-11/Jun-12-Rebound gegen Schlusskurse, FOMC und Schaetzungsrevisionen pruefen; nicht als harte These-Bestaetigung behandeln, solange Preise/Margen/FCF/EPS fehlen.
- [ ] Kioxia/HPE Discover 2026-06-15 bis 2026-06-18 nachziehen: konkrete Enterprise-SSD-/AI-Flash-Produkte, Kunden, LTAs, Umsatzzeitpunkt, Margen und FCF-Relevanz.
- [ ] Samsung/NVIDIA-HBM4E-/HBM5- und Foundry-Watch gegen offizielle Allokation, Yields, Design-Wins, Margen und EPS-Revisionen pruefen.
- [ ] Samsung-/SK-Hynix-Korea-Baustellen-/Betonliefer-Watch gegen Primaer-/Reuters-Follow-up pruefen: Dauer, betroffene Fabs, Tool-Installationsverschiebung, Kosten, Capex-Phasing, Guidance.
- [ ] SanDisk/Kioxia-Bucket nach Kioxia Securities Report neu pruefen: FCF, Working Capital, Segmentmargen, LTA-Details, Nettofinanzierung, JV-Oekonomie.
- [ ] Marvell/Broadcom/Arista-Follow-on-Rotation gegen harte Belege pruefen: Design-Wins, AI-Umsatz, Margen, FCF, EPS-Revisionen, Bewertung.
- [ ] Broadcom/Apollo/Blackstone/Anthropic und KKR/NVIDIA/Vistra/Helix gegen offizielle Plattformdetails, Finanzierungsbedingungen, Kundenvertraege, Power-Oekonomie, Speicher-/Storage-Anbindung und Schaetzungsrevisionen pruefen.
- [ ] HDD-/Nearline-Reaktivierungswatch fuer WDC/STX gegen Primaertranskripte, LTAs, Exabytes, ASPs, Gross Margins, FCF und EPS-Revisionen validieren.
- [ ] Bei jedem Daily Brief: Scope, frische Daten, CSV-Update, Quality Gate, Chat-Ausgabe.
- [x] 2026-06-12 08:15 CEST: Repository-Rundgang ohne Python/DB fortgefuehrt; SK-Hynix-Intraday rechecked, Broadcom/Apollo/Blackstone/Anthropic und KKR/NVIDIA/Vistra/Helix als AI-Infrastruktur-Finanzierungswatch erfasst, Hyperscaler-Capex-Platzhalter bereinigt. Keine harte Depotthese-Aenderung.
- [x] 2026-06-11 06:35 CEST: Repository-Rundgang ohne Python/DB ausgefuehrt; alle Covered-/Depot-/Watchwerte refreshed, CPI/Oracle nachgezogen, Micron-Bechtel, Jun-10 AI-Hardware-Korrektur, Jun-11 Asia-Memory-Tape, Makro/Rates, Retention, Company Notes, Watchlists und State-Dateien aktualisiert. Keine harte Depotthese-Aenderung, Timing gelb-rot.
- [x] 2026-06-12 05:54 CEST: Repository-Rundgang ohne Python/DB ausgefuehrt; alle Covered-/Depot-/Watchwerte refreshed, Jun-11 US-Rebound und Jun-12 Asia-Memory-Rebound, BLS-PPI, Treasury/FRED-Makro, Kioxia-HPE-Discover-Watch, Retention, Company Notes, Watchlists und State-Dateien aktualisiert. Keine harte Depotthese-Aenderung, Timing von gelb-rot auf gelb verbessert.
- [x] 2026-06-12 06:35 CEST: Follow-up-Rundgang ohne Python/DB ausgefuehrt; SK Hynix/Samsung Jun-12-Intraday nachgezogen, WSJ-Asia-Rebound, Reuters/StockAnalysis-Korea-Baustellen-Watch, Marvell-CFO-/Q2-Outlook-Watch, XE-FX-Berichtswerte und Kioxia-History-Quellenkonflikt erfasst. Keine harte Depotthese-Aenderung.
- [x] 2026-06-12 07:50 CEST: Repository-Rundgang ohne Python/DB fortgefuehrt; alle Covered-/Depot-/Watchwerte refreshed, Asia-Memory-Intraday weiter nachgezogen, Google/Samsung-TPU-Watch erfasst, STX-Jun-11-Quote und WDC-Jun-5-History-Konflikt bereinigt, Caches/Company Notes/Watchlists/Log aktualisiert. Keine harte Depotthese-Aenderung.
- [x] 2026-06-10 06:01 CEST: Repository-Rundgang ohne Python/DB ausgefuehrt; alle Covered-/Depot-/Watchwerte refreshed, Jun-9-AI-/Memory-Reversal, SanDisk-Mizuho-Summary, Kioxia-Jun-10-Intraday, CPI/Oracle-Gates, Arista/Corning/OpenAI-NVIDIA-Infrastruktur-Suchspuren, Makro/Rates und Retention geprueft. Keine harte Depotthese-Aenderung.
- [x] 2026-06-09 06:34 CEST: Follow-up-Spot-Check ohne Python/DB ausgefuehrt; SK Hynix/Samsung Jun-9-Intradaywerte aktualisiert, Kioxia-Quote-Luecke bestaetigt, Reuters Samsung/NVIDIA-HBM4E-/HBM5-Watch, TrendForce-DRAM-Preiskontext und US-China-Regulierungswatch erfasst. Keine automatische Depotentscheidung.
- [x] 2026-06-09 05:50 CEST: Daily Radar ohne Python/DB ausgefuehrt; US-Jun-8-Schlusskurse, AP-US-/Asien-Erholungsberichte, Treasury-Jun-8-Renditen, SanDisk-Mizuho-Termin, Kioxia-Quote-Luecke und geloesten Kioxia-Market-Cap-Konflikt erfasst. Keine automatische Depotentscheidung.
- [x] 2026-06-08 13:02 CEST: Daily Radar ohne Python/DB fortgefuehrt; KRX/TSE-Schlusskurse, US-Pre-Market, Reuters Vera-Rubin-Prioritaetslieferungsbericht, Korea-Circuit-Breaker-Schlussbericht und WDC-Quellenkonflikt erfasst. Keine automatische Depotentscheidung.
- [x] 2026-06-08 06:04 CEST: Daily Radar ohne Python/DB ausgefuehrt; NVIDIA/SK-Hynix-Partnerschaft als harte Primaermeldung erfasst, Kioxia/Samsung-Asien-Schwaeche und gemischte Kurs-Session-Qualitaet markiert, CSV-Caches/Company Notes/Watchlists/Log aktualisiert. Keine automatische Depotentscheidung.
- [x] 2026-06-08 06:35 CEST: Mid-Asia-Nachzug ohne Python/DB ausgefuehrt; SK Hynix jetzt direkt intraday verfuegbar, Kioxia-Intraday aktualisiert, Yonhap-KOSPI-Circuit-Breaker-Stress und TrendForce-Multi-Vendor-Hinweis erfasst. Keine automatische Depotentscheidung.
- [x] 2026-06-07 06:36 CEST: Sonntagsradar ohne Python/DB ausgefuehrt; keine neue regulaere Boersensitzung, Reuters-Selloff auf rund USD 1.3T geschaerft, Termine heute plus fuenf Tage geprueft, Caches/Company Notes/Watchlists/Log aktualisiert. Keine harte These-Aenderung.
- [x] 2026-06-07 12:56 CEST: Wochenend-Nachzug ohne Python/DB ausgefuehrt; Quote-/Event-/Monitoring-Caches mechanisch refreshed, externe Primaerquellen/News erneut geprueft, keine neue harte Guidance-, Speicherpreis-, Margen-, Kunden-, FCF-, Produktions- oder Regulierungsinformation gefunden.
- [x] 2026-06-06 07:02 CEST: Covered-Symbol-Friday-Close-Refresh ohne Python/DB ausgefuehrt; Quotes, News, Makro, Monitoring, Peer-Benchmarks, Company Notes, Snapshot und Log aktualisiert. Kioxia-Source-Konflikt geloest; keine harte These-Aenderung.
- [x] 2026-06-05 12:46 CEST: Covered-Symbol-Refresh ohne Python/DB ausgefuehrt; Quotes, News, Makro, Monitoring, Peer-Benchmarks und Log aktualisiert.

## Archiv

Alte Langlisten sind auf Kurzarchive reduziert: `03_state/archive/`.
