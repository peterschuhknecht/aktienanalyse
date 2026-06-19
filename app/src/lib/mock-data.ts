import type {
  AnalysisReport,
  DataQualityIssue,
  EventItem,
  NewsItem,
  Source,
  Topic,
  UserEntitlement,
} from "./types";

export const topics: Topic[] = [
  {
    id: "ai-memory",
    title: "AI Memory, HBM und NAND",
    cluster: "Semiconductors",
    thesis:
      "AI-Infrastruktur verschiebt den Wertanteil zu HBM, DRAM, LPDDR und Enterprise-SSD-Kapazitaet.",
    targetAudience: "Kunden mit Fokus auf zyklische Wachstumschancen",
    status: "green",
    timing: "amber",
    actionProximity: "amber",
    access: "paid",
    horizon: "6 bis 18 Monate",
    returnDriver: "HBM-Ramp, NAND-Margenhebel, Enterprise-SSD-Nachfrage",
    mainRisk: "AI-Capex-Abkuehlung und Speicherpreiszyklus",
    symbols: ["SK Hynix", "Micron", "SanDisk", "Kioxia"],
    tags: ["AI", "Memory", "Semis"],
    latestReportId: "report-ai-memory-1",
    mockConviction: 82,
  },
  {
    id: "power-grid",
    title: "Power Grid und Energieinfrastruktur",
    cluster: "Infrastructure",
    thesis:
      "Rechenzentren, Elektrifizierung und Netzengpaesse koennen Ausruester mit langen Auftragsbuechern tragen.",
    targetAudience: "Kunden mit defensiverem Infrastrukturprofil",
    status: "green",
    timing: "green",
    actionProximity: "amber",
    access: "paid",
    horizon: "12 bis 36 Monate",
    returnDriver: "Netzinvestitionen, Transformatorenknappheit, Data-Center-Strombedarf",
    mainRisk: "Capex-Verschiebungen und regulatorische Verzogerungen",
    symbols: ["Grid OEM Basket", "Cable Basket", "Utility Infra"],
    tags: ["Infrastructure", "Energy", "AI Power"],
    latestReportId: "report-power-grid-1",
    mockConviction: 76,
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Compounders",
    cluster: "Software",
    thesis:
      "Sicherheitsbudgets bleiben priorisiert, wenn Plattformanbieter Produktbreite und Margen halten.",
    targetAudience: "Kunden mit Software-Qualitaetsfokus",
    status: "amber",
    timing: "amber",
    actionProximity: "red",
    access: "free-preview",
    horizon: "9 bis 24 Monate",
    returnDriver: "Konsolidierung, Plattform-Bundling, operative Hebel",
    mainRisk: "Multiple-Kompression und schwache Net-Retention",
    symbols: ["Security Platform Basket"],
    tags: ["Software", "Security", "Quality"],
    latestReportId: "report-cybersecurity-1",
    mockConviction: 63,
  },
  {
    id: "healthcare-platforms",
    title: "GLP-1 und Healthcare Platforms",
    cluster: "Healthcare",
    thesis:
      "Adipositas- und Diabetesplattformen koennen Folgeeffekte in Diagnostik, Medtech und Services ausloesen.",
    targetAudience: "Kunden mit laengerem Themenhorizont",
    status: "amber",
    timing: "green",
    actionProximity: "amber",
    access: "paid",
    horizon: "12 bis 48 Monate",
    returnDriver: "Indikationsausweitung, Supply-Ausbau, Plattformeffekte",
    mainRisk: "Preisregulierung, Nebenwirkungen, Wettbewerb",
    symbols: ["GLP-1 Leaders", "Medtech Basket"],
    tags: ["Healthcare", "Platforms", "Long Duration"],
    latestReportId: "report-healthcare-1",
    mockConviction: 69,
  },
];

export const sources: Source[] = [
  {
    id: "src-ir",
    name: "Unternehmensberichte und IR",
    rank: 1,
    quality: "primary",
    usage: "Primaere Fakten, Guidance, Margen, Capex und Termine",
  },
  {
    id: "src-official",
    name: "Boersenmeldungen und offizielle Eventseiten",
    rank: 2,
    quality: "official",
    usage: "Pflichtdaten, Termine und regulatorische Meldungen",
  },
  {
    id: "src-reuters",
    name: "Reuters, Bloomberg, FT, WSJ, Nikkei",
    rank: 3,
    quality: "high-quality-media",
    usage: "Katalysatoren, Marktumfeld und bestaetigte Ereignisse",
  },
  {
    id: "src-industry",
    name: "TrendForce, Omdia, IDC, Gartner, SEMI",
    rank: 4,
    quality: "industry-data",
    usage: "Branchenpreise, Supply Chain und Nachfrageindikatoren",
  },
  {
    id: "src-weak",
    name: "Blogs, Social, Foren, Aggregatoren",
    rank: 8,
    quality: "weak-search-trace",
    usage: "Nur Suchspur, nie alleinige Faktengrundlage",
  },
];

export const reports: AnalysisReport[] = [
  {
    id: "report-ai-memory-1",
    topicId: "ai-memory",
    title: "Mock-Auswertung: AI Memory Quality Gate",
    status: "published",
    publishedAt: "2026-06-18",
    analystNote:
      "Demo-Report ohne aktuelle Marktdaten. Struktur orientiert sich am Repository-Workflow.",
    trafficLight: {
      fundamental: "green",
      timing: "amber",
      action: "amber",
      reason:
        "Fundamental bleibt die These intakt, Timing ist katalysatornah, Handlungsnaehe bleibt vom Quality Gate abhaengig.",
    },
    summary:
      "Der Report trennt HBM/DRAM und NAND, markiert Datenluecken und priorisiert Primaerquellen vor Marktgeruechten.",
    facts: [
      "Aktive Werte werden als HBM/DRAM-Bucket und NAND/Enterprise-SSD-Bucket getrennt betrachtet.",
      "SanDisk und Kioxia werden im Modell als gemeinsamer NAND-/Enterprise-SSD-Bucket gefuehrt.",
      "Schwache Quellen duerfen nur als Suchspur angezeigt werden.",
    ],
    interpretation: [
      "Der MVP zeigt, wie eine KI-Auswertung kundenfaehig strukturiert werden kann.",
      "Ein Admin muss vor Publikation Datenqualitaet, offene Fragen und Source-Konflikte pruefen.",
      "Reine Kursbewegungen werden nicht als Fakt wiederholt, solange sie keine These aendern.",
    ],
    dataGaps: [
      "Keine echten Kurse, Multiples oder Market Caps im MVP.",
      "Keine angebundene News- oder Event-Pipeline.",
      "Keine echte Portfolio-Gewichtung oder Nutzer-Basiswaehrung.",
    ],
    p0Questions: [
      "Welche Datenquelle liefert spaeter verbindliche Kurs- und Bewertungsdaten?",
      "Welche Admin-Freigabe ist noetig, bevor Kunden einen Report sehen?",
    ],
    sourceIds: ["src-ir", "src-official", "src-reuters", "src-industry"],
  },
  {
    id: "report-power-grid-1",
    topicId: "power-grid",
    title: "Mock-Auswertung: Grid Capex und Backlog",
    status: "review",
    publishedAt: "2026-06-17",
    analystNote: "Admin-Review simuliert. Noch nicht fuer Kunden final freigegeben.",
    trafficLight: {
      fundamental: "green",
      timing: "green",
      action: "amber",
      reason:
        "Strukturelle Nachfrage ist sichtbar, aber Einstiegsszenarien brauchen Bewertungs- und Backlog-Abgleich.",
    },
    summary:
      "Das Thema wird als Infrastruktur-These mit laengerem Auftragszyklus und geringerer Einzeltitelabhaengigkeit modelliert.",
    facts: [
      "Die These benoetigt Backlog-, Margen- und Kapazitaetsdaten.",
      "Regulatorische Termine und Netzausbauplaene sind wichtige Katalysatoren.",
    ],
    interpretation: [
      "Das Thema eignet sich fuer Kunden, die nicht nur Halbleiterzyklen sehen wollen.",
      "Die Admin-Oberflaeche sollte Peers und Opportunity Cost sichtbar machen.",
    ],
    dataGaps: ["Keine echten Peer-Multiples angebunden.", "Keine echte Quellenpruefung."],
    p0Questions: ["Welche Unternehmen gehoeren in den initialen Grid-Basket?"],
    sourceIds: ["src-ir", "src-official", "src-industry"],
  },
  {
    id: "report-cybersecurity-1",
    topicId: "cybersecurity",
    title: "Mock-Auswertung: Security Software Watch",
    status: "draft",
    publishedAt: "2026-06-16",
    analystNote: "Entwurf fuer Paywall-Preview.",
    trafficLight: {
      fundamental: "amber",
      timing: "amber",
      action: "red",
      reason:
        "Qualitaetswerte bleiben interessant, aber Bewertung und Wachstumsrevisionen blockieren harte Schluesse.",
    },
    summary:
      "Preview-Thema mit begrenztem Zugriff. Voller Report waere nur fuer Paid-Kunden sichtbar.",
    facts: [
      "Software-Reports brauchen ARR, Net Retention, Rule of 40 und Margenentwicklung.",
      "Analystenziele bleiben Meinung und muessen getrennt markiert werden.",
    ],
    interpretation: [
      "Das Thema ist fuer einen spaeteren Free-to-Paid Funnel geeignet.",
      "Mock-Paywall zeigt, welche Auswertung gesperrt waere.",
    ],
    dataGaps: ["Keine echten ARR- oder Retention-Daten."],
    p0Questions: ["Welche Security-Peers definieren den Benchmark?"],
    sourceIds: ["src-ir", "src-reuters"],
  },
  {
    id: "report-healthcare-1",
    topicId: "healthcare-platforms",
    title: "Mock-Auswertung: Healthcare Plattformen",
    status: "published",
    publishedAt: "2026-06-15",
    analystNote: "Demo-Report fuer laengeren Themenhorizont.",
    trafficLight: {
      fundamental: "amber",
      timing: "green",
      action: "amber",
      reason:
        "Langfristige Plattformthese bleibt offen, kurzfristige Daten muessen gegen Regulierung und Preisrisiken geprueft werden.",
    },
    summary:
      "Das Thema zeigt, dass die App mehrere Renditequellen jenseits des aktuellen Depotfokus abbilden kann.",
    facts: [
      "Healthcare-Themen brauchen andere Gates als Halbleiter.",
      "Regulierung, Studien, Lieferketten und Preisannahmen muessen getrennt bewertet werden.",
    ],
    interpretation: [
      "Der Themenbaukasten sollte pro Branche eigene Decision Gates zulassen.",
      "Kunden sehen einen einheitlichen Report-Aufbau, Admins sehen branchenspezifische Pruefpunkte.",
    ],
    dataGaps: ["Keine klinischen oder regulatorischen Mockdaten hinterlegt."],
    p0Questions: ["Welche Quellenklasse gilt fuer Studienupdates als primaer?"],
    sourceIds: ["src-ir", "src-official", "src-reuters"],
  },
];

export const newsItems: NewsItem[] = [
  {
    id: "news-1",
    topicId: "ai-memory",
    company: "AI Memory Basket",
    date: "2026-06-18",
    title: "Mock-News: HBM-Lieferketten bleiben zentrale Suchspur",
    sourceId: "src-industry",
    relevance: "high",
    classification: "fact",
  },
  {
    id: "news-2",
    topicId: "ai-memory",
    company: "NAND Bucket",
    date: "2026-06-17",
    title: "Mock-News: Enterprise-SSD-Nachfrage als Margenhebel pruefen",
    sourceId: "src-reuters",
    relevance: "medium",
    classification: "fact",
  },
  {
    id: "news-3",
    topicId: "power-grid",
    company: "Grid Basket",
    date: "2026-06-18",
    title: "Mock-News: Netzinvestitionen und Transformatoren-Backlog beobachten",
    sourceId: "src-industry",
    relevance: "high",
    classification: "fact",
  },
  {
    id: "news-4",
    topicId: "cybersecurity",
    company: "Security Basket",
    date: "2026-06-16",
    title: "Mock-News: Social-Media-Geruecht nur als Suchspur",
    sourceId: "src-weak",
    relevance: "low",
    classification: "search-trace",
  },
];

export const events: EventItem[] = [
  {
    id: "event-1",
    topicId: "ai-memory",
    date: "2026-06-24",
    title: "Mock-Termin: Earnings/Report-Gate fuer Memory-Bucket",
    impact: "catalyst",
  },
  {
    id: "event-2",
    topicId: "power-grid",
    date: "2026-06-21",
    title: "Mock-Termin: Infrastruktur-Datenfenster heute plus fuenf Tage",
    impact: "check",
  },
  {
    id: "event-3",
    topicId: "healthcare-platforms",
    date: "2026-06-22",
    title: "Mock-Termin: Regulatorisches Update pruefen",
    impact: "risk",
  },
];

export const dataQualityIssues: DataQualityIssue[] = [
  {
    id: "dq-1",
    topicId: "ai-memory",
    severity: "warning",
    title: "Aktuelle Marktdaten fehlen",
    detail:
      "Kurse, Market Cap, KGV, Forward-KGV und PEG sind im MVP nicht angebunden.",
  },
  {
    id: "dq-2",
    topicId: "ai-memory",
    severity: "info",
    title: "Quellenhierarchie vorhanden",
    detail:
      "Report zeigt Primaerquellen, offizielle Quellen, hochwertige Medien und Suchspuren getrennt.",
  },
  {
    id: "dq-3",
    topicId: "cybersecurity",
    severity: "blocker",
    title: "Draft nicht kundenfaehig",
    detail:
      "Preview darf keine harte Kaufthese enthalten, bis Umsatz- und Margendaten validiert sind.",
  },
  {
    id: "dq-4",
    topicId: "power-grid",
    severity: "warning",
    title: "Peer-Benchmark offen",
    detail: "Basket-Zusammensetzung muss vor Publikation festgelegt werden.",
  },
];

export const users: UserEntitlement[] = [
  {
    id: "u-guest",
    name: "Preview Gast",
    email: "gast@example.test",
    role: "guest",
    plan: "none",
    status: "inactive",
    topics: ["cybersecurity"],
  },
  {
    id: "u-customer",
    name: "Paid Kunde",
    email: "kunde@example.test",
    role: "customer",
    plan: "paid",
    status: "active",
    topics: ["ai-memory", "power-grid", "cybersecurity", "healthcare-platforms"],
  },
  {
    id: "u-admin",
    name: "Research Admin",
    email: "admin@example.test",
    role: "admin",
    plan: "admin",
    status: "active",
    topics: ["ai-memory", "power-grid", "cybersecurity", "healthcare-platforms"],
  },
];
