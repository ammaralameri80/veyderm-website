import { FooterLogo } from "@/components/Logo";
import { FOOTER } from "@/lib/site";

export function Footer() {
  return (
    <footer className="ft">
      <div className="wrap">
        <div className="ft-top">
          <FooterLogo href="/" />
          <div className="ft-cols">
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
          </div>
        </div>
        <div className="ft-bar">
          {FOOTER.disclaimers.map((d) => (
            <p key={d}>{d}</p>
          ))}
          <p>{FOOTER.rights}</p>
        </div>
      </div>
    </footer>
  );
}
