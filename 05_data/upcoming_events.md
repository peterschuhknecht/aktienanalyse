# Upcoming Events

Event-Cache: `05_data/upcoming_events.csv`.

Pflicht: bei jeder sachlichen Aktienantwort Termine heute plus naechste fuenf Kalendertage aus CSV nennen. Primaerquellen bevorzugen, erwartete/TBD-Termine klar markieren. Abgelaufene Events aus CSV entfernen oder in News/Log verdichten, wenn sie These, Risiko oder Katalysator beeinflusst haben.

Gewichtung: Spalte `depot_weight` = Depot-Wichtigkeit 0-10 (10 = extrem wichtig, 0 = extrem unwichtig). Richtwerte: 9-10 direkter Depot-Katalysator (Earnings einer Kernposition), 6-8 relevanter Makro-/Peer-Termin, 3-5 indirekt, 0-2 Randnotiz. In der Ausgabe gewichtete Terminuebersicht nach `depot_weight` sortiert (siehe `01_knowledge/agent_workflows.md`, Pflicht-Ausgabeblock).
