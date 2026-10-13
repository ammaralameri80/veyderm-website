import Image from "next/image";
import { homeContent } from "@/lib/content";

const H = homeContent.lux.hero;
const CTA = homeContent.hero;

// AI analysis mesh registered to the portrait's facial landmarks, in a
// 100×125 space that matches the photo's 4:5 frame.
const P: Record<string, [number, number]> = {
  fh: [56.0, 34.0], tl: [44.6, 42.4], tr: [69.1, 41.4],
  nb: [57.8, 50.0], nt: [58.3, 60.0],
  cl: [49.3, 55.5], cl2: [47.5, 62.2], cr: [66.8, 56.1], cr2: [68.2, 62.7],
  jl: [49.8, 70.6], jr: [67.0, 70.6], ch: [58.8, 76.2],
};
const EDGES: [string, string][] = [
  ["fh", "tl"], ["fh", "tr"], ["fh", "nb"], ["tl", "cl"], ["tr", "cr"], ["nb", "cl"], ["nb", "cr"],
  ["nb", "nt"], ["cl", "nt"], ["cr", "nt"], ["cl", "cl2"], ["cr", "cr2"], ["cl2", "jl"], ["cr2", "jr"],
  ["nt", "cl2"], ["nt", "cr2"], ["jl", "ch"], ["jr", "ch"], ["nt", "ch"],
];

export function LuxHero() {
  return (
    <section className="lx-hero" id="platform">
      <div className="lx-hero-art">
        <div className="lx-hero-frame">
          <Image
            src="/images/photo-hero.webp"
            alt="Portrait of a woman lit in violet light, with an AI skin analysis mesh across her face"
            fill
            priority
            sizes="(max-width: 960px) 100vw, 52vw"
            style={{ objectFit: "cover", objectPosition: "50% 0%" }}
          />
          <svg className="lx-mesh" viewBox="0 0 100 125" aria-hidden="true">
            <defs>
              <radialGradient id="lx-node">
                <stop offset="0" stopColor="#fff" />
                <stop offset=".45" stopColor="#D9CCFF" stopOpacity=".9" />
                <stop offset="1" stopColor="#B7A4FF" stopOpacity="0" />
              </radialGradient>
            </defs>
            {EDGES.map(([a, b], i) => (
              <line key={i} className="lx-edge" x1={P[a][0]} y1={P[a][1]} x2={P[b][0]} y2={P[b][1]} pathLength={1} style={{ animationDelay: `${0.6 + i * 0.05}s` }} />
            ))}
            {Object.values(P).map(([x, y], i) => (
              <circle key={i} className="lx-node" cx={x} cy={y} r="1.6" fill="url(#lx-node)" style={{ animationDelay: `${(i * 0.31) % 2.4}s` }} />
            ))}
          </svg>
          <span className="lx-scan" aria-hidden="true"><i /></span>
        </div>

        <div className="lx-glass lx-rec" aria-hidden="true">
          <span className="lx-rec-img" />
          <span className="lx-rec-tx">
            <small>{H.rec.k}</small>
            <b>{H.rec.n}</b>
            <span className="lx-ev">{H.rec.s}</span>
          </span>
        </div>
        <div className="lx-glass lx-scanchip" aria-hidden="true">
          <span className="lx-scan-ic" />
          <span><b>{H.scan.t}</b><small>{H.scan.s}</small></span>
        </div>
      </div>

      <div className="lx-wrap lx-hero-copy">
        <p className="lx-kicker">{H.kicker}</p>
        <h1 className="lx-h1">
          {H.h1a} <em>{H.h1em}</em> {H.h1b}
        </h1>
        <p className="lx-sub">{H.sub}</p>
        <div className="lx-cta">
          <a className="lx-btn lx-btn-dark" href={CTA.primary.href} data-role={CTA.primary.role} data-cta="hero_0">
            {CTA.primary.label}
            <span className="lx-btn-ic" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9" /></svg>
            </span>
          </a>
          <a className="lx-link" href={CTA.secondary.href} data-cta="hero_1">{CTA.secondary.label}</a>
        </div>

        <div className="lx-glass lx-progress" aria-hidden="true">
          <div className="lx-progress-h">
            <span className="lx-av">LH</span>
            <span><b>{H.progress.n}</b><small>{H.progress.t}</small></span>
          </div>
          <p className="lx-big">{H.progress.v}</p>
          <small>{H.progress.d}</small>
        </div>
      </div>
    </section>
  );
}
