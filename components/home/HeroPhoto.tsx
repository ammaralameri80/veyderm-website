"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Hero: a dermatologist in a Dubai clinic reviewing a holographic AI analysis
 * that rises from her tablet. Code-drawn light sits exactly over the photo's
 * hologram (glow pulse, orbiting rings, a scan sweep, data particles rising
 * from the tablet) and light threads carry the result out to the product
 * cards: veyderm Pro, Sena, the safety check and the brand signal.
 * Authored on a fixed 600×640 stage and scaled to fit, so overlays stay
 * registered to the photo at every width. Reduced motion: still frame.
 */
const W = 600, H = 640;

// Particle start positions (% across the emitter) and timing, fixed so SSR and client match.
const PARTICLES = [
  [8, 0, 3.2], [22, 0.6, 2.8], [35, 1.4, 3.6], [48, 0.3, 3.0], [60, 1.9, 2.6], [72, 1.1, 3.4],
  [85, 2.4, 3.0], [15, 2.9, 3.8], [55, 3.3, 2.9], [92, 0.9, 3.3], [40, 2.2, 3.1], [67, 3.8, 2.7],
] as const;

export function HeroPhoto() {
  const box = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const b = box.current, s = stage.current;
    if (!b || !s) return;
    const fit = () => {
      const k = b.clientWidth / W;
      s.style.transform = `scale(${k})`;
      b.style.height = `${H * k}px`;
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(b);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="hero-photo" ref={box}>
      <div className="hp-stage" ref={stage}>
        <span className="hp-glow" aria-hidden="true" />

        <div className="hp-photo">
          <div className="hp-kb">
            <Image
              src="/images/hero-ai.webp"
              alt="A dermatologist in a Dubai clinic reviewing a holographic AI analysis rising from her tablet"
              fill
              priority
              sizes="(max-width: 960px) 90vw, 600px"
            />
            {/* Light registered to the hologram in the photo */}
            <span className="hp-holo-glow" aria-hidden="true" />
            <svg className="hp-holo-rings" viewBox="0 0 200 200" aria-hidden="true">
              <ellipse className="r1" cx="100" cy="100" rx="96" ry="26" pathLength={1} />
              <ellipse className="r2" cx="100" cy="100" rx="70" ry="18" pathLength={1} />
            </svg>
            <span className="hp-scan" aria-hidden="true"><i /></span>
            <span className="hp-particles" aria-hidden="true">
              {PARTICLES.map(([x, d, t], i) => (
                <i key={i} style={{ left: `${x}%`, animationDelay: `${d}s`, animationDuration: `${t}s` }} />
              ))}
            </span>
          </div>
        </div>

        {/* Threads from the hologram out to each product card */}
        <svg className="hp-threads" viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
          <defs>
            <linearGradient id="hp-t" x1="0" x2="1">
              <stop offset="0" stopColor="#22B3D6" stopOpacity="0" />
              <stop offset=".5" stopColor="#8B7CFF" />
              <stop offset="1" stopColor="#22B3D6" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[
            "M333 255 C 300 200, 260 120, 222 92",
            "M333 255 C 300 330, 270 430, 238 478",
            "M333 255 C 370 320, 392 380, 404 420",
            "M333 255 C 330 380, 318 480, 314 552",
          ].map((d, i) => (
            <g key={i}>
              <path className="hp-track" d={d} />
              <path className={`hp-pulse t${i + 1}`} d={d} pathLength={1} />
            </g>
          ))}
        </svg>

        <div className="hp-card hp-pro" aria-hidden="true">
          <p className="hp-k">veyderm Pro</p>
          <div className="hp-row">
            <span className="hp-av">LH</span>
            <span className="hp-tx"><b>Lana H.</b><span>Draft plan ready</span></span>
            <span className="hp-btn">Review</span>
          </div>
          <div className="hp-meters">
            {[["Pigmentation", 78], ["Barrier", 54]].map(([l, v]) => (
              <div key={l as string}><span>{l}</span><i><b style={{ width: `${v}%` }} /></i></div>
            ))}
          </div>
        </div>

        <div className="hp-card hp-sena" aria-hidden="true">
          <div className="hp-sena-h"><span className="hp-orb" /><span><b>Sena</b><span>AI skin agent</span></span></div>
          <p className="hp-msg">Your routine is approved. Start tonight with azelaic acid.</p>
          <span className="hp-typing"><i /><i /><i /></span>
        </div>

        <div className="hp-card hp-safe" aria-hidden="true">
          <p className="hp-safe-h"><span className="hp-shield" />Safety check passed</p>
          <ul>
            <li>No interactions</li>
            <li className="warn">Retinoids excluded: pregnancy planned</li>
          </ul>
        </div>

        <div className="hp-card hp-brand" aria-hidden="true">
          <span className="hp-up">+18%</span>
          <span className="hp-brand-tx"><b>Brand insights</b><span>Prescriptions this month</span></span>
          <svg viewBox="0 0 80 28"><path pathLength={1} d="M0 24 L12 20 L22 22 L34 15 L46 16 L58 9 L70 7 L80 2" /></svg>
        </div>
      </div>
      <p className="hp-cap">Illustrative example. AI-generated photo.</p>
    </div>
  );
}
