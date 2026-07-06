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

## Kausalattribution (Kurs-News-Abgleich)

Kursbewegungen NICHT mit gesuchten Nachrichten begruenden (kein Reverse-Engineering einer Story, damit es "passt"). Nutzerfeedback 2026-07-02: Hormuz wurde oft als Kursursache genannt, obwohl es keine besondere Nachricht dazu gab - und an Tagen mit negativen Hormuz-News stiegen die Kurse. Regeln:

- Kausalzuordnung nur, wenn (a) eine echte, hochwertige, zeitlich passende Nachricht vorliegt (Rang 1-5) UND (b) die Bewegung breit dazu passt: Richtung, ungefaehre Groesse, betroffene Werte/Peers.
- Ohne solche Nachricht offen sagen: "keine saubere Nachrichtenerklaerung". Falls plausibel neutrale Marktmechanik als VERMUTUNG nennen (Gewinnmitnahme, Positionsabbau, Rotation, Index-/Rebalancing, Liquiditaet, Options-Verfall) - nie als Fakt.
- Widerspruchstest: Soll dieselbe Nachricht mal fallende, mal steigende Kurse "erklaeren", taugt sie NICHT als Ursache -> verwerfen.
- Dauerthemen (Hormuz/Oel, Zinsen allgemein) nur nennen, wenn an dem Tag eine NEUE, harte Entwicklung vorliegt und der zugehoerige Markt real reagiert (z. B. Oelpreis bewegt sich tatsaechlich) - nicht als Standard-Etikett.
- Lieber ehrlich "unerklaert" als eine erzwungene Erzaehlung. These aendert sich ohnehin nur an harten Daten, nicht an Tagesnarrativen.
