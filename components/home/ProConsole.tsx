import { homeContent } from "@/lib/content";
import { Icon, SkinPrintMark } from "./Icons";
import { InView } from "./InView";

/**
 * The veyderm Pro console, as a dermatologist sees it: SkinPrint scores,
 * the drafted plan, safety flags, and the approve-and-sign action whose
 * signature draws itself once the console scrolls into view.
 */
export function ProConsole() {
  const c = homeContent.pro.console;
  const floatIcon: Record<string, string> = { ev: "check", ai: "spark", safe: "check" };

  return (
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
    </InView>
  );
}
