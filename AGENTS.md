# Agentenregeln fuer die laufende Aktienanalyse

Erst `START_HERE.md` lesen. Fakten, Quellen, Annahmen, Hypothesen und Meinungen strikt trennen. Alte Zahlen sind Seeds, nie aktuelle Marktdaten.

## Pflichtregeln

- Keine Datenbankabfragen und keine Python-Ausfuehrung.
- CSV zuerst: strukturierte Daten in `05_data/*.csv` und thematischen CSVs in `02_context/`.
- Markdown nur fuer Regeln, These, Entscheidungen, offene Fragen und kurze Reports.
- Kurzkommando: Wenn der Nutzer nur `start` schreibt, den vollstaendigen Repository-Rundgang plus Daily-Brief-Workflow wie bei "Gibt es Neuigkeiten?" ausfuehren.
- `start`-Antwort im gewohnten Daily-Brief-Chatformat ausgeben: `Depot-Ampel:`, `Kurzfassung:`, `Fakten:`, `Datenluecken/Source-Konflikte:`, `Einordnung:`, `Termine Heute:`, `Naechste fuenf Kalendertage:`, `Datenqualitaet/Bewegung:`, `Psychologische Einschaetzung:`, `Weitere Infos:`, `Quellen:`.
- Kleinfrage: gezielt lesen. Depot, Bewertung, Watchlist, Zukunft, Warnsignal oder Branchenanalyse: `01_knowledge/agent_workflows.md`.
- Bewertung: frische Kurse, Market Cap, KGV/Forward-KGV, Wachstum, PEG, Margen, Guidance, Termine, Peers und `05_data/data_quality_checks.csv`.
- Kauf/Verkauf/Nachkauf/Reduktion/Umschichtung: zusaetzlich `01_knowledge/portfolio_risk_framework.md` und `02_context/portfolio_policy.md`.
- Immer `05_data/upcoming_events.csv` pruefen und Termine heute plus fuenf Kalendertage melden.
- Bei jeder Auswertung fuer alle aktiven Depotwerte die wichtigen Nachrichten von heute plus den letzten drei Kalendertagen aus `05_data/latest_news.csv` zusammenfassen; nur relevante Primaer-/hochwertige Quellen als Fakten werten, schwache Quellen als Suchspur markieren.
- Jede Auswertung beginnt mit der Depot-Ampel/Ampel-Einschaetzung, z.B. fundamental/timing und kurze Begruendung. Reine Kursbewegungen der vier aktiven Depotwerte gehoeren nicht in `Fakten`, wenn der Nutzer sie selbst beobachtet; sie nur bei echter These-, Risiko- oder Handlungsrelevanz nennen.
- Kein eigener Abschnitt `Depotbewegung`; Bewegungs-/Momentumdaten nur knapp in Einordnung, Datenqualitaet oder Entscheidungspruefung verwenden, wenn sie fuer Risiko oder Handlungsszenario relevant sind.
- Kein eigener Abschnitt `Depot-Newsfenster`; Pflicht-News der aktiven Depotwerte aus heute plus den letzten drei Kalendertagen in `Fakten` und `Einordnung` integrieren.
- Quellenqualitaet nach `01_knowledge/source_quality.md`; schwache Quellen nur als Suchspur markieren.
- Operator-/Research-Aussagen in `02_context/operator_statements.csv`; nur `Hard` oder bestaetigtes `Medium` darf Thesen aendern.
- Reports nach 7-14 Tagen in CSV/Log verdichten; lange Markdown-Historien vermeiden.
- Abschluss: CSV-Caches, relevante Akte, `03_state/evaluation_log.md`, `03_state/task_plan.md` und offene Fragen nur bei echter Aenderung aktualisieren.
- Vor dem Fazit Datenluecken, offene P0-Fragen und Source-Konflikte nennen.
- Fachbegriffe in Chat-Berichten kurz in Klammern erklaeren, z.B. Realzins (Zins nach Inflation), Guidance (Unternehmensausblick), Credit Spread (Risikoaufschlag fuer Unternehmensanleihen).

## Fokus

Aktives Depot seit 2026-06-02: SK Hynix, Micron, SanDisk, Kioxia. SanDisk/Kioxia = gemeinsamer NAND-/Enterprise-SSD-Bucket. Seagate ist verkauft; Seagate/WDC bleiben HDD-/Nearline-Watch.
