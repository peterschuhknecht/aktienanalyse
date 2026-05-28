# Macro Market Signals

Stand: 2026-05-28.

Zweck: Makro-, Liquiditaets- und Sentiment-Signale fuer KI-, Halbleiter- und Speicheranalysen erfassen. Diese Signale sind kein Ersatz fuer Unternehmensdaten, aber sie beeinflussen Bewertung, Risikoappetit, Finanzierungskosten und Timing.

## Einordnung

- Zinsen, Realzinsen, Yield Curve, Finanzbedingungen und Kreditspreads sind fundamental relevant, weil sie Diskontsatz, Bewertung von Wachstumsaktien, Capex-Finanzierung und Risikoappetit beeinflussen.
- VIX, Fear & Greed, AAII Sentiment und Margin Debt sind Timing- und Crowding-Signale. Sie koennen Euphorie oder Panik anzeigen, duerfen aber keine Investmentthese allein drehen.
- Bei Konflikt zwischen Makro-Sentiment und Unternehmensdaten gilt: Primaer Unternehmensdaten und harte Preis-/Marge-/Guidance-Daten hoeher gewichten; Sentiment nur als Risiko- oder Timing-Overlay nutzen.

## Pflichtindikatoren

| Signal | Bevorzugte Quelle | Warum es wichtig ist | Besser | Warnsignal |
|---|---|---|---|---|
| US 2Y Treasury Yield | FRED DGS2 / U.S. Treasury | Fed-Erwartungen und kurzfristiger Diskontsatz | stabil oder fallend bei intaktem Wachstum | starker Anstieg, besonders nach Inflationsdaten |
| US 10Y Treasury Yield | FRED DGS10 / U.S. Treasury | Diskontsatz fuer Langfristwachstum und AI-Multiple | stabil oder fallend | starker Anstieg belastet Growth-/AI-Multiples |
| Yield Curve 10Y-2Y | FRED T10Y2Y | Rezessions- und Zinsregime-Signal | Normalisierung ohne Kreditstress | tiefe Inversion oder schnelle Bear-Steepening-Bewegung |
| Yield Curve 10Y-3M | FRED T10Y3M | Rezessions- und Liquiditaetssignal | Normalisierung ohne Stress | tiefe Inversion oder starke Verschlechterung |
| 10Y Real Yield | FRED DFII10 | Bewertungsdruck fuer Wachstumsaktien | stabil oder fallend | Anstieg der Realrenditen bei hohen Multiples |
| Fed-Erwartungen | CME FedWatch, FOMC/SEP | Erwartete Zinspfade und Policy-Schocks | Zinssenkungserwartungen ohne Wachstumseinbruch | hawkisher Repricing-Schock |
| Chicago Fed NFCI | FRED NFCI / Chicago Fed | Breite Finanzbedingungen | locker oder entspannend | schnelle Verschlechterung der Finanzbedingungen |
| High Yield OAS | FRED BAMLH0A0HYM2 | Kreditstress und Risikoappetit | eng oder stabil | deutliche Spread-Ausweitung |
| VIX | Cboe | Volatilitaet und Stress | ruhig oder fallend | sprunghafter Anstieg, besonders mit fallenden Aktien |
| USD/Dollar-Index | FRED DTWEXBGS oder ICE DXY via Datenanbieter | Waehrungsdruck, globale Liquiditaet, KRW/JPY-Risiko | stabil oder moderat | starker USD-Anstieg belastet nicht-US-Werte und Risikoappetit |
| CNN Fear & Greed | CNN | Retail-/Markt-Crowding | neutral bis moderat gierig bei bestaetigten EPS-Revisionen | extreme Gier ohne Gewinnbestaetigung; extreme Angst nur als Timing-Signal |
| AAII Sentiment | AAII | Retail-Stimmungsbild | kein Extrem oder konstruktive Skepsis | extremes Bullishness-Crowding |
| FINRA Margin Debt | FINRA | Leverage im Aktienmarkt | moderat, nicht beschleunigend | schneller Anstieg plus Euphorie oder schneller Abbau mit Stress |

## Quellenlinks

| Bereich | Quelle |
|---|---|
| US 10Y | https://fred.stlouisfed.org/series/DGS10 |
| US 2Y | https://fred.stlouisfed.org/series/DGS2 |
| 10Y-2Y | https://fred.stlouisfed.org/series/T10Y2Y |
| 10Y-3M | https://fred.stlouisfed.org/series/T10Y3M |
| 10Y Real Yield | https://fred.stlouisfed.org/series/DFII10 |
| FedWatch | https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html |
| NFCI | https://fred.stlouisfed.org/series/NFCI |
| High Yield OAS | https://fred.stlouisfed.org/series/BAMLH0A0HYM2 |
| VIX | https://www.cboe.com/tradable-products/vix/ |
| Fear & Greed | https://edition.cnn.com/markets/fear-and-greed |
| AAII Sentiment | https://www.aaii.com/sentimentsurvey |
| FINRA Margin Debt | https://www.finra.org/rules-guidance/key-topics/margin-accounts/margin-statistics |

## Bewertungslogik

| Status | Bedeutung |
|---|---|
| Besser | Zinsen/Realzinsen stabil oder fallend, Kreditspreads stabil, NFCI locker, VIX ruhig, Sentiment nicht extrem euphorisch. |
| Unveraendert | Makro-Signale gemischt, aber ohne klaren Stress oder klare Entspannung. |
| Schlechter | Realzinsen oder 10Y steigen deutlich, Kreditspreads weiten sich, VIX steigt, USD zieht stark an oder Fed-Erwartungen werden hawkisher. |
| Red Flag | Makrostress verschlechtert sich gleichzeitig mit sehr hohen AI-/Halbleiter-Multiples und fehlenden EPS-Revisionen. |
| Contrarian Watch | Fear & Greed oder AAII zeigen extreme Angst, aber Unternehmensdaten, Speicherpreise und Guidance bleiben robust. |

## Ausgabe fuer Folgeanalysen

Bei echten Depot-, Branchen-, Watchlist- oder Zukunftsanalysen im Fazit kurz melden:

| Bereich | Status |
|---|---|
| Makro/Sentiment | besser, schlechter, unveraendert oder unklar |
| Wichtigstes Signal | z. B. Realzins, HY-Spreads, VIX, USD oder Fear & Greed |
| Gewichtung | fundamental, Timing/Crowding oder nur Suchspur |
