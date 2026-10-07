import { homeContent } from "@/lib/content";
import { Arrow } from "./Icons";

export function FinalCta() {
  const t = homeContent.final;
  return (
    <section className="vfinal">
      <div className="wrap">
        <h2>{t.h2}</h2>
        <p>{t.p}</p>
        <div className="vfinal-paths">
          <a className="btn btn-primary btn-lg" href="#access" data-role={t.rolePro} data-cta="final_pro">
            {t.ctaPro}<Arrow className="ar" />
          </a>
          <a className="btn btn-light btn-lg" href="#access" data-role={t.rolePat} data-cta="final_pat">
            {t.ctaSena}<Arrow className="ar" />
          </a>
        </div>
      </div>
    </section>
  );
}
