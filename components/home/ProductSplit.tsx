import { homeContent } from "@/lib/content";

function Check() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

// Compact Pro mockup: a treatment-plan card.
function ProVisual() {
  return (
    <div className="pv pv-pro" aria-hidden="true">
      <div className="pv-head">
        <span className="pv-kicker">Treatment plan</span>
        <span className="pv-sample">Illustrative</span>
      </div>
      <div className="pv-row"><span>Azelaic acid 20%</span><span className="pv-ev">Strong</span></div>
      <div className="pv-row"><span>Niacinamide 10%</span><span className="pv-ev mod">Moderate</span></div>
      <div className="pv-approve">Approve &amp; send</div>
    </div>
  );
}

// Compact Sena mockup: a chat exchange.
function SenaVisual() {
  return (
    <div className="pv pv-sena" aria-hidden="true">
      <div className="pv-chat-head">
        <span className="sena-orb sm" />
        Sena <span className="pv-sample">Illustrative</span>
      </div>
      <div className="pv-msg user">Is this spot normal?</div>
      <div className="pv-msg sena">
        Looks like mild hyperpigmentation. Here are 2 options —
        <span className="pv-chip">SPF 50</span>
      </div>
      <div className="pv-book">Book a dermatologist</div>
    </div>
  );
}

export function ProductSplit() {
  const { pro, sena } = homeContent.split;
  return (
    <section className="sec psplit-sec" id="products">
      <div className="wrap">
        <div className="psplit">
          <article className="pcard pro">
            <div className="pcard-visual">
              <ProVisual />
            </div>
            <div className="pcard-tag">{pro.audience}</div>
            <h2>{pro.name}</h2>
            <p className="pcard-promise">{pro.promise}</p>
            <ul className="pcard-bullets">
              {pro.bullets.map((b) => (
                <li key={b}><Check />{b}</li>
              ))}
            </ul>
            <a className="pcard-link" href={pro.href} data-cta="card_pro">
              {pro.cta}
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
            </a>
          </article>

          <article className="pcard sena">
            <div className="pcard-visual">
              <SenaVisual />
            </div>
            <div className="pcard-tag">{sena.audience}</div>
            <h2>{sena.name}</h2>
            <p className="pcard-promise">{sena.promise}</p>
            <ul className="pcard-bullets">
              {sena.bullets.map((b) => (
                <li key={b}><Check />{b}</li>
              ))}
            </ul>
            <a className="pcard-link" href={sena.href} data-cta="card_sena">
              {sena.cta}
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
