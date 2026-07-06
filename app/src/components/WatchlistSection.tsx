import type { Evaluation } from "@/lib/types";
import { AlphaBadge, PlainNote, SectionCard } from "./ui";

export function WatchlistSection({ data }: { data: Evaluation["watchlist"] }) {
  return (
    <SectionCard
      kicker="Schlussblock"
      title="Watchlist & Zusatzwerte — Einstiegs-/Alpha-Urteil"
      meta="Alpha = erwartete Mehrrendite ggü. Hauptaktien bzw. Breitmarkt (S&P 500 / Nasdaq 100)"
    >
      <div className="table-scroll">
        <table className="data">
          <thead>
            <tr>
              <th>Wert</th>
              <th>Kurs (Seed)</th>
              <th>Fwd-KGV</th>
              <th>Alpha-Urteil</th>
              <th>Diversifikation</th>
              <th>Urteil</th>
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row) => (
              <tr key={row.symbol}>
                <td style={{ minWidth: 170 }}>
                  <div className="primary">{row.name}</div>
                  <div className="sym num">{row.symbol}</div>
                  <div className="sub">{row.role}</div>
                </td>
                <td className="num" style={{ minWidth: 130 }}>
                  {row.price}
                </td>
                <td className="num">{row.fwdPe}</td>
                <td>
                  <div className="alpha-stack">
                    <span>
                      <span className="alpha-label">vs. Hauptaktien</span>
                      <AlphaBadge verdict={row.alphaCore} />
                    </span>
                    <span>
                      <span className="alpha-label">vs. Markt</span>
                      <AlphaBadge verdict={row.alphaMarket} />
                    </span>
                  </div>
                </td>
                <td style={{ minWidth: 170 }}>{row.diversification}</td>
                <td>
                  <span className={`verdict-chip ${row.verdictTone === "neutral" ? "" : row.verdictTone}`}>
                    {row.verdict}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PlainNote>{data.plain}</PlainNote>
    </SectionCard>
  );
}
