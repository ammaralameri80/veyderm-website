import { homeContent } from "@/lib/content";

export function HomeHero() {
  const t = homeContent.hero;
  return (
    <section className="hhero">
      <div className="hhero-orb" aria-hidden="true" />
      <div className="wrap">
        <span className="eyebrow">
          <span className="dot" />
          {t.eyebrow}
        </span>
        <h1>{t.headline}</h1>
        <p className="hhero-sub">{t.sub}</p>
        <div className="hhero-cta">
          <a className="btn btn-primary" href="/pro" data-cta="hero_pro">
            {t.ctaPro}
          </a>
          <a className="btn btn-sena" href="/sena" data-cta="hero_sena">
            {t.ctaSena}
          </a>
        </div>
      </div>
    </section>
  );
}
