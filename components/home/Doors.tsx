import { homeContent } from "@/lib/content";

export function Doors() {
  const { pro, sena, trust } = homeContent.doors;
  return (
    <section className="doors-sec">
      <div className="wrap">
        <div className="doors">
          {/* LEFT — veyderm professional (dark) */}
          <a className="door door-pro" href={pro.href} data-cta="door_pro">
            <div className="door-head">
              <span className="mono door-label">{pro.label}</span>
              <h2 className="door-title">{pro.title}</h2>
            </div>
            <div className="door-ui plan-ui" aria-hidden="true">
              <div className="plan-top">
                <span className="plan-concern">{pro.concern}</span>
                <span className="plan-sample mono">{pro.sample}</span>
              </div>
              {pro.products.map((p) => (
                <div className="plan-row" key={p.n}>
                  <span>{p.n}</span>
                  <span className={`plan-ev${p.ev === "Moderate" ? " mod" : ""}`}>{p.ev}</span>
                </div>
              ))}
              <div className="plan-safe">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                {pro.safe}
              </div>
              <div className="plan-approve">{pro.approve}</div>
            </div>
          </a>

          {/* RIGHT — sena (light) */}
          <a className="door door-sena" href={sena.href} data-cta="door_sena">
            <div className="door-head">
              <span className="mono door-label">{sena.label}</span>
              <h2 className="door-title">{sena.title}</h2>
            </div>
            <div className="door-ui chat-ui" aria-hidden="true">
              <div className="chat-p">{sena.patient}</div>
              <div className="chat-photo"><span className="chat-photo-thumb" />Photo shared</div>
              <div className="chat-s">
                <span className="sena-orb" />
                <div className="chat-s-body">
                  <p>{sena.reply}</p>
                  <div className="chat-chips">
                    {sena.chips.map((c) => <span key={c}>{c}</span>)}
                  </div>
                </div>
              </div>
              <div className="chat-book">{sena.book}</div>
            </div>
          </a>
        </div>

        <ul className="trust-row2">
          {trust.map((x) => (
            <li key={x}>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              {x}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
