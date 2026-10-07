import { homeContent } from "@/lib/content";

// Signature hero visual: a dermatology skin field being analysed, with
// intelligence layers annotated around it. Built in CSS/SVG (no stock photo).
// Image slot: drop /public/images/hero-skin.jpg to replace the CSS skin.
function SkinIntelligence() {
  return (
    <div className="si" aria-hidden="true">
      <div className="si-frame">
        <div className="si-skin" />
        <svg className="si-noise" xmlns="http://www.w3.org/2000/svg">
          <filter id="skinGrain">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="7" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#skinGrain)" />
        </svg>
        <div className="si-light" />
        <div className="si-grid" />
        <div className="si-scan" />
        <span className="si-pt si-pt-1" />
        <span className="si-pt si-pt-2" />
        <span className="si-pt si-pt-3" />
        <div className="si-badge">
          <span className="si-badge-dot" /> Analyzing skin
        </div>
      </div>

      <div className="si-ann si-ann-1">
        <span className="si-ann-k">Pigmentation</span>
        <span className="si-ann-v">Uneven tone detected</span>
      </div>
      <div className="si-ann si-ann-2">
        <span className="si-ann-k">Barrier</span>
        <span className="si-ann-v">Support suggested</span>
      </div>

      <div className="si-panel">
        <div className="si-panel-head">
          <span className="si-panel-dot" /> AI analysis
          <span className="si-sample">Illustrative</span>
        </div>
        <div className="si-panel-row"><span>Hydration</span><span className="si-meter"><i style={{ width: "72%" }} /></span></div>
        <div className="si-panel-row"><span>Barrier</span><span className="si-meter"><i style={{ width: "54%" }} /></span></div>
        <div className="si-panel-rec">Recommend: gentle barrier repair + SPF</div>
      </div>
    </div>
  );
}

export function HomeHero() {
  const t = homeContent.hero;
  return (
    <section className="hhero">
      <div className="wrap hhero-grid">
        <div className="hhero-copy">
          <span className="eyebrow eyebrow-up">
            <span className="dot" />
            {t.eyebrow}
          </span>
          <h1>{t.headline}</h1>
          <p className="hhero-sub">{t.sub}</p>
          <div className="hhero-cta">
            <a className="btn btn-primary btn-lg" href={t.pathPro.href} data-cta="hero_pro">
              {t.pathPro.cta}
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
            </a>
            <a className="btn btn-outline btn-lg" href={t.pathPat.href} data-cta="hero_sena">
              {t.pathPat.cta}
            </a>
          </div>
        </div>
        <div className="hhero-visual">
          <SkinIntelligence />
        </div>
      </div>
    </section>
  );
}
