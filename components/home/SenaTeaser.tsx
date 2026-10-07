import { homeContent } from "@/lib/content";

function SenaChat() {
  const t = homeContent.sena;
  return (
    <div className="senachat" aria-hidden="true">
      <div className="senachat-head">
        <span className="sena-orb" />
        <div>
          <div className="senachat-name">Sena</div>
          <div className="senachat-status">AI dermatology companion</div>
        </div>
        <span className="senachat-sample">Illustrative</span>
      </div>
      <div className="senachat-body">
        {t.chat.map((m, i) => (
          <div className={`sc-msg ${m.from}`} key={i}>{m.text}</div>
        ))}
        <div className="sc-photo">
          <div className="sc-photo-thumb"><span className="sc-scan" /></div>
          <div className="sc-analysis">
            <div className="sc-analysis-h">{t.analysis}</div>
            <div className="sc-rec">{t.rec}</div>
          </div>
        </div>
        <div className="sc-book">{t.book}</div>
      </div>
    </div>
  );
}

export function SenaTeaser() {
  const t = homeContent.sena;
  return (
    <section className="sec sena-teaser" id="sena">
      <div className="wrap">
        <div className="teaser-grid reverse">
          <div className="teaser-visual">
            <SenaChat />
          </div>
          <div className="teaser-copy">
            <div className="sec-tag sena-tag">{t.tag}</div>
            <div className="teaser-audience">{t.audience}</div>
            <h2>{t.h2}</h2>
            <p className="lede">{t.sub}</p>
            <a className="btn btn-sena" href={t.href} data-cta="sena_teaser">{t.cta}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
