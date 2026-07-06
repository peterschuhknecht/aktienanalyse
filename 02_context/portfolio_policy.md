# Portfolio Policy

Stand: 2026-07-02. Fehlende persoenliche Angaben werden nicht geraten.

## Aktueller Zustand: CASH / Wiedereinstieg

- Depot am 2026-07-01 KOMPLETT VERKAUFT: 100% Cash EUR 243.288,43 (netto nach Steuern). Realisiert +93.288 vs 150.000-Basis (Start 22.04.2026) = +62,2%. Verkaufsgrund (Nutzer): Seitwaerts-/Abwaertsbewegung trotz intakter These - Timing-Entscheid, KEIN These-Bruch.
- Wiedereinstiegs-Entscheid (Nutzer 2026-07-02): sofort wieder VOLL investiert bei klugem Zeitpunkt; KEINE dauerhafte Cash-Reserve; Einmal-Entry; 3 Namen.
- Ziel-Allokation: Micron 35% (~85.151) / SK Hynix 33% (~80.285) / SanDisk 32% (~77.852). Buckets: HBM/DRAM ~68% (Warnzone <70 Max, bewusst akzeptiert), NAND 32% (<40 Max).
- Kioxia: NICHT mehr Hauptaktie -> NAND-Watch als SanDisk-Alternative/Swap im GLEICHEN Bucket (JV bis 2034, hoch korreliert, KEIN Diversifier). Frage ist immer relative Bewertung vs SanDisk, nie Zusatzposition.

## Entry-Gate (Einmal-Entry, payrolls-gated; gilt bis Wiedereinstieg vollzogen)

- NICHT vor dem US-Payrolls-Print (07-02, 14:30 CEST) voll rein. Danach zaehlt die Markt-REAKTION, nicht die Schlagzeile:
  - Soft/in-line (<= ~130k, keine heissen Loehne): Entry auf BESTAETIGTE Stabilisierung - settled Up-Tag oder Reclaim des Vortageshochs.
  - Hot (>= ~200k oder heisse AHE): NICHT die erste Abwaertsspitze fangen; warten bis keine tieferen Tiefs (1-2 Sessions), dann billiger rein.
  - Unklar/messy: Staub setzen lassen; 10Y + hoeheres Tief abwarten.
- Entry moeglichst mit positivem Katalysator ausrichten (SK-Hynix-ADR-Listing ~07-10, frische TrendForce-Q3-Contract-Preise).
- Execution-Gate (Datenqualitaet): vor Ordern saubere Live-/Settled-Kurse fuer MU/SNDK/SK Hynix aus hochwertiger Quelle; NIE auf Pre-Market-/noisy Prints ordern (siehe `05_data/data_quality_checks.csv`).
- Entry-Trigger vorab fixieren und mechanisch ausfuehren; kein Zoegern, kein Chasen.

## Risikoregeln (bestaetigt 2026-06-30; gelten fuer das neue Depot weiter)

- Einzelposition: Warn 30% / Max 35%.
- Bucket HBM/DRAM: Warn 60% / Max 70%. Bucket NAND (SanDisk, ggf. Kioxia-Swap): Warn 30% / Max 40%.
- VOLL INVESTIERT (Nutzerentscheid 2026-07-02 bekraeftigt): kein Cash-Puffer, keine Gewinnmitnahme-Leiter.
- Depot-Giveback (Trailing-Peak ab NEUEM Entry gemessen, NICHT alter Peak ~309k): -15% -> hoechste-Beta-Leg (NAND) trimmen; -25% -> eine Leg de-risken.
- Basis-Schutz (Kapital-Floor): Round-Trip unter ~180-190k vermeiden; bei Annaeherung Risiko hart senken.
- FX: KEINE Regel, nur Datenpunkt (EUR/USD je Lauf frisch ziehen).

## Zyklus-Turn-Exit (DIE stehende Verkaufsregel)

Voll investiert + keine Reserve + Einmal-Entry = gesamtes Timing-Risiko auf einer Entscheidung, keine Averaging-Cushion. Entry-Disziplin und dieses Exit-Regelwerk sind die EINZIGEN Risikokontrollen. Kern-Risiko der These: billiges Forward-KGV (7-8) am zyklischen Gewinn-Peak = Value-Trap.

- VERKAUFEN (betroffene Leg; NICHT verbilligen), wenn EINES eintritt:
  - DRAM- ODER NAND-Contract-Preise rollen QoQ ueber (TrendForce/Omdia) - wichtigstes Signal.
  - Margen-Guidance-Kuerzung oder negative EPS-Revisionen bei Micron/SK Hynix/SanDisk.
  - HBM-Ueberangebot sichtbar / harte Hyperscaler-Capex-Kuerzung.
- NICHT verkaufen wegen Kurs-Wackeln, Tagesnarrativen oder Analysten-Meinungen ohne Revisionen.
- Alpha-Anker: Ziel ist UEBERDURCHSCHNITTLICHE Rendite vs S&P 500/Nasdaq 100. Kippt der Zyklus, gibt es kein Alpha -> Cash/Markt-ETF ist dann die ehrliche Alternative, nicht Durchhalten.

## Nach-Entry-Reset (Pflicht direkt nach vollzogenem Wiedereinstieg)

1. `05_data/portfolio_positions.csv`: neue Positionen (Stueck, Entry-Kurs, Gewichte) + DEPOT-Zeile; CASH-Zeile schliessen.
2. `05_data/portfolio_risk_limits.csv`: current_weights setzen; Giveback-Basis = neuer Trailing-Peak ab Entry-Datum.
3. `05_data/covered_symbols.csv`: MU/SKH/SNDK auf `active`; Kioxia bleibt NAND-Watch.
4. Fokus-Blurbs (CLAUDE.md, AGENTS.md, START_HERE.md) + `02_context/current_portfolio.md` + `03_state/task_plan.md` auf investierten Zustand.
5. Entry (Datum, Kurse, Stueck, FX) in `03_state/evaluation_log.md` + `03_state/assumptions_and_decisions.md` festhalten.

## Regeln

- SanDisk (+ggf. Kioxia) immer als gemeinsamen `NAND/Enterprise-SSD`-Bucket betrachten; HBM/DRAM und NAND getrennt beurteilen.
- CSV-Rechenschicht: `05_data/portfolio_positions.csv`, `05_data/portfolio_risk_limits.csv`, `05_data/data_quality_checks.csv`.
- Bei Grenzverletzung keine automatische Order, sondern Watch/Reduktionspruefung/Datenluecke.
- Ziel ist ALPHA vs Breitmarkt, nicht nur These-Bestaetigung; nur marktnahe Erwartung rechtfertigt die konzentrierte Wette nicht (siehe `01_knowledge/agent_workflows.md`).

## Decision Gates

| Wert/Bucket | Harter Test |
|---|---|
| Micron | Q4-Guidance-Lieferung ($50B/EPS ~$31/GM ~86%); HBM-Backlog haelt |
| SK Hynix | Q2 ~07-29 (Termin bestaetigen): HBM-Preise/Margen/Yields; ADR-Listing ~07-10 |
| SanDisk | NAND-ASPs/LTA-Floor (~$0,29/GB), Enterprise-SSD-Nachfrage, FCF |
| NAND gesamt | TrendForce-Contract-Preise QoQ = Zyklus-Turn-Signal |
| Kioxia (Watch) | relative Bewertung vs SanDisk (Swap-Frage); JV-/FCF-Detail |
