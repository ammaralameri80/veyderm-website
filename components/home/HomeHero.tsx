import { homeContent } from "@/lib/content";

function HeroVisual() {
  return (
    <div className="hv" aria-hidden="true">
      <div className="hv-scan">
        <div className="hv-skin" />
        <div className="hv-line" />
        <span className="hv-marker m1" />
        <span className="hv-marker m2" />
        <span className="hv-marker m3" />
      </div>
      <div className="hv-card">
        <div className="hv-card-head">
          <span className="hv-dot" />
          AI analysis
          <span className="hv-sample">Illustrative</span>
        </div>
        <div className="hv-chip">Dryness detected</div>
        <div className="hv-chip">Barrier support suggested</div>
        <div className="hv-conf">
          <span>Confidence</span>
          <span className="hv-bar"><i /></span>
        </div>
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
          <span className="eyebrow">
            <span className="dot" />
            {t.eyebrow}
          </span>
          <h1>{t.headline}</h1>
          <p className="hhero-sub">{t.sub}</p>
          <div className="hhero-paths">
            <a className="hpath hpath-pro" href={t.pathPro.href} data-cta="hero_pro">
              <span className="hpath-label">{t.pathPro.label}</span>
              <span className="hpath-cta">
                {t.pathPro.cta}
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
              </span>
            </a>
            <a className="hpath hpath-sena" href={t.pathPat.href} data-cta="hero_sena">
              <span className="hpath-label">{t.pathPat.label}</span>
              <span className="hpath-cta">
                {t.pathPat.cta}
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
              </span>
            </a>
          </div>
        </div>
        <div className="hhero-visual">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
