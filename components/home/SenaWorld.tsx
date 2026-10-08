import { homeContent } from "@/lib/content";
import { Icon } from "./Icons";
import { SenaChatDemo } from "./SenaChatDemo";

export function SenaWorld() {
  const t = homeContent.sena;

  return (
    <section className="vsena" id="sena">
      <div className="wrap">
        <div className="vsena-grid">
          <div className="vsena-copy">
            <p className="ai-pill"><span className="ai-pill-dot" aria-hidden="true" />{t.kicker}</p>
            <h2 className="vsena-h2">{t.h2}</h2>
            <p className="vsena-sub">{t.sub}</p>
            <ol className="vsena-points">
              {t.points.map((p, i) => (
                <li key={p}><span className="pn">{i + 1}</span>{p}</li>
              ))}
            </ol>
            <p className="vsena-reassure"><Icon name="check" size={16} />{t.reassure}</p>
            <a className="btn btn-primary btn-lg" href="#access" data-role={t.role} data-cta="sena_cta">
              {t.cta}
            </a>
          </div>

          <div className="vsena-app-wrap">
            <SenaChatDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
