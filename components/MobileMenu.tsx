"use client";

import { useEffect, useRef, useState } from "react";
import { homeContent } from "@/lib/content";

export function MobileMenu() {
  const t = homeContent.nav;
  const [open, setOpen] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);

  // Escape closes; focus moves into the panel on open and back to the toggle on close.
  useEffect(() => {
    if (!open) return;
    panel.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btn.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="mnav">
      <button
        ref={btn}
        type="button"
        className="menu-btn"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((v) => !v)}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          {open ? <><path d="M6 6l12 12" /><path d="M18 6 6 18" /></> : <><path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" /></>}
        </svg>
      </button>
      {open && (
        <>
          <div className="menu-scrim" onClick={close} />
          <nav className="menu-panel" id="mobile-nav" ref={panel} aria-label="Main">
            {t.links.map((l) => (
              <a href={l.href} key={l.href} onClick={close}>{l.label}</a>
            ))}
            <a className="btn btn-dark" href="/#access" onClick={close}>{t.cta}</a>
          </nav>
        </>
      )}
    </div>
  );
}
