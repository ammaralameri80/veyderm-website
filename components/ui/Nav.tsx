"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HeaderLogo } from "@/components/Logo";
import { Button } from "./Button";
import { NAV } from "@/lib/site";

export function Nav() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  // Close the mobile menu on route change.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav className="nav" aria-label="Main">
      <div className="wrap"><div className="nav-in">
        <HeaderLogo href="/" />
        <div className="nav-links">
          {NAV.links.map((l) => (
            <a key={l.href} href={l.href} aria-current={l.href === pathname ? "page" : undefined}>
              {l.label}
            </a>
          ))}
        </div>
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
              <a key={l.href} href={l.href} aria-current={l.href === pathname ? "page" : undefined}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
