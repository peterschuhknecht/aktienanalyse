import type { Evaluation } from "@/lib/types";
import { PlainNote, SectionCard } from "./ui";

export function PerformanceSection({ data }: { data: Evaluation["performance"] }) {
  return (
    <SectionCard
      kicker="Pflichtblock 3"
      title="Korrigierte Performance-Sicht"
      meta="Cash-Phase seit 01.07.2026 · Gewinn nur auf Depot-Ebene gerechnet"
    >
      <div className="perf-grid">
        <div>
          <div className="perf-hero">
            <div className="perf-hero-value num">{data.heroValue}</div>
            <div className="perf-hero-label">{data.heroLabel}</div>
          </div>
          <div className="kv-list">
            {data.keyValues.map((kv) => (
              <div className="kv-row" key={kv.label}>
                <span className="kv-label">{kv.label}</span>
                <span className={`kv-value num ${kv.tone ?? ""}`}>{kv.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="subhead">Wiedereinstiegs-Ziele (Zielallokation, Entry offen)</h3>
          <div className="table-scroll">
            <table className="data">
              <thead>
                <tr>
                  <th>Wert</th>
                  <th>Ziel</th>
                  <th>Zielbetrag</th>
                  <th>Kurs (Seed)</th>
                  <th>Fwd-KGV</th>
                </tr>
              </thead>
              <tbody>
                {data.reentry.map((row) => (
                  <tr key={row.symbol}>
                    <td style={{ whiteSpace: "nowrap" }}>
                      <div className="primary">{row.name}</div>
                      <div className="sym num">{row.symbol}</div>
                    </td>
                    <td className="num primary">{row.targetWeight}</td>
                    <td className="num">{row.targetAmount}</td>
                    <td>
                      <div className="primary num">{row.price}</div>
                      <div className={`sub num ${row.changeTone === "pos" ? "pos-text" : "neg-text"}`}>
                        {row.change}
                      </div>
                    </td>
                    <td className="num">{row.fwdPe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ margin: "10px 0 0", fontSize: 11.5, color: "var(--text-3)" }}>
            Forward-KGV = Kurs geteilt durch den für die nächsten 12 Monate erwarteten
            Gewinn; je niedriger, desto günstiger. Werte um 7 sind für Wachstumswerte
            ungewöhnlich billig — üblich wären 15–25.
          </p>
        </div>
      </div>

      <PlainNote>{data.plain}</PlainNote>
    </SectionCard>
  );
}
