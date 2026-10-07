import { HeaderLogo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { homeContent } from "@/lib/content";

export function SiteHeader() {
  const t = homeContent.nav;
  return (
    <header>
      <div className="wrap">
        <nav>
          <HeaderLogo href="/" />
          <div className="navlinks">
            {t.links.map((l) => (
              <a href={l.href} key={l.href}>{l.label}</a>
            ))}
          </div>
          <div className="nav-right">
            <a className="btn btn-dark nav-cta" href="/#access" data-cta="header">{t.cta}</a>
            <MobileMenu />
          </div>
        </nav>
      </div>
    </header>
  );
}
