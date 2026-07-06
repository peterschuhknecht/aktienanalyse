import type { Evaluation } from "@/lib/types";
import { PlainNote, SectionCard } from "./ui";

export function EventsSection({ data }: { data: Evaluation["events"] }) {
  return (
    <SectionCard
      kicker="Pflichtblock 2"
      title="Terminübersicht"
      meta="Pflichtfenster: heute + 5 Tage · Vorschau ~30 Tage · Gewicht 0–10"
    >
      <div className="table-scroll">
        <table className="data">
          <thead>
            <tr>
              <th>Datum</th>
              <th>Ereignis</th>
              <th>Gewicht</th>
              <th>Relevanz</th>
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row) => (
              <tr key={`${row.date}-${row.name}`}>
                <td className="num" style={{ whiteSpace: "nowrap" }}>
                  {row.date}
                </td>
                <td style={{ minWidth: 260 }}>
                  <span className="primary">{row.name}</span>
                  <span className="type-chip">{row.type}</span>
                  {row.tentative ? (
                    <span className="type-chip tentative">tentativ</span>
                  ) : null}
                </td>
                <td>
                  <div className="weight-cell">
                    <span className="weight-num">
                      {row.weight}
                      <span className="of">/10</span>
                    </span>
                    <span className="weight-track">
                      <span
                        className={`weight-fill ${row.weight >= 8 ? "hot" : ""}`}
                        style={{ width: `${row.weight * 10}%`, display: "block" }}
                      />
                    </span>
                  </div>
                </td>
                <td style={{ minWidth: 240 }}>{row.relevance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PlainNote>{data.plain}</PlainNote>
    </SectionCard>
  );
}
