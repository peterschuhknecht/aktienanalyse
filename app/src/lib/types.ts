export type ThesisStatus = "aktiv" | "beobachtung" | "entwurf";

export interface Thesis {
  id: string;
  title: string;
  description: string;
  status: ThesisStatus;
  symbols: string[];
  updatedAt: string;
  hasEvaluation: boolean;
}

export interface ScoreTile {
  label: string;
  value: number;
  hint: string;
}

export interface AmpelRow {
  name: string;
  symbol: string;
  fundamental: number;
  timing: number;
  action: number;
  note: string;
}

export interface EventRow {
  date: string;
  name: string;
  type: string;
  weight: number;
  relevance: string;
  tentative?: boolean;
}

export interface KeyValue {
  label: string;
  value: string;
  tone?: "pos" | "neg" | "muted";
}

export interface ReentryRow {
  name: string;
  symbol: string;
  targetWeight: string;
  targetAmount: string;
  price: string;
  change: string;
  changeTone: "pos" | "neg";
  fwdPe: string;
}

export type RiskStatus = "ok" | "warn" | "alert" | "sleep";

export interface RiskRow {
  name: string;
  limit: string;
  current: string;
  status: RiskStatus;
  statusLabel: string;
  note: string;
}

export type AlphaVerdict = "besser" | "gleichwertig" | "schlechter" | "offen";

export interface WatchRow {
  name: string;
  symbol: string;
  role: string;
  price: string;
  fwdPe: string;
  alphaCore: AlphaVerdict;
  alphaMarket: AlphaVerdict;
  diversification: string;
  verdict: string;
  verdictTone: "neutral" | "check" | "gap";
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
  time: string;
}

export interface Evaluation {
  standLabel: string;
  chips: { label: string; tone: "accent" | "warn" | "neutral" }[];
  ampel: {
    tiles: ScoreTile[];
    totalHint: string;
    rows: AmpelRow[];
    summary: string;
    plain: string;
  };
  events: {
    rows: EventRow[];
    plain: string;
  };
  report: {
    sections: { heading: string; text: string }[];
  };
  performance: {
    keyValues: KeyValue[];
    heroValue: string;
    heroLabel: string;
    reentry: ReentryRow[];
    plain: string;
  };
  risks: {
    rows: RiskRow[];
    plain: string;
  };
  watchlist: {
    rows: WatchRow[];
    plain: string;
  };
}
