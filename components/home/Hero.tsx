import { homeContent } from "@/lib/content";
import { PlanSheet } from "./PlanSheet";

/**
 * Leads with the product itself — a signed treatment plan — rather than an
 * abstract visual. One primary action for clinicians; brands and patients
 * jump to their own row further down.
 */
export function Hero() {
  const t = homeContent.hero;
  return (
    <section className="h3ro">
      <div className="wrap h3ro-grid">
        <div className="h3ro-copy">
          <h1 className="h3ro-h1">{t.h1}</h1>
          <p className="h3ro-sub">{t.sub}</p>
          <div className="h3ro-cta">
            <a className="btn btn-primary btn-lg" href={t.cta.href} data-role={t.cta.role} data-cta="hero_0">
              {t.cta.label}
            </a>
          </div>
          <ul className="h3ro-others">
            {t.others.map((o) => (
              <li key={o.href}>
                <a href={o.href}>{o.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="h3ro-visual">
          <PlanSheet live />
        </div>
      </div>
    </section>
  );
}
