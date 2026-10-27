"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { HOME } from "@/lib/site";

/** The audience switcher: one tab per product over a single glass stage. All
 *  panels share one grid cell so the stage keeps the tallest panel's height
 *  and never jumps; inactive panels are hidden and inert. */
export function PlatformTabs() {
  const tabs = HOME.platform.tabs;
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Arrow keys move between tabs (Home/End jump to the ends).
  const onKeyDown = (e: KeyboardEvent) => {
    const last = tabs.length - 1;
    const next =
      e.key === "ArrowRight" ? (active === last ? 0 : active + 1)
      : e.key === "ArrowLeft" ? (active === 0 ? last : active - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="pl-tabs">
      <div className="pl-list" role="tablist" aria-label="Who it's for" onKeyDown={onKeyDown}>
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => { tabRefs.current[i] = el; }}
            type="button"
            role="tab"
            id={`pl-tab-${t.id}`}
            aria-selected={i === active}
            aria-controls={`pl-panel-${t.id}`}
            tabIndex={i === active ? 0 : -1}
            className="pl-tab"
            onClick={() => setActive(i)}
          >
            <Icon name={t.ic as IconName} aria-hidden="true" />
            {t.tab}
          </button>
        ))}
      </div>

      <div className="pl-stage">
        {tabs.map((t, i) => (
          <div
            key={t.id}
            role="tabpanel"
            id={`pl-panel-${t.id}`}
            aria-labelledby={`pl-tab-${t.id}`}
            className={`pl-panel${i === active ? " on" : ""}`}
            inert={i !== active}
          >
            <div className="pl-copy">
              <div className="pl-id">
                <span className={`np-ic np-${t.tone}`}><Icon name={t.ic as IconName} aria-hidden="true" /></span>
                <span><b>{t.product}</b><small>{t.audience}</small></span>
              </div>
              <h3>{t.h}</h3>
              <p>{t.body}</p>
              <div className="pl-ctas">
                <Button href={t.primary.href} role={t.primary.role} cta={`platform_${t.id}`} arrow>
                  {t.primary.label}
                </Button>
                <Button href={t.secondary.href} variant="soft">
                  {t.secondary.label}
                </Button>
              </div>
            </div>

            <div className="pl-flow">
              <p className="pl-flow-k">How it works</p>
              <ol>
                {t.steps.map((s) => (
                  <li key={s.t}>
                    <span className="pl-pt" aria-hidden="true" />
                    <b>{s.t}</b>
                    <span className="pl-d">{s.d}</span>
                  </li>
                ))}
              </ol>
              {"note" in t && t.note && <p className="pl-note"><Icon name="info" aria-hidden="true" />{t.note}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
