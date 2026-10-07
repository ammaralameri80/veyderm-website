import { FooterLogo } from "./Logo";
import { content, homeContent } from "@/lib/content";

export function SiteFooter() {
  const f = content.en.footer;
  const nav = homeContent.nav;
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <FooterLogo href="/" />
          <div className="flinks">
            <a href="/pro">{nav.pro}</a>
            <a href="/sena">{nav.sena}</a>
            <a href="/#faq">{nav.faq}</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
        </div>
        <div className="fcontact">
          <span className="fcontact-t">{f.contactT}</span>
          <a className="fcontact-item" href="mailto:info@veyderm.com">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
            </svg>
            info@veyderm.com
          </a>
          <span className="fcontact-item">{f.whatsapp}</span>
        </div>
        <div className="fbar">
          {f.rights}
          <br />
          {f.disclaimer} Sena provides AI analysis and suggestions only — not a
          medical diagnosis; a licensed dermatologist makes clinical decisions.
        </div>
      </div>
    </footer>
  );
}
