# Datenarchitektur

Aktueller Zielzustand: CSV-only plus sehr kurzes Markdown.

- Keine lokale oder serverbasierte Datenbank.
- Keine Datenbank- oder Python-Pflichttools.
- CSV `05_data/*.csv` und thematische CSVs in `02_context/`: aktuelle strukturierte Caches, Quality Gate, Entscheidungen, Laufprotokoll.
- Markdown: nur Regeln, These, Scorecards, Entscheidungen, offene Fragen, Reports.
- Keine Sammel-README in `05_data`; Nutzung und Schema bleiben getrennt in `csv_data_usage.md` und `csv_data_schema.md`.
- Alte Reports nach 7-14 Tagen in CSV/Log verdichten.

Praktische Regel: Alles Wiederholbare oder Tabellarische in CSV; alles Interpretative kurz in Markdown. Lange Tageshistorien archivieren oder in `evaluation_log.md` verdichten.
