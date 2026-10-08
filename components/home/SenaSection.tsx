import { homeContent } from "@/lib/content";
import { SenaChatDemo } from "./SenaChatDemo";

const ICONS: Record<string, React.ReactNode> = {
  listen: <path d="M12 3a4 4 0 0 1 4 4v5a4 4 0 0 1-8 0V7a4 4 0 0 1 4-4Zm-7 9a7 7 0 0 0 14 0M12 19v2" />,
  suggest: <path d="M8 3h8l1 4H7l1-4ZM7 7h10v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7Zm3 5h4" />,
  find: <path d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10Zm0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />,
  answer: <path d="M4 5h16v10H9l-5 4V5Zm4 4h8M8 12h5" />,
};

export function SenaSection() {
  const t = homeContent.senaSection;
  return (
    <section className="feat feat-sena" id="sena">
      <div className="wrap feat-split">
        <div>
          <div className="feat-head">
            <p className="feat-name">{t.name}</p>
            <h2>{t.h2}</h2>
            <p>{t.p}</p>
          </div>
          <ul className="abil">
            {t.abilities.map((a) => (
              <li key={a.k}>
                <span className="abil-ic" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {ICONS[a.k]}
                  </svg>
                </span>
                <span className="abil-tx">
                  <b>{a.t}</b>
                  <span>{a.d}</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="feat-actions">
            <a className="btn btn-primary btn-lg" href="#access" data-role={t.role} data-cta="sena_cta">{t.cta}</a>
            <a className="feat-link" href={t.link.href}>{t.link.label}</a>
          </div>
        </div>
        <div className="feat-demo">
          <SenaChatDemo />
        </div>
      </div>
    </section>
  );
}
