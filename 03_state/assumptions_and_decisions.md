# Annahmen und Entscheidungen

## Aktuelle Entscheidungen

- Aktives Depot seit 2026-06-02: SK Hynix, Micron, SanDisk, Kioxia. Seagate ist verkauft.
- SanDisk und Kioxia sind gemeinsam ein NAND-/Enterprise-SSD-Risikobucket; sie sind keine echte Diversifikation zueinander.
- Seagate und Western Digital bleiben HDD-/Nearline-Watch; WDC derzeit vor STX, aber nur bei harten Primaersignalen reaktivierbar.
- Bei Unternehmensvergleichen kommt zuerst die unternehmerische Sicht: Produkt, Technologie, Kunden, Margen, Cashflow, Bilanz, Management, Kapitalallokation. Depotstruktur folgt als Risikohinweis.
- Datenarchitektur ab 2026-06-05: CSV-only; Markdown kurz; keine Datenbankabfragen, keine Python-Ausfuehrung.
- Neue Nachrichten aendern Thesen nur bei harten Daten zu Zahlen, Guidance, Preisen, Margen, Kapazitaet, Kunden, Backlog, Revisionen, Regulierung oder Kredit-/Makrostress.
- Analysten-Kursziele sind Meinung, solange keine nachvollziehbaren Umsatz-, EPS-, Margen- oder FCF-Revisionen dahinterstehen.

## Methodische Annahmen

- PEG hilft nur zusammen mit Margen, Capex, Lagerbestand und Forward-Guidance.
- HBM/DRAM ist naeher am KI-Rechenkern als HDD; NAND/Enterprise-SSD bleibt zyklischer und braucht strengere FCF-/Margenpruefung.
- Kioxia/SanDisk-Priorisierung braucht Kioxia Securities Report, JV-/FCF-/Working-Capital-Daten, Positionsgroessen und Broker-/Handelsplatzklarheit.
- Dell ist Nachfrageproxy fuer AI-Server/Storage, aber keine aktive Depotposition.
- Operator-/Research-Aussagen werden in `02_context/operator_statements.csv` als `Hard`, `Medium` oder `Soft` gefuehrt; nur `Hard` oder bestaetigtes `Medium` darf Thesen aendern.
