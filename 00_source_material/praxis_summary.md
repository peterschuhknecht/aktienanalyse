# Quelle: praxis.pdf

Pfad: `/Users/ps/Downloads/praxis.pdf`

## Kernaussage

Die Praxis-PDF empfiehlt einen Markdown-basierten Wissensspeicher fuer KI-Agenten. Die Idee passt gut zu diesem Projekt, weil Markdown-Dateien:

- fuer Menschen lesbar und editierbar sind,
- per Git versionierbar sind,
- fuer LLMs gut parsebar sind,
- klare Zustaendigkeiten und Kontextgrenzen erlauben.

## Uebernommene Strukturidee

Die PDF unterscheidet vier Ebenen:

| Ebene | Zweck | Umsetzung in diesem Repository |
|---|---|---|
| Kommandozentrale | Agentenregeln und Einstieg | `AGENTS.md`, `START_HERE.md` |
| Statisches Wissen | Bewertungsmethode, Kennzahlen, Red-Flags | `01_knowledge/` |
| Dynamischer Kontext | Depot, Marktthese, Unternehmen | `02_context/` |
| Arbeitsspeicher | Aufgaben, offene Fragen, Log | `03_state/` |

## Anpassungen fuer dieses Aktienprojekt

Die Praxis-Struktur ist sinnvoll, aber fuer laufende Aktienanalyse fehlen drei Dinge:

1. Quellenebene: Alte Gespraechsinhalte muessen als Ursprung und nicht als aktuelle Wahrheit erkennbar sein.
2. Datenebene: Wiederkehrende Kennzahlen brauchen ein Schema, damit Folgeanalysen vergleichbar bleiben.
3. Reportebene: Fertige Snapshots sollten getrennt vom Arbeitszustand gespeichert werden.

Deshalb wurden zusaetzlich angelegt:

- `00_source_material/`
- `04_reports/`
- `05_data/`

