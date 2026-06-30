# Macro Market Signals

Aktuelle Werte: `05_data/macro_market_signals.csv`; Historie nur verdichtet in CSV-Archiv/Log.

## Gewichtung

- Fundamental: US 2Y/10Y, 10Y-Realzins, Yield Curve, Fed-Erwartungen, NFCI, HY OAS, USD.
- Timing/Crowding: VIX, Fear & Greed, AAII, FINRA Margin Debt.
- Unternehmensdaten, Preise, Margen und Guidance wiegen hoeher als Sentiment. Makro kippt Thesen nur bei echtem Zins-, Kredit-, USD- oder Liquiditaetsstress.

## Pflichtquellen

FRED/U.S. Treasury, CME FedWatch/FOMC, Chicago Fed NFCI, FRED HY OAS, Cboe VIX, CNN Fear & Greed, AAII, FINRA Margin Statistics.

Aktuelle Werte (10Y/2Y/Realzins, Spreads, VIX, Datum) stehen ausschliesslich in `05_data/macro_market_signals.csv`; hier bewusst keine Zahlen, um veraltete Staende zu vermeiden.

## Statuslogik

| Status | Bedeutung |
|---|---|
| Besser | Zinsen/Realzinsen stabil/fallend, Spreads stabil, NFCI locker, VIX ruhig |
| Unveraendert | gemischt ohne klaren Stress oder klare Entspannung |
| Schlechter | Realzins/10Y/Fed-Erwartungen/USD/VIX/Spreads verschlechtern sich |
| Red Flag | Makrostress steigt gleichzeitig mit hohen Multiples und fehlenden EPS-Revisionen |
| Contrarian Watch | extreme Angst bei weiter robusten Unternehmensdaten |

Folgeanalysen melden kurz: Makro/Sentiment besser/schlechter/unveraendert/unklar, wichtigstes Signal, Gewichtung.
