import type { Evaluation } from "@/lib/types";
import { PlainNote, ScorePill, SectionCard, SegBar, scoreTone } from "./ui";

export function AmpelSection({ data }: { data: Evaluation["ampel"] }) {
  return (
    <SectionCard
      kicker="Pflichtblock 1"
      title="Depot-Ampel — Wiedereinstiegs-Sicht"
      meta="Skala 0–10 · 10 = grün/top"
    >
      <div className="score-grid">
        {data.tiles.map((tile) => (
          <div
            key={tile.label}
            className={`score-tile ${tile.label === "Gesamt" ? "total" : ""}`}
          >
            <div className="score-label">{tile.label}</div>
            <div className={`score-value ${scoreTone(tile.value)}`}>
              {tile.value}
              <span className="of">/10</span>
            </div>
            <SegBar value={tile.value} />
            <div className="score-hint">{tile.hint}</div>
          </div>
        ))}
      </div>

      <p className="sub" style={{ marginTop: 10, marginBottom: 18, fontSize: 12, color: "var(--text-3)" }}>
        {data.totalHint}
      </p>

      <div className="table-scroll">
        <table className="data">
          <thead>
            <tr>
              <th>Wert</th>
              <th>Fundamental</th>
              <th>Timing</th>
              <th>Handlungsnähe</th>
              <th>Einordnung</th>
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row) => (
              <tr key={row.symbol}>
                <td style={{ whiteSpace: "nowrap" }}>
                  <div className="primary">{row.name}</div>
                  <div className="sym num">{row.symbol}</div>
                </td>
                <td>
                  <ScorePill value={row.fundamental} />
                </td>
                <td>
                  <ScorePill value={row.timing} />
                </td>
                <td>
                  <ScorePill value={row.action} />
                </td>
                <td style={{ minWidth: 280 }}>{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="subhead" style={{ marginTop: 18 }}>
        Kurzfassung
      </h3>
      <p className="report-text">{data.summary}</p>

      <PlainNote>{data.plain}</PlainNote>
    </SectionCard>
  );
}
