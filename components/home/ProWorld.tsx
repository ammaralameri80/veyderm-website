import { homeContent } from "@/lib/content";
import { Icon, Arrow, SkinPrintMark } from "./Icons";

/**
 * veyderm Professional — the clinical console (with a SkinPrint-matched Tailored
 * Plan and floating Evidence Match / SafeCheck / Doctor-Signed layers), then the
 * benefits row. The CTA opens the access form with the clinician role.
 */
export function ProWorld() {
  const t = homeContent.pro;
  const c = t.console;
  const floatIcon: Record<string, string> = { ev: "check", ai: "spark", safe: "check" };

  return (
    <section className="vpro" id="professional">
      <div className="wrap">
        <div className="vhead vpro-head">
          <span className="v-kicker clin"><span className="dot" />{t.kicker}</span>
          <h2>{t.h2}</h2>
          <p>{t.p}</p>
        </div>

        <div className="vconsole-wrap">
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
                  <span className="vc-approve">{c.approve}</span>
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
        </div>

        <ul className="vbenefits">
          {t.benefits.map((b) => (
            <li key={b.t}>
              <span className="bt">{b.t}</span>
              <span className="bd">{b.d}</span>
            </li>
          ))}
        </ul>

        <div className="btn-wrap">
          <a className="btn btn-primary btn-lg" href="#access" data-role={t.role} data-cta="pro_access">
            {t.cta}<Arrow className="ar" />
          </a>
        </div>
      </div>
    </section>
  );
}
