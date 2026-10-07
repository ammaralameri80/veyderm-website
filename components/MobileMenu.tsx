"use client";

import { useState } from "react";
import { homeContent } from "@/lib/content";

export function MobileMenu() {
  const t = homeContent.nav;
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="mnav">
      <button
        type="button"
        className="menu-btn"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          {open ? <><path d="M6 6l12 12" /><path d="M18 6 6 18" /></> : <><path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" /></>}
        </svg>
      </button>
      {open && (
        <>
          <div className="menu-scrim" onClick={close} />
          <div className="menu-panel" role="menu">
            {t.links.map((l) => (
              <a href={l.href} key={l.href} onClick={close}>{l.label}</a>
            ))}
            <a className="btn btn-dark" href="/#access" onClick={close}>{t.cta}</a>
          </div>
        </>
      )}
    </div>
  );
}
