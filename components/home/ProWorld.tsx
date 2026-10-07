import { homeContent } from "@/lib/content";

export function ProWorld() {
  const t = homeContent.pro;
  return (
    <section className="pw" id="how">
      <div className="wrap">
        <div className="pw-head">
          <span className="mono pw-num">{t.n} — {t.label}</span>
          <h2 className="pw-h2">
            {t.h2a} <span className="ital">{t.h2b}</span>
          </h2>
          <p className="pw-sub">{t.sub}</p>
        </div>

        <div className="bwin" aria-hidden="true">
          <div className="bwin-bar">
            <span className="bwin-dot" /><span className="bwin-dot" /><span className="bwin-dot" />
            <div className="bwin-url">app.veyderm.com</div>
          </div>
          <div className="bwin-body">
            <aside className="bwin-side">
              {t.sidebar.map((s, i) => (
                <div className={`bwin-nav${i === 2 ? " active" : ""}`} key={s}>{s}</div>
              ))}
            </aside>
            <div className="bwin-main">
              <div className="bwin-patient">{t.patient}</div>
              <div className="bwin-panels">
                <div className="bpanel">
                  <div className="bpanel-t mono">{t.panels.analysis.t}</div>
                  {t.panels.analysis.rows.map(([k, v]) => (
                    <div className="bbar-row" key={k as string}>
                      <span>{k}</span>
                      <span className="bbar"><i style={{ width: `${v}%` }} /></span>
                    </div>
                  ))}
                </div>
                <div className="bpanel">
                  <div className="bpanel-t mono">{t.panels.plan.t}</div>
                  {t.panels.plan.items.map((x) => (
                    <div className="bplan-item" key={x}>{x}</div>
                  ))}
                </div>
                <div className="bpanel">
                  <div className="bpanel-t mono">{t.panels.quotes.t}</div>
                  {t.panels.quotes.rows.map(([d, p]) => (
                    <div className="bquote" key={d as string}>
                      <span>{d}</span><span className="bquote-p">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="caps">
          {t.caps.map((c) => (
            <div className="cap" key={c.t}>
              <div className="cap-t">{c.t}</div>
              <div className="cap-d">{c.d}</div>
            </div>
          ))}
        </div>

        <div className="pw-cta">
          <a className="btn btn-light" href="/#access" data-role="Dermatologist / Clinic" data-cta="pro_cta">{t.cta}</a>
        </div>
      </div>
    </section>
  );
}
