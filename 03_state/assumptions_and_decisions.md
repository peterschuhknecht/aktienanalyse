# Annahmen und Entscheidungen

## Aktuelle Entscheidungen

- Das aktuell relevante aktive Depot besteht aus SK Hynix, Micron und SanDisk; Seagate wurde laut Nutzerangabe am 2026-05-28 aus dem Depot genommen.
- Seagate und Western Digital werden als HDD-/Nearline-Beobachtungs- und Follow-on-Werte gefuehrt und bei jeder relevanten KI-Anfrage auf Veraenderungen geprueft.
- Western Digital und Samsung werden als Kontext/Watchlist gefuehrt, weil sie nicht in der aktuellen aktiven Nutzerliste stehen.
- Fuer neue Recherchen duerfen nur hochwertige und glaubwuerdige Quellen als Hauptgrundlage genutzt werden; schwache Quellen sind nur Suchspur und muessen markiert werden.
- Zahlen aus der Gespraechs-PDF werden als Seed-Hypothesen gefuehrt und nicht als aktuelle Marktwerte.
- Die Struktur aus `praxis.pdf` wurde erweitert, weil laufende Aktienanalyse Quellen-, Daten- und Reportebenen braucht.
- E-Mail-Alerts duerfen nur ueber einen zugelassenen/trusted Versandweg erfolgen. Im Kontext-Radar-Lauf 2026-05-28 wurde der Gmail-Versand an `info@apollu.de` als externer Export repository-basierter Analyse policy-seitig blockiert; ohne Freigabe wird kein Workaround versucht.
- Umfangreiche Analysen muessen ab 2026-05-29 das Deep-Dive-Framework mit Minimum Data Pack, Falsifikationspruefung und Peer-/Opportunity-Cost-Vergleich nutzen.
- Kauf-, Verkauf-, Nachkauf-, Reduktions- und Umschichtungsfragen muessen ab 2026-05-29 das Portfolio-Risiko-Framework und `02_context/portfolio_policy.md` nutzen.
- Eine neue Nachricht aendert die These nur, wenn sie harte Daten zu Zahlen, Guidance, Preisen, Margen, Kapazitaet, Kunden, Backlog, EPS-/Umsatzrevisionen, Regulierung oder Makro-/Kreditstress betrifft.
- Analysten-Kursziele bleiben Meinung und werden ohne nachvollziehbare EPS-, Umsatz-, Margen- oder FCF-Revisionen nicht als harte Fundamentaldaten behandelt.
- Dell Technologies wird ab 2026-05-30 als Hintergrund-/Nachfrageproxy fuer AI-Server, Storage und Datacenter-Infrastruktur gefuehrt, nicht als aktive Depotposition oder priorisierter Kaufkandidat.
- Entscheidung 2026-05-30 08:18 CEST: Dell soll aktiv beobachtet, aber vorerst nicht in das Depot aufgenommen werden. Begruendung: harter AI-Server-Nachfragebeleg, aber nach +32.76% Tagesbewegung nahe 52W-Hoch und als Server-/Systemintegrator weniger direkter Knappheits- und Margenhebel als HBM/DRAM/NAND-Depotwerte.
- Update 2026-05-31 17:43 CEST: Der Dell-Q1-FY2027-Transcript gilt als harter Supply-Chain-Readthrough, weil Dell Memory als primaere Komponentengrenze nennt und DRAM/NAND/Hard Drives als Engpassfelder einordnet. Das bestaetigt die AI-Memory-/Storage-These, ersetzt aber keine direkten Speicherpreis-, Margen-, EPS- oder FCF-Daten der Depotwerte.
- Entscheidung 2026-05-30: Die Datenarchitektur ist ein Hybrid. Markdown bleibt Thesen-, Kontext- und Entscheidungsebene; `05_data/market_monitor.sqlite` ist ab jetzt die strukturierte Verlaufs-, Snapshot- und Alert-Datenebene.
- Update 2026-06-01 06:12 CEST: NVIDIAs DSX-/Vera-Rubin-Signal sowie Samsung- und Kioxia-Momentum erhoehen die Watchlist-Prioritaet fuer AI-Factory-Folgewellen, Samsung-HBM-Aufholer und NAND/Enterprise-SSD. Sie gelten aber nicht als automatische Kauf-, Verkaufs- oder Umschichtungssignale, solange direkte Preis-, Margen-, Kunden-, Guidance- oder EPS-Daten fuer SK Hynix, Micron und SanDisk fehlen.
- Update 2026-06-01 06:34 CEST: NVIDIAs offizielle Newsroom-Details zu Vera Rubin, Spectrum-X Ethernet Photonics, DSX, Vera CPU und BlueField-4 STX gelten als starkes Roadmap-/Lieferketten-Readthrough fuer AI-Factories, Networking, Storage und Power/Cooling, aber nicht als direkter Depotentscheid. Das Reuters-/Commerce-Signal zu AI-Chip-Exportkontrollen an chinesisch kontrollierte Auslands-Tochterfirmen wird als regulatorisches Watch-Risiko gefuehrt, bis konkrete Shipment-, Umsatz-, Kunden- oder Guidance-Auswirkungen sichtbar sind.
- Entscheidung 2026-06-01 08:16 CEST: Kioxia wird als aktive Watchlist und Deep-Dive-Kandidat aufgenommen, aber nicht als automatische Depotposition. Begruendung: harte Kioxia-FY2025-/Q1-FY2027-Daten und NAND-/Enterprise-SSD-Readthrough sind positiv, aber der Wert dupliziert SanDisk-Exposure und handelt nach starkem Tagesmove nahe Hoch. Wenn Kioxia spaeter aufgenommen wird, sollte zuerst ein Ersatz oder Teilersatz von SanDisk geprueft werden, nicht ein unreflektierter Add-on-Kauf.
- Entscheidung 2026-06-01: Das neue Operator-Signal-Radar ist ein diszipliniertes Signal-System, keine Influencer-Liste. Fokus: Operatoren und Research-Personen mit direktem oder starkem indirektem Bezug zu KI-Infrastruktur, Speicher, Chips, Cloud-Capex, Datacenter, Power/Cooling und Frontier-Modellnachfrage. Aussagen werden in `person_statements` gespeichert und als `Hard`, `Medium` oder `Soft` klassifiziert; nur `Hard` oder bestaetigtes `Medium` darf Thesen, Unternehmensakten oder `evaluation_log.md` veraendern. Andrej Karpathy und Ilya Sutskever werden wegen ausdruecklicher Nutzerprioritaet als P2-Research-/Frontier-Signale getrackt.
- Update 2026-06-01 14:11 CEST: Das SK-Hynix-Cheongju-Gasleck wird als operatives Watch-/Red-Flag-Signal gefuehrt, aber nicht als These-Bruch, solange keine Produktionsunterbrechung, Yield-/Shipment-Auswirkung, Behoerdenauflage, Capex-Verzoegerung oder Kundenwirkung bestaetigt ist.
- Update 2026-06-01 14:11 CEST: Jensen Huangs Reuters-Aussage zu Vera und fruehen Adoptern OpenAI/Anthropic/SpaceX wird als `Medium`-Operator-Signal fuer AI-Factory-/Vera-/CPU-/Edge-AI-Readthrough gespeichert. Sie veraendert die Watchlist-Prioritaet leicht, aber keine Depotthese ohne harte Umsatz-, Margen-, Backlog- oder EPS-Daten.

## Methodische Annahmen

- PEG ist hilfreich, aber bei zyklischen Speicherwerten nur zusammen mit Margen, CAPEX, Lagerbestand und Forward-Guidance.
- HBM/DRAM ist strategisch naeher am KI-Rechenkern als HDD.
- HDD kann trotz geringerer Dringlichkeit wirtschaftlich attraktiv bleiben, solange Kosten pro TB und Knappheit intakt sind.
- SanDisk ist der volatilste Depotwert und braucht besonders strenge Bewertungs- und Margenpruefung.
- Kioxia ist fuer die SanDisk-These ein wichtiger Falsifikations- und Vergleichswert; ohne besseren SanDisk-Vergleich ist Kioxia eher aktive Watchlist als Depotdiversifikation.
- Dell ist fuer die Speicherthese ein starker Nachfrageindikator; fuer eine Depotaufnahme braucht es zusaetzlich Belege zu nachhaltiger AI-Server-Marge, Backlog-Qualitaet, Storage-Attach-Rate, Free Cash Flow und EPS-Revisionen.
## 2026-06-02 - Kontext-Radar: keine These-Aenderung trotz positiver Momentum-/Micron-Signale

Fakt: Micron +6.64%, SanDisk +3.92%, Dell +10.70%, Broadcom +2.95%, Arista +7.03%, Marvell +7.04% und NVIDIA +6.26% am 2026-06-01 bestaetigen starkes AI-/Memory-/Infrastruktur-Momentum. Micron meldete zur COMPUTEX ein breites AI-Memory-/Storage-Portfolio; SK Hynix fiel am 2026-06-02 in Korea -3.13%, ohne dass eine Produktionsunterbrechung nach dem Cheongju-Gasleck bestaetigt wurde.

Entscheidung: Keine These-Aenderung und keine automatische Kauf-/Verkaufsfolgerung. Micron-COMPUTEX ist ein positives Produkt-/Roadmap-Signal, aber kein Guidance-, Margen-, FCF- oder EPS-Beleg. SK-Hynix-Gasleck bleibt Risiko-Watch, bis harte Produktions-, Kunden-, Behoerden- oder Capex-Daten vorliegen. Kioxia bleibt Watch/Deep-Dive; Broadcom-Q2 und Dell/WDC/STX-Konferenzen haben Prioritaet.
