import Image from "next/image";
import { homeContent } from "@/lib/content";

const L = homeContent.lux;

const TRUST_IC: Record<string, React.ReactNode> = {
  sign: <path d="M4 20c3-1 4-6 6-6s1 4 3 4 3-5 7-8M4 20h16" />,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
  shield: <><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" /><path d="M9 12l2 2 4-4" /></>,
};

export function LuxTrust() {
  return (
    <section className="lx-trust" aria-label="Why veyderm">
      <ul className="lx-wrap lx-trust-row">
        {L.trust.map((t) => (
          <li key={t.t}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{TRUST_IC[t.ic]}</svg>
            {t.t}
          </li>
        ))}
      </ul>
    </section>
  );
}

function Spark() {
  return (
    <svg className="lx-spark" viewBox="0 0 160 44" aria-hidden="true">
      <defs>
        <linearGradient id="lx-sf" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#8B7CFF" stopOpacity=".3" />
          <stop offset="1" stopColor="#8B7CFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 38 L18 34 L34 36 L52 27 L70 29 L88 21 L106 23 L124 13 L142 10 L160 3 L160 44 L0 44Z" fill="url(#lx-sf)" />
      <path className="lx-spark-l" pathLength={1} d="M0 38 L18 34 L34 36 L52 27 L70 29 L88 21 L106 23 L124 13 L142 10 L160 3" />
    </svg>
  );
}

/** The floating glass cards that sit on each feature photo. */
function Overlay({ id }: { id: string }) {
  if (id === "pro") {
    return (
      <>
        <div className="lx-glass lx-ov o1">
          <small className="lx-ov-k">veyderm Pro</small>
          <div className="lx-row">
            <span className="lx-av">LH</span>
            <span><b>Lana H.</b><small>Draft plan ready</small></span>
            <span className="lx-chipbtn">Review</span>
          </div>
        </div>
        <div className="lx-glass lx-ov o2">
          <span className="lx-okdot" /><span><b>Safety check passed</b><small>Retinoids excluded: pregnancy planned</small></span>
        </div>
      </>
    );
  }
  if (id === "sena") {
    return (
      <>
        <div className="lx-glass lx-ov o1">
          <div className="lx-row"><span className="lx-orb" /><span><b>Sena</b><small>AI skin agent</small></span></div>
          <p className="lx-bubble">Your routine is approved. Start tonight with azelaic acid.</p>
        </div>
        <div className="lx-glass lx-ov o2">
          <span className="lx-pin" /><span><b>3 dermatologists near you</b><small>Book in the chat</small></span>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="lx-glass lx-ov o1">
        <div className="lx-row lx-between"><span><b>Brand insights</b><small>Azelaic serum 20%</small></span><span className="lx-up">+18%</span></div>
        <Spark />
      </div>
      <div className="lx-glass lx-ov o2">
        <span className="lx-rank">#1</span><span><b>For melasma</b><small>of 14 products this month</small></span>
      </div>
    </>
  );
}

export function LuxFeatures() {
  return (
    <section className="lx-platform" id="products">
      <div className="lx-wrap">
        <div className="lx-sec-head">
          <h2>{L.platform.h2a} <em>{L.platform.h2em}</em></h2>
          <p>{L.platform.p}</p>
        </div>
        <div className="lx-features">
          {L.features.map((f, i) => (
            <article className={`lx-feature${i % 2 ? " rev" : ""}`} id={f.id === "brands" ? "brands" : f.id} key={f.id}>
              <div className="lx-photo">
                <Image src={f.img} alt={f.alt} fill sizes="(max-width: 960px) 100vw, 46vw" style={{ objectFit: "cover", objectPosition: f.id === "pro" ? "28% 50%" : f.id === "brands" ? "50% 62%" : "50% 30%" }} />
                <div aria-hidden="true"><Overlay id={f.id} /></div>
              </div>
              <div className="lx-copy">
                <p className="lx-kicker">{f.name}</p>
                <h2>{f.h2a} <em>{f.h2em}</em></h2>
                <p className="lx-p">{f.p}</p>
                <ul className="lx-points">
                  {f.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <div className="lx-cta">
                  <a className="lx-btn lx-btn-dark" href="#access" data-role={f.role} data-cta={`feature_${f.id}`}>{f.cta}</a>
                  {f.link && <a className="lx-link" href={f.link.href}>{f.link.label}</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LuxGuard() {
  const g = homeContent.guard;
  return (
    <section className="lx-guard">
      <div className="lx-wrap">
        <div className="lx-guard-panel">
          <h2>{L.guard.h2a} <em>{L.guard.h2em}</em></h2>
          <dl className="lx-guard-list">
            {g.items.map((it) => (
              <div key={it.t}>
                <dt>{it.t}</dt>
                <dd>{it.d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
