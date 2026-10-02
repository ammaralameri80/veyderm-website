import { content, type Lang } from "@/lib/content";

export function TrustStrip({ lang }: { lang: Lang }) {
  const t = content[lang].trust;
  return (
    <section className="strip" aria-label={t.label}>
      <div className="wrap">
        <div className="lbl">{t.label}</div>
        <div className="set">
          {t.standards.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
