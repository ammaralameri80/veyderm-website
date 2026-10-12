"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Hero: a dermatologist in a Dubai clinic, with the platform's live product
 * moments floating around her — the veyderm Pro draft she's reviewing, Sena
 * messaging the patient, the safety check, and the brand signal.
 * Authored on a fixed 600×640 stage and scaled to fit, so cards keep their
 * exact positions over the photo at every width.
 */
const W = 600, H = 640;

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
          <Image
            src="/images/hero-dermatologist.webp"
            alt="A dermatologist in a bright Dubai clinic reviewing a patient's plan on a tablet"
            fill
            priority
            sizes="(max-width: 960px) 90vw, 600px"
          />
        </div>

        <div className="hp-card hp-pro" aria-hidden="true">
          <p className="hp-k">veyderm Pro</p>
          <div className="hp-row">
            <span className="hp-av">LH</span>
            <span className="hp-tx"><b>Lana H.</b><span>Melasma · draft plan ready</span></span>
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
          <p className="hp-msg">Your dermatologist approved your routine. Start tonight with azelaic acid.</p>
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
