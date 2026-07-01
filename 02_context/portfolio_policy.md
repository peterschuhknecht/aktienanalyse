# Portfolio Policy

Stand: 2026-06-05. Fehlende persoenliche Angaben werden nicht geraten.

## Bekannter Rahmen

Aktiv: SK Hynix, Micron, SanDisk, Kioxia. Verkauft/Watch: Seagate; HDD-Watch mit WDC. Hauptthese: AI-Speicherwette auf HBM/DRAM/LPDDR plus doppelten NAND-/Enterprise-SSD-Bucket. Hauptrisiken: AI-Capex, Speicherpreise, Halbleiterzyklus, NAND-Doppelung, Momentum, Realzinsen, KRW/JPY/USD.

Bekannt (2026-06-30): Basiswaehrung EUR. Depotstart 22.04.2026 mit EUR 150.000; aktueller Wert ~EUR 271.640 (+81% vs Basis). Depot = 100% AI-Speicher, KEIN Cash. Positionen/Stueck/Gewichte in `05_data/portfolio_positions.csv`. WICHTIG: Einzel-Einstaende sind durch Umschichtungen verfaelscht -> echtes G/V nur auf Depot-Ebene gegen die 150.000-Basis (und Trailing-Peak) rechnen, NICHT per Position.

Offen: Handelsplaetze je Wert; Bestaetigung/Korrektur der vorgeschlagenen Risikogrenzen.

## Risikoregeln (Stand 2026-06-30)

BESTAETIGT vom Nutzer:
- Einzelposition: Warn 30% / Max 35% (Micron aktuell 35,3% = am/ueber Max -> keine Nachkaeufe, Trim-on-Strength-Kandidat).
- Bucket HBM/DRAM: Warn 60% / Max 70% (aktuell 67,4%). Bucket NAND (SanDisk+Kioxia gemeinsam): Warn 30% / Max 40% (aktuell 32,6%).
- VOLL INVESTIERT gewollt: kein Cash-Puffer (Cash-Puffer-Regel verworfen).
- KEINE Gewinnmitnahme-Leiter (verworfen). Gewinnmitnahme/Verkauf NUR bei These-Bruch (harte Preis-/Margen-/Guidance-/Backlog-/Nachfrage-Widerlegung) oder Limit-Verletzung (Trim zurueck auf Ziel).
- Depot-Giveback (Crash-Notbremse, gemessen am Trailing-Peak, da Einzel-Einstaende reshuffling-verfaelscht): -15% -> hoechste-Beta-Leg (NAND) trimmen; -25% -> eine Leg de-risken.
- Basis-Schutz (Kapital-Floor): Round-Trip unter Basis+Puffer (~180-190k) vermeiden; bei Annaeherung Risiko hart senken.

VERWORFEN:
- FX-Regel raus (Nutzerwunsch). Kein Hedge. EUR/USD nur als Datenpunkt frisch ziehen (~67% USD-gebunden + JPY/KRW), nicht als Verkaufs-/Limit-Regel.

## Regeln

- SanDisk + Kioxia immer als gemeinsamen `NAND/Enterprise-SSD`-Bucket betrachten.
- HBM/DRAM und NAND getrennt beurteilen.
- Gesamtgewicht der AI-Memory-These pruefen; kein Limit erfinden.
- CSV-Rechenschicht: `05_data/portfolio_positions.csv`, `05_data/portfolio_risk_limits.csv`, `05_data/data_quality_checks.csv`.
- Bei Grenzverletzung keine automatische Order ableiten, sondern Watch/Reduktionspruefung/Datenluecke.

## Decision Gates

| Wert/Bucket | Harter Test |
|---|---|
| SK Hynix | HBM-Fuehrung, Kundenqualifikation, Preise/Margen/Yields |
| Micron | Q3 FY2026 am 2026-06-24: HBM-Ramp, Margen, 2027-Sichtbarkeit, Revisionen |
| SanDisk | Enterprise-SSD, LTAs, NAND-Preis-/Margenhebel, FCF |
| Kioxia | Securities Report 2026-06-24: FCF, Working Capital, JV, Capex, LTAs |
| SanDisk + Kioxia | NAND-Gesamtgewicht, Preise, Inventories, Capex, FCF |

## Entscheidungsmatrix

Bei Depotentscheidungen kurz beantworten: Themenkonzentration, Waehrungsrisiko, Katalysatorrisiko, staerkerer Wert oder Gewinner-Nachkauf, schwacher Wert oder Volatilitaetsverkauf, welche Daten die Entscheidung widerlegen.
