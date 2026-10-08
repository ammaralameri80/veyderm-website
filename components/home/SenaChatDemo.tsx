"use client";

import { useEffect, useRef, useState } from "react";
import { homeContent } from "@/lib/content";

const C = homeContent.chat;

// When each beat of the scripted conversation appears (ms after start).
const BEATS = [0, 700, 1500, 3300, 4000, 4500, 5000, 5500, 6300, 7900, 10400];
const LAST = BEATS.length;

/** Reveals text word by word, like a streamed model response. */
function Stream({ text, run }: { text: string; run: boolean }) {
  const words = text.split(" ");
  const [n, setN] = useState(run ? 0 : words.length);
  useEffect(() => {
    if (!run) {
      setN(words.length);
      return;
    }
    setN(0);
    const id = window.setInterval(() => {
      setN((v) => {
        if (v >= words.length) {
          window.clearInterval(id);
          return v;
        }
        return v + 1;
      });
    }, 45);
    return () => window.clearInterval(id);
  }, [run, words.length]);
  const done = n >= words.length;
  return (
    <>
      {words.slice(0, n).join(" ")}
      {!done && <span className="sc-caret" aria-hidden="true" />}
    </>
  );
}

export function SenaChatDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const [beat, setBeat] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [run, setRun] = useState(0);

  // Play once when the chat scrolls into view; reduced motion shows the end state.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAnimate(false);
      setBeat(LAST);
      return;
    }
    const timers: number[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        setBeat(0);
        BEATS.forEach((t, i) => timers.push(window.setTimeout(() => setBeat(i + 1), t)));
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [run]);

  const at = (i: number) => beat >= i;
  const typing = (beat === 2 || beat === 8) && animate;

  return (
    <div className="sc" ref={ref}>
      <div className="sc-head">
        <span className="sc-orb" aria-hidden="true" />
        <span className="sc-id">
          <b>{C.title}</b>
          <span>{C.status}</span>
        </span>
        {at(LAST) && animate && (
          <button type="button" className="sc-replay" onClick={() => setRun((r) => r + 1)}>
            {C.replay}
          </button>
        )}
      </div>

      <div className="sc-body" aria-live="off">
        {at(1) && <p className="sc-msg me">{C.user1}</p>}
        {at(3) && (
          <p className="sc-msg ai">
            <Stream text={C.sena1} run={animate && beat < 5} />
          </p>
        )}
        {at(4) && (
          <p className="sc-file me">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-5-5L5 21" />
            </svg>
            {C.attachment}
          </p>
        )}
        {at(5) && (
          <div className="sc-think">
            <span className={`sc-think-t${at(8) ? " done" : ""}`}>{C.thinking}</span>
            <ul>
              {C.checks.map((c, i) => (
                <li key={c} className={at(6 + i) ? "on" : undefined}>
                  {c}
                </li>
              ))}
            </ul>
            <span className="sc-disc">{C.disclaimer}</span>
          </div>
        )}
        {at(9) && (
          <p className="sc-msg ai">
            <Stream text={C.sena2} run={animate && beat < 10} />
          </p>
        )}
        {at(10) && (
          <div className="sc-plan">
            <b>{C.plan.title}</b>
            <ul>
              {C.plan.rows.map((r) => (
                <li key={r.n}>
                  <span className={`sc-t ${r.time.toLowerCase()}`}>{r.time}</span>
                  <span className="sc-n">{r.n}</span>
                  <span className="sc-ev">{r.ev}</span>
                </li>
              ))}
            </ul>
            <span className={`sc-status${at(11) ? " ok" : ""}`}>{at(11) ? C.plan.approved : C.plan.pending}</span>
          </div>
        )}
        {typing && (
          <span className="sc-typing" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        )}
      </div>

      <div className="sc-input" aria-hidden="true">
        <span>{C.input}</span>
        <span className="sc-send" />
      </div>
      <p className="sc-cap">{C.caption}</p>
    </div>
  );
}
