import { HeaderLogo } from "./Logo";
import { homeContent } from "@/lib/content";

// Header for the Veyderm platform site.
export function SiteHeader() {
  const t = homeContent.nav;
  return (
    <header>
      <div className="wrap">
        <nav>
          <HeaderLogo href="/" />
          <div className="navlinks">
            <a href="/#platform">{t.platform}</a>
            <a href="/professional">{t.professionals}</a>
            <a href="/sena">{t.sena}</a>
            <a href="mailto:info@veyderm.com">{t.contact}</a>
          </div>
          <div className="nav-right">
            <a className="btn btn-primary nav-cta" href="/#access" data-cta="header">
              {t.cta}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
