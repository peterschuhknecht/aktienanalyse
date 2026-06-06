# Macro Market Signals

Aktuelle Werte: `05_data/macro_market_signals.csv`; Historie nur verdichtet in CSV-Archiv/Log.

## Gewichtung

- Fundamental: US 2Y/10Y, 10Y-Realzins, Yield Curve, Fed-Erwartungen, NFCI, HY OAS, USD.
- Timing/Crowding: VIX, Fear & Greed, AAII, FINRA Margin Debt.
- Unternehmensdaten, Preise, Margen und Guidance wiegen hoeher als Sentiment. Makro kippt Thesen nur bei echtem Zins-, Kredit-, USD- oder Liquiditaetsstress.

## Pflichtquellen

FRED/U.S. Treasury, CME FedWatch/FOMC, Chicago Fed NFCI, FRED HY OAS, Cboe VIX, CNN Fear & Greed, AAII, FINRA Margin Statistics.

Letzter offizieller Treasury-Refresh: 2026-06-05 12:46 Europe/Berlin mit Treasury-Daten bis 2026-06-04. 10Y nominal 4.47%, 2Y 4.05%, 10Y Realzins 2.11%. Das ist minimal besser als 2026-06-03 bei Nominalzinsen, aber weiter ein Bewertungsgegenwind. BLS Employment Situation fuer Mai 2026 war zum Abrufzeitpunkt noch ausstehend.

## Statuslogik

| Status | Bedeutung |
|---|---|
| Besser | Zinsen/Realzinsen stabil/fallend, Spreads stabil, NFCI locker, VIX ruhig |
| Unveraendert | gemischt ohne klaren Stress oder klare Entspannung |
| Schlechter | Realzins/10Y/Fed-Erwartungen/USD/VIX/Spreads verschlechtern sich |
| Red Flag | Makrostress steigt gleichzeitig mit hohen Multiples und fehlenden EPS-Revisionen |
| Contrarian Watch | extreme Angst bei weiter robusten Unternehmensdaten |

Folgeanalysen melden kurz: Makro/Sentiment besser/schlechter/unveraendert/unklar, wichtigstes Signal, Gewichtung.
