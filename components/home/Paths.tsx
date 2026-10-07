import { homeContent } from "@/lib/content";

export function Paths() {
  const { pro, pat } = homeContent.paths;
  return (
    <section className="paths-sec">
      <div className="wrap">
        <div className="paths">
          <a className="path path-pro" href="#access" data-role={pro.role} data-cta="path_pro">
            <span className="mono path-label">{pro.label}</span>
            <span className="path-cta">
              {pro.cta}
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
            </span>
          </a>
          <a className="path path-pat" href="#access" data-role={pat.role} data-cta="path_pat">
            <span className="mono path-label">{pat.label}</span>
            <span className="path-cta">
              {pat.cta}
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
