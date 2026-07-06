import type { Evaluation, RiskStatus } from "@/lib/types";
import { PlainNote, SectionCard } from "./ui";

const statusClass: Record<RiskStatus, string> = {
  ok: "status-ok",
  warn: "status-warn",
  alert: "status-alert",
  sleep: "status-sleep",
};

export function RiskSection({ data }: { data: Evaluation["risks"] }) {
  return (
    <SectionCard
      kicker="Pflichtblock 4"
      title="Risikogrenzen-Status"
      meta="Cash-Phase: nur der Basis-Schutz ist aktiv"
    >
      <div className="table-scroll">
        <table className="data">
          <thead>
            <tr>
              <th>Grenze</th>
              <th>Limit</th>
              <th>Aktuell</th>
              <th>Status</th>
              <th>Hinweis</th>
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row) => (
              <tr key={row.name}>
                <td className="primary" style={{ minWidth: 190 }}>
                  {row.name}
                </td>
                <td className="num" style={{ whiteSpace: "nowrap" }}>
                  {row.limit}
                </td>
                <td className="num" style={{ whiteSpace: "nowrap" }}>
                  {row.current}
                </td>
                <td>
                  <span className={`status-cell ${statusClass[row.status]}`}>
                    <span className="status-dot" />
                    {row.statusLabel}
                  </span>
                </td>
                <td style={{ minWidth: 220 }}>{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PlainNote>{data.plain}</PlainNote>
    </SectionCard>
  );
}
