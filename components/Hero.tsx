import { HeroMockup } from "./HeroMockup";
import { content, type Lang } from "@/lib/content";

export function Hero({ lang }: { lang: Lang }) {
  const t = content[lang].hero;
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="dot" />
            {t.eyebrow}
          </span>
          <h1>
            {t.h1a}
            <br />
            <em>{t.h1b}</em>
          </h1>
          <p className="sub">{t.sub}</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#access" data-cta="hero">
              {t.cta}
            </a>
            <a className="btn btn-ghost" href="#how">
              {t.secondary}
            </a>
          </div>
          <ul className="hero-trust">
            {t.trust.map((item) => (
              <li key={item}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-visual">
          <HeroMockup lang={lang} />
        </div>
      </div>
    </section>
  );
}
