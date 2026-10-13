import { homeContent } from "@/lib/content";
import { HeroScene } from "./HeroScene";

export function Hero() {
  const t = homeContent.hero;
  return (
    <section className="cine" id="platform">
      <HeroScene />
      <div className="wrap cine-content">
        <div className="cine-copy">
          <p className="cine-pill">
            <span className="ai-pill-dot" aria-hidden="true" />
            Dermatology, powered by AI
          </p>
          <h1>{t.h1}</h1>
          <p className="cine-sub">{t.sub}</p>
          <div className="ai-hero-cta">
            <a className="btn btn-primary btn-lg" href={t.primary.href} data-role={t.primary.role} data-cta="hero_0">
              {t.primary.label}
            </a>
            <a className="btn btn-light btn-lg" href={t.secondary.href} data-cta="hero_1">
              {t.secondary.label}
            </a>
          </div>
        </div>
      </div>
      <p className="cine-cap">Illustrative scene. AI-generated image, finished in Adobe Photoshop.</p>
    </section>
  );
}
