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
        <span>{homeContent.footer.line}</span>
        <span>{homeContent.footer.disclaimer}</span>
      </div>
    </footer>
  );
}
