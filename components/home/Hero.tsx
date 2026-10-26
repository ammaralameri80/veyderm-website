import Image from "next/image";
import { Button, TextLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { HOME } from "@/lib/site";

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

/** Face-analysis mesh traced along the profile — forehead, brow, eye, nose,
 *  lips, chin, cheek and temple — the way veyderm's AI "reads" a face. */
const NODES: Record<string, [number, number]> = {
  fh: [29, 9], tm: [54, 31], br: [24, 43], ey: [35, 53],
  nb: [20, 60], nt: [6, 75], sn: [14, 84], cb: [45, 65],
  ck: [48, 86], ul: [12, 93], lp: [15, 102], ch: [23, 119], jw: [45, 115],
};
const EDGES: [string, string][] = [
  ["fh", "br"], ["fh", "tm"], ["br", "tm"], ["br", "ey"], ["ey", "tm"],
  ["br", "nb"], ["ey", "nb"], ["nb", "nt"], ["nt", "sn"], ["sn", "ul"],
  ["ul", "lp"], ["lp", "ch"], ["ey", "cb"], ["tm", "cb"], ["nb", "cb"],
  ["sn", "cb"], ["cb", "ck"], ["sn", "ck"], ["lp", "ck"], ["ck", "ch"],
  ["ck", "jw"], ["ch", "jw"],
];

function FaceMesh() {
  return (
    <svg className="mesh" viewBox="0 0 100 125" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <g className="mesh-lines">
        {EDGES.map(([a, b], i) => {
          const [x1, y1] = NODES[a];
          const [x2, y2] = NODES[b];
          return <line key={`${a}-${b}`} x1={x1} y1={y1} x2={x2} y2={y2} style={{ animationDelay: `${(i % 9) * 0.34}s` }} />;
        })}
      </g>
      <g className="mesh-nodes">
        {Object.entries(NODES).map(([k, [x, y]], i) => (
          <circle key={k} cx={x} cy={y} r={0.8} style={{ animationDelay: `${(i % 6) * 0.42}s` }} />
        ))}
      </g>
    </svg>
  );
}

/** Hero: the message on the left over a light field, the AI reading a real
 *  face on the right as a full-height image the nav floats over. */
export function Hero() {
  const [h1a, h1em, h1b] = HOME.hero.h1;
  return (
    <header className="hero" id="top">
      <div className="hero-visual" role="img" aria-label="A portrait lit in clinical light while veyderm's AI reads the skin — pigmentation, texture and hydration — with a plan recommended by a dermatologist.">
        <div className="hero-bg" aria-hidden="true">
          <Image src="/images/hero-skin-ritual.webp" alt="" fill priority sizes="(max-width: 920px) 100vw, 52vw" className="scan-img" />
          <span className="hero-bg-fade" />
        </div>
        <div className="scan" aria-hidden="true">
          <FaceMesh />
          <span className="scan-line" />
          <ul className="scan-chips">
            <li style={{ left: "56%", top: "56%" }}><i />Pigmentation</li>
            <li style={{ left: "36%", top: "19%" }}><i />Texture</li>
            <li style={{ left: "44%", top: "80%" }}><i />Hydration 72%</li>
          </ul>
        </div>

        <div className="hcard hcard-analysis" aria-hidden="true">
          <span className="hc-ic"><Icon name="sparkles" /></span>
          <span><small>AI skin analysis</small><b>SkinPrint ready</b></span>
        </div>
        <div className="hcard hcard-reco" aria-hidden="true">
          <small>Recommended by your dermatologist</small>
          <b>Azelaic serum 20%</b>
          <span className="hc-pill">Strong evidence</span>
        </div>
        <div className="hcard hcard-progress" aria-hidden="true">
          <span className="pt-av">LH</span>
          <span className="hc-prog">
            <small>Lana H. · Skin progress</small>
            <b>+18%<em>since last visit</em></b>
          </span>
        </div>
      </div>

      <div className="wrap hero-inner">
        <div className="hero-copy">
          <span className="kicker"><Icon name="sparkles" />{HOME.hero.kicker}</span>
          <h1 className="display">
            {h1a}
            <span className="accent">{h1em}</span>
            {h1b}
          </h1>
          <p className="lead">{HOME.hero.sub}</p>
          <div className="hero-cta">
            <Button href={HOME.hero.primary.href} role={HOME.hero.primary.role} cta="hero_primary" arrow>
              {HOME.hero.primary.label}
            </Button>
            <TextLink href={HOME.hero.secondary.href} cta="hero_secondary">
              {HOME.hero.secondary.label}
            </TextLink>
          </div>
          <ul className="hero-proof" aria-label="What veyderm promises">
            {HOME.proof.map((p) => (
              <li key={p}><Check />{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
