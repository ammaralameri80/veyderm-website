"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import { usePathname } from "next/navigation";
import { HeaderLogo } from "@/components/Logo";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { ProductMark } from "./ProductMark";
import { NAV } from "@/lib/site";

export function Nav() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false); // mobile sheet
  const [menu, setMenu] = useState(false); // desktop Platform menu
  const itemRef = useRef<HTMLLIElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const leaveTimer = useRef<number | undefined>(undefined);
  const hoverOpened = useRef(false);

  // Close both menus on route change.
  useEffect(() => {
    setOpen(false);
    setMenu(false);
  }, [pathname]);

  // Platform menu: Escape closes and hands focus back; a press outside closes.
  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(false);
        triggerRef.current?.focus();
      }
    };
    const onDown = (e: globalThis.PointerEvent) => {
      if (!itemRef.current?.contains(e.target as Node)) setMenu(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [menu]);

  // Click/tap and keyboard open it; a mouse can also open it by hovering.
  const onEnter = (e: PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    window.clearTimeout(leaveTimer.current);
    hoverOpened.current = true;
    setMenu(true);
  };
  const onLeave = (e: PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    leaveTimer.current = window.setTimeout(() => setMenu(false), 160);
  };
  const onTrigger = () => {
    // a click right after hover-opening keeps it open instead of toggling shut
    setMenu((v) => (hoverOpened.current ? true : !v));
    hoverOpened.current = false;
  };

  const inPlatform = NAV.products.some((p) => p.href === pathname);

  return (
    <nav className="nav" aria-label="Main">
      <div className="wrap"><div className="nav-in">
        <HeaderLogo href="/" />
        <ul className="nav-links">
          <li
            ref={itemRef}
            className={`has-menu${menu ? " open" : ""}`}
            onPointerEnter={onEnter}
            onPointerLeave={onLeave}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) setMenu(false);
            }}
          >
            <button
              ref={triggerRef}
              type="button"
              className="nav-trigger"
              aria-expanded={menu}
              aria-controls="nav-platform"
              data-active={inPlatform || undefined}
              onClick={onTrigger}
            >
              Platform
              <Icon name="chevron-down" aria-hidden="true" />
            </button>
            <div id="nav-platform" className="nav-menu" inert={!menu}>
              <div className="nav-menu-in">
                {NAV.products.map((p) => (
                  <a key={p.href} href={p.href} className="nav-prod" aria-current={p.href === pathname ? "page" : undefined}>
                    <ProductMark kind={p.mark} size="sm" />
                    <span className="np-tx"><b>{p.label}</b><small>{p.desc}</small></span>
                    <Icon name="arrow-up-right" className="np-go" aria-hidden="true" />
                  </a>
                ))}
                <p className="nav-menu-note"><Icon name="shield" aria-hidden="true" />{NAV.note}</p>
              </div>
            </div>
          </li>
          {NAV.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link" aria-current={l.href === pathname ? "page" : undefined}>
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
            {NAV.products.map((p) => (
              <a key={p.href} href={p.href} className="sheet-prod" aria-current={p.href === pathname ? "page" : undefined}>
                <ProductMark kind={p.mark} size="sm" />
                <span className="np-tx"><b>{p.label}</b><small>{p.desc}</small></span>
              </a>
            ))}
            <span className="sheet-sep" aria-hidden="true" />
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
