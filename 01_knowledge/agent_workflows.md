# Agenten-Workflows

## Repository-Rundgang

Pflicht bei aktueller Lage, Zukunft, Depot, Kauf/Verkauf, Watchlist, Bewertung oder Branchenanalyse.

1. Inventar knapp: `rg --files -g '*.md' -g '*.csv'`.
2. Kern lesen: `START_HERE.md`, `AGENTS.md`, Depot/Policy, Marktthese, Boom-Status, passende Watchlists, `03_state/*`.
3. CSV zuerst lesen: `05_data/covered_symbols.csv`, `latest_quotes.csv`, `latest_news.csv`, `upcoming_events.csv`, `monitoring_status.csv`, `macro_market_signals.csv`, `peer_benchmarks.csv`, `data_quality_checks.csv`.
4. Nur relevante Unternehmensakten aus `02_context/companies/` lesen; bei Depotfragen alle vier aktiven Akten.
5. Frische Kurse/News/Fundamentaldaten aus hochwertigen Quellen holen und in CSV speichern.
6. Bei Bewertung/Depotentscheidung Quality Gate manuell in `05_data/data_quality_checks.csv`, `source_conflicts.csv` und `decision_gate_results.csv` pruefen.
7. Nur echte These-, Risiko-, Entscheidungs- oder Datenqualitaetswechsel in Markdown verdichten.
8. Reports nach 7-14 Tagen als CSV-/Log-Zeile archivieren; lange Report-Historien vermeiden.

## Daily-Brief-Workflow

Trigger: Daily Brief, Neuigkeiten, Cockpit, Statusseite, Kurzlage.

1. Scope: relevante Symbole, Depot, Watchlists und offene P0-Fragen bestimmen.
2. Frische Daten: Kurse, News, Events, Makro, Fundamentals, Operator-Signale und Branchenindikatoren pruefen.
3. Schreiben: CSV-Caches aktualisieren; Markdown nur bei Entscheidung/These/Red-Flag.
4. Gate: `data_quality_checks.csv` und `source_conflicts.csv` pruefen; Blocker/Warnungen nennen.
5. Ausgabe im Chat: Kurzfassung, Fakten, Einordnung, Rahmenbedingungen, Termine heute plus fuenf Kalendertage, Depotbewegung, Datenluecken.

## Bewertungsfragen

- Minimum Data Pack aus `01_knowledge/deep_dive_framework.md`.
- Aktuell neu pruefen: Kurs, Market Cap, TTM/Forward-KGV, Umsatz-/EPS-Wachstum, PEG, Margen, FCF, Guidance, naechste Termine, Peer-Daten.
- Analysten-Kursziele sind Meinung; nur mit nachvollziehbaren EPS-/Umsatz-/Marge-/FCF-Revisionen hoeher gewichten.
- These nur bei harten Daten aendern: Zahlen, Guidance, Preise/ASPs, Margen, Kapazitaet/Yield, Kunden/LTAs/Backlog/Design-Wins, Revisionen, Regulierung, Makro-/Kreditstress.

## Portfolio-Fragen

- Zusaetzlich `01_knowledge/portfolio_risk_framework.md`, `02_context/portfolio_policy.md`, `05_data/portfolio_positions.csv`, `05_data/portfolio_risk_limits.csv`.
- Immer nennen: Konzentration, Korrelation, Waehrung, Liquiditaet, Katalysatorrisiko, Opportunity Cost, fehlende Nutzerdaten.
- Ergebnis als Szenario/Pruefung formulieren, nie als Gewissheit.

## Kontextbudget

- Datei-Lesen mit `rg`, `sed -n`, `wc -l`, `head`.
- Keine langen Dumps. CSV-Zeilen statt Markdown-Tabellen laden.
- Markdown knapp halten; historische Tagesketten und alte Reports ins CSV-/Log-Archiv verdichten.
