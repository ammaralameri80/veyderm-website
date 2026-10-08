import { homeContent } from "@/lib/content";

const M = homeContent.hero.map;

/** Small sparkline for the brands node. */
function Spark({ data }: { data: number[] }) {
  const w = 120, h = 36;
  const max = Math.max(...data), min = Math.min(...data);
  const pts = data.map((v, i) => [
    (i / (data.length - 1)) * w,
    h - ((v - min) / (max - min || 1)) * (h - 4) - 2,
  ]);
  const d = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const area = `${d} L${w} ${h} L0 ${h} Z`;
  return (
    <svg className="pm-spark" viewBox={`0 0 ${w} ${h}`} aria-hidden="true">
      <path d={area} className="pm-spark-a" />
      <path d={d} className="pm-spark-l" pathLength={1} />
    </svg>
  );
}

/**
 * The platform in one picture: the veyderm AI core in the centre, with the
 * three products it powers around it. Dashed lines carry data between them
 * (continuous, slow) — the page's only ambient motion.
 */
export function PlatformMap() {
  return (
    <div className="pm" aria-label="veyderm platform: veyderm Pro, Sena and brand insights, all powered by veyderm AI">
      <svg className="pm-lines" viewBox="0 0 560 520" aria-hidden="true">
        <defs>
          <linearGradient id="pm-g" x1="0" x2="1">
            <stop offset="0" stopColor="#6D5DF5" />
            <stop offset="1" stopColor="#22B3D6" />
          </linearGradient>
        </defs>
        {/* core ↔ pro (top-left) */}
        <path className="pm-line" d="M250 260 C 205 240, 175 180, 140 130" />
        {/* core ↔ sena (right) */}
        <path className="pm-line" d="M250 260 C 280 262, 300 262, 322 262" />
        {/* core ↔ brands (bottom-left) */}
        <path className="pm-line" d="M250 260 C 210 290, 180 360, 150 410" />
        <circle className="pm-ring r1" cx="250" cy="260" r="64" />
        <circle className="pm-ring r2" cx="250" cy="260" r="104" />
        <circle className="pm-ring r3" cx="250" cy="260" r="150" />
      </svg>

      <div className="pm-core">
        <span className="pm-orb" aria-hidden="true" />
        <b>{M.core}</b>
        <span>{M.coreSub}</span>
      </div>

      <div className="pm-node pm-pro">
        <div className="pm-node-h"><b>{M.pro.name}</b><span>{M.pro.sub}</span></div>
        <div className="pm-pro-row">
          <span className="pm-avatar" aria-hidden="true" />
          <span className="pm-pro-tx"><b>{M.pro.meta}</b><span>{M.pro.line}</span></span>
          <span className="pm-pro-btn">Review</span>
        </div>
      </div>

      <div className="pm-node pm-sena">
        <div className="pm-node-h"><span className="sc-orb sm" aria-hidden="true" /><b>{M.sena.name}</b><span>{M.sena.sub}</span></div>
        <p className="pm-sena-msg">{M.sena.line}</p>
        <span className="pm-meta">{M.sena.meta}</span>
      </div>

      <div className="pm-node pm-brands">
        <div className="pm-node-h"><b>{M.brands.name}</b><span>{M.brands.sub}</span></div>
        <div className="pm-brands-row">
          <span className="pm-brands-tx"><span>{M.brands.line}</span><b>{M.brands.meta}</b></span>
          <Spark data={M.brands.series} />
        </div>
      </div>
    </div>
  );
}
