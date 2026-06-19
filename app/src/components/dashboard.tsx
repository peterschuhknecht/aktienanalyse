"use client";

import {
  AlertTriangle,
  BarChart3,
  Bell,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  FileText,
  Gauge,
  LayoutDashboard,
  Lock,
  Search,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";
import { clsx } from "clsx";

import { canReadTopic, roleLabel } from "@/lib/access";
import {
  dataQualityIssues,
  events,
  newsItems,
  reports,
  sources,
  topics,
  users,
} from "@/lib/mock-data";
import type {
  AnalysisReport,
  DataQualityIssue,
  ReportStatus,
  Role,
  SourceQuality,
  Topic,
  TrafficLight,
} from "@/lib/types";

const navItems = [
  { label: "Themen", icon: LayoutDashboard },
  { label: "Reports", icon: FileText },
  { label: "Watchlist", icon: Gauge },
  { label: "Admin", icon: Settings2 },
];

const lightMeta: Record<TrafficLight, { label: string; className: string }> = {
  green: { label: "Gruen", className: "status-green" },
  amber: { label: "Gelb", className: "status-amber" },
  red: { label: "Rot", className: "status-red" },
};

const sourceLabels: Record<SourceQuality, string> = {
  primary: "Primaer",
  official: "Offiziell",
  "high-quality-media": "Hochwertig",
  "industry-data": "Industrie",
  "market-data": "Marktdaten",
  "weak-search-trace": "Suchspur",
};

const reportStatusLabels: Record<ReportStatus, string> = {
  draft: "Draft",
  review: "Review",
  published: "Publiziert",
};

const roleUserId: Record<Role, string> = {
  guest: "u-guest",
  customer: "u-customer",
  admin: "u-admin",
};

export function Dashboard() {
  const [activeRole, setActiveRole] = useState<Role>("customer");
  const [selectedTopicId, setSelectedTopicId] = useState("ai-memory");
  const [adminTab, setAdminTab] = useState<"topics" | "reports" | "customers" | "quality">(
    "topics",
  );
  const [query, setQuery] = useState("");

  const activeUser = users.find((user) => user.id === roleUserId[activeRole]) ?? users[1];
  const selectedTopic =
    topics.find((topic) => topic.id === selectedTopicId) ?? topics[0];
  const selectedReport =
    reports.find((report) => report.id === selectedTopic.latestReportId) ?? reports[0];
  const selectedCanRead = canReadTopic(activeUser, selectedTopic);

  const filteredTopics = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return topics;
    }

    return topics.filter((topic) => {
      return [
        topic.title,
        topic.cluster,
        topic.thesis,
        topic.symbols.join(" "),
        topic.tags.join(" "),
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);
    });
  }, [query]);

  const publishedReports = reports.filter((report) => report.status === "published").length;
  const blockers = dataQualityIssues.filter((issue) => issue.severity === "blocker").length;
  const activeCustomers = users.filter((user) => user.status === "active").length;

  return (
    <div className="app-shell">
      <aside className="sidebar" aria-label="Hauptnavigation">
        <div className="brand">
          <div className="brand-mark">
            <Sparkles size={18} aria-hidden />
          </div>
          <div>
            <p className="brand-name">ThesisRadar</p>
            <p className="brand-subtitle">Research SaaS MVP</p>
          </div>
        </div>

        <nav className="nav-list">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.label === "Themen" || (item.label === "Admin" && activeRole === "admin");

            return (
              <button key={item.label} className={clsx("nav-item", isActive && "active")}>
                <Icon size={18} aria-hidden />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="subscription-panel">
          <div className="panel-icon">
            <CircleDollarSign size={18} aria-hidden />
          </div>
          <div>
            <p className="eyebrow">Paid Access</p>
            <p className="small-copy">
              Stripe-Abo spaeter per Webhook. Im MVP simuliert der Rollenwechsel den Zugang.
            </p>
          </div>
        </div>

        <div className="sidebar-footer">
          <p className="eyebrow">Mock-Status</p>
          <p>Keine Datenbank. Keine KI. Keine Marktdaten.</p>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div>
            <h1>KI-Auswertungen als Kundenprodukt</h1>
            <p>
              Themen, Reports, Ampeln, Quellenqualitaet und Admin-Freigaben als
              klickbarer MVP.
            </p>
          </div>

          <div className="topbar-actions">
            <label className="search-box">
              <Search size={16} aria-hidden />
              <span className="sr-only">Themen suchen</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Themen, Symbole, Cluster"
              />
            </label>

            <div className="role-switch" aria-label="Rolle wechseln">
              {(["guest", "customer", "admin"] as Role[]).map((role) => (
                <button
                  key={role}
                  className={clsx(activeRole === role && "active")}
                  onClick={() => setActiveRole(role)}
                >
                  {roleLabel(role)}
                </button>
              ))}
            </div>
          </div>
        </header>

        <section className="metric-grid" aria-label="MVP Kennzahlen">
          <MetricCard
            label="Themen"
            value={topics.length.toString()}
            detail="Mehrere Rendite-Thesen"
            icon={BarChart3}
          />
          <MetricCard
            label="Publizierte Reports"
            value={publishedReports.toString()}
            detail="Kundenfaehige Mockups"
            icon={FileText}
          />
          <MetricCard
            label="Aktive Zugange"
            value={activeCustomers.toString()}
            detail="Paid/Admin simuliert"
            icon={Users}
          />
          <MetricCard
            label="Blocker"
            value={blockers.toString()}
            detail="Quality Gate sichtbar"
            icon={AlertTriangle}
          />
        </section>

        <section className="content-grid">
          <div className="primary-column">
            <section className="section-block">
              <SectionHeader
                title="Investment-Themen"
                action="Mockdaten"
                icon={SlidersHorizontal}
              />
              <div className="topic-list">
                {filteredTopics.map((topic) => (
                  <TopicRow
                    key={topic.id}
                    topic={topic}
                    isSelected={topic.id === selectedTopic.id}
                    isLocked={!canReadTopic(activeUser, topic)}
                    onSelect={() => setSelectedTopicId(topic.id)}
                  />
                ))}
              </div>
            </section>

            <section className="section-block report-block">
              <SectionHeader
                title={selectedCanRead ? selectedReport.title : "Paywall Preview"}
                action={selectedCanRead ? reportStatusLabels[selectedReport.status] : "Gesperrt"}
                icon={FileText}
              />
              {selectedCanRead ? (
                <ReportDetail report={selectedReport} topic={selectedTopic} />
              ) : (
                <LockedState topic={selectedTopic} />
              )}
            </section>
          </div>

          <aside className="detail-column" aria-label="Report Inspector">
            <Inspector topic={selectedTopic} report={selectedReport} canRead={selectedCanRead} />
          </aside>
        </section>

        <section className="admin-console">
          <SectionHeader title="Admin-Konsole" action="Simuliert" icon={ShieldCheck} />
          <div className="tabbar" role="tablist" aria-label="Admin Tabs">
            {[
              { id: "topics", label: "Themen" },
              { id: "reports", label: "Reports" },
              { id: "customers", label: "Kunden" },
              { id: "quality", label: "Qualitaet" },
            ].map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={adminTab === tab.id}
                className={clsx(adminTab === tab.id && "active")}
                onClick={() => setAdminTab(tab.id as typeof adminTab)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <AdminPanel activeTab={adminTab} />
        </section>
      </main>
    </div>
  );
}

function MetricCard({
  label,
  value,
  detail,
  icon: Icon,
}: {
  label: string;
  value: string;
  detail: string;
  icon: typeof BarChart3;
}) {
  return (
    <article className="metric-card">
      <div className="metric-icon">
        <Icon size={18} aria-hidden />
      </div>
      <div>
        <p className="eyebrow">{label}</p>
        <strong>{value}</strong>
        <span>{detail}</span>
      </div>
    </article>
  );
}

function SectionHeader({
  title,
  action,
  icon: Icon,
}: {
  title: string;
  action: string;
  icon: typeof FileText;
}) {
  return (
    <div className="section-header">
      <div>
        <Icon size={17} aria-hidden />
        <h2>{title}</h2>
      </div>
      <span>{action}</span>
    </div>
  );
}

function TopicRow({
  topic,
  isSelected,
  isLocked,
  onSelect,
}: {
  topic: Topic;
  isSelected: boolean;
  isLocked: boolean;
  onSelect: () => void;
}) {
  return (
    <button className={clsx("topic-row", isSelected && "selected")} onClick={onSelect}>
      <div className="topic-main">
        <div className="topic-title-line">
          <TrafficLightDot value={topic.status} />
          <strong>{topic.title}</strong>
          {isLocked ? <Lock size={14} aria-label="Gesperrt" /> : null}
        </div>
        <p>{topic.thesis}</p>
        <div className="topic-meta">
          <span>{topic.cluster}</span>
          <span>{topic.horizon}</span>
          <span>{topic.symbols.length} Werte</span>
        </div>
      </div>
      <div className="topic-score" aria-label={`Mock Conviction ${topic.mockConviction}`}>
        <span>{topic.mockConviction}</span>
        <small>Score</small>
      </div>
      <ChevronRight size={18} aria-hidden />
    </button>
  );
}

function ReportDetail({ report, topic }: { report: AnalysisReport; topic: Topic }) {
  const topicNews = newsItems.filter((item) => item.topicId === topic.id);
  const topicEvents = events.filter((event) => event.topicId === topic.id);
  const issues = dataQualityIssues.filter((issue) => issue.topicId === topic.id);

  return (
    <div className="report-detail">
      <div className="traffic-panel">
        <TrafficSummary label="Fundamental" value={report.trafficLight.fundamental} />
        <TrafficSummary label="Timing" value={report.trafficLight.timing} />
        <TrafficSummary label="Handlung" value={report.trafficLight.action} />
      </div>

      <div className="report-note">
        <CheckCircle2 size={18} aria-hidden />
        <p>{report.trafficLight.reason}</p>
      </div>

      <div className="report-sections">
        <TextList title="Kurzfassung" items={[report.summary]} />
        <TextList title="Fakten" items={report.facts} />
        <TextList title="Einordnung" items={report.interpretation} />
      </div>

      <div className="two-column">
        <MiniList
          title="News heute plus letzte drei Tage"
          items={topicNews.map((item) => ({
            title: item.title,
            meta: `${item.date} · ${item.classification === "fact" ? "Fakt" : "Suchspur"}`,
          }))}
        />
        <MiniList
          title="Termine heute plus fuenf Tage"
          items={topicEvents.map((event) => ({
            title: event.title,
            meta: `${event.date} · ${event.impact}`,
          }))}
        />
      </div>

      <div className="two-column">
        <IssueList issues={issues} />
        <TextList title="Datenluecken und P0-Fragen" items={[...report.dataGaps, ...report.p0Questions]} />
      </div>
    </div>
  );
}

function Inspector({
  topic,
  report,
  canRead,
}: {
  topic: Topic;
  report: AnalysisReport;
  canRead: boolean;
}) {
  const topicSources = report.sourceIds
    .map((id) => sources.find((source) => source.id === id))
    .filter(Boolean);
  const issues = dataQualityIssues.filter((issue) => issue.topicId === topic.id);

  return (
    <div className="inspector">
      <div className="inspector-head">
        <div>
          <p className="eyebrow">Ausgewaehltes Thema</p>
          <h2>{topic.title}</h2>
        </div>
        <TrafficLightDot value={topic.status} size="large" />
      </div>

      <p className="inspector-copy">{topic.returnDriver}</p>

      <div className="signal-stack">
        <TrafficSummary label="These" value={topic.status} compact />
        <TrafficSummary label="Timing" value={topic.timing} compact />
        <TrafficSummary label="Handlungsnaehe" value={topic.actionProximity} compact />
      </div>

      <div className="access-card">
        <div className="access-icon">
          {canRead ? <ShieldCheck size={18} aria-hidden /> : <Lock size={18} aria-hidden />}
        </div>
        <div>
          <strong>{canRead ? "Zugriff aktiv" : "Paid-Zugriff noetig"}</strong>
          <p>
            {canRead
              ? "Der volle Report ist fuer diese Demo-Rolle sichtbar."
              : "Preview bleibt sichtbar, volle Auswertung waere hinter dem Abo."}
          </p>
        </div>
      </div>

      <div className="inspector-section">
        <h3>Quellenqualitaet</h3>
        <div className="source-list">
          {topicSources.map((source) =>
            source ? (
              <div key={source.id} className="source-row">
                <span>Rang {source.rank}</span>
                <strong>{sourceLabels[source.quality]}</strong>
                <p>{source.name}</p>
              </div>
            ) : null,
          )}
        </div>
      </div>

      <div className="inspector-section">
        <h3>Quality Gate</h3>
        <div className="issue-stack">
          {issues.map((issue) => (
            <IssuePill key={issue.id} issue={issue} />
          ))}
        </div>
      </div>
    </div>
  );
}

function AdminPanel({
  activeTab,
}: {
  activeTab: "topics" | "reports" | "customers" | "quality";
}) {
  if (activeTab === "reports") {
    return (
      <div className="admin-table">
        {reports.map((report) => {
          const topic = topics.find((item) => item.id === report.topicId);

          return (
            <div key={report.id} className="admin-row">
              <div>
                <strong>{report.title}</strong>
                <p>{topic?.title} · {report.publishedAt}</p>
              </div>
              <span className={clsx("status-pill", `report-${report.status}`)}>
                {reportStatusLabels[report.status]}
              </span>
            </div>
          );
        })}
      </div>
    );
  }

  if (activeTab === "customers") {
    return (
      <div className="admin-table">
        {users.map((user) => (
          <div key={user.id} className="admin-row">
            <div>
              <strong>{user.name}</strong>
              <p>{user.email} · {roleLabel(user.role)}</p>
            </div>
            <span className="status-pill">{user.plan} · {user.status}</span>
          </div>
        ))}
      </div>
    );
  }

  if (activeTab === "quality") {
    return (
      <div className="admin-table">
        {dataQualityIssues.map((issue) => {
          const topic = topics.find((item) => item.id === issue.topicId);

          return (
            <div key={issue.id} className="admin-row wide">
              <div>
                <strong>{issue.title}</strong>
                <p>{topic?.title} · {issue.detail}</p>
              </div>
              <IssuePill issue={issue} />
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="admin-table">
      {topics.map((topic) => (
        <div key={topic.id} className="admin-row">
          <div>
            <strong>{topic.title}</strong>
            <p>{topic.cluster} · {topic.horizon}</p>
          </div>
          <span className="status-pill">{topic.access}</span>
        </div>
      ))}
    </div>
  );
}

function LockedState({ topic }: { topic: Topic }) {
  return (
    <div className="locked-state">
      <div className="locked-icon">
        <Lock size={24} aria-hidden />
      </div>
      <div>
        <h3>{topic.title} ist ein Paid-Thema</h3>
        <p>
          Im echten Produkt wuerde hier Stripe den aktiven Abo-Status pruefen. Der MVP
          zeigt nur Vorschau, These, Ampel und Upgrade-Zustand.
        </p>
      </div>
    </div>
  );
}

function TrafficSummary({
  label,
  value,
  compact = false,
}: {
  label: string;
  value: TrafficLight;
  compact?: boolean;
}) {
  return (
    <div className={clsx("traffic-summary", compact && "compact")}>
      <TrafficLightDot value={value} />
      <div>
        <span>{label}</span>
        <strong>{lightMeta[value].label}</strong>
      </div>
    </div>
  );
}

function TrafficLightDot({
  value,
  size = "normal",
}: {
  value: TrafficLight;
  size?: "normal" | "large";
}) {
  return (
    <span
      className={clsx("traffic-dot", lightMeta[value].className, size === "large" && "large")}
      aria-label={lightMeta[value].label}
    />
  );
}

function TextList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="text-list">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function MiniList({
  title,
  items,
}: {
  title: string;
  items: Array<{ title: string; meta: string }>;
}) {
  return (
    <section className="mini-list">
      <h3>{title}</h3>
      {items.length > 0 ? (
        <div className="mini-list-stack">
          {items.map((item) => (
            <article key={`${item.title}-${item.meta}`}>
              <CalendarDays size={16} aria-hidden />
              <div>
                <strong>{item.title}</strong>
                <p>{item.meta}</p>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="empty-text">Keine Mock-Eintraege fuer dieses Thema.</p>
      )}
    </section>
  );
}

function IssueList({ issues }: { issues: DataQualityIssue[] }) {
  return (
    <section className="text-list">
      <h3>Datenqualitaet</h3>
      <div className="issue-stack">
        {issues.map((issue) => (
          <IssuePill key={issue.id} issue={issue} />
        ))}
      </div>
    </section>
  );
}

function IssuePill({ issue }: { issue: DataQualityIssue }) {
  return (
    <div className={clsx("issue-pill", `severity-${issue.severity}`)}>
      {issue.severity === "blocker" ? (
        <AlertTriangle size={15} aria-hidden />
      ) : issue.severity === "warning" ? (
        <Bell size={15} aria-hidden />
      ) : (
        <CheckCircle2 size={15} aria-hidden />
      )}
      <div>
        <strong>{issue.title}</strong>
        <span>{issue.detail}</span>
      </div>
    </div>
  );
}
