import { homeContent } from "@/lib/content";

const D = homeContent.brandsSection.dash;

/** Prescriptions over time, as an area chart with a drawn line. */
function Trend({ data }: { data: number[] }) {
  const w = 520, h = 160, px = 8, py = 10;
  const max = Math.max(...data), min = 0;
  const pts = data.map((v, i) => [
    px + (i / (data.length - 1)) * (w - px * 2),
    h - py - ((v - min) / (max - min)) * (h - py * 2),
  ]);
  const line = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const area = `${line} L${pts[pts.length - 1][0].toFixed(1)} ${h - py} L${px} ${h - py} Z`;
  const [lx, ly] = pts[pts.length - 1];
  return (
    <svg className="bd-chart" viewBox={`0 0 ${w} ${h}`} aria-hidden="true">
      <defs>
        <linearGradient id="bd-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#6D5DF5" stopOpacity=".22" />
          <stop offset="1" stopColor="#22B3D6" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="bd-line" x1="0" x2="1">
          <stop offset="0" stopColor="#6D5DF5" />
          <stop offset="1" stopColor="#22B3D6" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((f) => (
        <line key={f} x1={px} x2={w - px} y1={py + (h - py * 2) * f} y2={py + (h - py * 2) * f} className="bd-grid" />
      ))}
      <path d={area} fill="url(#bd-fill)" />
      <path d={line} className="bd-line" stroke="url(#bd-line)" pathLength={1} />
      <circle cx={lx} cy={ly} r="5" className="bd-dot" />
    </svg>
  );
}

export function BrandsSection() {
  const t = homeContent.brandsSection;
  return (
    <section className="feat feat-brands" id="brands">
      <div className="wrap feat-split rev">
        <div>
          <div className="feat-head">
            <p className="feat-name">{t.name}</p>
            <h2>{t.h2}</h2>
            <p>{t.p}</p>
          </div>
          <div className="feat-actions">
            <a className="btn btn-primary btn-lg" href="#access" data-role={t.role} data-cta="brand_partner">{t.cta}</a>
          </div>
        </div>
        <div className="feat-demo">
          <div className="bd" aria-label={`${D.title}, illustrative`}>
            <div className="bd-bar">
              <b>{D.title}</b>
              <span className="bd-prod">{D.product}</span>
              <span className="bd-period">{D.period}</span>
            </div>
            <div className="bd-kpis">
              {D.kpis.map((k) => (
                <div key={k.k}>
                  <span className="bd-k">{k.k}</span>
                  <span className="bd-v">{k.v}</span>
                  <span className="bd-d">{k.d}</span>
                </div>
              ))}
            </div>
            <Trend data={D.series} />
            <div className="bd-months" aria-hidden="true">
              {D.months.map((m) => <span key={m}>{m}</span>)}
            </div>
            <div className="bd-concern">
              {D.byConcern.map(([n, v]) => (
                <div key={n} className="bd-row">
                  <span>{n}</span>
                  <i style={{ width: `${v}%` }} />
                  <b>{v}%</b>
                </div>
              ))}
            </div>
            <p className="bd-note">{D.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
