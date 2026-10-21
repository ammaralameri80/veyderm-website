import { ProStage, BrandStage } from "./LuxProduct";
import { SenaLive } from "./SenaLive";
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

/** One floating glass note per stage: a fact the screen itself doesn't show. */
function Overlay({ id }: { id: string }) {
  if (id === "pro") {
    return (
      <div className="lx-glass lx-ov o2">
        <span className="lx-okdot" /><span><b>Plan signed in 40 seconds</b><small>Sent to Lana&rsquo;s Sena app</small></span>
      </div>
    );
  }
  if (id === "sena") {
    return (
      <div className="lx-glass lx-ov o2">
        <span className="lx-lang" lang="ar">ع</span><span><b>Arabic and English</b><small>Online, and in the clinic</small></span>
      </div>
    );
  }
  // Brands: the screen already states its source, so no extra note.
  return null;
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
              {f.id === "sena" ? (
                <div className="lx-chat-media"><SenaLive /></div>
              ) : (
                <div className="lx-photo">
                  {f.id === "pro" ? <ProStage /> : <BrandStage />}
                  <div aria-hidden="true"><Overlay id={f.id} /></div>
                </div>
              )}
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
