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

## Naechste sinnvolle Schritte

- [ ] Aktuelle Ticker, ISINs und Handelsplaetze fuer SK Hynix und SanDisk im Broker klaeren.
- [ ] Aktuelle Marktdaten fuer alle vier Positionen erfassen.
- [ ] PEG fuer Micron sauber neu berechnen, da die Gespraechs-PDF widerspruechliche Werte enthaelt.
- [ ] Naechste Earnings-Termine verifizieren.
- [ ] Einen ersten aktuellen Portfolio-Snapshot in `04_reports/` erstellen.
- [ ] Bei der naechsten Marktanalyse die Ampel aus `02_context/best_case_conditions_ai_memory_boom.md` mit neuen Quellen aktualisieren.
- [ ] Bei der naechsten Marktanalyse Memory-Spot-/Contract-Preise, GPU-Compute-Spotpreise, SOX/SMH-Momentum, Hyperscaler-Capex und private AI-Infrastruktur-Deals als Fruehindikatoren pruefen.
- [ ] Bei der naechsten Marktanalyse Makro-/Sentiment-Regime aus `05_data/macro_market_signals.md` pruefen: US 2Y/10Y, Realzins, Yield Curve, FedWatch, NFCI, HY-Spreads, VIX, USD, Fear & Greed, AAII und FINRA Margin Debt.
- [ ] Nach tatsaechlicher Ausfuehrung des Seagate-Verkaufs `02_context/current_portfolio.md` final von "Verkauf angekuendigt" auf "verkauft" setzen.
- [ ] Optional: Lokale SQLite-Datenbank `05_data/market_monitor.sqlite` anlegen, wenn automatisches Zeitreihen-Monitoring gewuenscht ist.
- [ ] Optional: Positionsgroessen und Einstandskurse ergaenzen, falls der Nutzer sie teilen moechte.
- [ ] Bei der naechsten Aktienanfrage `05_data/latest_quotes.md` und `05_data/latest_news.md` mit aktuellen Daten fuellen.
