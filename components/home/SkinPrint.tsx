"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * SkinPrint — a living topographic contour field. Concentric organic rings,
 * each perturbed by slow low-frequency waves, read as an AI "print" of skin.
 * Deterministic for a given phase, so server and client render identically;
 * motion only starts in an effect (and not under prefers-reduced-motion).
 */
const RINGS = 17;
const POINTS = 110;

function ringPath(i: number, t: number): string {
  const base = 13 + i * 5.1;
  const p1 = i * 0.37, p2 = i * 0.21, p3 = i * 0.13;
  let d = "";
  for (let k = 0; k <= POINTS; k++) {
    const a = (k / POINTS) * Math.PI * 2;
    const r =
      base *
      (1 +
        0.065 * Math.sin(3 * a + p1 + t * 0.45) +
        0.04 * Math.sin(5 * a - p2 - t * 0.3) +
        0.022 * Math.sin(8 * a + p3 + t * 0.18));
    const x = Math.cos(a) * r, y = Math.sin(a) * r;
    d += (k === 0 ? "M" : "L") + x.toFixed(2) + " " + y.toFixed(2);
  }
  return d + "Z";
}

export function SkinPrint({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const [t, setT] = useState(0);

  useEffect(() => {
    if (reduce) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      setT((now - start) / 1000);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce]);

  return (
    <svg className={`skinprint${className ? ` ${className}` : ""}`} viewBox="-100 -100 200 200" aria-hidden="true">
      <defs>
        <radialGradient id="sp-fade" cx="50%" cy="50%" r="50%">
          <stop offset="55%" stopColor="#fff" stopOpacity="1" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id="sp-mask"><rect x="-100" y="-100" width="200" height="200" fill="url(#sp-fade)" /></mask>
      </defs>
      <g mask="url(#sp-mask)" fill="none" strokeLinejoin="round">
        {Array.from({ length: RINGS }, (_, i) => (
          <path
            key={i}
            d={ringPath(i, t)}
            className="sp-ring"
            style={{ opacity: 0.96 - i * 0.04, strokeWidth: i < 3 ? 0.95 : 0.6 }}
          />
        ))}
        <circle r="1.6" className="sp-core" />
      </g>
    </svg>
  );
}
