# Macro Market Signals

Stand: 2026-06-02.

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

## Aktueller Datenpunkt 2026-06-02

| Signal | Wert | Datenstand | Richtung | Gewichtung |
|---|---:|---|---|---|
| US 10Y Treasury Yield | 4.47% | 2026-06-01 | Hoch, +2 bp gegen 2026-05-29; bleibt Bewertungsgegenwind | Fundamental |
| US 2Y Treasury Yield | 4.05% | 2026-06-01 | Hoeher als 3.98% am 2026-05-29; hawkisheres Timing-/Bewertungssignal | Fundamental |
| US 10Y Real Yield | 2.07% | 2026-06-01 | Hoch und unveraendert zu 2026-05-29 | Fundamental |
| High Yield OAS | 2.74% | 2026-05-31 | Minimal breiter als 2.72%, aber weiter kein Kreditstress | Fundamental |
| Chicago Fed NFCI | -0.510 | 2026-05-22 | Locker, weitgehend unveraendert | Fundamental |
| ICE US Dollar Index | 99.22 | 2026-05-27, YCharts | Kein neues USD-Stresssignal; Sekundaerquelle | Fundamental/Timing |
| VIXCLS | 15.32 | 2026-05-29, FRED | Ruhig, kein Volatilitaetsstress | Timing/Crowding |
| Fear & Greed, AAII, FINRA Margin Debt | Nicht neu belastbar verifiziert | 2026-05-30 | Unklar | Timing/Crowding |
| China Manufacturing PMI | 50.0 | 2026-05-31 fuer Mai 2026 | Leicht schlechter; Produktion expandiert, neue Auftraege knapp unter 50 | Fundamental/Suchspur fuer Weltwirtschaft |
| Hormuz-/Iran-Energierisiko | Erhoeht, aber datenabhaengig | 2026-05-31 | Makro-/Inflationsrisiko bleibt aktiv; moegliche Entspannung durch Deal-Hoffnungen, aber Navigation/Versorgung nicht normalisiert | Fundamental/Timing |

Einordnung: Makro/Sentiment ist fuer den aktuellen Kontext-Radar neutral bis gelb. Kreditstress, VIX und NFCI senden kein akutes Red-Flag-Signal, aber der 2Y- und 10Y-Anstieg am 2026-06-01 sowie der unveraendert hohe 10Y-Realzins von 2.07% begrenzen Multiple-Ausweitung in AI-/Halbleiterwerten. Die Woche bleibt datengetrieben: JOLTS, ISM Services, Beige Book, Eurozonen-Inflation/GDP und US-Payrolls bereiten die naechsten Zinsentscheidungen vor, obwohl Fed/ECB selbst erst spaeter im Juni entscheiden.

### Refresh-Notiz 2026-06-02 06:47 CEST

Offizielle U.S.-Treasury-Daten per 2026-06-01: US 10Y 4.47%, US 2Y 4.05%, 10Y Real Yield 2.07%. FRED zeigt HY OAS 2.74% per 2026-05-31, VIXCLS 15.32 per 2026-05-29 und NFCI -0.510 per 2026-05-22. Makro-Ampel: neutral bis gelb. Kein Kreditstress, aber hoeherer nominaler Zins und hoher Realzins bleiben Bewertungsgegenwind fuer hoch gelaufene AI-/Memory-/Infrastrukturwerte.

### Refresh-Notiz 2026-05-31 17:43 CEST

U.S.-Treasury-Daten bleiben wegen Wochenende beim offiziellen Stand 2026-05-29: US 10Y 4.45%, US 2Y 3.98% und 10Y Real Yield 2.07%. FRED zeigte HY OAS 2.72% per 2026-05-28, NFCI -0.510 per 2026-05-22 und VIXCLS 15.74 per 2026-05-28. Chinas offizieller PMI fuer Mai fiel auf 50.0, mit neuen Auftraegen bei 49.9. Die naechste Woche enthaelt keine Fed- oder ECB-Zinsentscheidung; wichtige Zinsentscheidungen folgen ab 2026-06-10/11 (BoC/ECB) und 2026-06-16/17 (Fed). Makro-Ampel: neutral bis gemischt, mit positiver Kredit-/Volatilitaetslage, aber hohen Realzinsen, Energie-/Hormuzrisiko und weicherem China-Nachfragesignal.

### Refresh-Notiz 2026-06-01 06:12 CEST

Zum Wochenstart gibt es noch keinen neueren offiziellen US-Zinsdatensatz als 2026-05-29 und keine neue Kreditstress-Bestaetigung nach dem bestehenden FRED-Cache. Die Woche ist datengetrieben: ISM Manufacturing am 2026-06-01, Eurozone-HICP und JOLTS am 2026-06-02, ISM Services und Beige Book am 2026-06-03, Productivity/Claims am 2026-06-04 und US Payrolls am 2026-06-05. Makro-Ampel bleibt neutral bis gemischt: kein akuter Kreditstress, aber hohe Realzinsen, China-PMI 50.0 und Energie-/Hormuzrisiko begrenzen Multiple-Ausweitung.

### Refresh-Notiz 2026-06-01 06:34 CEST

Kein neuer offizieller US-Zins-, Realzins-, HY-OAS-, NFCI- oder VIX-Datenpunkt nach dem bestehenden Stand: U.S. Treasury per 2026-05-29 zeigt US 10Y 4.45%, US 2Y 3.98% und 10Y Real Yield 2.07%; FRED zeigt HY OAS 2.72% per 2026-05-28, NFCI -0.510 per 2026-05-22 und VIXCLS 15.74 per 2026-05-28. Neu ist ein regulatorisches Risiko: Reuters berichtet, dass das U.S. Department of Commerce die Lizenzpflicht fuer fortgeschrittene AI-Chips an chinesisch kontrollierte Auslands-Tochterfirmen klarstellt. Das ist kein klassisches Makro-Kreditstresssignal, kann aber China-Capex, GPU-/Accelerator-Lieferketten und Risikoappetit fuer AI-Hardware belasten. Makro-Ampel bleibt neutral bis gemischt.

### Refresh-Notiz 2026-06-01 08:14 CEST

Erneut geprueft: Es gibt zum Wochenstart noch keinen neueren offiziellen US-Zins-/Realzins-Datenpunkt als U.S. Treasury 2026-05-29 und keinen neueren FRED-HY-OAS-/NFCI-/VIX-Datenpunkt als im bestehenden Cache. Die Makro-Ampel bleibt neutral bis gemischt: kein akuter Kreditstress, aber hohe Realzinsen, China-PMI 50.0, Energie-/Hormuzrisiko und Exportkontroll-Watch begrenzen die Bewertungstoleranz.

### Refresh-Notiz 2026-06-01 08:47 CEST

Fuer den Wochenueberblick erneut geprueft: Der aktuell verwendete offizielle US-Zinsstand bleibt U.S. Treasury per 2026-05-29 mit US 10Y 4.45%, US 2Y 3.98% und 10Y Real Yield 2.07%. Kreditstressdaten bleiben beim FRED-Cache: HY OAS 2.72% per 2026-05-28, NFCI -0.510 per 2026-05-22 und VIXCLS 15.74 per 2026-05-28. Keine neue Makro-Ampel-Aenderung gegenueber 08:14 CEST.

### Refresh-Notiz 2026-06-01 14:11 CEST

U.S. Treasury wurde erneut gegen den offiziellen 2026-05-29-Datenstand geprueft: US 10Y 4.45%, US 2Y 3.98% und 10Y Real Yield 2.07%. FRED zeigt VIXCLS 15.74 per 2026-05-28; HY OAS und NFCI bleiben beim bestehenden Cache. Der ISM Manufacturing PMI (US-Einkaufsmanagerindex) steht heute um 10:00 ET noch als frischer Makrotrigger aus. Makro-Ampel bleibt neutral bis gemischt: kein Kredit-/Volatilitaetsstress, aber hohe Realzinsen, Energie-/Hormuzrisiko, Exportkontroll-Watch und sehr hohes AI-Crowding begrenzen die Bewertungstoleranz.

### Refresh-Notiz 2026-05-29 10:05 CEST

U.S.-Treasury-Daten wurden erneut geprueft; aktuellster voll sichtbarer Datenstand bleibt 2026-05-28: US 10Y 4.45%, US 2Y 3.99% und 10Y Real Yield 2.06%. Keine Aenderung der Makro-Ampel: leicht besser als 2026-05-26, aber absolut hohe Realzinsen bleiben Bewertungsgegenwind. HY OAS und NFCI bleiben beim letzten FRED-Cache ohne Kreditstresssignal.

### Refresh-Notiz 2026-05-29 14:16 CEST

Vor US-Handelsstart liegt kein neuer offizieller U.S.-Treasury-Tagesdatensatz nach 2026-05-28 vor. Makro-Ampel bleibt unveraendert zum 10:05-Lauf: leicht besser als 2026-05-26, aber nicht risikolos. Realzinsen bleiben hoch; HY OAS und NFCI senden nach letztem Cache kein neues Kreditstresssignal.

### Refresh-Notiz 2026-05-30 08:08 CEST

U.S.-Treasury-Daten wurden fuer den 2026-05-29 geprueft: US 10Y 4.45%, US 2Y 3.98% und 10Y Real Yield 2.07%. Gegenueber 2026-05-28 ist der kurze Satz leicht niedriger, die 10Y unveraendert und die 10Y-Realrendite minimal hoeher. VIX wurde nur ueber Finanzdaten-Sekundaerquellen bei ca. 15.3 fuer 2026-05-29 verifiziert und zeigt kein Volatilitaetsstresssignal. Makro-Ampel: neutral bis leicht gemischt. Es gibt keinen neuen Zinsschock, aber Realzinsen bleiben absolut hoch und damit Bewertungsgegenwind fuer AI-/Halbleiter-Multiples. HY OAS und NFCI wurden nicht durch neuere belastbare Daten als den bestehenden Cache ersetzt.

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
