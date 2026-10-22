"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

/** Clean device frame: a soft violet stage with an "Illustrative" badge. */
export function DeviceFrame({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <div className="device">
      <div className="device-stage">
        <span className="illustrative">{label ?? "Illustrative"}</span>
        {children}
      </div>
    </div>
  );
}

/** Fire once when the element first scrolls into view. */
function useInViewOnce<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { rootMargin: "-12%" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [seen]);
  return { ref, seen };
}

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

/**
 * veyderm Pro — three beats: the AI draft appears, the safety check ticks,
 * then the plan is approved. Runs once on view; reduced motion shows the end.
 */
export function ProScreen() {
  const reduce = useReducedMotion();
  const { ref, seen } = useInViewOnce<HTMLDivElement>();
  // Start at beat 0 on both server and client to avoid a hydration mismatch;
  // reduced motion jumps to the final beat after mount.
  const [beat, setBeat] = useState(0);

  useEffect(() => {
    if (reduce) { setBeat(3); return; }
    if (!seen) return;
    const t1 = setTimeout(() => setBeat(1), 500);
    const t2 = setTimeout(() => setBeat(2), 1500);
    const t3 = setTimeout(() => setBeat(3), 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [seen, reduce]);

  const plan = [
    { n: "Azelaic acid 20%", d: "Twice daily · 12 weeks", e: "Strong" },
    { n: "Tranexamic acid 5%", d: "Evenings", e: "Strong" },
    { n: "Mineral SPF 50+", d: "Daily, outdoors", e: "Essential" },
  ];

  return (
    <div ref={ref} className="win pro-win" role="img" aria-label="veyderm Pro: an AI-drafted plan for Lana H. that passes the safety check and is approved, then sent to the patient's Sena.">
      <div className="win-bar" aria-hidden="true">
        <span className="win-brand"><span className="win-mark">v</span>veyderm&nbsp;<b>Pro</b></span>
        <span className="win-tag">Today · 3 patients</span>
      </div>
      <div className="pro-single" aria-hidden="true">
        <div className="pro-pt">
          <span className="pt-av">LH</span>
          <span className="pro-pt-tx"><b>Lana H., 29</b><small>Melasma · skin type IV · 10:30</small></span>
          <span className="tag tag-draft">Draft ready</span>
        </div>

        <p className="col-h">AI-drafted plan <span>ranked by evidence</span></p>
        <div className="plan-list">
          {plan.map((p, i) => (
            <div className="plan-item" key={p.n} style={{ opacity: beat >= 1 ? 1 : 0, transform: beat >= 1 ? "none" : "translateY(6px)", transition: "opacity .45s var(--ease), transform .45s var(--ease)", transitionDelay: `${i * 100}ms` }}>
              <span className="plan-num">{i + 1}</span>
              <span className="plan-main"><b>{p.n}</b><small>{p.d}</small></span>
              <span className="tag tag-ev">{p.e}</span>
            </div>
          ))}
        </div>

        <div className="pro-safe" style={{ opacity: beat >= 2 ? 1 : 0, transform: beat >= 2 ? "none" : "translateY(6px)", transition: "opacity .45s var(--ease), transform .45s var(--ease)" }}>
          <span className="ok"><Check /></span>
          <span className="pro-safe-tx"><b>Safety check passed</b><small>Retinoids excluded — pregnancy planned</small></span>
        </div>

        <div className="pro-foot">
          {beat >= 3 ? (
            <span className="pro-approved"><span className="ok sm"><Check /></span>Plan approved — sent to Sena</span>
          ) : (
            <>
              <span className="ui-btn ghost">Edit</span>
              <span className="ui-btn dark">Review &amp; sign</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Spark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.5l1.8 5.3 5.4 1.8-5.4 1.8L12 16.7l-1.8-5.3L4.8 9.6l5.4-1.8z" />
    </svg>
  );
}

/** Skincare brands — a plain-language question, an AI answer, one signal. */
export function BrandScreen() {
  return (
    <div className="win brand-win" role="img" aria-label="veyderm brand insights: a brand asks why its serum grew in Dubai; veyderm AI answers from anonymised plans and flags a rising opportunity.">
      <div className="win-bar" aria-hidden="true">
        <span className="win-brand"><span className="win-mark">v</span>Brand insights</span>
        <span className="win-tag">Azelaic serum 20%</span>
      </div>
      <div className="brand-body" aria-hidden="true">
        <div className="ask">
          <span className="ask-ic"><Spark /></span>
          <span className="ask-q">Why did our serum grow in Dubai this summer?</span>
          <span className="ask-k">Ask</span>
        </div>
        <div className="ans">
          <span className="ans-orb" />
          <div>
            <p>Dubai dermatologists prescribed it <mark>18% more</mark> since June — mostly as a pregnancy-safe switch from hydroquinone.</p>
            <span className="src">From 1,240 anonymised plans across 38 clinics</span>
          </div>
        </div>
        <div className="signal">
          <span className="signal-ic up">↗</span>
          <span><b>Rising: post-acne marks in teens, Sharjah</b><small>+24% in 6 weeks. Few products prescribed for it yet.</small></span>
        </div>
      </div>
    </div>
  );
}
