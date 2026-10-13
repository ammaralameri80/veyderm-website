import Image from "next/image";
import { homeContent } from "@/lib/content";

const H = homeContent.lux.hero;
const CTA = homeContent.hero;

// Glowing nodes of the AI mesh painted into the portrait (as % of the
// 960×1280 image). Drawn again in code so they can twinkle.
const NODES = [
  [63.3, 19.0], [71.9, 25.8], [74.2, 33.4], [67.7, 38.0], [77.9, 40.6],
  [74.8, 42.8], [71.9, 45.3], [74.6, 47.4], [65.1, 49.4], [61.8, 52.2],
] as const;

export function LuxHero() {
  return (
    <section className="lx-hero" id="platform">
      <div className="lx-hero-art" aria-hidden="false">
        <Image
          src="/images/lux-hero.webp"
          alt="A woman in profile with a fine glowing AI analysis mesh across her cheek"
          fill
          priority
          sizes="(max-width: 960px) 100vw, 46vw"
          style={{ objectFit: "cover", objectPosition: "50% 0%" }}
        />
        <span className="lx-scan" aria-hidden="true"><i /></span>
        <span className="lx-nodes" aria-hidden="true">
          {NODES.map(([x, y], i) => (
            <i key={i} style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${(i * 0.37) % 2.4}s` }} />
          ))}
        </span>

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
        <p className="lx-cap">{H.caption}</p>
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
