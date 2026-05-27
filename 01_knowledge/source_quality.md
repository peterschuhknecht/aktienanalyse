# Quellenqualitaet und Verifikation

## Quellenhierarchie

| Rang | Quelle | Verwendung |
|---:|---|---|
| 1 | Unternehmensberichte, 10-K/10-Q, Investor Relations, Earnings Call Transcripts | Primaere Fakten |
| 2 | Boersenmeldungen, SEC/EDGAR, offizielle Boersenmitteilungen | Struktur, Termine, Pflichtdaten |
| 3 | Hochwertige Nachrichtenagenturen und etablierte Finanzmedien, z. B. Reuters, Bloomberg, AP, Financial Times, Wall Street Journal, Nikkei, CNBC, Handelsblatt | Katalysatoren, Managementaussagen, Marktereignisse |
| 4 | Glaubwuerdige Analystenberichte und institutionelle Branchenquellen, z. B. Gartner, TrendForce, Omdia, IDC, SemiAnalysis, TechInsights, ASML/SEMI-Kontext | Erwartungen, Supply-Chain- und Marktkonsens |
| 5 | Finanzdatenanbieter mit nachvollziehbarer Methodik, z. B. Boersenplaetze, Nasdaq/NYSE/KRX, StockAnalysis, Koyfin, FactSet, S&P Capital IQ, Refinitiv | Kurse und Kennzahlen, aber immer Datum notieren |
| 6 | Fachmedien mit technischer Spezialisierung, z. B. Tom's Hardware, AnandTech, The Register, ServeTheHome, Blocks & Files, StorageNewsletter | Technische Einordnung und Fruehsignale; moeglichst mit Primaerquelle gegenpruefen |
| 7 | Sonstige Nachrichtenartikel, Blogs, Aggregatoren, Social Media, YouTube, Reddit | Nur als Hinweis oder Suchspur, nicht als belastbare Hauptquelle |
| 8 | Alte KI-Gespraeche | Nur als Hypothesen und Denkspur |

## Harte Quellenregel

- Bei jeder Recherche zuerst hochwertige und glaubwuerdige Quellen verwenden.
- Primaerquellen haben Vorrang vor Zusammenfassungen.
- Aggregatoren, Blogs, Foren, Social Media und KI-generierte Inhalte duerfen nur als Hinweis genutzt werden, nicht als alleinige Grundlage fuer eine Bewertung.
- Analysten-Kursziele sind keine Fakten, sondern Meinungen oder Schaetzungen. Immer vom berichteten Ist-Zustand trennen.
- Wenn eine Meldung nur ueber eine schwache Quelle auffindbar ist, muss sie als "unbestaetigt" oder "niedrige Quellenqualitaet" markiert werden.
- Sensible Aussagen zu Bewertung, Guidance, Liefervertraegen, Kapazitaeten oder Margen sollen nach Moeglichkeit durch Unternehmensquelle, Boersenmeldung, hochwertige Nachrichtenagentur oder mehrere unabhaengige Quellen bestaetigt werden.

## Pflichtangaben fuer neue Daten

Jede neu eingetragene Kennzahl sollte enthalten:

- Quelle,
- Datum der Quelle,
- Zeitraum der Kennzahl,
- ob TTM, Forward oder Konsens,
- ob berechnet oder uebernommen.

## Umgang mit Widerspruechen

Wenn zwei Quellen voneinander abweichen:

1. Beide Werte mit Quelle notieren.
2. Primaerquelle bevorzugen.
3. Berechnung offenlegen.
4. In `03_state/open_questions.md` festhalten, wenn der Konflikt nicht geloest werden kann.
