import { FooterLogo } from "@/components/Logo";
import { FOOTER } from "@/lib/site";

const BRAND_ICON: Record<string, React.ReactNode> = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  ),
};

export function Footer() {
  return (
    <footer className="ft">
      <div className="wrap">
        <div className="ft-main">
          <div className="ft-brand">
            <FooterLogo href="/" />
            <p className="ft-tag">{FOOTER.tagline}</p>
            <div className="ft-social">
              {FOOTER.social.map((s) => (
                <a key={s.href} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                  {BRAND_ICON[s.brand]}
                </a>
              ))}
            </div>
          </div>
          <nav className="ft-cols" aria-label="Footer">
            {FOOTER.groups.map((g) => (
              <div className="ft-col" key={g.title}>
                <h4>{g.title}</h4>
                {g.links.map((l) => (
                  <a key={l.href} href={l.href}>
                    {l.label}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </div>
        <div className="ft-bar">
          <p>{FOOTER.rights}</p>
          <p className="ft-disc">{FOOTER.disclaimers[0]}</p>
        </div>
      </div>
    </footer>
  );
}
