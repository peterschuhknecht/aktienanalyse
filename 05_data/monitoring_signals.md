# Monitoring-Signale

Aktueller Status steht in `05_data/monitoring_status.csv`; Details/Historie in CSV-Archiv und `03_state/evaluation_log.md`.

## Pflichtchecks

- Abdeckung: aktive Depotwerte, STX/WDC, primaere Follow-ons, thematisch relevante erweiterte Watchlist.
- Momentum: 1D/5D/1M/3M/YTD, relative Staerke zu Nasdaq 100/SMH/Peers, 52W-Abstand, Earnings-/Guidance-Reaktion, Volumen/Gap falls verfuegbar.
- "Dreht nach oben": mindestens zwei aus 1M > +15% und besser als Benchmark, 3M > +30% und besser als Peers, neues Hoch nach harter Meldung, EPS/Guidance steigt mit Kurs, relative Staerke verbessert sich, Ruecksetzer werden gekauft.
- Umfeld: Nachfrage, Preise, Angebot, Bewertung, Wettbewerb, Makro/Politik.
- Spot-/Deal-Daten sind nur Fruehindikatoren; These erst bei Bestaetigung durch Contract-Preise, Margen, Guidance, EPS-Revisionen oder Hyperscaler-Capex aendern.

## Fruehindikatoren

| Segment | Bevorzugte Quelle | Warnlogik |
|---|---|---|
| GPU-Compute | Ornn OCPI; GPUs.io nur Cross-Check | fallende Preise/mehr Verfuegbarkeit ueber mehrere Wochen |
| DRAM/NAND/SSD | TrendForce/DRAMeXchange | Spot faellt und Contract-Preise/Margen folgen |
| SOX/SMH | Boersen-/Finanzdatenanbieter | Index ueber Trend ohne EPS-/Margenbestaetigung |
| Hyperscaler-Capex | Unternehmensberichte/Calls | Capex-Pause, ROI-Zweifel, Projektverschiebung |
| Private AI-Infrastruktur | PitchBook/hochwertige Medien | Deal Value/Count kuehlt ab |

Ausgabe in Folgeanalysen: Depotwerte, Follow-on, HDD/Nearline, Boom-Rahmenbedingungen und Makro/Sentiment jeweils besser/schlechter/unveraendert/unklar.
