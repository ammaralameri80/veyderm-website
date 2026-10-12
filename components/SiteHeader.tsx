import { headers } from "next/headers";
import { HeaderLogo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { homeContent } from "@/lib/content";

export async function SiteHeader() {
  const t = homeContent.nav;
  // Set by middleware; lets the header mark the current product page.
  const pathname = (await headers()).get("x-pathname") || "/";
  return (
    <header>
      <div className="wrap">
        <nav aria-label="Main">
          <HeaderLogo href="/" />
          <div className="navlinks">
            {t.links.map((l) => {
              const current = !l.href.includes("#") && l.href === pathname;
              return (
                <a href={l.href} key={l.href} aria-current={current ? "page" : undefined}>
                  {l.label}
                </a>
              );
            })}
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
