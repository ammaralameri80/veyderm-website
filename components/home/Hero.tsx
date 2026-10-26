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

/** Face-analysis mesh drawn over the portrait: nodes joined into a light net,
 *  the way veyderm's AI "reads" a face. Decorative. */
const NODES: Record<string, [number, number]> = {
  f1: [49, 36], f2: [61, 36],
  t1: [42, 44], t2: [68, 44],
  e1: [50, 48], e2: [60, 48],
  n: [55, 56],
  c1: [45, 60], c2: [65, 60],
  m: [55, 66],
  j1: [47, 72], j2: [63, 72],
  ch: [55, 78],
};
const EDGES: [string, string][] = [
  ["f1", "f2"], ["f1", "t1"], ["f2", "t2"], ["f1", "e1"], ["f2", "e2"],
  ["t1", "e1"], ["t2", "e2"], ["t1", "c1"], ["t2", "c2"],
  ["e1", "e2"], ["e1", "n"], ["e2", "n"], ["e1", "c1"], ["e2", "c2"],
  ["c1", "n"], ["c2", "n"], ["c1", "m"], ["c2", "m"], ["n", "m"],
  ["c1", "j1"], ["c2", "j2"], ["m", "j1"], ["m", "j2"],
  ["j1", "ch"], ["j2", "ch"], ["m", "ch"], ["j1", "j2"],
];

function FaceMesh() {
  return (
    <svg className="mesh" viewBox="0 0 100 125" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
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

/** Hero: the message on the left, the AI reading a real face on the right —
 *  the single characteristic thing veyderm does. */
export function Hero() {
  const [h1a, h1em, h1b] = HOME.hero.h1;
  return (
    <header className="hero" id="top">
      <div className="wrap hero-grid">
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

        <div className="hero-visual">
          <div className="scan-wrap">
            <div className="scan" role="img" aria-label="A portrait lit in clinical light while veyderm's AI reads the skin — pigmentation, texture and hydration — with a plan recommended by a dermatologist.">
              <Image src="/images/hero-scan.webp" alt="" fill priority sizes="(max-width: 920px) 86vw, 460px" className="scan-img" />
              <FaceMesh />
              <span className="scan-line" aria-hidden="true" />
              <ul className="scan-chips" aria-hidden="true">
                <li style={{ left: "44%", top: "41%" }}><i />Pigmentation</li>
                <li style={{ left: "26%", top: "57%" }}><i />Texture</li>
                <li style={{ left: "54%", top: "65%" }}><i />Hydration 72%</li>
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
        </div>
      </div>
    </header>
  );
}
