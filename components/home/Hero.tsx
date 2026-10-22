"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Button, TextLink } from "@/components/ui/Button";
import { HOME } from "@/lib/site";

// Analysis points on skin zones (100×125 space over the portrait).
const DOTS: [number, number][] = [
  [50, 27], [40, 52], [61, 52], [50, 47], [50, 68], [44, 44], [57, 44],
];
// Callout lines from a zone to a data chip at the frame edge.
const LEADS: [number, number, number, number][] = [
  [50, 27, 17, 15], // forehead → Hydration chip (top-left)
  [61, 52, 86, 49], // cheek → Pigmentation chip (right)
];

const READOUTS = [{ from: 68, to: 74 }];

export function Hero() {
  const [h1a, h1em, h1b] = HOME.hero.h1;
  const reduce = useReducedMotion();

  const [t, setT] = useState(0);
  useEffect(() => {
    if (reduce) { setT(1); return; }
    let v = 0;
    const id = setInterval(() => { v = v >= 1 ? 0 : Math.min(1, v + 0.1); setT(v); }, 420);
    return () => clearInterval(id);
  }, [reduce]);
  const hydration = Math.round(READOUTS[0].from + (READOUTS[0].to - READOUTS[0].from) * t);

  return (
    <header className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="kicker">Built in the UAE</span>
          <h1 className="display">
            {h1a}
            <span className="accent">{h1em}</span>
            {h1b}
          </h1>
          <p className="lead">{HOME.hero.sub}</p>
          <div className="hero-cta">
            <Button href={HOME.hero.primary.href} role={HOME.hero.primary.role} cta="hero_primary" arrow>
              {HOME.hero.primary.label}
            </Button>
            <TextLink href={HOME.hero.secondary.href} cta="hero_secondary">
              {HOME.hero.secondary.label}
            </TextLink>
          </div>
        </div>

        <div className="scan" role="img" aria-label="An AI skin analysis scanning a patient's face in real time">
          <Image src="/images/hero-portrait-3.jpg" alt="" fill priority sizes="(max-width: 920px) 90vw, 46vw" />
          <span className="scan-ring" aria-hidden="true" />
          <svg className="scan-mesh" viewBox="0 0 100 125" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
            <circle className="scan-reticle" cx="50" cy="48" r="26" pathLength={1} />
            {LEADS.map(([x1, y1, x2, y2], i) => (
              <g key={`l${i}`}>
                <line className="scan-lead" x1={x1} y1={y1} x2={x2} y2={y2} pathLength={1} style={{ animationDelay: `${0.9 + i * 0.25}s` }} />
                <circle className="scan-lead-end" cx={x2} cy={y2} r="0.7" />
              </g>
            ))}
            {DOTS.map(([x, y], i) => (
              <circle key={i} className="scan-dot" cx={x} cy={y} r="1" style={{ animationDelay: `${i * 0.32}s` }} />
            ))}
          </svg>
          <span className="scan-beam" aria-hidden="true" />
          <span className="scan-tag" aria-hidden="true"><span className="live" />Analyzing skin</span>

          <div className="scan-chip sc-1" aria-hidden="true">
            <span><small>Hydration</small><span className="mini">{hydration}%</span></span>
          </div>
          <div className="scan-chip sc-2" aria-hidden="true">
            <span><small>Pigmentation</small><b>Even tone</b></span>
          </div>
          <div className="scan-chip sc-3" aria-hidden="true">
            <span><small>SkinPrint</small><b>Ready · reviewed by Dr. Noor</b></span>
          </div>
        </div>
      </div>
    </header>
  );
}
