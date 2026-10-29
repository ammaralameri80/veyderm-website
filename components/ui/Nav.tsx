"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HeaderLogo } from "@/components/Logo";
import { Button } from "./Button";
import { NAV } from "@/lib/site";

// "/#pro" -> "pro": the landing-page section each link jumps to
const sectionOf = (href: string) => href.split("#")[1] ?? "";

export function Nav() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false); // mobile sheet
  const [active, setActive] = useState(""); // section currently on screen

  // Close the sheet on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // On the landing page, mark the link whose section is in view.
  useEffect(() => {
    if (pathname !== "/") {
      setActive("");
      return;
    }
    const sections = NAV.links
      .map((l) => document.getElementById(sectionOf(l.href)))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const id = e.target.id;
          if (e.isIntersecting) setActive(id);
          else setActive((a) => (a === id ? "" : a));
        }
      },
      // a section counts as "current" while it crosses the middle of the screen
      { rootMargin: "-45% 0px -45% 0px" },
    );
    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  const current = (href: string) => (sectionOf(href) === active ? "location" : undefined);

  return (
    <nav className="nav" aria-label="Main">
      <div className="wrap"><div className="nav-in">
        <HeaderLogo href="/" />
        <ul className="nav-links">
          {NAV.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link" aria-current={current(l.href)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <Button href={NAV.cta.href} cta="nav" className="nav-cta" arrow>
            {NAV.cta.label}
          </Button>
          <button
            type="button"
            className="nav-toggle btn btn-ghost"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div></div>
      {open && (
        <div className="nav-sheet">
          <div className="wrap">
            {NAV.links.map((l) => (
              // a section jump doesn't change the route, so close the sheet here
              <a key={l.href} href={l.href} className="sheet-prod" aria-current={current(l.href)} onClick={() => setOpen(false)}>
                <span className="np-tx"><b>{l.label}</b><small>{l.desc}</small></span>
              </a>
            ))}
            {/* shown only on the smallest phones, where the bar has no room for the CTA */}
            <a href={NAV.cta.href} className="btn btn-primary sheet-cta" data-cta="nav-sheet" onClick={() => setOpen(false)}>
              {NAV.cta.label}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
