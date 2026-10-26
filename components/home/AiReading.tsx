"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/** The AI at work, streamed as one quiet line. Illustrative. */
const LINES = [
  "Analyzing photo — melasma pattern, skin type IV.",
  "Drafting plan — azelaic acid 20%, tranexamic acid 5%, mineral SPF 50+.",
  "Safety check — retinoids excluded, pregnancy planned.",
];
const FINAL = "Approved by Dr. Noor. Sent to Sena.";

const TYPE_MS = 18;
const LINE_PAUSE = 1100;
const END_PAUSE = 6000;

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

export function AiReading() {
  const reduce = useReducedMotion();
  // Server and first client render agree: nothing typed yet.
  const [line, setLine] = useState(0);
  const [chars, setChars] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduce) { setDone(true); return; }
    let cancelled = false;
    (async () => {
      await sleep(900);
      while (!cancelled) {
        for (let i = 0; i < LINES.length && !cancelled; i++) {
          setLine(i);
          setChars(0);
          for (let c = 1; c <= LINES[i].length && !cancelled; c++) {
            setChars(c);
            await sleep(TYPE_MS);
          }
          await sleep(LINE_PAUSE);
        }
        if (cancelled) break;
        setDone(true);
        await sleep(END_PAUSE);
        setDone(false);
      }
    })();
    return () => { cancelled = true; };
  }, [reduce]);

  const current = LINES[line]?.slice(0, chars) ?? "";
  return (
    <div className="ai-card" aria-hidden="true">
      <div className="ai-head">
        <span className="ai-orb" />
        veyderm AI
        <span className="ai-live"><i />live</span>
      </div>
      {!done && (
        <ol className="ai-lines">
          <li className="ai-typing">
            {current}
            <span className="caret" />
          </li>
        </ol>
      )}
      <div className={`ai-final${done ? " show" : ""}`}>
        <span className="ok">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
        </span>
        {FINAL}
      </div>
    </div>
  );
}
