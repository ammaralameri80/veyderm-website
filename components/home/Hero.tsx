"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { Button, TextLink } from "@/components/ui/Button";
import { HOME } from "@/lib/site";

// AI-analysis mesh registered to the portrait's facial landmarks, in a
// 100×125 space matching the photo's 4:5 frame.
const P: Record<string, [number, number]> = {
  fh: [56.0, 34.0], tl: [44.6, 42.4], tr: [69.1, 41.4],
  nb: [57.8, 50.0], nt: [58.3, 60.0],
  cl: [49.3, 55.5], cl2: [47.5, 62.2], cr: [66.8, 56.1], cr2: [68.2, 62.7],
  jl: [49.8, 70.6], jr: [67.0, 70.6], ch: [58.8, 76.2],
};
const EDGES: [string, string][] = [
  ["fh", "tl"], ["fh", "tr"], ["fh", "nb"], ["tl", "cl"], ["tr", "cr"], ["nb", "cl"], ["nb", "cr"],
  ["nb", "nt"], ["cl", "nt"], ["cr", "nt"], ["cl", "cl2"], ["cr", "cr2"], ["cl2", "jl"], ["cr2", "jr"],
  ["nt", "cl2"], ["nt", "cr2"], ["jl", "ch"], ["jr", "ch"], ["nt", "ch"],
];

export function Hero() {
  const [h1a, h1em, h1b] = HOME.hero.h1;
  const artRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // ≤6px parallax: nudge the art as the hero scrolls out of view.
  useEffect(() => {
    if (reduce) return;
    const el = artRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        const y = Math.max(-6, Math.min(6, window.scrollY * 0.02));
        el.style.transform = `translateY(${y}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [reduce]);

  return (
    <header className="hero section--tight" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="kicker">{HOME.hero.kicker}</span>
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

        <div className="hero-art" ref={artRef}>
          <div className="hero-frame">
            <Image
              src="/images/photo-hero.webp"
              alt="Portrait of a woman in violet light with an AI skin-analysis mesh across her face"
              fill
              priority
              sizes="(max-width: 920px) 90vw, 46vw"
            />
            <svg className="hero-mesh" viewBox="0 0 100 125" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
              <defs>
                <radialGradient id="hero-node-g">
                  <stop offset="0" stopColor="#fff" />
                  <stop offset=".5" stopColor="#D9CCFF" stopOpacity=".9" />
                  <stop offset="1" stopColor="#B7A4FF" stopOpacity="0" />
                </radialGradient>
              </defs>
              {EDGES.map(([a, b], i) => (
                <line
                  key={i}
                  className="hero-edge"
                  x1={P[a][0]} y1={P[a][1]} x2={P[b][0]} y2={P[b][1]}
                  pathLength={1}
                  style={{ animationDelay: `${0.5 + i * 0.045}s` }}
                />
              ))}
              {Object.values(P).map(([x, y], i) => (
                <circle
                  key={i} className="hero-node" cx={x} cy={y} r="1.5" fill="url(#hero-node-g)"
                  style={{ animationDelay: `${0.9 + (i % 6) * 0.12}s` }}
                />
              ))}
            </svg>
            <span className="hero-scan" aria-hidden="true"><i /></span>
          </div>

          {/* ≤3 floating glass chips */}
          <div className="chip-glass hero-chip-1" aria-hidden="true">
            <span className="chip-ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.5l1.8 5.3 5.4 1.8-5.4 1.8L12 16.7l-1.8-5.3L4.8 9.6l5.4-1.8z" /></svg>
            </span>
            <span><b>AI skin analysis</b><small>SkinPrint ready</small></span>
          </div>
          <div className="chip-glass hero-chip-2" aria-hidden="true">
            <span className="chip-dot" />
            <span><b>Plan approved</b><small>by Dr. Noor · licensed</small></span>
          </div>
          <div className="chip-glass hero-chip-3" aria-hidden="true">
            <span><b>Pigmentation</b><small>Even tone · hydration 72%</small></span>
          </div>
        </div>
      </div>
    </header>
  );
}
