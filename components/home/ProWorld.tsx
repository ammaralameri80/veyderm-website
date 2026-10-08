import { homeContent } from "@/lib/content";
import { Icon, SkinPrintMark } from "./Icons";
import { InView } from "./InView";

/**
 * veyderm Professional — the clinical console (with a SkinPrint-matched Tailored
 * Plan and floating Evidence Match / SafeCheck / Doctor-Signed layers), then the
 * benefits row. The CTA opens the access form with the clinician role.
 */
export function ProWorld() {
  const t = homeContent.pro;
  const c = t.console;
  const b = t.bento;
  const floatIcon: Record<string, string> = { ev: "check", ai: "spark", safe: "check" };

  return (
    <section className="vpro" id="professional">
      <div className="wrap">
        <div className="vhead vpro-head">
          <p className="ai-pill"><span className="ai-pill-dot" aria-hidden="true" />{t.kicker}</p>
          <h2>{t.h2}</h2>
          <p>{t.p}</p>
        </div>

        <InView className="vconsole-wrap">
          <div className="vconsole">
            <div className="vc-bar">
              <span className="vc-dot" /><span className="vc-dot" /><span className="vc-dot" />
              <span className="vc-url">{c.url}</span>
            </div>
            <div className="vc-body">
              <aside className="vc-side">
                {c.nav.map((n, i) => (
                  <span key={n} className={`vc-nav${i === 2 ? " active" : ""}`}>
                    <span className="nd" />{n}
                  </span>
                ))}
              </aside>
              <div className="vc-main">
                <div className="vc-patient">
                  <span>{c.patient}</span>
                  <span className="tag">{c.patientTag}</span>
                </div>
                <div className="vc-panels">
                  <div className="vc-panel">
                    <div className="vc-panel-t"><span className="ai"><SkinPrintMark size={14} /></span>{c.assessment.t}</div>
                    {c.assessment.rows.map(([label, val]) => (
                      <div className="vbar-row" key={label}>
                        <span className="lab">{label}</span>
                        <span className="vbar"><i style={{ width: `${val}%` }} /></span>
                        <span className="val">{val}</span>
                      </div>
                    ))}
                  </div>
                  <div className="vc-panel">
                    <div className="vc-panel-t">
                      {c.plan.t}
                      <span className="vc-badge"><SkinPrintMark size={12} />{c.plan.badge}</span>
                    </div>
                    <div className="vc-plan">
                      {c.plan.items.map((p) => (
                        <div className="vc-plan-item" key={p.n}>
                          <span className="ph"><span className="time">{p.time}</span>{p.n}</span>
                          <span className={`vc-ev ${p.lvl}`}>{p.ev}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="vc-foot">
                  <span className="vc-safe pass"><Icon name="check" size={14} />{c.safePass}</span>
                  <span className="vc-safe warn">{c.safeWarn}</span>
                  <span className="vc-sign">
                    <svg className="vsig" viewBox="0 0 160 40" aria-hidden="true">
                      <path pathLength={1} d="M4 28c10-18 18-22 22-10s-6 14 2 6 12-20 18-12-4 18 6 10 14-14 20-6 8 10 18 2 22-8 30-4" />
                    </svg>
                    <span className="vc-approve">{c.approve}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {c.floats.map((f, i) => (
            <span key={f.t} className={`vc-float ${f.k} f${i + 1}`}>
              <span className="fi"><Icon name={floatIcon[f.k]} size={14} /></span>{f.t}
            </span>
          ))}
          <span className="vc-cursor" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" stroke="#211F2A" strokeWidth="1.2" strokeLinejoin="round">
              <path d="M5 3l5.6 15 2.3-6.3L19 9.4 5 3Z" />
            </svg>
          </span>
        </InView>

        <div className="vbento">
          <article className="b-plan">
            <h3>{b.plan.t}</h3>
            <p>{b.plan.d}</p>
            <div className="b-plan-ui" aria-hidden="true">
              {c.plan.items.map((p) => (
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
