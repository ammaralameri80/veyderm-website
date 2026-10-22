"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ImageIcon } from "lucide-react";

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

/**
 * Sena — a scripted exchange that auto-plays once in view and loops with a
 * long pause: the patient sends a photo, Sena types, then replies with a short
 * analysis and a dermatologist-approved plan card. The input is illustrative.
 */
export function SenaChat() {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  // Start at 0 on server and client (avoids hydration mismatch); reduced
  // motion settles on the final step after mount.
  const [step, setStep] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (reduce) setStep(5);
  }, [reduce]);

  // Start (and keep) the loop once the phone scrolls into view.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver((e) => setActive(e[0]?.isIntersecting ?? false), { rootMargin: "-10%" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduce || !active) return;
    const times = [400, 900, 1600, 2800, 3500];
    const timers = times.map((ms, i) => setTimeout(() => setStep(i + 1), ms));
    const reset = setTimeout(() => { setStep(0); setCycle((c) => c + 1); }, 6400);
    return () => { timers.forEach(clearTimeout); clearTimeout(reset); };
  }, [cycle, active, reduce]);

  return (
    <div className="phone" ref={wrapRef} role="img" aria-label="Sena on a phone: a patient shares a photo of their skin, Sena analyzes it and shares a plan approved by a licensed dermatologist.">
      <div className="phone-screen" aria-hidden="true">
        <div className="phone-top">
          <span className="sena-orb" />
          <span><b>Sena</b><small><i className="live-dot" />Online · on WhatsApp</small></span>
        </div>
        <div className="chat">
          <div className={`bub photo${step >= 1 ? " show" : ""}`}>
            <span className="ph"><ImageIcon size={26} strokeWidth={1.5} /></span>
          </div>
          <p className={`bub me${step >= 2 ? " show" : ""}`}>My dark spots got worse after summer.</p>
          {step === 3 && (
            <p className="typing"><i /><i /><i /></p>
          )}
          <p className={`bub sena${step >= 4 ? " show" : ""}`}>
            I can see uneven pigmentation on both cheeks — this looks like sun-driven melasma.
          </p>
          <div className={`plan-card${step >= 5 ? " show" : ""}`}>
            <div className="pc-h"><span className="ok"><Check /></span>Plan approved by Dr. Noor</div>
            <div className="pc-row">Azelaic serum 20% · mornings</div>
            <div className="pc-row">Mineral SPF 50+ · daily</div>
          </div>
        </div>
        <div className="phone-input">Message Sena…</div>
      </div>
    </div>
  );
}
