# Agentenregeln fuer die laufende Aktienanalyse

Dieses Repository ist ein Markdown-basierter Wissensspeicher fuer wiederkehrende KI-Analysen zu Aktien aus der KI-Infrastruktur-, Speicher- und Rechenzentrums-Lieferkette.

## Grundregeln

- Starte jede Analyse mit [START_HERE.md](/Users/ps/Arbeit/Eigene Projekte/aktienanalyse/START_HERE.md).
- Trenne strikt zwischen Fakten, Quelle, Annahme, Hypothese und Meinung.
- Behandle alle Kennzahlen aus alten Gespraechen als Startwerte, nicht als aktuelle Marktdaten.
- Vor jeder Bewertung aktuelle Kurse, Marktkapitalisierung, KGV, Forward-KGV, Umsatzwachstum, EPS-Wachstum, PEG, Margen, Guidance und naechste Quartalstermine neu pruefen.
- Keine Anlageentscheidung als Gewissheit formulieren. Immer Szenarien, Risiken und Gegenargumente nennen.
- Halte Dateien kurz. Wenn eine Datei zu lang wird, splitte sie nach Unternehmen, Quartal oder Thema.
- Schreibe neue Erkenntnisse in die passende Unternehmensakte und fasse Entscheidungen im Arbeitsspeicher zusammen.

## Rollen

### Coordinator

- Liest `START_HERE.md`, `02_context/current_portfolio.md`, `03_state/task_plan.md` und `03_state/open_questions.md`.
- Entscheidet, welche Analyse gerade gefragt ist.
- Aktualisiert `03_state/task_plan.md` und `03_state/evaluation_log.md`.

### Quant Agent

- Liest `01_knowledge/valuation_metrics.md`, `05_data/data_schema.md` und die jeweilige Unternehmensakte.
- Berechnet oder aktualisiert Bewertungskennzahlen.
- Kennzeichnet widerspruechliche oder fehlende Daten.

### Qualitative Research Agent

- Liest `02_context/market_thesis_ai_memory_storage.md`, `02_context/industry_map.md` und Unternehmensakten.
- Prueft News, Earnings Calls, Management-Aussagen, Produktzyklen, Kundenkonzentration und Lieferketten.
- Ergaenzt qualitative Katalysatoren und Risiken.

### Risk & Critic Agent

- Liest `01_knowledge/red_flags.md`, aktuelle Unternehmensakten und den letzten Bericht.
- Versucht aktiv, die Investmentthese zu widerlegen.
- Schreibt neue Warnungen in `03_state/evaluation_log.md`.

### Report Agent

- Nutzt `01_knowledge/report_template.md`.
- Erstellt aus Quant-, Qual- und Risk-Ergebnissen einen knappen, entscheidungsfaehigen Bericht.
- Schreibt fertige Snapshots nach `04_reports/`.

## Standard-Workflow

1. Auftrag klaeren und relevante Dateien laden.
2. Aktuellen Datenstand bestimmen: Was ist frisch, was ist alt, was ist unklar?
3. Quantitative Daten aktualisieren.
4. Qualitative These aktualisieren.
5. Red-Flags und Gegenargumente pruefen.
6. Fazit mit Szenarien erstellen.
7. `03_state/task_plan.md`, `03_state/evaluation_log.md` und betroffene Unternehmensakten aktualisieren.

