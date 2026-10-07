import { homeContent } from "@/lib/content";
import { Arrow } from "./Icons";

export function FinalCta() {
  const t = homeContent.final;
  return (
    <section className="vfinal">
      <div className="wrap">
        <h2>{t.h2}</h2>
        <div className="vfinal-cards">
          {t.cards.map((c) => (
            <a
              key={c.role}
              className={`vfcard tone-${c.tone}`}
              href="#access"
              data-role={c.role}
              data-cta={`final_${c.tone}`}
            >
              <span className="vfcard-tag">{c.tag}</span>
              <span className="vfcard-label">{c.label}</span>
              <span className="vfcard-cta">{c.cta}<Arrow size={16} className="ar" /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
