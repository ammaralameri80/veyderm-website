import { homeContent } from "@/lib/content";

export function SafetyStatement() {
  const t = homeContent.safety;
  return (
    <section className="safety2">
      <div className="wrap">
        <h2 className="safety2-h">
          {t.a} <span className="ital">{t.b}</span>
        </h2>
        <p className="safety2-note">{t.note}</p>
      </div>
    </section>
  );
}
