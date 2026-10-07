import { HeaderLogo } from "./Logo";
import { homeContent } from "@/lib/content";

// Header for the English multi-product site (Home / veyderm Pro / Sena / FAQ).
export function SiteHeader() {
  const t = homeContent.nav;
  return (
    <header>
      <div className="wrap">
        <nav>
          <HeaderLogo href="/" />
          <div className="navlinks">
            <a href="/">{t.home}</a>
            <a href="/pro">{t.pro}</a>
            <a href="/sena">{t.sena}</a>
            <a href="/#faq">{t.faq}</a>
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
