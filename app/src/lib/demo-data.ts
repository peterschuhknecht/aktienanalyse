import type { ChatMessage, Evaluation, Thesis } from "./types";

/**
 * Statischer Demo-Schnappschuss (Stand 03.07.2026) aus dem Analyse-Repository.
 * Kurse sind Seeds aus 05_data/*.csv — in der App-Vorschau keine Live-Daten.
 */

export const demoTheses: Thesis[] = [
  {
    id: "ki-memory",
    title: "KI-Infrastruktur: Memory",
    description:
      "Konzentrierte Wette auf den Speicher-Superzyklus (HBM/DRAM/NAND): Micron, SK Hynix, SanDisk.",
    status: "aktiv",
    symbols: ["MU", "000660.KS", "SNDK"],
    updatedAt: "03.07.2026",
    hasEvaluation: true,
  },
  {
    id: "ki-folgewellen",
    title: "KI-Folgewellen",
    description:
      "Zweite Reihe der KI-Infrastruktur: Netzwerk, Strom/Nuklear, Optik, Chip-Fertigung (WFE).",
    status: "beobachtung",
    symbols: ["AVGO", "MRVL", "CEG", "VST", "GLW", "ASML"],
    updatedAt: "02.07.2026",
    hasEvaluation: false,
  },
  {
    id: "hdd-nearline",
    title: "HDD & Nearline-Speicher",
    description:
      "Festplatten für KI-Datenarchive: Seagate und Western Digital nach dem Seagate-Verkauf.",
    status: "beobachtung",
    symbols: ["STX", "WDC"],
    updatedAt: "01.07.2026",
    hasEvaluation: false,
  },
];

export const demoEvaluation: Evaluation = {
  standLabel: "Demo-Schnappschuss · Stand 03.07.2026, 09:30 Uhr",
  chips: [
    { label: "100 % Cash — 243.288 €", tone: "accent" },
    { label: "Entry-Gate aktiv: wartet auf bestätigte Stabilisierung", tone: "warn" },
    { label: "Nächster Prüfpunkt: US-Wiedereröffnung Mo, 06.07.", tone: "neutral" },
  ],
  ampel: {
    tiles: [
      {
        label: "Fundamental",
        value: 9,
        hint: "These- und Datenlage der Wiedereinstiegs-Ziele",
      },
      {
        label: "Timing",
        value: 4,
        hint: "Qualität eines Einstiegs zum jetzigen Zeitpunkt",
      },
      {
        label: "Handlungsnähe",
        value: 6,
        hint: "Nähe zum Auslöser des Wiedereinstiegs",
      },
      {
        label: "Gesamt",
        value: 5,
        hint: "Gewichtetes Urteil, Fundamental zählt am stärksten",
      },
    ],
    totalHint:
      "Cash-Phase: Die Ampel zeigt die Wiedereinstiegs-Sicht, nicht die Halte-Sicht.",
    rows: [
      {
        name: "Micron",
        symbol: "MU",
        fundamental: 10,
        timing: 4,
        action: 6,
        note:
          "Starke Quartalszahlen und Ausblick intakt; Kurs ~$978 (02.07., −5,0 %), Forward-KGV ~7,4 — Einstieg wartet auf die US-Wiedereröffnung.",
      },
      {
        name: "SK Hynix",
        symbol: "000660.KS",
        fundamental: 9,
        timing: 4,
        action: 6,
        note:
          "03.07. Erholung +4 % auf ≈$1.484 (KRW 2.289.000); Forward-KGV ~6,5; US-Zweitlisting (ADR) um den 10.07. als möglicher Katalysator.",
      },
      {
        name: "SanDisk",
        symbol: "SNDK",
        fundamental: 8,
        timing: 4,
        action: 6,
        note:
          "Schwankungsstärkster NAND-Wert: 02.07. −13 % auf ~$1.755; Preisuntergrenze aus Lieferverträgen ($0,29/GB) intakt; BofA-Kursziel $2.500.",
      },
    ],
    summary:
      "Der US-Arbeitsmarktbericht vom 02.07. fiel schwach aus (+57.000 neue Stellen statt erwarteter ~110.000) — die Angst vor weiteren Zinserhöhungen ist damit gedämpft. Trotzdem fielen die Speicher-Aktien weiter: Der Markt fürchtet ein Überangebot bei NAND-Speicher wegen neuer Kapazitätspläne von Samsung und SK Hynix. Am 03.07. erholte sich Asien (SK Hynix +4 %), die US-Börse blieb feiertagsbedingt geschlossen. Es bleibt beim Plan: kein Einstieg, bevor sich die Kurse nachweislich stabilisiert haben — frühestens zur US-Wiedereröffnung am Montag, 06.07.",
    plain:
      "Das Geld bleibt vorerst sicher in Cash. Der Wiedereinstieg wird frühestens am Montag geprüft — mechanisch nach Plan, nicht aus dem Bauch.",
  },
  events: {
    rows: [
      {
        date: "02.07.2026",
        name: "US-Arbeitsmarktbericht Juni (Payrolls): +57.000 — deutlich schwächer als erwartet",
        type: "Makro",
        weight: 9,
        relevance:
          "Entry-Gate ausgelöst (schwacher Zweig): Einstieg erst nach bestätigter Stabilisierung der Kurse.",
      },
      {
        date: "03.07.2026",
        name: "US-Börse geschlossen (Feiertag Independence Day, nachgeholt)",
        type: "Hinweis",
        weight: 2,
        relevance: "Kein US-Handel — die Einstiegs-Prüfung verschiebt sich auf Montag.",
      },
      {
        date: "06.07.2026",
        name: "US-Wiedereröffnung: Stabilisierungs-Check für Micron, SK Hynix, SanDisk",
        type: "Depot-Plan",
        weight: 8,
        relevance:
          "Erster möglicher Einstiegszeitpunkt, falls ein bestätigter Plus-Tag oder die Rückeroberung des Vortageshochs gelingt.",
      },
      {
        date: "≈10.07.2026",
        name: "SK Hynix: US-/Nasdaq-Zweitlisting (ADR, ~$29,4 Mrd.)",
        type: "Unternehmen",
        weight: 8,
        tentative: true,
        relevance:
          "Positiver Katalysator, an dem der Einstieg ausgerichtet werden kann; Termin noch per Filing zu bestätigen.",
      },
      {
        date: "Mitte Juli",
        name: "US-Inflationsdaten Juni (CPI)",
        type: "Makro",
        weight: 6,
        tentative: true,
        relevance: "Nächster Zins-Test nach 4,2 % Inflation im Mai — Gegenwind-Risiko für Bewertungen.",
      },
      {
        date: "23. o. 29.07.",
        name: "SK Hynix Q2-Zahlen (Terminkonflikt zwischen Datenanbietern)",
        type: "Earnings",
        weight: 9,
        tentative: true,
        relevance:
          "Erster harter Test für HBM-Preise und Margen nach dem Wiedereinstieg; zugleich Zyklus-Check für die Exit-Regeln.",
      },
    ],
    plain:
      "Bis Mitte Juli gibt es drei Wegpunkte: Montag der Stabilisierungs-Check, dann das SK-Hynix-Listing, dann die Inflationsdaten. Der Einstieg soll an einem davon ausgerichtet werden.",
  },
  report: {
    sections: [
      {
        heading: "Makro: Zins-Angst gedämpft, aber Speicher entkoppelt",
        text:
          "Die US-Wirtschaft schuf im Juni nur +57.000 neue Stellen (erwartet ~110.000–115.000), die Arbeitslosenquote stieg auf 4,2 %, die Löhne blieben moderat, und die Vormonate wurden um −74.000 nach unten revidiert. Für den Gesamtmarkt war das eine Entwarnung — der Dow Jones erreichte ein Rekordhoch. Die Speicher-Aktien koppelten sich jedoch ab und fielen weiter.",
      },
      {
        heading: "Speicher-Ausverkauf: neues Angst-Thema, kein These-Bruch",
        text:
          "Am 02.07. verlor Micron ~5 % (auf ~$978), SanDisk ~13 % (auf ~$1.755); Korea war tags zuvor um ~12 % eingebrochen. Als Auslöser gelten Berichte über Kapazitätspläne von Samsung und SK Hynix, die eine Angst vor NAND-Überangebot geschürt haben. Einordnung: Das ist bislang ein Narrativ (Meinungs-Ebene), kein harter Fakt — Quartalsanker, Liefer-Preisverträge und die Nachfrage-Prognosen bleiben intakt. Ein sauberer einzelner Nachrichten-Auslöser für die Bewegung ließ sich nicht belegen.",
      },
      {
        heading: "Plan: mechanischer Einstieg, Risiko klar benannt",
        text:
          "Das Entry-Gate ist eindeutig: Nach dem schwachen Arbeitsmarktbericht gilt „Einstieg erst bei bestätigter Stabilisierung“ — also ein abgeschlossener Handelstag im Plus oder die Rückeroberung des Vortageshochs. Optional wird der Einstieg am SK-Hynix-Zweitlisting (~10.07.) ausgerichtet. Das Kernrisiko der These bleibt benannt: Ein optisch billiges Forward-KGV (Kurs geteilt durch den erwarteten Gewinn der nächsten 12 Monate) am Höhepunkt des Gewinnzyklus kann eine Bewertungsfalle sein — dagegen stehen die scharfen Exit-Regeln (Vertragspreise, Margen-Ausblick, Gewinnschätzungen).",
      },
    ],
  },
  performance: {
    keyValues: [
      { label: "Depotstart-Basis (22.04.2026)", value: "150.000 €" },
      { label: "Realisierter Stand (Verkauf 01.07.2026, netto)", value: "243.288 €" },
      { label: "Gewinn", value: "+93.288 € · +62,2 %", tone: "pos" },
      { label: "Cash-Quote", value: "100 %" },
      {
        label: "Trailing-Peak (Höchststand-Referenz)",
        value: "startet neu mit dem Wiedereinstieg",
        tone: "muted",
      },
    ],
    heroValue: "+62,2 %",
    heroLabel: "realisierte Rendite seit 22.04.2026 — Gewinn ist verkauft und gesichert",
    reentry: [
      {
        name: "Micron",
        symbol: "MU",
        targetWeight: "35 %",
        targetAmount: "≈85.151 €",
        price: "~$978",
        change: "−5,0 % (02.07.)",
        changeTone: "neg",
        fwdPe: "~7,4",
      },
      {
        name: "SK Hynix",
        symbol: "000660.KS",
        targetWeight: "33 %",
        targetAmount: "≈80.285 €",
        price: "≈$1.484 (KRW 2.289.000)",
        change: "+4,0 % (03.07.)",
        changeTone: "pos",
        fwdPe: "~6,5",
      },
      {
        name: "SanDisk",
        symbol: "SNDK",
        targetWeight: "32 %",
        targetAmount: "≈77.852 €",
        price: "~$1.755",
        change: "−13,3 % (02.07.)",
        changeTone: "neg",
        fwdPe: "—",
      },
    ],
    plain:
      "Der Gewinn von +62,2 % ist realisiert und sicher. Die Zielaufteilung für den Wiedereinstieg steht fest — offen ist nur noch der Zeitpunkt.",
  },
  risks: {
    rows: [
      {
        name: "Basis-Schutz (Kapital-Untergrenze)",
        limit: "~180.000–190.000 €",
        current: "243.288 € Cash",
        status: "ok",
        statusLabel: "im Rahmen",
        note: "Realisierter Stand liegt deutlich über der Untergrenze.",
      },
      {
        name: "Einzelposition",
        limit: "Warnung 30 % · Max. 35 %",
        current: "0 %",
        status: "sleep",
        statusLabel: "schläft bis Entry",
        note: "Obergrenze erzwingt beim Wiedereinstieg mindestens drei Namen.",
      },
      {
        name: "HBM/DRAM-Anteil (Micron + SK Hynix)",
        limit: "Warnung 60 % · Max. 70 %",
        current: "0 % (Ziel: 68 %)",
        status: "sleep",
        statusLabel: "schläft bis Entry",
        note: "Zielallokation liegt bewusst in der Warnzone — akzeptiertes Konzentrationsrisiko.",
      },
      {
        name: "NAND-Anteil (SanDisk)",
        limit: "Warnung 30 % · Max. 40 %",
        current: "0 % (Ziel: 32 %)",
        status: "sleep",
        statusLabel: "schläft bis Entry",
        note: "Kioxia zählt wegen der Fertigungs-Partnerschaft als dasselbe NAND-Risiko.",
      },
      {
        name: "Depot-Giveback (Rückgabe vom Höchststand)",
        limit: "−15 % trimmen · −25 % absichern",
        current: "n/a",
        status: "sleep",
        statusLabel: "schläft bis Entry",
        note: "Referenz-Höchststand wird erst ab dem neuen Einstieg gemessen.",
      },
    ],
    plain:
      "Aktuell schützt nur die Kapital-Untergrenze — alle anderen Grenzen werden erst mit dem Wiedereinstieg wieder scharf gestellt.",
  },
  watchlist: {
    rows: [
      {
        name: "Kioxia",
        symbol: "285A.T",
        role: "NAND-Watch · Tausch-Kandidat für SanDisk",
        price: "≈$480 (JPY 78.100, 02.07., abgeleitet)",
        fwdPe: "—",
        alphaCore: "gleichwertig",
        alphaMarket: "offen",
        diversification: "keine — Fertigungs-Partnerschaft mit SanDisk bis 2034",
        verdict: "Watch only (Swap-Frage)",
        verdictTone: "neutral",
      },
      {
        name: "Seagate",
        symbol: "STX",
        role: "HDD/Nearline-Speicher",
        price: "—",
        fwdPe: "~38",
        alphaCore: "schlechter",
        alphaMarket: "offen",
        diversification: "teilweise — hielt sich im Speicher-Ausverkauf besser",
        verdict: "Watch only",
        verdictTone: "neutral",
      },
      {
        name: "Constellation Energy",
        symbol: "CEG",
        role: "Strom/Nuklear für Rechenzentren",
        price: "—",
        fwdPe: "—",
        alphaCore: "schlechter",
        alphaMarket: "gleichwertig",
        diversification: "hoch — eigene Treiber, nahe 52-Wochen-Tief",
        verdict: "Prüfen (nur für Streuung)",
        verdictTone: "check",
      },
      {
        name: "Broadcom",
        symbol: "AVGO",
        role: "Netzwerk & Custom-Chips",
        price: "$370,03 (01.07.)",
        fwdPe: "~25",
        alphaCore: "schlechter",
        alphaMarket: "gleichwertig",
        diversification: "gering — läuft mit dem KI-Hardware-Trade",
        verdict: "Watch only",
        verdictTone: "neutral",
      },
      {
        name: "Marvell",
        symbol: "MRVL",
        role: "Netzwerk-Chips",
        price: "$296,30 (01.07., unbestätigt)",
        fwdPe: "—",
        alphaCore: "schlechter",
        alphaMarket: "offen",
        diversification: "gering — hohe Einzelwert-Schwankung",
        verdict: "Watch only",
        verdictTone: "neutral",
      },
      {
        name: "Samsung Electronics",
        symbol: "005930.KS",
        role: "HBM-Aufholer",
        price: "≈$208 (KRW 323.000, 01.07.)",
        fwdPe: "~6,1 (veraltet)",
        alphaCore: "offen",
        alphaMarket: "offen",
        diversification: "gering — fällt mit dem Speicher-Komplex",
        verdict: "Datenlücke — kein Urteil",
        verdictTone: "gap",
      },
      {
        name: "WFE/Packaging-Gruppe",
        symbol: "ASML · AMAT · LRCX · AMKR",
        role: "Chip-Fertigungsausrüstung (Sammelzeile)",
        price: "—",
        fwdPe: "—",
        alphaCore: "offen",
        alphaMarket: "offen",
        diversification: "mittel — eigener Investitionszyklus",
        verdict: "Datenlücke — kein Urteil",
        verdictTone: "gap",
      },
    ],
    plain:
      "Kein Beobachtungswert verspricht derzeit mehr Rendite als die drei Hauptaktien (Forward-KGV ~7 gegen 25–60 bei gleichem KI-Treiber). Interessant sind sie nur, wenn bewusst Streuung außerhalb der Speicher-These gewünscht ist.",
  },
};

export const chatSeed: ChatMessage[] = [
  {
    id: "m1",
    role: "user",
    text: "Die Payrolls kamen doch schwach — warum sind wir dann heute nicht eingestiegen?",
    time: "09:31",
  },
  {
    id: "m2",
    role: "assistant",
    text:
      "Das Entry-Gate verlangt nach einem schwachen Arbeitsmarktbericht eine bestätigte Stabilisierung — also einen abgeschlossenen US-Handelstag im Plus oder die Rückeroberung des Vortageshochs. Beides liegt noch nicht vor: Die Speicherwerte fielen am 02.07. trotz Makro-Entwarnung weiter (neue Sorge vor NAND-Überangebot), und am 03.07. blieb die US-Börse feiertagsbedingt geschlossen. Frühester Prüfpunkt ist die Wiedereröffnung am Montag, 06.07. — idealerweise ausgerichtet am SK-Hynix-Zweitlisting um den 10.07.",
    time: "09:31",
  },
];

export const assistantPlaceholderReply =
  "Diese Layout-Vorschau ist noch nicht mit der KI verbunden. In der nächsten Ausbaustufe beantworte ich Rückfragen hier direkt auf Basis der Auswertung und der Repository-Daten (Kurse, Termine, Regeln, Unternehmensakten).";
