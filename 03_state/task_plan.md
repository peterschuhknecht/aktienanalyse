# Task Plan

## Initial erledigt

- [x] Struktur aus `praxis.pdf` auf Aktienanalyse angepasst.
- [x] Bisherige Diskussion aus `gespraech.pdf` als Seed-Hypothesen verdichtet.
- [x] Aktuelles Depot mit SK Hynix, Micron, SanDisk und Seagate erfasst.
- [x] Unternehmensakten fuer die vier aktuellen Positionen angelegt.
- [x] Red-Flags, Bewertungslogik und Report-Template angelegt.
- [x] Kurs- und Nachrichten-Cache mit Refresh- und Bereinigungsregeln angelegt.
- [x] Best-Case-Rahmenbedingungen fuer den KI-/Speicherboom als laufende Monitoring-Datei angelegt.
- [x] Western Digital als eigene Unternehmensakte fuer HDD-/Nearline-Vergleich zu Seagate angelegt.
- [x] Seagate-Verkaufsentscheidung erfasst und STX/WDC auf HDD-/Nearline-Beobachtungsliste gesetzt.
- [x] Monitoring-Signale fuer Renditeumschwung, relative Staerke und Umfeldveraenderung fuer Depot- und Follow-Werte definiert.
- [x] Datenarchitektur-Empfehlung Markdown plus optionale SQLite-/CSV-Zeitreihen dokumentiert.
- [x] Spotmarkt- und Branchenfruehindikatoren fuer KI-/Chipmarktlage in Monitoring, Datenschema und Boom-Ampel ergaenzt.
- [x] Repo-Link-Audit durchgefuehrt und Makro-/Sentiment-Overlay fuer Zinsen, Realzinsen, Kreditstress, VIX, USD und Crowding ergaenzt.
- [x] Kontext-Radar-Erstlauf am 2026-05-28 durchgefuehrt: Covered-Symbol-Kurse, frische News, Makro-Overlay, Marvell-Follow-on-Signal und HDD-Watchlist aktualisiert.
- [x] Veraltete/weiche Karpathy-/Software-3.0-Newsnotiz aus `05_data/latest_news.md` bereinigt.
- [x] Kontext-Radar-Feinrefresh am 2026-05-28 durchgefuehrt: SK-Hynix-/Samsung-Intradaywerte, Memory-Crowding, Marvell-Signal, HDD-Watchlist und Makro-Overlay erneut geprueft.
- [x] Depot-Reduktionsanalyse am 2026-05-28 durchgefuehrt: Basisszenario 3 Werte = SK Hynix, Micron, SanDisk; 2 Werte = SK Hynix, Micron; 1 Wert = SK Hynix, mit Micron als US-Liquiditaetsalternative.
- [x] Seagate-Verkauf am 2026-05-28 laut Nutzerangabe eingetragen; STX bleibt Beobachtungs- und Follow-on-Wert fuer moegliche HDD-/Nearline-Folgewelle.
- [x] Kommende Ereignisse bis 2026-06-28 in `05_data/upcoming_events.md` angelegt und Pflichtausgabe "heute plus naechste fuenf Kalendertage" in `AGENTS.md` und `START_HERE.md` verankert.
- [x] Automation "KI Aktien 2" Kontext-Radar am 2026-05-28 13:05 CEST durchgefuehrt: Covered-Symbol-Kurse, US-Pre-Market, KRX/Japan/Paris-Schlussdaten, NVIDIA-Q1-Readthrough, Makro/DXY, Watchlists und betroffene Unternehmensakten aktualisiert.
- [x] 2-von-3-Depotfrage am 2026-05-28 beantwortet und dokumentiert: Basisauswahl SK Hynix + Micron behalten; SanDisk bei Konzentration auf zwei Werte als Reduktionskandidat.
- [x] Kurzrefresh "Gibt es Neuigkeiten?" am 2026-05-29 durchgefuehrt: aktive Depotwerte, HDD-/Nearline-Watchlist, primaere Follow-on-Werte, Makro-Overlay und kommende Termine aktualisiert.

## Naechste sinnvolle Schritte

- [ ] Aktuelle Ticker, ISINs und Handelsplaetze fuer SK Hynix und SanDisk im Broker klaeren.
- [x] Aktuelle Marktdaten fuer alle vier Positionen fuer Reduktionsanalyse 2026-05-28 erfasst.
- [ ] PEG fuer Micron sauber neu berechnen, da die Gespraechs-PDF widerspruechliche Werte enthaelt; aktueller Reduktionsentscheid nutzt Forward-PE/Margen/Growth statt einen unsicheren PEG.
- [ ] Naechste Earnings-Termine verifizieren.
- [ ] Einen ersten aktuellen Portfolio-Snapshot in `04_reports/` erstellen.
- [ ] Marvell gegen Broadcom und Arista als Follow-on-Kandidat vertieft analysieren: Kundenkonzentration, AI-Bookings, Optics/Interconnect, Custom-XPU-Programme, Margen und EPS-Revisionen.
- [ ] Memory-Crowding nach Trillion-Dollar-Club-Rallye eng verfolgen: Ruecksetzer, EPS-Revisionen, Margen, Forward-PE und Kursreaktion auf Micron-Q3 am 2026-06-24.
- [ ] Falls SanDisk reduziert wird, SanDisk weiter als NAND-/Enterprise-SSD-Watchwert beobachten: Q4-Termin, Kioxia-Readthrough, NAND-/Enterprise-SSD-Preise, Samsung-V10-/900L-Roadmap.
- [ ] Nach US-Handelsstart 2026-05-28 pruefen, ob Micron/SanDisk/Marvell-Pre-Market-Abkuehlung nur Gewinnmitnahme bleibt oder zu einem breiteren Momentumbruch wird.
- [ ] Micron-Q3 am 2026-06-24 als naechsten harten Pruefpunkt fuer die HBM/DRAM-Re-Rating-These vormerken.
- [ ] Vollautomatische Quote-Historie fuer alle Covered Symbols strukturiert erfassen, damit 1M/3M-Momentum nicht nur manuell im Markdown steht.
- [ ] Klaeren, ob E-Mail-Alerts an `info@apollu.de` ueber einen explizit freigegebenen/trusted Versandweg laufen sollen; der Gmail-Connector blockierte den direkten Export im Kontext-Radar-Lauf 2026-05-28.
- [ ] Bei der naechsten Marktanalyse die Ampel aus `02_context/best_case_conditions_ai_memory_boom.md` mit neuen Quellen aktualisieren.
- [ ] Bei der naechsten Marktanalyse Memory-Spot-/Contract-Preise, GPU-Compute-Spotpreise, SOX/SMH-Momentum, Hyperscaler-Capex und private AI-Infrastruktur-Deals als Fruehindikatoren pruefen.
- [ ] Samsung-900-Layer-/V10-NAND-Roadmap gegen SanDisk/Kioxia BiCS10 beobachten: Massenproduktion, Yield, Capex, Enterprise-SSD-Preise und NAND-Contract-Preise.
- [ ] Bei der naechsten Marktanalyse Makro-/Sentiment-Regime aus `05_data/macro_market_signals.md` pruefen: US 2Y/10Y, Realzins, Yield Curve, FedWatch, NFCI, HY-Spreads, VIX, USD, Fear & Greed, AAII und FINRA Margin Debt.
- [ ] Bei jeder Folgeanfrage `05_data/upcoming_events.md` pruefen und Termine fuer heute plus naechste fuenf Kalendertage in der Antwort nennen.
- [x] Nach tatsaechlicher Ausfuehrung des Seagate-Verkaufs `02_context/current_portfolio.md` final auf "verkauft / Beobachtung" gesetzt.
- [ ] Optional: Lokale SQLite-Datenbank `05_data/market_monitor.sqlite` anlegen, wenn automatisches Zeitreihen-Monitoring gewuenscht ist.
- [ ] Optional: Positionsgroessen und Einstandskurse ergaenzen, falls der Nutzer sie teilen moechte.
- [x] Bei der Aktienanfrage 2026-05-29 `05_data/latest_quotes.md` und `05_data/latest_news.md` mit aktuellen Daten gefuellt.
