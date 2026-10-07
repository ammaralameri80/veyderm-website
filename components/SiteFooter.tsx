import { FooterLogo } from "./Logo";
import { homeContent } from "@/lib/content";

export function SiteFooter() {
  const links = homeContent.nav.links;
  return (
    <footer className="ft">
      <div className="wrap ft-wrap">
        <FooterLogo href="/" />
        <div className="ft-links">
          {links.map((l) => (
            <a href={l.href} key={l.href}>{l.label}</a>
          ))}
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="mailto:info@veyderm.com">info@veyderm.com</a>
        </div>
      </div>
      <div className="wrap ft-bar">
        <span>© 2026 veyderm · Dubai, UAE</span>
        <span>AI-assisted. A licensed dermatologist reviews every plan.</span>
      </div>
    </footer>
  );
}
