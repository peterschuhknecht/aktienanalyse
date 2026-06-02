# Evaluation Log

## 2026-06-02 - Kontext-Radar: Micron positiv, Momentum selektiv, Makro gelb

### Anlass

Automation "KI Aktien Analyse" fragte "Gibt es Neuigkeiten?" und verlangte Repository-Rundgang, Covered-Symbol-Vollrefresh, Watchlists, aktuelle Nachrichten, SQLite-Snapshots, Retention-Pruefung und Aktualisierung der passenden Dateien.

### Fakten

- US-Schlusskurse 2026-06-01: Micron USD 1,035.50 (+6.64%), SanDisk USD 1,761.43 (+3.92%), Dell USD 465.96 (+10.70%), Broadcom USD 459.97 (+2.95%; after-hours +2.71%), Arista +7.03%, Marvell +7.04%, NVIDIA +6.26%. Schwach: CEG -7.66%, Meta -5.07%, TSLA -4.57%, Bloom -4.03%, Vistra -3.41%, Amazon -3.47%.
- SK Hynix notierte am 2026-06-02 bei KRW 2,289,000 (-3.13%). Im Quellencheck wurde keine neue bestaetigte Produktionsunterbrechung, Yield-Auswirkung, Shipment-Verzoegerung oder offizielle Kapazitaetswarnung nach dem Cheongju-Gasleck gefunden.
- Micron meldete am 2026-06-01 zur COMPUTEX ein AI-Memory-/Storage-Portfolio mit HBM, SOCAMM2, high-cap DDR5 RDIMMs, Data-Center-SSDs, LPCAMM2, GDDR7, LPDDR5X, Client-SSDs und Automotive-UFS.
- U.S. Treasury per 2026-06-01: US 10Y 4.47%, US 2Y 4.05%, 10Y Real Yield 2.07%. FRED: HY OAS 2.74% per 2026-05-31, VIX 15.32 per 2026-05-29, NFCI -0.510 per 2026-05-22.
- Heute, 2026-06-02, stehen Eurozone-HICP, US-JOLTS, Kioxia Investor Day, NVIDIA-GTC-Sessions sowie Dell/WDC/STX bei BofA an. Broadcom-Q2 folgt am 2026-06-03.

### Einordnung

Boom-Rahmenbedingungen bleiben Gruen/Gelb. Unternehmens- und Kursseite verbessern sich selektiv durch Micron, Dell, Broadcom, Arista, Marvell und NVIDIA. Microns Meldung ist ein positives Produkt-/Roadmap-Signal, aber kein Guidance-, Margen-, FCF- oder EPS-Beleg. SK Hynix bleibt wegen Cheongju und -3.13% kurzfristig Watch, aber ohne harte Produktionsfolgen kein These-Bruch. Makro ist nicht rot, aber gelber: Kreditstress fehlt, doch 2Y/10Y und hoher Realzins begrenzen Multiple-Ausweitung.

### Entscheidung / Arbeitsthese

Keine Kauf-/Verkaufsentscheidung und keine These-Aenderung. Aktives Depot bleibt im Arbeitsspeicher SK Hynix, Micron, SanDisk. Handlungspruefung bleibt sinnvoll: Broadcom-Q2 als Opportunity-Cost-Test, Kioxia Investor Day als SanDisk-/NAND-Test, Dell/WDC/STX-Konferenzen als Memory-/Storage-/HDD-Engpass-Test.

### Datenqualitaet / Risiken

StockAnalysis wurde fuer Kurs-/Marktdaten genutzt; harte Unternehmenssignale stammen aus Micron/GlobeNewswire, Kioxia IR, Broadcom IR sowie Treasury/FRED. Quality Gate `python3 tools/market_monitor_validate.py`: 0 Blocker, 31 Warnungen. Warnungen betreffen fehlende 1M/3M-Momentumfelder und fehlende Fundamentals-Snapshots bei Teilen der Watchlist. `PRAGMA integrity_check` ergab `ok`, `PRAGMA foreign_key_check` ohne Befund. Keine Blocker fuer einen kompakten Kontextbericht, aber keine harte Bewertung ohne Gegenpruefung.

## 2026-06-01 - Market-Monitor Quality Gate umgesetzt

### Anlass

Nutzer fragte nach Optimierungsmoeglichkeiten fuer das aktuelle System und gab anschliessend den Plan zur Datenqualitaets-Optimierung frei.

### Aenderung

- SQLite-Schema um `data_quality_issues` sowie die Views `stale_quotes`, `quote_outlier_candidates`, `missing_required_fundamentals` und `cache_db_mismatches` erweitert.
- Neues Tool `tools/market_monitor_validate.py` angelegt: standardmaessig read-only, optional mit `--write-issues` fuer persistente Befunde.
- `AGENTS.md`, `START_HERE.md`, `05_data/market_monitor_usage.md`, `05_data/market_monitor_schema.md` und `05_data/data_schema.md` so aktualisiert, dass das Quality Gate vor Bewertungen, Kauf-/Verkaufsaussagen oder These-Aenderungen Pflicht ist.

### Test / Datenstand

`PRAGMA integrity_check` ergab `ok`; `PRAGMA foreign_key_check` lieferte keine Fehler. Der Validator meldete 0 Blocker und 31 Warnungen. Die Warnungen betreffen fehlende 1M/3M-/52W-Momentumfelder sowie fehlende Fundamentals-Snapshots bei mehreren Watchlistwerten; sie wurden mit `--write-issues` in `data_quality_issues` gespeichert.

### Arbeitsregel

`warning` erlaubt eine Analyse mit ausdruecklichem Datenluecken-Hinweis. `blocker` verbietet harte Bewertung, Kauf-/Verkaufsaussage oder These-Aenderung, bis der betroffene Datenpunkt gegen eine hochwertige Quelle geprueft wurde.

## 2026-06-01 - Operator-Signal-Radar umgesetzt

### Anlass

Nutzer wollte ein dauerhaftes Radar fuer Personen, die in KI und Technologie wirklich etwas zu sagen haben und deren neue Aussagen systematisch gespeichert und auf Zukunftsauswirkungen geprueft werden. Zusaetzlich sollte TIME100 AI 2025 als Uebersicht beruecksichtigt werden; Andrej Karpathy und Ilya Sutskever sollen unbedingt enthalten sein.

### Aenderung

- Neue Datei `02_context/watchlist_ai_operator_signals.md` angelegt.
- SQLite-Schema um `people`, `person_statements`, `active_people`, `unprocessed_person_statements` und `person_signal_alerts` erweitert.
- `05_data/market_monitor_seed.sql` um initiale P1/P2/P3-Personen erweitert, inklusive Andrej Karpathy und Ilya Sutskever.
- `AGENTS.md`, `START_HERE.md`, `05_data/market_monitor_schema.md`, `05_data/market_monitor_usage.md`, `03_state/task_plan.md` und `03_state/assumptions_and_decisions.md` aktualisiert.

### Arbeitsregel

Das Radar ist keine Influencer-Liste und keine eigenstaendige Anlagegrundlage. Aussagen werden als `Hard`, `Medium` oder `Soft` klassifiziert. Nur harte Daten oder bestaetigte Roadmap-/Lieferkettenaussagen duerfen Thesen, Unternehmensakten, Watchlists oder `evaluation_log.md` veraendern.

### Datenebene

Die Rollenquellen wurden primaer gegen offizielle Unternehmens-/Personenquellen geprueft; TIME100 AI 2025 wird als Kurations-/Suchquelle, nicht als harte Investmentquelle genutzt. Die echte SQLite-Datenbank wurde mit dem Schema und Seed fortgeschrieben und technisch getestet; `PRAGMA integrity_check` ergab `ok`.

## 2026-06-01 - Wochenueberblick 08:47 CEST Chat-Refresh

### Anlass

Automation "KI Aktien Wochenueberblick" wurde erneut ausgefuehrt, diesmal mit expliziter Pflicht, den vollstaendigen Acht-Punkte-Bericht direkt im Chat auszugeben und zusaetzlich die Reportkopie sowie Datenebene fortzuschreiben.

### Fakten

- Repository-Rundgang, Automation-Memory, Kernkontext, Watchlists, Monitoring, Makro, Kurse, News, Events, Unternehmensakten, Report, Arbeitsspeicher und SQLite-Nutzung wurden geprueft.
- Externe Gegenpruefung bestaetigte den 08:16-Cache: SK Hynix KRW 2,369,000 (+1.54%), Samsung KRW 349,250 (+10.17%), Kioxia JPY 72,020 (+9.37%); US-Werte bleiben vor Handelsstart beim 2026-05-29-Schlusskurs.
- NVIDIA-, Dell-, Kioxia-, Broadcom- und Micron-Quellen bestaetigen weiterhin die bestehenden Wochenkatalysatoren. Es gab keine neue harte Kurs-, Guidance-, Margen-, EPS- oder Eventaenderung gegenueber dem 08:16-Lauf.
- SQLite wurde mit neuen Quote-, Signal-, Makro-, Thesis- und Run-Log-Snapshots fortgeschrieben; `PRAGMA integrity_check` ergab `ok`.

### Einordnung

Keine neue These-Aenderung gegenueber dem 08:16-Refresh. Depot-Ampel bleibt Gruen/Gelb: Unternehmens- und Roadmap-Signale sind positiv, aber Crowding, hohe Realzinsen, Exportkontroll-Watch und fehlende direkte Speicherpreis-/Margen-/EPS-Bestaetigung bleiben die Gegenargumente.

### Entscheidung / Arbeitsthese

Keine Kauf-/Verkaufsanweisung. Beobachtungsfokus bleibt Broadcom-Q2, Kioxia Investor Day, Dell/WDC/STX-Konferenzen, NVIDIA-BofA, US-Payrolls, SanDisk Mizuho und Micron-Q3.

## 2026-06-01 - Kioxia Aufnahmefrage

### Anlass

Nutzer fragte, ob Kioxia mit aufgenommen werden sollte. Das wurde als Depot-/Watchlistfrage behandelt: Repository-Rundgang, aktuelle Kurse, Kioxia-IR-Daten, Watchlists, Portfolio-Risiko und SanDisk-Readthrough wurden geprueft.

### Fakten

- Kioxia notierte am 2026-06-01 um 14:22 JST laut StockAnalysis bei JPY 72,020, +9.37%, nahe dem Tages-/52W-Hoch von JPY 73,000; Market Cap ca. JPY 35.96T, PE 65.25, Forward PE 7.70.
- Kioxias FY2025-Financial-Results vom 2026-05-15 melden FY revenue JPY 2,337.6 Mrd., Non-GAAP operating profit JPY 876.2 Mrd., operating profit JPY 870.4 Mrd. und profit attributable to owners of parent JPY 554.5 Mrd.
- Q4 FY2025 war sehr stark: revenue JPY 1,002.9 Mrd., SSD & Storage JPY 600.3 Mrd., operating profit JPY 596.8 Mrd.; Kioxia nennt deutlich hoehere ASPs als Haupttreiber, teilweise gegen niedrigere Bit Shipments.
- Q1-FY2027-Ausblick: revenue JPY 1,750.0 Mrd., Non-GAAP operating profit JPY 1,300.0 Mrd. und profit attributable to owners of parent JPY 869.0 Mrd.; Kioxia verweist auf weiter starke Datacenter-Nachfrage.
- Kioxia Investor Day ist laut IR Calendar fuer 2026-06-02 JST angesetzt; FY-Bericht nennt 2026-06-24 als geplantes Datum fuer die Securities-Report-Einreichung.

### Einordnung

Kioxia ist fachlich stark genug, um aus dem Hintergrund in die aktive Watchlist und in einen Deep-Dive zu kommen. Es ist der sauberste Japan-Hebel auf NAND/Enterprise-SSD und ein direkter Falsifikationswert fuer SanDisk. Fuer eine Depotaufnahme ist die Lage aber nicht sauber genug: Kioxia wuerde SanDisk weitgehend duplizieren, nach dem Tagesmove ist das Timing angespannt, und Broker-/ADR-Zugang, FCF, Capex, JV-Oekonomie, JPY-Risiko und relativer SanDisk-Vergleich sind noch offene Datenluecken.

### Entscheidung / Arbeitsthese

Kioxia aufnehmen: ja, aber als aktive Watchlist/Deep-Dive, nicht als sofortige Depotposition. Eine spaetere Aufnahme sollte eher als Ersatz oder Teilersatz fuer SanDisk geprueft werden, falls Kioxia nach Investor Day und Securities Report bei Bewertung, FCF, Margenqualitaet, Liquiditaet und Risiko besser abschneidet.

### Risiken

NAND bleibt zyklisch; Forward-KGV kann am Zyklushoch optisch billig wirken. Eine Add-on-Position neben SanDisk wuerde vor allem gleiche NAND-Beta, Japan-/JPY- und Momentum-Risiko erhoehen. Gegenargument zur defensiven Haltung: Wenn Investor Day und Securities Report die Q1-Guidance mit FCF, Capex-Disziplin und nachhaltigen Enterprise-SSD-Margen unterlegen, koennte ein schnellerer SanDisk/Kioxia-Rotationstest sinnvoll werden.

## 2026-06-01 - Wochenueberblick 08:16 CEST Refresh

### Anlass

Automation "KI Aktien Wochenueberblick" wurde am selben Wochenstart erneut ausgefuehrt. Ziel war, den bestehenden Wochenbericht fuer 2026-06-01 bis 2026-06-07 auf frischere Kurse, Nachrichten, Events und SQLite-Snapshots zu heben, ohne alte Cache-Daten als neue Fakten zu verkaufen.

### Fakten

- Repository-Rundgang erneut ausgefuehrt: Automation-Memory, Datei-Inventar, Kernkontext, Watchlists, Monitoring, Makro, Kurse, News, Events, Unternehmensakten, Report, SQLite-Nutzung und Arbeitsspeicher geprueft.
- Frische delayed/intraday-Asienkurse: SK Hynix KRW 2,369,000 (+1.54%, 14:47 KST), Samsung KRW 349,250 (+10.17%, 14:53 KST) und Kioxia JPY 72,020 (+9.37%, 14:22 JST). US-Kurse bleiben vor US-Handelsstart Schlusskurse vom 2026-05-29.
- Keine neuen harten Termine gegenueber dem 06:12-CEST-Eventcache. Heute, 2026-06-01, bleiben ISM Manufacturing und NVIDIA COMPUTEX/GTC Taipei die relevanten Tagesereignisse; im 5-Tage-Fenster folgen JOLTS, Euro-HICP, Dell/WDC/STX-Konferenzen, ISM Services, Beige Book, Broadcom-Q2, NVIDIA-BofA, Claims/Productivity, Payrolls und Euro-GDP.
- Makroquellen lieferten keinen neueren offiziellen Datenpunkt: U.S. Treasury bleibt per 2026-05-29 bei US 10Y 4.45%, US 2Y 3.98%, 10Y Real Yield 2.07%; FRED bleibt bei HY OAS 2.72% per 2026-05-28, NFCI -0.510 per 2026-05-22 und VIXCLS 15.74 per 2026-05-28.

### Einordnung

Keine neue These-Aenderung gegenueber dem 06:34-CEST-Kontext-Radar. Die Boom-Rahmenbedingungen bleiben Gruen/Gelb: starkes Asien-Momentum, NVIDIA-DSX-/Vera-Rubin-Readthrough und Dell-Memory-Constraint bestaetigen das Umfeld; harte Speichervertragspreise, Margen, EPS-Revisionen oder konkrete Kundenvolumina fehlen weiter. Samsung und Kioxia erhoehen Watch- und Crowding-Risiko, aber noch keine bessere Alternative zum aktiven Depot.

### Entscheidung / Arbeitsthese

Keine sichere Kauf-/Verkaufsentscheidung. Aktives Depot bleibt SK Hynix, Micron und SanDisk; Broadcom-Q2 am 2026-06-03, Dell/WDC/STX-Konferenzen am 2026-06-02/03, Payrolls am 2026-06-05, SanDisk Mizuho am 2026-06-09 und Micron-Q3 am 2026-06-24 bleiben die naechsten harten Pruefpunkte.

### Datenebene

Markdown-Caches, Watchlists, Unternehmensakten, Wochenbericht, current_snapshot, Monitoring-/Makrodateien und SQLite-Datenebene wurden fortgeschrieben. `PRAGMA integrity_check` ergab `ok`.

### Risiken

Crowding nahe Hochs, hohe Realzinsen, Exportkontroll-Watch, China-PMI 50.0, Energie-/Hormuzrisiko und die fehlende direkte Margen-/EPS-Bestaetigung bei SK Hynix, Micron und SanDisk bleiben die wichtigsten Gegenargumente.

## 2026-06-01 - Kontext-Radar mit NVIDIA-/Korea-/Kioxia-Signalen

### Anlass

Automation "KI Aktien Analyse" fragte "Gibt es Neuigkeiten?" und verlangte Repository-Rundgang, Covered-Symbol-Refresh, Watchlist-Check, frische Kurs-/News-/Eventdaten, SQLite-Snapshots und Aktualisierung der relevanten Markdown-Dateien.

### Fakten

- Asien-Kurse aktualisiert: SK Hynix notierte am 2026-06-01 bei KRW 2,370,000 (+1.59%), Samsung bei KRW 347,500 (+9.62%) und Kioxia bei JPY 72,770 (+10.51%), jeweils nahe Hochs. Reuters-/StockAnalysis-Newsfeed nennt erwartete Treffen zwischen NVIDIA-CEO Jensen Huang und koreanischen Executives als zusaetzlichen Korea-AI-Readthrough. US- und Europa-Kurse bleiben vor Handelsstart Schlusskurse vom 2026-05-29.
- NVIDIA offizieller GTC-Taipei/COMPUTEX-Live-Feed nennt AI Factories, DSX-Blueprints und DSX MaxLPS; fuer MaxLPS nennt NVIDIA bis zu 40% mehr GPUs im gleichen Power-Budget. NVIDIA meldet zudem Vera Rubin in voller Produktion und eine Supply Chain, die doppelt so gross wie Grace Blackwell sei.
- Makro bleibt beim letzten offiziellen Cache: US 10Y 4.45%, 2Y 3.98%, 10Y Real Yield 2.07% per 2026-05-29; HY OAS 2.72% per 2026-05-28, NFCI -0.510 per 2026-05-22, VIXCLS 15.74 per 2026-05-28.
- Heute und naechste fuenf Kalendertage: ISM Manufacturing und NVIDIA/COMPUTEX heute; danach Eurozone-HICP, JOLTS, Dell/WDC/STX-Konferenzen, ISM Services, Beige Book, Broadcom-Q2, Claims/Productivity, NVIDIA-BofA, Payrolls und Eurozone-GDP.

### Einordnung

Boom-Rahmenbedingungen bleiben Gruen/Gelb und verbessern sich selektiv auf Unternehmens-/Infrastrukturseite. Das neue NVIDIA-DSX-/Vera-Rubin-Signal stuetzt AI-Factory-Dichte und damit indirekt Memory, Networking, Power/Cooling und Storage. Samsung und Kioxia erhoehen die Watchlist-Prioritaet, aber auch das Wettbewerbs- und Crowding-Risiko. Gleichzeitig ist das kein direkter Beleg fuer Speicherpreise, Margen oder EPS-Revisionen. Makro ist neutral bis gemischt, weil Kreditstress fehlt, aber Realzinsen hoch bleiben und China-PMI/Energiegeopolitik Gegenwind liefern.

### Entscheidung / Arbeitsthese

Keine sichere Kauf-/Verkaufsentscheidung. Aktives Depot bleibt SK Hynix, Micron, SanDisk; bei zwei Werten bleibt die dokumentierte Arbeitsthese SK Hynix + Micron. Broadcom-Q2 am 2026-06-03 kann Opportunity Cost sichtbar machen, ist aber noch nicht bewiesen. HDD-/Nearline bleibt unveraendert leicht positiv ohne Reaktivierung.

### Datenebene

Markdown-Caches, Unternehmensakten, Watchlists, Makro-/Monitoringdateien und SQLite-Datenebene wurden fortgeschrieben. `PRAGMA integrity_check` ergab `ok`; Gesamtstand nach dem Lauf: 92 Quote-Snapshots, 18 Fundamental-Snapshots, 17 News-Items, 35 Event-Eintraege, 21 Makro-Snapshots, 9 Branchensignale, 34 Signal-Snapshots, 4 Thesis-Events und 5 Run-Log-Eintraege.

### Risiken

Crowding nahe Hochs, hohe Realzinsen, ein moeglicher Payrolls-/ISM-Zinsschock, Broadcom-/NVIDIA-Erwartungsrisiko und fehlende direkte Margen-/EPS-Bestaetigung bei SK Hynix, Micron und SanDisk bleiben die wichtigsten Gegenargumente.

## 2026-05-31 - Kontext-Radar mit Dell-Memory-Constraint

### Anlass

Automation "KI Aktien Analyse" fragte "Gibt es Neuigkeiten?" und verlangte Repository-Rundgang, Kurs-/News-/Eventrefresh, Watchlist-Check, SQLite-Snapshots und Aktualisierung der relevanten Markdown-Dateien.

### Fakten

- Wegen Wochenende bleiben Aktienkurse Schlusskurse vom 2026-05-29: SK Hynix KRW 2,333,000 (+1.92%), Micron USD 971.00 (+5.14%), SanDisk USD 1,694.98 (+3.25%), STX USD 879.80 (-0.10%), WDC USD 531.21 (+0.01%), Broadcom USD 446.77 (+4.73%) und Dell USD 420.91 (+32.76%).
- Dell Q1-FY2027-Transcript nennt AI backlog von USD 51.3 Mrd., eine Pipeline mehrfach groesser als den Backlog und Memory als primaere Komponentengrenze; DRAM, NAND, CPUs und spaeter Hard Drives werden als Engpassfelder genannt.
- Makro: U.S. Treasury per 2026-05-29 US 10Y 4.45%, US 2Y 3.98%, 10Y Real Yield 2.07%; FRED HY OAS 2.72% per 2026-05-28, NFCI -0.510 per 2026-05-22 und VIXCLS 15.74 per 2026-05-28.
- Heute, 2026-05-31, gibt es keinen harten Unternehmens-/Depotwert-Termin; China-PMI Mai wurde mit 50.0 veroeffentlicht.

### Einordnung

Boom-Rahmenbedingungen bleiben Gruen/Gelb und verbessern sich selektiv. Der neue Punkt ist nicht ein neuer Kurs, sondern ein harter Supply-Chain-Readthrough: Dell bestaetigt starke AI-Server-Nachfrage und benennt Memory/DRAM/NAND als Engpass. Das stuetzt SK Hynix, Micron und SanDisk, ohne bereits Speicherpreise, Margen oder EPS-Revisionen dieser Depotwerte zu bestaetigen. HDD-/Nearline ist leicht positiv, aber STX/WDC bleiben Beobachtung.

### Entscheidung / Arbeitsthese

Keine sichere Kauf-/Verkaufsentscheidung. Aktive Depotthese bleibt SK Hynix, Micron, SanDisk; SanDisk bleibt die volatilste Beta-Position. Broadcom-Q2 am 2026-06-03, NVIDIA/COMPUTEX-GTC ab 2026-06-01, Dell/WDC/STX-Konferenzen am 2026-06-02/03 und Micron-Q3 am 2026-06-24 sind die naechsten Pruefpunkte.

### Datenebene

Datenbank `05_data/market_monitor.sqlite` fortgeschrieben: aktueller Gesamtstand nach diesem Lauf 48 Quote-Snapshots, 13 Fundamental-Snapshots, 11 News-Items, 32 Event-Eintraege, 14 Makro-Snapshots, 5 Branchensignale, 19 Signal-Snapshots, 1 Thesis-Event und 3 Run-Log-Eintraege. Davon gehoeren zum Kontext-Radar 17:43 CEST 34 Quote-Snapshots, 13 Fundamental-Snapshots, 7 News-Items, 17 Event-Eintraege, 7 Makro-Snapshots, 3 Branchensignale, 12 Signal-Snapshots, 1 Thesis-Event und 1 Run-Log.

### Risiken

Crowding nahe Hochs, hohe Realrenditen, China-PMI 50.0, Energie-/Hormuzrisiko und die noch fehlende direkte Bestaetigung von Speichervertragspreisen, Margen und EPS-Revisionen bleiben die wichtigsten Gegenargumente.

## 2026-05-31 - Wochenueberblick 2026-06-01 bis 2026-06-07

### Anlass

Automation "KI Aktien Wochenueberblick" fragte, was in der kommenden Woche ansteht, welche Zins-/Weltwirtschaftsentscheidungen wichtig sind und was das aktive Speicherdepot positiv oder negativ bewegen kann.

### Fakten

- Repository-Rundgang ausgefuehrt: Datei-Inventar, Kernkontext, Portfolio Policy, Watchlists, Monitoring, Makro, Kurs-/News-/Event-Caches, SQLite-Nutzung, Unternehmensakten und Arbeitsspeicher geprueft.
- Wegen Wochenende bleiben Aktienkurse beim 2026-05-29-Schluss: SK Hynix, Micron und SanDisk sehr nahe Hochs; Broadcom, Dell, Oracle und Microsoft bestaetigten am 2026-05-29 starkes AI-Infrastruktur-Momentum.
- China Manufacturing PMI fiel fuer Mai 2026 auf 50.0; neue Auftraege lagen bei 49.9. Das ist ein weicheres Weltwirtschaftssignal, aber kein direkter Speicherthese-Bruch.
- U.S. Treasury blieb per 2026-05-29 bei 10Y 4.45%, 2Y 3.98%, 10Y Real Yield 2.07%; FRED zeigte HY OAS 2.72% per 2026-05-28 und NFCI -0.510 per 2026-05-22.
- In der Woche 2026-06-01 bis 2026-06-07 gibt es keine Fed- oder ECB-Zinsentscheidung. Wichtige Zinsentscheidungen folgen danach: BoC 2026-06-10, ECB 2026-06-11, Fed 2026-06-16/17, BoJ 2026-06-15/16, BoE 2026-06-18 und RBA 2026-06-15/16.
- Wichtige Wochenkatalysatoren: NVIDIA COMPUTEX/GTC ab 2026-06-01, WDC/Dell/STX bei BofA am 2026-06-02, Broadcom-Q2 am 2026-06-03, WDC Evercore am 2026-06-03, NVIDIA BofA am 2026-06-04, US-ISM/JOLTS/Beige-Book/Payrolls und Eurozonen-HICP/GDP.

### Einordnung

Boom-Rahmenbedingungen bleiben Gruen/Gelb. Unternehmensseitig verbessern Dell/NVIDIA/Broadcom-Kontext und Memory-/AI-Infrastrukturmomentum die These selektiv. Makroseitig ist das Bild gemischt: Kreditstress fehlt, aber Realzinsen sind hoch, China-PMI ist weich und das Hormuz-/Energierisiko kann Inflations- und Zinserwartungen belasten.

### Entscheidung / Arbeitsthese

Keine neue Kauf-/Verkaufsentscheidung. Das aktive Depot bleibt SK Hynix, Micron und SanDisk; bei einer theoretischen Zwei-Werte-Konzentration bleibt die dokumentierte Arbeitsthese SK Hynix + Micron. In der kommenden Woche besonders auf Broadcom-Q2, NVIDIA-Roadmap, Dell-/WDC-/STX-Konferenzaussagen und US-Payrolls achten.

### Risiken

Die groessten Wochenrisiken sind eine hawkishere Zinsneubewertung durch starke Lohn-/Inflationssignale, ein Growth-Multiple-Ruecksetzer bei weiter hohen Realzinsen, Broadcom-/NVIDIA-Enttaeuschung gegen hohe Erwartungen, ein negativer Energiepreisschock durch Hormuz und Gewinnmitnahmen nach sehr starker Memory-/AI-Infrastruktur-Rallye.

## 2026-05-30 - SQLite-Datenebene umgesetzt

### Anlass

Nutzer bat darum, die zuvor empfohlene Hybrid-Architektur umzusetzen und so zu dokumentieren, dass Agenten die Datenbank kuenftig automatisch nutzen.

### Aenderung

- Neue lokale Datenbank `05_data/market_monitor.sqlite` angelegt.
- Neues technisches Schema `05_data/market_monitor_schema.sql` angelegt.
- Initialen Symbol-Seed `05_data/market_monitor_seed.sql` aus `05_data/covered_symbols.md` angelegt und in die Datenbank geladen.
- Neue Nutzungsdoku `05_data/market_monitor_usage.md` angelegt.
- `AGENTS.md`, `START_HERE.md`, `05_data/data_architecture_recommendation.md`, `05_data/market_monitor_schema.md`, `03_state/task_plan.md`, `03_state/open_questions.md` und `03_state/assumptions_and_decisions.md` aktualisiert.

### Ergebnis

Die Datenbank enthaelt initial 34 Symbole: 3 aktive Depotwerte, 2 HDD-Watchlist-Werte, 5 primaere Follow-on-Werte, 10 erweiterte Watchlist-Werte und 14 Hintergrundwerte. `PRAGMA integrity_check;` ergab `ok`.

### Arbeitsregel

Kuenftige Marktanalysen sollen wiederholbare Daten in SQLite speichern: Kurse in `quote_snapshots`, Fundamentaldaten in `fundamentals_snapshots`, News in `news_items`, Signale in `signal_snapshots`, Events in `event_calendar`, Makro in `macro_snapshots`, Branchensignale in `industry_signal_snapshots`. Markdown bleibt fuer These, Einordnung, Entscheidungen und Reports.

### Testnachtrag 2026-05-30

Technischer Test zeigte: SQLite setzt `PRAGMA foreign_keys` pro Verbindung und meldet in neuen Verbindungen standardmaessig `0`. Daher wurden `AGENTS.md`, `START_HERE.md` und `05_data/market_monitor_usage.md` geschaerft: Jede schreibende SQLite-Nutzung muss explizit `PRAGMA foreign_keys=ON;` setzen und in einer Transaktion laufen.

### Funktionstest 2026-05-30

- Reale Datenbank `05_data/market_monitor.sqlite`: `PRAGMA integrity_check;` ergab `ok`.
- Frischer Neuaufbau in `/private/tmp/market_monitor_schema_test.sqlite` mit `market_monitor_schema.sql` und `market_monitor_seed.sql` war erfolgreich.
- Testdatenbank enthaelt nach Seed 34 Symbole und 1 Run-Log; erneuter Seed-Lauf bleibt idempotent bei 34 Symbolen und 1 Run-Log.
- Views `latest_quote_snapshots`, `unprocessed_news`, `alert_candidates`, `events_next_5_days`, `latest_fundamentals_snapshots`, `latest_signal_snapshots` und `news_retention_review` sind vorhanden und abfragbar.
- Schreib-/Rollback-Test mit `PRAGMA foreign_keys=ON;` funktionierte: gueltiger MU-Quote- und Signal-Snapshot erschien in den Views, nach `ROLLBACK` waren die Testtabellen wieder leer.
- Fremdschluessel-Test funktionierte: Insert mit unbekanntem Symbol `NO_SUCH_SYMBOL` scheiterte erwartungsgemaess mit `FOREIGN KEY constraint failed`.
- Echte Datenbank enthaelt aktuell nur Symbol- und Run-Log-Initialdaten; Quote-, News-, Event- und Signal-Snapshots beginnen bewusst erst mit dem naechsten Marktrefresh.

## 2026-05-30 - Dell als Depotaufnahme oder Beobachtung

### Anlass

Nutzer fragte, ob Dell Technologies nach dem Q1-FY2027-AI-Server-Signal ins Depot aufgenommen oder nur beobachtet werden soll.

### Fakten

- Repository-Rundgang fuer die Depot-/Watchlistfrage geprueft: Portfolio Policy, Deep-Dive-Framework, Portfolio-Risiko-Framework, Follow-on-Watchlist, Latest Quotes/News, Upcoming Events, Evaluation Log, Task Plan, Open Questions und Assumptions/Decisions.
- Dell Technologies meldete per BusinessWire/Unternehmensmeldung fuer Q1 FY2027: Umsatz USD 43.8 Mrd. (+88% YoY), ISG-Umsatz USD 29.0 Mrd. (+181% YoY), AI-optimized server revenue USD 16.1 Mrd. (+757% YoY), Storage-Umsatz USD 4.3 Mrd. (+8% YoY), AI orders USD 24.4 Mrd., Q1-CFO USD 4.1 Mrd. und FY2027-Revenue-Guidance von USD 165.0-169.0 Mrd.
- StockAnalysis zeigte DELL am 2026-05-29 Schlusskurs USD 420.91, +32.76%, Market Cap ca. USD 273.41 Mrd., PE 33.65, Forward PE 23.16 und 52W-Spanne USD 106.38-429.15.

### Einordnung

Dell ist ein starkes hartes Nachfrage-Readthrough fuer AI-Server, Memory, Storage, Networking und Power/Cooling. Fuer das bestehende Depot waere eine Aufnahme aber keine echte Risikosenkung, sondern eine zusaetzliche AI-Capex-/Momentum-Wette. Gegenueber SK Hynix, Micron und SanDisk ist Dell weniger direkt am knappen Speicherengpass und staerker an Servermargen, Komponentenverfuegbarkeit, Working Capital und Kundenmix gebunden.

### Entscheidung / Arbeitsthese

Dell aktiv beobachten, aber vorerst nicht ins Depot aufnehmen. Aufnahme erst pruefen, wenn nach der BofA-Konferenz am 2026-06-02 und weiteren Daten klarer wird, dass AI-Server-Wachstum auch nachhaltig auf Marge, Free Cash Flow und EPS-Revisionen durchschlaegt. Dell bleibt im Covered-Symbol-Universum und in der Follow-on-Watchlist.

### Risiken / Falsifikation

Diese Beobachten-statt-kaufen-These waere zu defensiv, wenn Dell in den naechsten Datenpunkten hohe AI-Server-Margen, steigende Storage-Attach-Raten, werthaltigen Backlog, starken FCF und weitere EPS-Anhebungen zeigt, waehrend die Bewertung trotz Kursanstieg plausibel bleibt. Sie waere zu optimistisch, wenn Q1 vor allem volumengetrieben war, Komponentenknappheit oder Kundenkonzentration zunimmt, FCF unter Working Capital leidet oder die Aktie weiter ohne Schaetzungsanhebungen re-rated.

## 2026-05-30 - Kontext-Radar 08:08 mit Dell-Korrektur und NVIDIA-GTC-Watch

### Anlass

Automation "KI Aktien Analyse" fragte erneut "Gibt es Neuigkeiten?" und verlangte den vollstaendigen Repository-Rundgang mit Kurs-, News-, Watchlist-, Makro- und Eventrefresh.

### Fakten

- Repository-Rundgang erneut ausgefuehrt: Automation-Memory, Datei-Inventar, `START_HERE.md`, `AGENTS.md`, Kernkontext, Watchlists, Monitoring-/Makrodateien, Kurs-/News-Caches, Events, Unternehmensakten und Arbeitsspeicher gelesen.
- StockAnalysis-Kursseiten wurden fuer die wichtigsten Depot- und Watchlist-Werte gegengeprueft; wegen Wochenende bleiben die relevanten Kurse Schlusskurse vom 2026-05-29. Micron USD 971.00, +5.14%; SanDisk USD 1,694.98, +3.25%; SK Hynix KRW 2,333,000, +1.92%; Dell USD 420.91, +32.76%; STX USD 879.80, -0.10%; WDC USD 531.21, +0.01%.
- Dell BusinessWire/Primaermeldung korrigiert die harten Zahlen: Q1-FY2027 Gesamtumsatz USD 43.842 Mrd. (+88% YoY), ISG-Umsatz USD 29.009 Mrd. (+181% YoY), AI-optimized server revenue USD 16.132 Mrd. (+757% YoY), Storage-Umsatz USD 4.334 Mrd. (+8% YoY), AI orders USD 24.4 Mrd. und FY2027-AI-Server-Erwartung ca. USD 60 Mrd.
- NVIDIAs offizieller GTC-Taipei/COMPUTEX-Blog bestaetigt die Keynote am 2026-06-01 und nennt Vera Rubin/Rubin-NVL72, Spectrum-X Ethernet Photonics, BlueField-4, rund 2 Mio. Teile/150 Taiwan-Ecosystem-Partner sowie einen H2-2026-Ueberraschungsprodukt-Hinweis.
- U.S. Treasury zeigte per 2026-05-29 US 10Y 4.45%, 2Y 3.98% und 10Y Real Yield 2.07%. VIX wurde nur ueber Finanzdaten-Sekundaerquellen bei ca. 15.3 fuer 2026-05-29 verifiziert; HY OAS, NFCI, Fear & Greed, AAII und Margin Debt bleiben teils Datenluecke.

### Einordnung

Boom-Rahmenbedingungen bleiben Gruen/Gelb und selektiv besser. Dell liefert den harten Nachfragebeleg; NVIDIA liefert zusaetzlichen offiziellen Roadmap-Kontext fuer HBM/DRAM, Networking, Optics und Storage. Das ist positiv fuer die These, aber kein neuer direkter Kauf-/Verkaufstrigger, weil Speicherpreise, Margen und EPS-Revisionen der Depotwerte dadurch noch nicht automatisch bestaetigt sind.

### Entscheidung / Arbeitsthese

Keine sichere Depotentscheidung. Aktive Kernwerte bleiben SK Hynix, Micron und SanDisk; bei einer Zwei-Werte-Konzentration bleibt die dokumentierte Arbeitsthese SK Hynix + Micron. HDD-/Nearline bleibt leicht positiv ohne Reaktivierung. Broadcom-Q2 am 2026-06-03 und Micron-Q3 am 2026-06-24 bleiben die naechsten harten Pruefpunkte.

### Risiken

Die Korrektur verbessert die Datenqualitaet, aendert aber nicht die zentrale Warnung: viele AI-Infrastruktur- und Speicherwerte stehen nahe Hochs, hohe Realzinsen bleiben Bewertungsgegenwind, und NVIDIAs Roadmap-Watch kann die Erwartungshuerde vor der Keynote weiter erhoehen.

## 2026-05-30 - Kontext-Radar mit Dell-AI-Server-Signal

### Anlass

Automation "KI Aktien Analyse" fragte "Gibt es Neuigkeiten?" und verlangte den vollstaendigen Repository-Rundgang inklusive Kurs-, News-, Watchlist-, Makro- und Eventrefresh.

### Fakten

- Repository-Rundgang ausgefuehrt: Datei-Inventar, `START_HERE.md`, `AGENTS.md`, Kernkontext, Watchlists, Monitoring-/Makrodateien, Kurs-/News-Caches, Events und Unternehmensakten gelesen.
- StockAnalysis zeigte US-Schluss 2026-05-29: Micron USD 971.00, +5.14%; SanDisk USD 1,694.98, +3.25%; Broadcom USD 446.77, +4.73%; Oracle USD 225.78, +10.84%; Microsoft USD 450.24, +5.45%; Dell USD 420.91, +32.76%. SK Hynix und Samsung schlossen am 2026-05-29 in Korea weiter +1.92% bzw. +5.84%.
- Dell meldete fuer Q1 FY2027 laut spaeterer Primaerquellen-Korrektur Gesamtumsatz von USD 43.842 Mrd. (+88% YoY), ISG-Umsatz USD 29.009 Mrd. (+181% YoY), AI-optimized server revenue USD 16.132 Mrd. (+757% YoY), Storage-Umsatz USD 4.334 Mrd. (+8% YoY), AI orders USD 24.4 Mrd. und hob die FY2027-Erwartung fuer AI-Server-Umsatz auf ca. USD 60 Mrd. an.
- U.S. Treasury zeigte per 2026-05-29: US 10Y 4.45%, US 2Y 3.98% und 10Y Real Yield 2.07%.
- Heute, 2026-05-30, gibt es keinen bestaetigten harten Unternehmens-/Branchenkatalysator im Event-Cache. Bis 2026-06-04 folgen NVIDIA/COMPUTEX-GTC, Dell/WDC/STX-Konferenzen, Broadcom-Q2 und NVIDIA-BofA.

### Einordnung

Boom-Rahmenbedingungen verbessern sich selektiv und bleiben Gruen/Gelb. Dell ist ein hartes Nachfrage-/Capex-Readthrough fuer AI-Server, Memory, Storage, Networking und Datacenter-Infrastruktur. Depotwerte bleiben qualitativ intakt, aber ueberhitzt: SK Hynix bleibt direktester HBM-Hebel, Micron der zentrale US-HBM/DRAM-Hebel, SanDisk starke aber volatilste NAND-/Enterprise-SSD-Beta-Position.

### Entscheidung / Arbeitsthese

Keine sichere Kauf-/Verkaufsentscheidung. Dell wird als Hintergrund-/Nachfrageproxy in `05_data/covered_symbols.md` aufgenommen. HDD-/Nearline bleibt leicht positiv, aber ohne Reaktivierung. Broadcom-Q2 am 2026-06-03 und Micron-Q3 am 2026-06-24 bleiben die wichtigsten harten Pruefpunkte.

### Risiken

Dell bestaetigt Nachfrage, aber nicht automatisch Speicherpreise, Margen oder EPS-Revisionen bei SK Hynix, Micron oder SanDisk. Viele AI-Infrastrukturwerte handeln nahe Hochs; hohe Realzinsen bleiben Bewertungsgegenwind. Wenn Broadcom-Q2 oder Micron-Q3 die Erwartungen nicht bestaetigen, kann die aktuelle Rallye schnell korrigieren.

## 2026-05-29 - Repo-Methodik fuer tiefere Analysen ausgebaut

### Anlass

Nutzer fragte, wie das Repository schlauer und fuer umfangreichere, tiefere Aktienanalysen besser gemacht werden kann, und bat anschliessend darum, den Plan umzusetzen.

### Aenderung

Neue Dateien:

- `01_knowledge/deep_dive_framework.md`
- `01_knowledge/portfolio_risk_framework.md`
- `01_knowledge/earnings_review_template.md`
- `02_context/portfolio_policy.md`
- `05_data/peer_benchmarks.md`
- `05_data/market_monitor_schema.md`

Aktualisiert wurden `AGENTS.md`, `START_HERE.md`, `01_knowledge/report_template.md`, `05_data/data_schema.md`, `05_data/data_architecture_recommendation.md` und die Unternehmensakten fuer SK Hynix, Micron, SanDisk, Seagate und Western Digital.

### Methodische Wirkung

Kuenftige umfangreiche Analysen muessen jetzt zusaetzlich Minimum Data Pack, Falsifikationspruefung, Peer-/Opportunity-Cost-Vergleich, Portfolio-Risiko und bei Earnings einen Expected-vs-Actual-Abgleich leisten. Analysten-Kursziele werden ausdruecklich als Meinung behandelt, sofern keine EPS-, Umsatz-, Margen- oder FCF-Revisionen erkennbar sind.

### Entscheidung

Keine neue Markt- oder Depotentscheidung. Dies war ein Repository- und Analyseprozess-Upgrade.

## 2026-05-26 - Initiale Wissensbasis

Quelle: `praxis.pdf` und `gespraech.pdf`.

### Uebernommene Hauptthese

Das aktuelle Depot ist eine fokussierte KI-Speicherwette entlang HBM/DRAM/LPDDR, NAND/Enterprise-SSD und HDD/Nearline Storage.

### Wichtigste Staerken

- SK Hynix und Micron decken den kritischsten Speicherbereich nahe an KI-Beschleunigern ab.
- SanDisk liefert Flash-/SSD-Pure-Play mit hoher operativer Hebelwirkung.
- Seagate liefert guenstige Massenspeicherung in einem engen Oligopol.
- Das Depot bildet die Datenpipeline der KI besser ab als ein reines GPU-Investment.

### Wichtigste Risiken

- Sehr hohe Sektorkorrelation.
- Speicher bleibt zyklisch.
- SanDisk kann trotz starker Story ueberbewertet sein.
- Seagate ist vom HDD-Zyklus und HAMR-Ausfuehrung abhaengig.
- 2028 koennte Kapazitaetsausbau zur Normalisierung oder zum Zykluswechsel fuehren.

### Offene Pruefpunkte

- Aktuelle Kennzahlen und Quartalsdaten fehlen.
- Micron-PEG aus Gespraech ist widerspruechlich.
- SanDisk-Ticker/Struktur nach Spin-off muss sauber geprueft werden.
- SK Hynix-Handelsplatz und Waehung muessen im Analysekontext konsistent sein.

## 2026-05-26 - Follow-on-Watchlist ergaenzt

Neue Datei: `02_context/watchlist_follow_on_ai_waves.md`.

### Zweck

Nachfolgewerte der KI-Infrastrukturwellen beobachten, vor allem Arista, Broadcom, Marvell, Vertiv, Western Digital und Samsung Electronics.

### Agentenregel

`AGENTS.md` und `START_HERE.md` wurden so ergaenzt, dass diese Watchlist bei Depot- und Branchenfragen mitgeprueft werden soll. Bei starken Ausbruchssignalen soll der Agent im Fazit alarmieren und das Log aktualisieren.

## 2026-05-26 - Repository-Rundgang ergaenzt

### Anlass

Nutzer wollte sicherstellen, dass alle Markdown-Dateien in `AGENTS.md` oder `START_HERE.md` erfasst sind und Agenten sie bei Folgeanfragen wieder pruefen und aktualisieren.

### Aenderung

`AGENTS.md` enthaelt nun einen Repository-Rundgang mit Datei-Inventar und Pflichtkontext. `START_HERE.md` enthaelt ein vollstaendiges Repository-Inventar mit Links und eine Aktualisierungsregel fuer Depotthese, Alerts, offene Fragen und Reports.

## 2026-05-26 - Kurs- und Nachrichten-Refresh als Pflicht ergaenzt

### Anlass

Nutzer wollte, dass bei jeder KI-Anfrage zu erwaehnten Aktien aktuelle Kurse und neueste Nachrichten geholt, gespeichert und alte Nachrichten bereinigt werden.

### Aenderung

Neue Dateien:

- `05_data/covered_symbols.md`
- `05_data/latest_quotes.md`
- `05_data/latest_news.md`

`AGENTS.md` und `START_HERE.md` schreiben nun vor, dass vor sachlichen Aktien-, Depot-, Branchen-, Watchlist- oder Zukunftsantworten aktuelle Kurse und relevante frische Nachrichten geholt und lokal gespeichert werden. Alte Nachrichten sollen nach 30 Tagen geloescht oder in `03_state/evaluation_log.md` verdichtet werden, falls sie weiter wichtig bleiben.

## 2026-05-26 - Refresh fuer Speicherboom-Szenario

### Anlass

Nutzer fragte, welche Bedingungen eintreten muessen, damit der KI-/Speicherboom weitergeht, und verwies auf Software-3.0/LLM-OS, Tesla/SpaceX-TeraFab und moegliche Speicherverknappung.

### Aktualisierte Daten

- `05_data/latest_quotes.md` mit Kursen fuer Depotwerte, primaere Follow-on-Werte, NVIDIA und Tesla aktualisiert.
- `05_data/latest_news.md` mit relevanten Nachrichten zu Micron, SK Hynix, Samsung, SanDisk, Seagate, NVIDIA-Memory-Content, TeraFab und Software 3.0 aktualisiert.
- `05_data/covered_symbols.md` um Tesla, SpaceX und xAI als Hintergrund-/Nachfragewerte ergaenzt.

### Vorlaeufige Einschaetzung

Die Fortsetzung des Booms braucht gleichzeitig steigende AI-Workloads, hohe Hyperscaler-Capex, mehr Speicherinhalt pro Rack, langsame Fab-Ausweitung und keine schnelle Normalisierung bei HBM/DRAM/NAND/HDD. Aktuelle Nachrichten stuetzen die Knappheit, aber die Kurse zeigen bereits starkes Momentum und hohes Rueckschlagsrisiko.

## 2026-05-26 - Best-Case-Rahmenbedingungen als Monitoring ergaenzt

Neue Datei: `02_context/best_case_conditions_ai_memory_boom.md`.

### Zweck

Die Bedingungen fuer eine Fortsetzung des KI-/Speicherbooms werden als laufende Ampel verfolgt. Jeder Agent soll bei sachlichen Aktien-, Depot-, Branchen-, Watchlist- oder Zukunftsanfragen pruefen, ob sich KI-Adoption, Hyperscaler-Capex, Speicherinhalt pro System, Angebotsknappheit, Preise/Margen und Infrastrukturengpaesse verbessern, verschlechtern oder unveraendert bleiben.

### Agentenregel

`AGENTS.md` und `START_HERE.md` wurden so ergaenzt, dass die Datei bei jeder relevanten Anfrage mitgelesen wird und im Fazit eine kurze Einschaetzung zur Richtung der Rahmenbedingungen erscheinen soll.

## 2026-05-27 - Micron-Anstieg nach UBS-Bericht verifiziert

### Anlass

Nutzer fragte, ob Micron am Vortag wegen eines UBS-Berichts extrem gestiegen sei.

### Ergebnis

Ja, der Tagesanstieg am 2026-05-26 wurde wesentlich durch UBS ausgeloest. Reuters/AP/StockAnalysis verweisen auf eine UBS-Zielanhebung von USD 535 auf USD 1,625 und eine Begruendung ueber AI-Memory-Nachfrage, enges Speicherangebot und laengerfristige Liefer-/Preisvereinbarungen. Micron schloss laut StockAnalysis bei USD 895.88, +19.29%, und lag nachboerslich bei USD 914.62.

### Einordnung

Bullish fuer die Re-Rating-These bei Micron und fuer die Speicherboom-Ampel. Gleichzeitig erhoeht ein Tagesmove dieser Groessenordnung das kurzfristige Rueckschlagsrisiko.

## 2026-05-27 - Relative Einordnung Micron vs. SK Hynix, SanDisk, Seagate

### Anlass

Nutzer fragte, ob Micron durch den UBS-Bericht die anderen drei Depotwerte abhaengt oder ob diese ebenfalls eine aehnliche Bewertung erhalten koennen, besonders Seagate.

### Ergebnis

Micron fuehrt kurzfristig das US-Re-Rating an, aber SK Hynix und SanDisk haben bereits klaren indirekten Readthrough bekommen. SK Hynix stieg am 2026-05-27 in Korea zweistellig und ist fundamental der direkteste HBM-Peer. SanDisk erhielt Momentum durch die breite AI-Storage-These und Analystenhochstufungen. Seagate lief ebenfalls mit, hat aber eine andere, langsamere These: Nearline-HDD, Kosten pro TB, HAMR/Mozaic und Cashflow statt HBM-artiger strategischer Knappheit.

### Vorlaeufiges Ranking fuer Re-Rating-Faehigkeit

1. SK Hynix: hoechste direkte HBM-Qualitaet, aber Korea-/Waehrungsabschlag.
2. Micron: staerkster US-Boersenhebel und aktueller UBS-Fokus.
3. SanDisk: hoher Beta-Hebel auf NAND/Enterprise-SSD, aber Bewertungsrisiko.
4. Seagate: guter Storage-/Cashflow-Hebel, aber am wenigsten wahrscheinlich fuer ein Micron-aehnliches Multiple-Re-Rating.

## 2026-05-27 - Bedingungen fuer Seagate-/Western-Digital-Re-Rating

### Anlass

Nutzer fragte, was passieren muesste, damit Seagate und Western Digital eine aehnliche Bewertung wie Micron erhalten.

### Ergebnis

Seagate und Western Digital brauchen fuer ein staerkeres Re-Rating klare Beweise, dass Nearline-HDDs ein mehrjaehriger AI-Infrastrukturengpass sind: ausverkaufte Kapazitaet, langfristige Hyperscaler-Vertraege, steigende ASPs, steigende Bruttomargen, steigende Free-Cash-Flow-Schaetzungen und keine schnelle Kapazitaetsnormalisierung. WDC wirkt fuer dieses Szenario etwas besser positioniert als reiner Peer-/Watchlist-Kandidat, weil aktuelle Berichte von ausverkaufter 2026-HDD-Kapazitaet und 2027/2028-Vereinbarungen sprechen. Seagate bleibt im Depot der direkte HDD-Hebel, aber ein HBM-artiges Multiple ist weniger wahrscheinlich als bei Micron/SK Hynix.

### Neue Datei

`02_context/companies/western_digital.md` wurde als Unternehmensakte angelegt.

## 2026-05-27 - Seagate-Verkauf und HDD-Watchlist

### Anlass

Nutzer teilte mit, dass Seagate verkauft werden soll, und bat darum, Seagate und Western Digital auf eine Beobachtungsliste zu setzen. Bei jeder KI-Anfrage soll geprueft werden, ob sich beim HDD-/Nearline-Thema etwas geaendert hat.

### Aenderung

Neue Datei: `02_context/watchlist_hdd_nearline_storage.md`.

Seagate ist in `02_context/current_portfolio.md` nicht mehr als unveraenderte Kernposition gefuehrt, sondern als "Verkauf angekuendigt; kuenftig Beobachtungsliste". Western Digital bleibt Watchlist-Wert. `AGENTS.md` und `START_HERE.md` wurden ergaenzt, damit die HDD-/Nearline-Watchlist bei relevanten Folgeanfragen mitgeprueft wird.

## 2026-05-27 - Quellenqualitaet als harte Recherche-Regel

### Anlass

Nutzer verlangte, dass bei Informationssuche nur hochwertige und glaubwuerdige Quellen genutzt werden und dies in den jeweiligen Dateien fuer jede kuenftige KI-Anfrage vermerkt wird.

### Aenderung

`01_knowledge/source_quality.md` wurde um eine harte Quellenregel erweitert. `AGENTS.md`, `START_HERE.md`, `05_data/latest_news.md`, `05_data/latest_quotes.md`, `05_data/data_schema.md` und `03_state/assumptions_and_decisions.md` wurden so angepasst, dass Primaerquellen, Boersen-/SEC-Meldungen, etablierte Nachrichtenagenturen, etablierte Finanzmedien, glaubwuerdige Branchenquellen und nachvollziehbare Finanzdatenanbieter bevorzugt werden. Schwache Quellen duerfen nur als Suchspur oder klar markierter Hinweis verwendet werden.

## 2026-05-27 - Branchen-Screen nach UBS-/Micron-aehnlichem Re-Rating

### Anlass

Nutzer fragte, wo in der Branche oder in zusammenhaengenden Branchen eine aehnliche Neubewertung wie bei Micron durch UBS entstehen koennte.

### Ergebnis

Die wahrscheinlichsten Re-Rating-Felder sind: HBM/DRAM-Aufholer wie Samsung, NAND/Enterprise-SSD wie SanDisk, Custom Silicon und AI Networking mit Broadcom/Marvell/Arista, Power/Cooling/Grid mit Vertiv/Eaton/GE Vernova/Constellation/Vistra, Optics/Fiber mit Corning sowie WFE/Advanced Packaging mit ASML/Applied/Lam/Amkor.

### Einordnung

Die staerkste "UBS-Moment"-Logik entsteht dort, wo der Markt von Zyklus/Komponente/Industrieprodukt auf strategischen Engpass mit mehrjaehriger Sichtbarkeit umstellt. Viele Kandidaten sind bereits hoch bewertet; deshalb muessen Re-Ratings kuenftig vor allem durch EPS-Revisionen, Backlog, langfristige Vertraege und Margen bestaetigt werden.

## 2026-05-27 - Monitoring-Signale und Datenarchitektur ergaenzt

### Anlass

Nutzer bat darum, bei jeder Anfrage alle Follow-Werte und alle eigenen Aktien zu pruefen, ob Rendite nach oben dreht oder sich das Umfeld positiv/negativ veraendert. Zusaetzlich fragte er, ob eine Datenbank statt Markdown sinnvoller waere.

### Aenderung

Neue Dateien:

- `05_data/monitoring_signals.md`
- `05_data/data_architecture_recommendation.md`

`AGENTS.md`, `START_HERE.md`, `05_data/data_schema.md` und `03_state/task_plan.md` wurden ergaenzt. Kuenftig sollen Depotwerte, HDD-/Nearline-Watchlist, primaere Follow-on-Watchlist und passende erweiterte Watchlistwerte auf Renditeumschwung, relative Staerke, Umfeldveraenderung und Alert-Status geprueft werden.

### Datenarchitektur

Empfehlung ist ein Hybrid: Markdown bleibt fuer Wissen, Thesen, Regeln und Entscheidungen; strukturierte Datenbank oder CSV ist sinnvoll fuer Kurs-/Kennzahlen-Zeitreihen, Renditeverlauf und Alert-Berechnung.

## 2026-05-28 - Spotmarkt-Monitoring fuer KI-/Chipmarktlage ergaenzt

### Anlass

Nutzer lieferte einen WSJ-Artikel zur Chip-Rallye und fragte, ob die dort erwaehnten Spot-Maerkte und weitere Quellen fuer kuenftige Markteinschaetzungen beobachtet werden sollen.

### Ergebnis

Spotmaerkte wurden als Fruehindikatoren in die bestehende Monitoring-Logik aufgenommen. Beobachtet werden sollen GPU-Compute-Spotpreise, DRAM-/DDR5-/Server-DIMM-Preise, NAND-/Enterprise-SSD-Preise, SOX/SMH-Momentum, Hyperscaler-Capex und private AI-Infrastruktur-Deals.

### Methodische Einordnung

Spotdaten duerfen Timing, Knappheit und Warnsignale anzeigen, aber keine Anlage- oder These-Aenderung allein ausloesen. Eine bullishe oder bearishe Einordnung braucht Bestaetigung durch Contract-Preise, Unternehmensmargen, Guidance, EPS-Revisionen, Lieferzeiten oder Hyperscaler-Capex. Bei Quellenkonflikten werden Primaerquellen hoeher gewichtet und offene Konflikte in `03_state/open_questions.md` notiert.

### Aenderung

Aktualisiert wurden `05_data/monitoring_signals.md`, `05_data/data_schema.md`, `02_context/best_case_conditions_ai_memory_boom.md` und `03_state/task_plan.md`.

## 2026-05-28 - Repo-Audit und Makro-/Sentiment-Overlay ergaenzt

### Anlass

Nutzer bat darum, alle Markdown-Dateien auf Verlinkung und Struktur zu pruefen und weitere Best-Practice-Signale fuer Aktienanalysen zu ergaenzen, insbesondere US-Zinsen und Fear & Greed.

### Audit-Ergebnis

Die Markdown-Struktur ist grundsaetzlich konsistent: vor der Ergaenzung 32 Markdown-Dateien, nach der neuen Makro-Datei 33 Markdown-Dateien; alle sind in `START_HERE.md` und `AGENTS.md` erwaehnt. Es wurden keine kaputten Markdown- oder CSV-Verweise gefunden. Die einzigen fehlenden lokalen Ziele sind absichtliche Referenzen auf die optionale kuenftige Datei `05_data/market_monitor.sqlite`.

### Aenderung

Neue Datei: `05_data/macro_market_signals.md`.

Ergaenzt wurden Pflichtindikatoren fuer US 2Y/10Y, Yield Curve, 10Y Real Yield, FedWatch, Chicago Fed NFCI, High-Yield-Spreads, VIX, USD, CNN Fear & Greed, AAII Sentiment und FINRA Margin Debt. Zinsen, Realzinsen, Finanzbedingungen und Kreditstress werden als fundamental relevant behandelt; Fear & Greed, AAII und Margin Debt nur als Timing-/Crowding-Signale.

### Betroffene Dateien

Aktualisiert wurden `AGENTS.md`, `START_HERE.md`, `01_knowledge/source_quality.md`, `01_knowledge/red_flags.md`, `01_knowledge/report_template.md`, `02_context/best_case_conditions_ai_memory_boom.md`, `05_data/monitoring_signals.md`, `05_data/data_schema.md` und `03_state/task_plan.md`.

## 2026-05-28 - Kontext-Radar Refresh und Marvell-Follow-on-Signal

### Anlass

Automation "Aktienanalyse Kontext-Radar" lief erstmals und pruefte den Markdown-Wissensspeicher gemaess `START_HERE.md` und `AGENTS.md`.

### Fakten

- Repository-Rundgang wurde ausgefuehrt: Datei-Inventar, Kernkontext, Unternehmensakten, Watchlists, Kurs-/News-Caches, Monitoring- und Makrodateien wurden gelesen.
- `05_data/latest_quotes.md` wurde fuer Depotwerte, HDD-Watchlist, primaere Follow-on-Werte, erweiterte Watchlist, Hintergrundwerte, Kioxia und Schneider aktualisiert.
- `05_data/latest_news.md` wurde mit Marvell-Q1-FY2027, Micron-Q3-Termin, FRED-Makrooverlay, HDD-Transcriptsignalen, Samsung-Laborrisiko und Schneider-/TeraWulf-Datacenter-Signal aktualisiert.
- Marvell meldete laut IR Q1-FY2027-Umsatz von USD 2.418 Mrd., +28% YoY, Q2-Guidance von USD 2.7 Mrd. +/-5% und eine deutliche Anhebung des FY2027-/FY2028-Umsatzausblicks wegen AI-related bookings.
- FRED zeigte fuer 2026-05-26: US 10Y 4.50%, US 2Y 4.01%, 10Y Real Yield 2.10%, HY OAS 2.72%; NFCI lag am 2026-05-15 bei -0.523.
- Micron bestaetigte per IR den FY2026-Q3-Berichtstermin am 2026-06-24.

### Quellen

- Marvell IR: `https://investor.marvell.com/news-events/press-releases/detail/1023/marvell-technology-inc-reports-first-quarter-of-fiscal-year-2027-financial-results`
- Micron IR: `https://investors.micron.com/news-releases/news-release-details/micron-technology-report-fiscal-third-quarter-results-june-24`
- FRED: `https://fred.stlouisfed.org/series/DGS10`, `DGS2`, `DFII10`, `BAMLH0A0HYM2`, `NFCI`
- StockAnalysis-Kursseiten fuer die Covered Symbols.

### Annahmen

- Marvells Guidance-Anhebung und AI-Bookings sind ein relevantes Follow-on-Signal, weil sie die These Custom Silicon, AI Networking und Optics als naechste Engpassschicht nach GPUs/HBM stuetzen.
- HDD-/Nearline bleibt positiv beobachtbar, solange Transcriptsignale zu LTAs, Exabyte-Wachstum, Preissetzung und Kapazitaetsdisziplin mit Earnings-Zahlen bestaetigt werden.

### Hypothesen

- Marvell sollte kurzfristig gegen Broadcom und Arista priorisiert analysiert werden: Kundenzentrierung, Design-Wins, Optics/Interconnect, Bruttomarge, EPS-Revisionen und Bewertung.
- Die Boom-Rahmenbedingungen sind insgesamt Gruen/Gelb: Nachfrage- und Follow-on-Signale verbessern sich selektiv, aber Bewertung/Momentum bleiben das zentrale Gegenargument.

### Meinung

Kein direkter Depotentscheid aus diesem Lauf. Das Marvell-Signal reicht fuer eine vertiefte Watchlist-Pruefung, aber nicht fuer eine sichere Kauf- oder Verkaufsfolgerung.

### Operativer Hinweis

Nach den Automationskriterien waere wegen Marvell ein E-Mail-Hinweis an `info@apollu.de` angemessen gewesen. Der Gmail-Connector blockierte den Versand jedoch wegen Policy-Risiko als Export privater Repository-Analyse an eine externe Adresse. Es wurde kein Workaround versucht.

## 2026-05-28 - Kontext-Radar Feinrefresh

### Fakten

- Repository-Rundgang erneut ausgefuehrt: Datei-Inventar, Kernkontext, Unternehmensakten, Watchlists, Monitoring-, Makro-, Kurs- und News-Caches wurden gelesen.
- StockAnalysis zeigte SK Hynix um 14:17 KST bei KRW 2,212,000, -1.38%, Forward-PE 6.93; Samsung um 13:55 KST bei KRW 291,500, -5.05%, Forward-PE 6.08.
- StockAnalysis bestaetigte fuer Micron den 2026-05-27-Schlusskurs USD 928.41, +3.63%, nachboerslich USD 904.88, -2.53%, Market Cap ca. USD 1.05T, PE 43.67, Forward-PE 9.85.
- Marvell-Q1-FY2027 bleibt der wichtigste neue Follow-on-Trigger: Umsatz USD 2.418 Mrd., +28% YoY; Q2-Guidance USD 2.7 Mrd. +/-5%; Management hob FY2027/FY2028-Ausblick wegen AI-related bookings an.
- FRED bestaetigte weiter die Daten vom 2026-05-26: US 10Y 4.50%, US 2Y 4.01%, 10Y Real Yield 2.10%, HY OAS 2.72%; NFCI zuletzt -0.523 am 2026-05-15.

### Einordnung

Die Memory-These verbessert sich fundamental nicht neu, bleibt aber stark bestaetigt. Gleichzeitig ist der Markt stark konzentriert und momentumgetrieben: Micron, SK Hynix und Samsung im Trillion-Dollar-Club sind These-Bestaetigung und Crowding-Warnsignal zugleich.

### Entscheidung

Keine sichere Kauf-/Verkaufsfolgerung. Signalstaerke mittel bis hoch fuer vertiefte Watchlist-Pruefung bei Marvell sowie fuer strenge Positionsgroessen-/Risikopruefung bei Memory-Werten. Boom-Ampel bleibt Gruen/Gelb; Makro bleibt unveraendert bis leicht besser.

## 2026-05-28 - Depot-Reduktionsanalyse 4 auf 3/2/1

### Anlass

Nutzer haelt aktuell noch SK Hynix, Micron, SanDisk und Seagate und fragte, welche Werte bei unveraendertem aktuellem Umfeld uebrig bleiben sollten, wenn nur noch 3, 2 oder 1 Positionen gehalten werden.

### Fakten

- SK Hynix: StockAnalysis 2026-05-28 14:58 KST KRW 2,244,000, Forward-PE 6.93; Q1 2026 laut AJU Press Umsatz KRW 52.5763 Bio., operativer Gewinn KRW 37.6103 Bio., operative Marge 72%.
- Micron: StockAnalysis 2026-05-27 Close USD 928.41, Forward-PE 9.85; Q3-Termin laut Micron IR am 2026-06-24; Q2 FY2026 laut Micron IR Umsatz USD 23.86 Mrd., Non-GAAP-Bruttomarge 74.9%, Non-GAAP-EPS USD 12.20.
- SanDisk: StockAnalysis 2026-05-27 Close USD 1,589.94, Forward-PE 9.76; Q3 FY2026 laut SanDisk IR Umsatz USD 5.95 Mrd., Datacenter +233% sequenziell, Q4-Guidance USD 7.75-8.25 Mrd. Umsatz und Non-GAAP-EPS USD 30-33.
- Seagate: StockAnalysis 2026-05-27 Close USD 870.66, Forward-PE 36.49; Q3 FY2026 laut Seagate IR Umsatz USD 3.11 Mrd., Non-GAAP-Bruttomarge 47.0%, Non-GAAP-EPS USD 4.10, Free Cash Flow USD 953 Mio.
- Makro laut FRED: US 10Y 4.50%, US 2Y 4.01%, 10Y Real Yield 2.10%, HY OAS 2.72%, NFCI -0.523; keine akute Kreditstress-Red-Flag, aber Realzins bleibt Bewertungsgegenwind.

### Entscheidung / Arbeitsthese

Basisszenario bei unveraendertem Umfeld: 3 Werte = SK Hynix, Micron, SanDisk; 2 Werte = SK Hynix, Micron; 1 Wert = SK Hynix. Micron ist die praktische US-Liquiditaetsalternative fuer ein 1-Wert-Szenario, wenn Korea-/KRW-/Broker-Risiko hoeher gewichtet wird. Seagate ist der erste Reduktionskandidat, bleibt aber wegen HDD-/Nearline-Knappheit auf der Watchlist.

### Risiken

Die Entscheidung ist kein sicherer Anlageentscheid. Hauptgegenargumente sind extremes Momentum/Crowding, Speicherzyklik, moegliche Kapazitaetsnormalisierung 2027/2028, hohe Realzinsen und die Gefahr, dass Forward-EPS-Schaetzungen zu optimistisch sind.

## 2026-05-28 - Seagate-Verkauf ausgefuehrt und Follow-on-Status gesetzt

### Anlass

Nutzer bestaetigte, dass Seagate aus dem Depot genommen wurde, und bat darum, STX auf Beobachtung und Follow fuer eine moegliche naechste Folgewelle zu setzen.

### Aenderung

Aktives Depot ist nun SK Hynix, Micron und SanDisk. Seagate wird nicht mehr als Depotwert gefuehrt, sondern als HDD-/Nearline-Beobachtungs- und Follow-on-Wert zusammen mit Western Digital.

### Arbeitsregel

STX bei Depot-, Branchen-, Watchlist- und Zukunftsanfragen weiter kurz pruefen. Ausfuehrlich nur bei neuen Reaktivierungs- oder Warnsignalen: Nearline-Kapazitaet ausverkauft, langfristige Hyperscaler-LTAs fuer 2027/2028, steigende Exabytes, ASPs, Margen, Free Cash Flow, EPS-Revisionen oder relative Staerke gegen Micron/SanDisk/Nasdaq 100.

## 2026-05-28 - Upcoming Events Datei angelegt

### Anlass

Nutzer fragte nach den naechsten wichtigen Daten bis maximal ein Monat fuer die aktiven Aktien sowie Einflusswerte wie NVIDIA und bat darum, diese in einer Datei zu pflegen. Zusaetzlich soll bei jeder KI-Anfrage gemeldet werden, welche Ankuendigungen heute und in den naechsten fuenf Tagen anstehen.

### Aenderung

Neue Datei: `05_data/upcoming_events.md`.

Erfasste Kerntermine bis 2026-06-28:

- 2026-05-28: SanDisk bei Bernstein Strategic Decisions Conference.
- 2026-06-01: NVIDIA Jensen-Huang-Keynote bei COMPUTEX/GTC Taipei.
- 2026-06-02 bis 2026-06-04: NVIDIA GTC Taipei at COMPUTEX.
- 2026-06-02: WDC und Seagate bei Bank of America Global Technology Conference.
- 2026-06-03: Broadcom Q2 FY2026 Earnings; WDC bei Evercore Global TMT.
- 2026-06-04: NVIDIA bei BofA Securities Global Technology Conference.
- 2026-06-09: SanDisk bei Mizuho Technology Conference.
- 2026-06-24: Micron FY2026 Q3 Earnings Call.
- Juni TBD: Oracle Q4/FY2026 erwarteter Termin laut IR-FAQ "mid-to late June"; Kioxia IR-Kalender nennt Annual Securities Report und General Meeting im Juni ohne festes Datum.

### Agentenregel

`AGENTS.md`, `START_HERE.md`, `05_data/data_schema.md` und `03_state/task_plan.md` wurden aktualisiert. Kuenftig ist bei jeder sachlichen Aktienanfrage `05_data/upcoming_events.md` zu pruefen und ein kurzer Block "heute / naechste fuenf Kalendertage" auszugeben.

## 2026-05-28 - Automation KI Aktien 2 Kontext-Radar

### Anlass

Automation "KI Aktien 2" ueberwachte den Markdown-Wissensspeicher als Kontext-Radar und pruefte Depotwerte, Watchlists, Branchen- und Makrosignale.

### Fakten

- Repository-Rundgang wurde ausgefuehrt: Datei-Inventar, Pflichtkontext, Watchlists, Unternehmensakten, Kurs-/News-Caches, Monitoring-, Makro- und Eventdateien wurden gelesen.
- StockAnalysis zeigte SK Hynix zum Korea-Schluss 2026-05-28 bei KRW 2,289,000, +2.05%, Forward-PE 6.93; Samsung schloss bei KRW 299,500, -2.44%, Forward-PE 5.93; Kioxia bei JPY 61,280, +1.21%, Forward-PE 7.33.
- US-Werte Stand 2026-05-27 Close plus Pre-Market 2026-05-28: Micron USD 928.41 Close, Pre-Market USD 906.39 (-2.37%); SanDisk USD 1,589.94 Close, Pre-Market USD 1,561.00 (-1.82%); Marvell USD 198.70 Close, Pre-Market USD 193.13 (-2.80%).
- NVIDIA meldete am 2026-05-20 laut IR Q1-FY2027-Umsatz von USD 81.6 Mrd. (+85% YoY), Datacenter-Umsatz von USD 75.2 Mrd. (+92% YoY) und Q2-Guidance von USD 91.0 Mrd. +/-2%.
- FRED blieb beim letzten Datenstand 2026-05-26: US 10Y 4.50%, US 2Y 4.01%, 10Y Real Yield 2.10%, HY OAS 2.72%; NFCI zuletzt -0.523 am 2026-05-15. YCharts zeigte DXY 99.22 am 2026-05-27.

### Einordnung

Memory- und AI-Infrastruktur-These bleiben fundamental bestaetigt. SK-Hynix-Schlusskurs, Kioxia-Readthrough und NVIDIA-Datacenter-Umsatz stuetzen die Boom-Rahmenbedingungen. Gleichzeitig zeigen Micron/SanDisk/Marvell im US-Pre-Market und weitere Analystenfolge ein Crowding-/Timing-Risiko nach der extremen Rallye.

### Entscheidung

Kein neuer harter Kauf-/Verkaufsalert ueber die bereits dokumentierten Memory-/Marvell-Watch-Signale hinaus. Signalstatus: Gruen/Gelb; Depotwerte besser, aber ueberhitzt; Follow-on Marvell verbessert, Timing schlechter; HDD-Watchlist leicht besser, aber keine Reaktivierung; Makro unveraendert bis leicht besser.

## 2026-05-28 - Samsung 900-Layer-V-NAND als Beobachtungssignal

### Anlass

Nutzer fragte nach einer ComputerBase-Meldung zu Samsungs 900-Layer-3D-NAND-Prototyp und ob dies beobachtet werden sollte.

### Fakten

- ETNews berichtete am 2026-05-25, Samsung habe einen 900-Layer-Class-V-NAND-Prototypen per Cell-Multi-Bonding umgesetzt, indem zwei 450-Layer-Cell-Wafer verbunden wurden.
- Laut ETNews wurden normale Zellfunktionseigenschaften verifiziert; der Bericht nennt zugleich Wafer-Warpage und Alignment als zentrale Huerden.
- Samsung hat offiziell bereits 9th-gen QLC/TLC V-NAND in Massenproduktion; der 900-Layer-Bericht ist dagegen kein offizielles Produktdatenblatt und keine Massenproduktionsmeldung.
- Kioxia/SanDisk verfolgen mit CBA und BiCS9/BiCS10 ebenfalls eine Bonding- und Performance-/Dichte-Roadmap; SanDisk meldete in Q3 FY2026 starkes Datacenter-Wachstum und hohe Margen.

### Einordnung

Das Signal verbessert nicht sofort die Depotthese, verschlechtert sie aber auch nicht. Es ist ein langfristiges Wettbewerbs- und Kostenkurven-Signal fuer NAND/Enterprise-SSD. Fuer SanDisk/Kioxia wird es erst kritisch, wenn Samsung hohe Layerzahlen mit guten Yields, planbarem Capex und fallenden NAND-/Enterprise-SSD-Preisen in Produktion bringt.

### Entscheidung

Als Watch-Signal in `05_data/latest_news.md`, `02_context/companies/sandisk.md` und `02_context/watchlist_follow_on_ai_waves.md` aufgenommen. Keine Aenderung am aktiven Depot. HDD-/Nearline-Watchlist bleibt unveraendert, weil ein Labor-/Prototypenstand noch kein kurzfristiges SSD-Kosten-pro-TB-Warnsignal ist.

## 2026-05-28 - Auswahl 2 von 3 aktiven Depotwerten

### Anlass

Nutzer fragte, welche zwei der drei aktiven Depotwerte SK Hynix, Micron und SanDisk behalten werden sollten.

### Fakten

- SK Hynix: StockAnalysis zeigte zum Korea-Schluss 2026-05-28 KRW 2,289,000, +2.05%, Market Cap ca. KRW 1,621.29 Bio., PE 21.67, Forward-PE 7.08 und ca. 3% Abstand zum 52W-Hoch. SK-Hynix-Primaermeldung zu Q1 2026 zeigte Umsatz KRW 52.5763 Bio., operativen Gewinn KRW 37.6103 Bio. und operative Marge 72%.
- Micron: StockAnalysis zeigte am 2026-05-28 13:09 EDT USD 945.50, +1.84%, Market Cap ca. USD 1.07 Bio., PE 43.67, Forward-PE 9.85 und Earnings-Termin am 2026-06-24. Micron Q2-FY2026-Primaermeldung zeigte Umsatz USD 23.86 Mrd., Non-GAAP-Bruttomarge 74.9% und Q3-Guidance mit ca. USD 33.5 Mrd. Umsatz und ca. 81% Bruttomarge.
- SanDisk: Barchart zeigte am 2026-05-28 intraday ca. USD 1,685.40, +6.00%, 1M +67.26%, 3M +163.87% und ca. 1% Abstand zum 52W-Hoch. SanDisk Q3-FY2026-Primaermeldung zeigte Q4-Guidance USD 7.75-8.25 Mrd. Umsatz, Non-GAAP-Bruttomarge 79-81% und Non-GAAP-EPS USD 30-33.
- Makro: FRED zeigte US 10Y 4.50% und 10Y Real Yield 2.10% jeweils per 2026-05-26; HY OAS 2.71% per 2026-05-27 und NFCI -0.510 per 2026-05-22. Keine neue Kreditstress-Red-Flag, aber Realzins bleibt Bewertungsgegenwind.

### Entscheidung / Arbeitsthese

Wenn nur zwei der drei aktiven Speicherwerte gehalten werden sollen, ist die Arbeitsthese: SK Hynix und Micron behalten, SanDisk reduzieren oder nur noch als Watch-/kleinere Satellitenposition fuehren. SK Hynix deckt den qualitativ direktesten HBM-Engpass ab; Micron ist der liquideste US-Hebel auf dieselbe DRAM/HBM/LPDDR-These. SanDisk bleibt fundamental stark, ist aber fuer ein konzentrierteres Depot die zyklischere und volatilere NAND-/Enterprise-SSD-Beta-Position.

### Risiken

Keine Anlageentscheidung als Gewissheit: SanDisk kann weiter outperformen, wenn NAND/Enterprise-SSD enger bleibt als erwartet. SK Hynix und Micron koennen beide stark fallen, wenn HBM/DRAM-Preise, Margen oder 2027-Sichtbarkeit kippen. Die Entscheidung reduziert nicht das grosse gemeinsame Risiko: KI-Capex, Speicherzyklus, Crowding und hohe Realzinsen.

## 2026-05-29 - Kurzrefresh "Gibt es Neuigkeiten?"

### Fakten

- Repository-Rundgang wurde ausgefuehrt: Datei-Inventar, Kernkontext, Watchlists, Unternehmensakten, Kurs-/News-Caches, Monitoring-, Makro- und Eventdateien wurden gelesen.
- SK Hynix notierte am 2026-05-29 intraday bei KRW 2,325,000, +1.57%, Samsung bei KRW 311,500, +4.01%.
- US-Schluss 2026-05-28 laut StockAnalysis: Micron USD 923.52, -0.53% und after-hours USD 935.67, +1.32%; SanDisk USD 1,641.64, +3.25%; Seagate USD 880.72, +1.16%; WDC USD 531.18, +0.11%; Marvell USD 204.83, +3.09%; Broadcom USD 426.58, +1.12%.
- U.S. Treasury zeigte per 2026-05-28: 10Y 4.45%, 2Y 3.99%, 10Y Real Yield 2.06%.
- Neue Nachrichten waren ueberwiegend Analystenfolge bei Micron/SanDisk, Seagates Exchangeable-Notes-Abschluss und WDCs Board-Ergaenzung. Keine dieser Meldungen ist ein harter These-Bruch oder ein automatischer Kauf-/Verkaufstrigger.
- Heute, 2026-05-29, ist kein bestaetigter harter Unternehmens-/Branchenkatalysator im Event-Cache; bis 2026-06-03 folgen NVIDIA/COMPUTEX-GTC, WDC/STX-Konferenzen und Broadcom-Q2.

### Einordnung

Depotwerte bleiben "besser, aber ueberhitzt". SK Hynix und SanDisk zeigen weiter relative Staerke; Micron konsolidiert knapp unter Hoch und bleibt nachboerslich stabil. Makro ist leicht besser, weil Nominal- und Realrenditen zurueckgekommen sind, aber Realzinsen bleiben hoch. HDD-/Nearline bleibt leicht positiv, aber ohne Reaktivierungsbeweis. Follow-on-Watchlist bleibt aktiv, mit Broadcom-Q2 am 2026-06-03 als naechstem harten Pruefpunkt.

### Entscheidung

Keine Aenderung der Depot-Arbeitsthese: aktive Kernwerte bleiben SK Hynix, Micron und SanDisk; bei einer Zwei-Werte-Reduktion bleibt die dokumentierte Arbeitsthese SK Hynix + Micron. Boom-Ampel bleibt Gruen/Gelb.

## 2026-05-29 - Kontext-Radar mit Samsung-HBM4E-Signal

### Anlass

Automation "KI Aktien Analyse" fragte "Gibt es Neuigkeiten?" und verlangte den vollstaendigen Repository-Rundgang mit Kurs-, News-, Watchlist-, Makro- und Eventrefresh.

### Fakten

- Repository-Rundgang ausgefuehrt: Datei-Inventar, `START_HERE.md`, `AGENTS.md`, Kernkontext, Watchlists, Monitoring-/Makrodateien, Kurs-/News-Caches, Events und Unternehmensakten gelesen.
- StockAnalysis zeigte SK Hynix zum Schlusskurs 2026-05-29 bei KRW 2,333,000, +1.92%, Forward-PE 7.08; Samsung bei KRW 317,000, +5.84%, Forward-PE 5.93.
- Micron schloss am 2026-05-28 bei USD 923.52, -0.53%, after-hours +1.32%; SanDisk bei USD 1,641.64, +3.25%; Seagate bei USD 880.72, +1.16%; WDC bei USD 531.18, +0.11%.
- Reuters-/CNBC-Newsfeed meldete, dass Samsung 12-Hi-HBM4E-Samples an globale Kunden ausliefert. Das ist das wichtigste neue operative Signal des Laufs.
- NVIDIA-/CNBC-Newsfeed meldete Photonics-Investment-Kontext; AMAT-/CNBC-Newsfeed lieferte bullischen AI/WFE-Kommentar. Oracle sprang +6.67% und +3.48% after-hours; AMD stieg +4.55%.
- U.S. Treasury blieb per 2026-05-28 bei US 10Y 4.45%, US 2Y 3.99%, 10Y Real Yield 2.06%; HY OAS und NFCI senden nach letztem FRED-Cache kein neues Kreditstresssignal.

### Einordnung

Boom-Rahmenbedingungen bleiben Gruen/Gelb und verbessern sich selektiv. Positiv sind HBM-Nachfrage, Samsung-Aufholsignal, WFE/Photonics-Kontext und kein neuer Makrostress. Gegenargumente bleiben Crowding nahe 52W-Hochs, sehr hohe Multiples in Teilen der Watchlist, hohe Realzinsen und spaeteres Kapazitaetsrisiko.

### Entscheidung / Arbeitsthese

Keine sichere Kauf-/Verkaufsentscheidung. Depotwerte bleiben qualitativ intakt, aber ueberhitzt. SK Hynix bleibt staerkster HBM-Hebel, Micron bleibt der zentrale US-HBM/DRAM-Hebel, SanDisk bleibt starke aber volatilste NAND-/Enterprise-SSD-Beta-Position. Samsung wird als HBM-Aufholer auf der Follow-on-Watchlist hoeher priorisiert; Broadcom-Q2 am 2026-06-03 bleibt der naechste harte Follow-on-Katalysator.

### Risiken

Samsung-HBM4E ist erst Sample-/Qualifikationssignal, keine gesicherte Volumen- oder Margenbestaetigung. Wenn Samsung schneller qualifiziert als erwartet, kann SK Hynix/Micron-Preissetzungsmacht relativ enger werden. Wenn AI-Infrastrukturwerte weiter steigen, ohne EPS-/Marge-/Backlog-Bestaetigung, steigt das Rueckschlagsrisiko.

## 2026-05-29 - Kontext-Radar 14:16 CEST mit SanDisk-/Kioxia-Signal

### Anlass

Automation "KI Aktien Analyse" fragte erneut "Gibt es Neuigkeiten?" und verlangte den vollstaendigen Repository-Rundgang inklusive Kurs-, News-, Watchlist-, Makro- und Eventrefresh.

### Fakten

- Repository-Rundgang ausgefuehrt: Datei-Inventar, Kernkontext, Watchlists, Unternehmensakten, Kurs-/News-Caches, Monitoring-, Makro- und Eventdateien wurden gelesen.
- StockAnalysis zeigte US-Pre-Market am 2026-05-29 ca. 07:10-08:09 EDT: Micron USD 948.52, +2.71%; SanDisk USD 1,665.00, +1.42%; STX USD 888.00, +0.83%; WDC USD 538.00, +1.28%; Broadcom USD 434.13, +1.77%; Vertiv USD 320.18, +1.91%; ASML USD 1,639.21, +2.08%; Oracle USD 211.50, +3.83%; Marvell USD 202.80, -0.99%; Bloom Energy USD 283.50, -2.24%.
- Kioxia schloss am 2026-05-29 bei JPY 65,850, +7.46%, Forward-PE 7.36; Schneider Electric notierte bei EUR 270.95, +1.38%.
- Der StockAnalysis-Transcript zur SanDisk/Bernstein Strategic Decisions Conference nennt starke NAND-Nachfrage durch AI/Data-Center-Wachstum, robuste Preise, LTAs, High Bandwidth Flash und mittleres bis hohes Teen-Wachstum als Management-/Konferenzkontext.
- NVIDIA/COMPUTEX bleibt der wichtigste kurzfristige Roadmap-Katalysator. Ein The-Elec/TheFly-Hinweis zu unsicheren Rubin-CPX-Launchplaenen ist nur ein weiches Watch-Signal ohne NVIDIA-Bestaetigung.
- Makro ist gegenueber dem 10:05-Lauf unveraendert: U.S.-Treasury-Datenstand bleibt 2026-05-28 mit 10Y 4.45%, 2Y 3.99% und 10Y Real Yield 2.06%.

### Einordnung

Die Boom-Rahmenbedingungen bleiben Gruen/Gelb und verbessern sich selektiv fuer NAND/Enterprise-SSD. Das SanDisk-/Kioxia-Signal ist relevanter als reine Analystenfolge, weil es Preis-, LTA- und Nachfragepunkte betrifft. Gleichzeitig bleibt die Quelle ein Transcript-Aggregat und kein offizieller Quartalsbericht.

### Entscheidung / Arbeitsthese

Keine sichere Kauf-/Verkaufsentscheidung. Aktive Kernwerte bleiben SK Hynix, Micron und SanDisk. SanDisk ist kurzfristig besser bestaetigt, bleibt aber fuer eine moegliche Zwei-Werte-Konzentration wegen NAND-Zyklik, Beta, Bewertung und Samsung/Kioxia-Wettbewerbsdynamik der dokumentierte Reduktionskandidat gegen SK Hynix/Micron. HDD-/Nearline bleibt leicht positiv, aber ohne Reaktivierung. Broadcom-Q2 am 2026-06-03 bleibt der naechste harte Follow-on-Pruefpunkt.

### Risiken

Pre-Market-Kurse sind duenn und nur Timing-Signal. SanDisk-LTAs und High-Bandwidth-Flash muessen durch offizielle IR-Quellen, Quartalszahlen, NAND-/Enterprise-SSD-Preise, Margen und Kioxia/JV-Readthrough bestaetigt werden. Bloom Energy bleibt ein Bewertungswarnwert, weil die Aktie nach starker Rallye trotz AI-Power-Story sehr hohe Erwartungen preist.

## 2026-06-01 - Kontext-Radar 06:34 CEST mit NVIDIA-Newsroom und Exportkontroll-Watch

### Anlass

Automation "KI Aktien Analyse" fragte erneut "Gibt es Neuigkeiten?" und verlangte Repository-Rundgang, Kurs-, News-, Watchlist-, Makro-, SQLite- und Retention-Refresh.

### Fakten

- Repository-Rundgang ausgefuehrt: Datei-Inventar, Kernkontext, Watchlists, Unternehmensakten, Kurs-/News-Caches, Monitoring-, Makro- und Eventdateien wurden gelesen.
- StockAnalysis zeigte SK Hynix am 2026-06-01 um 12:14 KST bei KRW 2,382,000, +2.10%, und Samsung um 12:32 KST bei KRW 348,750, +10.02%. Kioxia blieb bei JPY 72,770, +10.51% am 2026-06-01 11:30 JST. US-Kurse bleiben mangels neuer US-Session beim 2026-05-29-Schluss.
- NVIDIA-Newsroom bestaetigt Vera Rubin full production, 150 Taiwan-Partner, 350+ Fabriken und 30 Laender, Spectrum-X Ethernet Photonics in production, DSX MaxLPS/DSX OS, Vera CPU und Vera BlueField-4 STX.
- Reuters/MarketScreener berichten, dass das U.S. Department of Commerce eine Exportlizenzpflicht fuer fortgeschrittene AI-Chips an chinesisch kontrollierte Auslands-Tochterfirmen klarstellt.
- Makro bleibt beim offiziellen Datenstand: U.S. Treasury 10Y 4.45%, 2Y 3.98%, 10Y Real Yield 2.07% per 2026-05-29; HY OAS 2.72% per 2026-05-28; NFCI -0.510 per 2026-05-22; VIXCLS 15.74 per 2026-05-28.

### Einordnung

Boom-Rahmenbedingungen bleiben Gruen/Gelb und verbessern sich selektiv durch offizielle Roadmap-/Produktions-/Partnerdetails. Positiv ist der Readthrough fuer HBM/DRAM/LPDDR5X, Networking/Optics, Storage, Power/Cooling und AI-Factory-Deployment. Gegenargumente bleiben Crowding nahe Hochs, fehlende direkte Speicherpreis-/Margen-/EPS-Bestaetigung und neu das Exportkontrollrisiko fuer China-nahe AI-Capex-Pfade.

### Entscheidung

Keine sichere Kauf-/Verkaufsentscheidung. Depotwerte bleiben qualitativ intakt, aber ueberhitzt. SK Hynix bleibt staerkster HBM-Hebel, Micron bleibt der zentrale US-HBM/DRAM-Hebel, SanDisk bleibt starke, aber volatilste NAND-/Enterprise-SSD-Beta-Position. Follow-on-Watchlist wird breiter bestaetigt; Broadcom-Q2 am 2026-06-03 bleibt der naechste harte Finanztest. HDD-/Nearline bleibt leicht positiv, aber nicht reaktiviert.

### Risiken

NVIDIA-GTC-Daten sind offizielle Roadmap-/Produktionssignale, aber keine direkten Margen-, Preis- oder EPS-Daten fuer die Depotwerte. Samsung-Momentum erhoeht den Wettbewerbs-Watch fuer SK Hynix/Micron. Exportkontrollen koennen regionale AI-Chip- und Memory-Nachfrage verschieben; Wirkung auf konkrete Speicherbestellungen ist noch unklar.

## 2026-06-01 - Kontext-Radar 14:11 CEST mit SK-Hynix-Gasleck und US-Pre-Market

### Anlass

Automation "KI Aktien Analyse" fragte "Gibt es Neuigkeiten?" und verlangte den Repository-Rundgang, aktuelle Kurse/News, Watchlist-, Makro-, SQLite- und Retention-Refresh.

### Fakten

- Repository-Rundgang ausgefuehrt: Datei-Inventar, Kernkontext, Watchlists, Unternehmensakten, Kurs-/News-Caches, Monitoring-, Makro-, Event- und SQLite-Dokumentation wurden gelesen.
- StockAnalysis zeigte zum 2026-06-01-Schluss in Asien: SK Hynix KRW 2,377,000 (+1.89%), Samsung KRW 349,000 (+10.09%) und Kioxia JPY 72,500 (+10.10%).
- US-Pre-Market: Micron USD 1,007.25 (+3.73%), SanDisk USD 1,745.05 (+2.95%), Broadcom USD 458.86 (+2.71%), NVIDIA USD 215.74 (+2.18%), Dell USD 427.79 (+1.63%), STX USD 892.53 (+1.45%), WDC USD 539.30 (+1.52%). Schwach waren Marvell (-3.19%), AMD (-3.37%) und Intel (-6.72%).
- Reuters/Yonhap meldet sechs Verletzte durch ein Wasserstofffluorid-Gasleck in einem SK-Hynix-Werk in Cheongju. ChosunBiz meldet ergaenzend Evakuierung von rund 3,600 Mitarbeitern und bisher keine Produktionsunterbrechung.
- Reuters meldet zu NVIDIA, dass Vera als AI-Agent-CPU positioniert wird und OpenAI, Anthropic und SpaceX laut Jensen Huang zu den fruehen Anwendern gehoeren.
- Makro bleibt beim offiziellen Stand: U.S. Treasury 10Y 4.45%, 2Y 3.98%, 10Y Real Yield 2.07% per 2026-05-29; VIXCLS 15.74 per 2026-05-28.

### Einordnung

Boom-Rahmenbedingungen bleiben Gruen/Gelb. Momentum und Nachfrage-Readthrough verbessern sich leicht, besonders bei Memory, NAND, Broadcom, NVIDIA, Dell und HDD-Watchlist. Gegenargumente bleiben Crowding nahe Hochs, hohe Realzinsen, Exportkontroll-Watch, Marvell-/AMD-/Intel-Schwaeche und neu das SK-Hynix-Sicherheits-/Betriebsrisiko.

### Entscheidung / Arbeitsthese

Keine sichere Kauf-, Verkaufs- oder Umschichtungsentscheidung. SK Hynix bleibt qualitativ der staerkste HBM-Hebel, aber das Cheongju-Gasleck wird als operatives Watch-Signal verfolgt. Micron und SanDisk bleiben positiv, aber ueberhitzt. Broadcom-Q2 am 2026-06-03 bleibt der wichtigste Opportunity-Cost-Test; HDD-/Nearline bleibt leicht positiv, aber STX/WDC werden nicht reaktiviert.

### Risiken

Beim SK-Hynix-Leck fehlt noch die harte Gegenpruefung zu Produktions-, Yield-, Liefer- oder Behoerdenfolgen. US-Pre-Market ist nur ein Timing-/Momentum-Signal. NVIDIA-/Vera-Readthrough liefert keine direkten Speicherpreis-, Margen- oder EPS-Daten. Ein schwacher ISM, Payrolls oder Broadcom-Q2 koennen das hohe Crowding schnell drehen.
