import { homeContent } from "@/lib/content";
import { Icon } from "./Icons";
import { SkinPrintCanvas } from "./SkinPrintCanvas";

export function Hero() {
  const t = homeContent.hero;
  return (
    <section className="vhero">
      <div className="wrap vhero-grid">
        <div className="vhero-copy">
          <span className="v-kicker"><span className="dot" />{t.kicker}</span>
          <h1 className="vhero-h1">{t.h1}</h1>
          <p className="vhero-sub">{t.sub}</p>
          <div className="vhero-cta">
            {t.ctas.map((c, i) =>
              c.role ? (
                <a
                  key={c.label}
                  className={`btn btn-lg ${i === 0 ? "btn-primary" : "btn-light"}`}
                  href={c.href}
                  data-role={c.role}
                  data-cta={`hero_${i}`}
                >
                  {c.label}
                </a>
              ) : (
                <a key={c.label} className="btn btn-lg btn-light" href={c.href} data-cta={`hero_${i}`}>
                  {c.label}
                </a>
              )
            )}
          </div>
          <p className="vhero-note">
            <span className="tick"><Icon name="check" size={17} /></span>
            {t.micro}
          </p>
        </div>

        <div className="vhero-visual">
          <SkinPrintCanvas chips={t.chips} label={t.chipLabel} />
        </div>
      </div>
    </section>
  );
}
