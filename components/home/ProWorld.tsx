import { homeContent } from "@/lib/content";
import { Icon } from "./Icons";
import { ProConsole } from "./ProConsole";

/**
 * veyderm Professional — the clinical console (with a SkinPrint-matched Tailored
 * Plan and floating Evidence Match / SafeCheck / Doctor-Signed layers), then the
 * benefits row. The CTA opens the access form with the clinician role.
 */
export function ProWorld() {
  const t = homeContent.pro;
  const b = t.bento;

  return (
    <section className="vpro" id="professional">
      <div className="wrap">
        <div className="vhead vpro-head">
          <p className="ai-pill"><span className="ai-pill-dot" aria-hidden="true" />{t.kicker}</p>
          <h2>{t.h2}</h2>
          <p>{t.p}</p>
        </div>

        <ProConsole />

        <div className="vbento">
          <article className="b-plan">
            <h3>{b.plan.t}</h3>
            <p>{b.plan.d}</p>
            <div className="b-plan-ui" aria-hidden="true">
              {t.console.plan.items.map((p) => (
                <div className="row" key={p.n}>
                  <span className="time">{p.time}</span>
                  <span className="n">{p.n}</span>
                  <span className={`vc-ev ${p.lvl}`}>{p.ev}</span>
                </div>
              ))}
              <div className="sig-row">
                <span>{t.photo.note}</span>
              </div>
            </div>
          </article>
          <article className="b-evidence">
            <h3>{b.evidence.t}</h3>
            <p>{b.evidence.d}</p>
            <div className="b-bars" aria-hidden="true">
              {b.evidence.rows.map(([n, v]) => (
                <div key={n}>
                  <span>{n}</span>
                  <i style={{ width: `${v}%` }} />
                </div>
              ))}
            </div>
          </article>
          <article className="b-safe">
            <h3>{b.safe.t}</h3>
            <p>{b.safe.d}</p>
            <div className="b-flags" aria-hidden="true">
              <span className="vc-safe warn">{b.safe.flags[0]}</span>
              <span className="vc-safe pass"><Icon name="check" size={14} />{b.safe.flags[1]}</span>
            </div>
          </article>
          <article className="b-shelf">
            <h3>{b.shelf.t}</h3>
            <p>{b.shelf.d}</p>
          </article>
          <article className="b-follow">
            <h3>{b.follow.t}</h3>
            <p>{b.follow.d}</p>
          </article>
        </div>

        <div className="btn-wrap">
          <a className="btn btn-primary btn-lg" href="#access" data-role={t.role} data-cta="pro_access">
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
