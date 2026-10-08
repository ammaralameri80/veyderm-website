import { homeContent } from "@/lib/content";
import { Arrow } from "./Icons";
import { SkinPrintCanvas } from "./SkinPrintCanvas";

/**
 * One primary action (clinicians are the customer), one quiet secondary, and a
 * single line routing brands and patients. The four trust principles sit under
 * the fold line as a proof strip instead of a section of their own.
 */
export function Hero() {
  const t = homeContent.hero;
  return (
    <section className="vhero">
      <div className="wrap vhero-grid">
        <div className="vhero-copy">
          <p className="eyebrow">{t.kicker}</p>
          <h1 className="vhero-h1">
            Every skin deserves <em>its own</em> plan.
          </h1>
          <p className="vhero-sub">{t.sub}</p>
          <div className="vhero-cta">
            <a className="btn btn-primary btn-lg" href={t.cta.href} data-role={t.cta.role} data-cta="hero_0">
              {t.cta.label}
            </a>
            <a className="link-arrow" href={t.secondary.href} data-cta="hero_1">
              {t.secondary.label}
              <Arrow size={16} />
            </a>
          </div>
          <p className="vhero-also">
            Also for <a href="#brands">skincare brands</a> and <a href="/sena">patients</a>.
          </p>
        </div>

        <div className="vhero-visual">
          <SkinPrintCanvas chips={t.chips} label={t.chipLabel} />
        </div>
      </div>

      <ul className="wrap vproof" aria-label="Principles">
        {homeContent.trust.points.map((p) => (
          <li key={p.t}>
            <span className="vproof-t">{p.t}</span>
            <span className="vproof-d">{p.d}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
