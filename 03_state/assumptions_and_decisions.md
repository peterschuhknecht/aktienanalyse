# Annahmen und Entscheidungen

## Aktuelle Entscheidungen

- 2026-07-01: Gesamtdepot KOMPLETT verkauft -> 100% Cash EUR 243.288,43 (netto nach Steuern; realisiert +62,2% vs 150k-Basis vom 22.04.2026). Timing-Entscheid des Nutzers (Seitwaerts-/Abwaertsbewegung trotz These), KEIN These-Bruch.
- 2026-07-02: Wiedereinstieg entschieden - voll investiert, KEINE Cash-Reserve, Einmal-Entry am klugen Zeitpunkt (payrolls-gated), 3 Namen: Micron 35% / SK Hynix 33% / SanDisk 32%. Kioxia raus aus den Hauptaktien -> NAND-Watch (SanDisk-Swap-Kandidat im gleichen Bucket). Regeln: `02_context/portfolio_policy.md`.
- 2026-07-02: Stehende Verkaufsregel = Zyklus-Turn-Exit (DRAM/NAND-Contract-Preise rollen QoQ, Margen-Guidance-Kuerzung, negative EPS-Revisionen) plus Giveback -15/-25% ab NEUEM Trailing-Peak. Kein Verkauf auf Kurs-Wackeln; kein Verbilligen gegen Zyklussignale.
- 2026-07-02 (Methodik, Nutzerwunsch): Ziel ist ALPHA vs Breitmarkt (S&P 500/Nasdaq 100), nicht nur These-Fit. Kursbewegungen ohne saubere News-Erklaerung ehrlich als "unerklaert" bzw. neutrale Mechanik (Gewinnmitnahme) fuehren - keine erzwungenen Narrative (Details `01_knowledge/source_quality.md`).
- Historisch: aktives 4-Namen-Depot 2026-06-02 bis 2026-07-01 (SK Hynix, Micron, SanDisk, Kioxia); Seagate zuvor verkauft.
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
