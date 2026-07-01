# Quellenqualitaet

## Hierarchie

| Rang | Quelle | Nutzung |
|---:|---|---|
| 1 | Unternehmensberichte, IR, Earnings Calls, 10-K/10-Q | Primaere Fakten |
| 2 | SEC/Boersenmeldungen/offizielle Eventseiten | Struktur, Termine, Pflichtdaten |
| 3 | Reuters, Bloomberg, AP, FT, WSJ, Nikkei, CNBC, Handelsblatt | Katalysatoren/Marktereignisse |
| 4 | TrendForce, Omdia, IDC, Gartner, SemiAnalysis, TechInsights, SEMI/SIA | Branchen-/Supply-Chain-Daten |
| 5 | FRED, U.S. Treasury, Fed/FOMC, CME FedWatch, Chicago Fed, Cboe, FINRA | Makro/Finanzbedingungen |
| 6 | Boersenplaetze/Finanzdatenanbieter | Kurse/Kennzahlen mit Datum |
| 7 | Fachmedien | technische Suchspur, moeglichst gegenpruefen |
| 8 | Blogs, Social, Foren, Aggregatoren | nur Hinweis; nicht alleinige Grundlage |
| 9 | Alte KI-Gespraeche | nur Hypothesen |

## Quellen-Rangfolge je Datentyp

Bei Konflikt gilt die hoechste verfuegbare Quelle. Reihenfolge je Datentyp:

| Datentyp | Rangfolge (zuerst = bevorzugt) |
|---|---|
| Kurs/Schlusskurs | Heimatboerse (KRX, TSE, Nasdaq/NYSE) / IR > etablierter Finanzdatenanbieter > Aggregator |
| FX | eine feste Referenz (z. B. ECB/Fed H.10 oder ein Anbieter) konsistent ueber alle Werte |
| Fundamentaldaten/Guidance | 10-K/10-Q/IR/Earnings Call > Boersenmeldung > Wirtschaftspresse |
| Makro/Zinsen | FRED/U.S. Treasury/Fed/FOMC/CME FedWatch > Presse |
| Branche (HBM/NAND/Preise) | TrendForce/Omdia/IDC/SemiAnalysis > Fachmedien |
| News/Katalysator | Reuters/Bloomberg/AP/FT/WSJ/Nikkei > Aggregatoren |

Konfliktregeln: 1) hoechstrangige Quelle gewinnt; 2) bei gleichem Rang Settled/Close vor Intraday und juengeres Datum vor aelterem; 3) ungeloeste Konflikte in `05_data/source_conflicts.csv` (Status `open`) mit `next_action` fuehren, bis primaer gegengeprueft; 4) genutzter Wert + Konflikt im Report offenlegen.

## Regeln

Primaerquellen vor Zusammenfassungen. Analystenziele sind Meinung. Sentiment-Indizes sind Timing, keine Fundamentaldaten. Widersprueche mit beiden Quellen notieren, Primaerquelle bevorzugen, Berechnung offenlegen, offene Konflikte in `03_state/open_questions.md`.
