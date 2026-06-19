export type Role = "guest" | "customer" | "admin";

export type TrafficLight = "green" | "amber" | "red";

export type AccessLevel = "free-preview" | "paid" | "admin-only";

export type ReportStatus = "draft" | "review" | "published";

export type SourceQuality =
  | "primary"
  | "official"
  | "high-quality-media"
  | "industry-data"
  | "market-data"
  | "weak-search-trace";

export type Topic = {
  id: string;
  title: string;
  cluster: string;
  thesis: string;
  targetAudience: string;
  status: TrafficLight;
  timing: TrafficLight;
  actionProximity: TrafficLight;
  access: AccessLevel;
  horizon: string;
  returnDriver: string;
  mainRisk: string;
  symbols: string[];
  tags: string[];
  latestReportId: string;
  mockConviction: number;
};

export type Source = {
  id: string;
  name: string;
  rank: number;
  quality: SourceQuality;
  usage: string;
};

export type NewsItem = {
  id: string;
  topicId: string;
  company: string;
  date: string;
  title: string;
  sourceId: string;
  relevance: "high" | "medium" | "low";
  classification: "fact" | "search-trace" | "opinion";
};

export type EventItem = {
  id: string;
  topicId: string;
  date: string;
  title: string;
  impact: "catalyst" | "risk" | "check";
};

export type DataQualityIssue = {
  id: string;
  topicId: string;
  severity: "blocker" | "warning" | "info";
  title: string;
  detail: string;
};

export type AnalysisReport = {
  id: string;
  topicId: string;
  title: string;
  status: ReportStatus;
  publishedAt: string;
  analystNote: string;
  trafficLight: {
    fundamental: TrafficLight;
    timing: TrafficLight;
    action: TrafficLight;
    reason: string;
  };
  summary: string;
  facts: string[];
  interpretation: string[];
  dataGaps: string[];
  p0Questions: string[];
  sourceIds: string[];
};

export type UserEntitlement = {
  id: string;
  name: string;
  email: string;
  role: Role;
  plan: "none" | "trial" | "paid" | "admin";
  status: "inactive" | "trial" | "active" | "expired";
  topics: string[];
};
