import { homeContent } from "@/lib/content";
import { PlatformMap } from "./PlatformMap";

export function Hero() {
  const t = homeContent.hero;
  return (
    <section className="ai-hero" id="platform">
      <div className="wrap ai-hero-grid">
        <div className="ai-hero-copy">
          <p className="ai-pill">
            <span className="ai-pill-dot" aria-hidden="true" />
            {t.pill}
          </p>
          <h1>{t.h1}</h1>
          <p className="ai-hero-sub">{t.sub}</p>
          <div className="ai-hero-cta">
            <a className="btn btn-primary btn-lg" href={t.primary.href} data-role={t.primary.role} data-cta="hero_0">
              {t.primary.label}
            </a>
            <a className="btn btn-light btn-lg" href={t.secondary.href} data-cta="hero_1">
              {t.secondary.label}
            </a>
          </div>
        </div>
        <div className="ai-hero-demo">
          <PlatformMap />
        </div>
      </div>
    </section>
  );
}
