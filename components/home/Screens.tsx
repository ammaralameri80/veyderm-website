"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Clean device frame: a soft violet stage with a small badge. */
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

function Shield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l7 3v5c0 4.4-3 8-7 10-4-2-7-5.6-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

const ROSTER = [
  { t: "09:30", n: "Omar K.", c: "Acne", s: "Signed", tag: "tag-done" },
  { t: "10:30", n: "Lana H.", c: "Melasma", s: "Draft ready", tag: "tag-draft", on: true },
  { t: "11:15", n: "Mira S.", c: "Rosacea", s: "Draft ready", tag: "tag-draft" },
  { t: "12:00", n: "Yousef A.", c: "Eczema", s: "Intake", tag: "tag-ev" },
  { t: "14:30", n: "Huda R.", c: "Acne", s: "Intake", tag: "tag-ev" },
];

const PLAN = [
  { n: "Azelaic acid 20%", d: "Twice daily · 12 weeks", e: "Strong" },
  { n: "Tranexamic acid 5%", d: "Evenings", e: "Strong" },
  { n: "Mineral SPF 50+", d: "Every 2 hours outdoors", e: "Essential" },
];

/**
 * veyderm Pro — a clinician's day: the patient roster on the left, the
 * selected patient's AI-drafted plan on the right, and the moment it's signed.
 * Illustrative; fictional patients.
 */
export function ProScreen() {
  const { ref, seen } = useInViewOnce<HTMLDivElement>();
  return (
    <div className="proportal" ref={ref} role="img" aria-label="The veyderm Pro console: today's patient roster beside Lana H.'s AI-drafted, safety-checked plan, signed and sent to her Sena in forty seconds. Illustrative.">
      <div className="pp-grid" aria-hidden="true">
        <div className="pp-list">
          <div className="pp-list-h">Today<span>5 patients</span></div>
          <ul>
            {ROSTER.map((p) => (
              <li key={p.n} className={p.on ? "on" : undefined}>
                <time>{p.t}</time>
                <div className="pp-who"><b>{p.n}</b><small>{p.c}</small></div>
                <span className={`tag ${p.tag}`}>{p.s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="pp-main">
          <div className="pp-pt">
            <span className="pt-av">LH</span>
            <span className="pro-pt-tx"><b>Lana H., 29</b><small>Melasma · skin type IV · visit 10:30</small></span>
          </div>
          <p className="col-h">AI draft plan <span>ranked by evidence</span></p>
          {PLAN.map((p, i) => (
            <div className="plan-item" key={p.n}>
              <span className="plan-num">{i + 1}</span>
              <span className="plan-main"><b>{p.n}</b><small>{p.d}</small></span>
              <span className="tag tag-ev">{p.e}</span>
            </div>
          ))}
          <div className="pp-safe">
            <span className="ok"><Check /></span>
            <span className="pro-safe-tx"><b>Safety check passed</b><small>Retinoids excluded — pregnancy planned</small></span>
          </div>
          <div className="pp-foot">
            <span className="ui-btn ghost">Edit plan</span>
            <span className="ui-btn dark">Review &amp; sign</span>
          </div>
        </div>
      </div>
      <div className={`pp-float${seen ? " in" : ""}`} aria-hidden="true">
        <span className="ppf-ic"><Shield /></span>
        <span><b>Plan signed in 40 seconds</b><small>Sent to Lana&rsquo;s Sena app</small></span>
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
