"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/** The AI at work: a short, looping, streamed reading. Illustrative. */
const LINES = [
  "Analyzing photo · melasma pattern, skin type IV, sun-exposed cheeks",
  "Drafting plan · azelaic acid 20%, tranexamic acid 5%, mineral SPF 50+",
  "Safety check · retinoids excluded — pregnancy planned",
];
const FINAL = "Plan approved by Dr. Noor · sent to Sena";

const TYPE_MS = 16;
const LINE_PAUSE = 650;
const END_PAUSE = 5200;

export function AiReading() {
  const reduce = useReducedMotion();
  // Server and first client render agree: nothing typed yet.
  const [line, setLine] = useState(0);
  const [chars, setChars] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduce) {
      setLine(LINES.length);
      setChars(0);
      setDone(true);
      return;
    }
    let t = 0;
    let cancelled = false;
    const tick = () => {
      if (cancelled) return;
      setChars((c) => {
        const current = LINES[line];
        if (!current) return c;
        if (c < current.length) {
          t = window.setTimeout(tick, TYPE_MS);
          return c + 1;
        }
        // line finished
        if (line < LINES.length - 1) {
          t = window.setTimeout(() => { setLine((l) => l + 1); setChars(0); tick(); }, LINE_PAUSE);
        } else {
          t = window.setTimeout(() => {
            setDone(true);
            t = window.setTimeout(() => { setDone(false); setLine(0); setChars(0); tick(); }, END_PAUSE);
          }, LINE_PAUSE);
        }
        return c;
      });
    };
    // start on mount only; later restarts are scheduled inside
    if (line === 0 && chars === 0 && !done) t = window.setTimeout(tick, 600);
    return () => { cancelled = true; window.clearTimeout(t); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce, line]);

  return (
    <div className="ai-card" aria-hidden="true">
      <div className="ai-head">
        <span className="ai-orb" />
        <b>veyderm AI</b>
        <span className="ai-live"><i />reading</span>
      </div>
      <ol className="ai-lines">
        {LINES.map((text, i) => {
          const shown = reduce ? text : i < line ? text : i === line ? text.slice(0, chars) : "";
          if (!shown) return null;
          return (
            <li key={text} className={i < line || reduce ? "ai-done" : "ai-typing"}>
              {shown}
              {!reduce && i === line && !done && <span className="caret" />}
            </li>
          );
        })}
      </ol>
      <div className={`ai-final${done ? " show" : ""}`}>
        <span className="ok">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
        </span>
        {FINAL}
      </div>
    </div>
  );
}
