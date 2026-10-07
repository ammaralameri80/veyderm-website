import { HeaderLogo } from "./Logo";
import { content, localizedPath, ENABLE_ARABIC, type Lang } from "@/lib/content";

export function Header({ lang }: { lang: Lang }) {
  const t = content[lang].nav;
  const home = localizedPath(lang, "/");
  const other: Lang = lang === "ar" ? "en" : "ar";
  return (
    <header>
      <div className="wrap">
        <nav>
          <HeaderLogo href={home} />
          <div className="navlinks">
            <a href="#agent">{t.agent}</a>
            <a href="#journey">{t.journey}</a>
            <a href="#doctors">{t.doctors}</a>
            <a href="#distributors">{t.distributors}</a>
          </div>
          <div className="nav-right">
            {ENABLE_ARABIC && (
              <a
                className="lang-switch"
                href={localizedPath(other, "/")}
                hrefLang={other}
                aria-label={t.switchLabel}
              >
                {t.switch}
              </a>
            )}
            <a className="btn btn-primary nav-cta" href="#access" data-cta="header">
              {t.cta}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
