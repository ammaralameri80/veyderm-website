"use client";

import { useEffect, useRef, useState } from "react";
import { homeContent } from "@/lib/content";
import { RINGS, FIELD, ringPath } from "./SkinPrintCanvas";

/**
 * Scroll story: the SkinPrint stays pinned on the left and builds up as each
 * step passes the middle of the viewport — data points (capture), rings
 * (SkinPrint), ranked bars (evidence), the signature (doctor-signed), then a
 * follow-up timeline. On narrow screens it collapses to a plain list.
 */
export function HowVeydermWorks() {
  const t = homeContent.how;
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  // The active step is the last one whose top has passed 55% of the viewport.
  // Measured on scroll (rAF-throttled) so fast flicks can't skip a step.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const line = window.innerHeight * 0.55;
      let next = 0;
      refs.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top < line) next = i;
      });
      setActive(next);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="vsec vhow" id="how">
      <div className="wrap vhow-grid">
        <div className="vhow-stage" data-stage={active} aria-hidden="true">
          <div className="vhow-art">
            <svg viewBox="0 0 100 100" className="vhow-svg">
              <g className="l-field">
                {FIELD.map((d, i) => (
                  <circle key={i} cx={d.x} cy={d.y} r={d.r * 1.2} style={{ opacity: d.o + 0.2 }} />
                ))}
              </g>
              <g className="l-rings">
                {RINGS.map((r, i) => (
                  <path
                    key={i}
                    d={ringPath(r)}
                    pathLength={1}
                    style={{ transitionDelay: `${i * 70}ms`, opacity: Math.max(0.35, 0.8 - i * 0.06) }}
                  />
                ))}
              </g>
            </svg>
            <div className="l-rank">
              {[["Azelaic acid", 92], ["Niacinamide", 74], ["SPF 50", 88]].map(([n, v], i) => (
                <div key={n} className="rk" style={{ transitionDelay: `${i * 90}ms` }}>
                  <span>{n}</span>
                  <i style={{ width: `${v}%` }} />
                </div>
              ))}
            </div>
            <svg className="l-sig" viewBox="0 0 160 40">
              <path
                pathLength={1}
                d="M4 28c10-18 18-22 22-10s-6 14 2 6 12-20 18-12-4 18 6 10 14-14 20-6 8 10 18 2 22-8 30-4"
              />
            </svg>
            <div className="l-follow">
              {["Week 1", "Week 4", "Week 8"].map((w, i) => (
                <span key={w} style={{ transitionDelay: `${i * 90}ms` }}>
                  <b />
                  {w}
                </span>
              ))}
            </div>
          </div>
          <p className="eyebrow vhow-count">
            {String(active + 1).padStart(2, "0")} / {String(t.steps.length).padStart(2, "0")} · {t.steps[active].t}
          </p>
        </div>

        <div>
          <p className="eyebrow">How it works</p>
          <h2 className="vhow-h">{t.h2}</h2>
          <p className="vhow-p">{t.p}</p>
          <ol className="vhow-list">
            {t.steps.map((s, i) => (
              <li
                key={s.t}
                data-i={i}
                data-on={i === active}
                ref={(el) => {
                  refs.current[i] = el;
                }}
              >
                <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
