"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { homeContent } from "@/lib/content";

const C = homeContent.lux.senaLive;
type Concern = (typeof C.concerns)[number];
type Feel = (typeof C.feels)[number];

/**
 * Interactive Sena. The visitor steers (chips, or typed English/Arabic); every
 * reply is pre-written and clinically conservative, so nothing is generated on
 * a public medical page. The payoff is veyderm's promise made visible: Sena
 * reasons in the open, drafts a routine, and a dermatologist signs it.
 */

type Item =
  | { k: "sena"; id: number; text: string; stream: boolean }
  | { k: "user"; id: number; text: string }
  | { k: "typing"; id: number }
  | { k: "chips"; id: number; kind: "concern" | "feel" | "restart" | "redflag" }
  | { k: "analysis"; id: number; concern: Concern; feel: Feel; lit: number }
  | { k: "routine"; id: number; concern: Concern; feel: Feel; approved: boolean };

type Phase = "concern" | "feel" | "busy" | "done";
type Status = keyof typeof C.status;

// Plain-language routing. Red flags are checked first: they never get a routine.
const RED_FLAG = /bleed|blood|mole|chang|grow|spread|pain|fever|pus|swell|urgent|lump|ulcer|شامة|نزيف|ألم|قيح|ينزف/i;
const ROUTES: [string, RegExp][] = [
  ["acne", /acne|pimple|breakout|zit|blackhead|whitehead|حب الشباب|حبوب/i],
  ["spots", /spot|dark|pigment|melasma|patch|uneven|tan|بقع|تصبغ|كلف/i],
  ["dry", /dry|tight|flak|dehydrat|rough|جفاف|جاف/i],
  ["red", /red|rosacea|flush|burn|sting|sensitiv|irritat|احمرار|حساس/i],
  ["lines", /wrinkle|line|aging|ageing|firm|sag|تجاعيد|خطوط/i],
];
const FEELS: [string, RegExp][] = [
  ["oily", /oil|shin|greas|دهني/i],
  ["dry", /dry|tight|جاف/i],
  ["sensitive", /sensitiv|react|sting|حساس/i],
  ["combo", /comb|mixed|t-?zone|مختلط/i],
];

/** Reveals text word by word, like a streamed model response. */
function Stream({ text, run, onDone }: { text: string; run: boolean; onDone?: () => void }) {
  const words = text.split(" ");
  const [n, setN] = useState(run ? 0 : words.length);
  const done = useRef(onDone);
  done.current = onDone;
  useEffect(() => {
    if (!run) {
      setN(words.length);
      done.current?.();
      return;
    }
    setN(0);
    const id = window.setInterval(() => {
      setN((v) => {
        if (v + 1 >= words.length) {
          window.clearInterval(id);
          window.setTimeout(() => done.current?.(), 120);
          return words.length;
        }
        return v + 1;
      });
    }, 38);
    return () => window.clearInterval(id);
  }, [run, words.length]);
  return (
    <>
      {words.slice(0, n).join(" ")}
      {n < words.length && <span className="sl-caret" aria-hidden="true" />}
    </>
  );
}

export function SenaLive() {
  const [items, setItems] = useState<Item[]>([]);
  const [phase, setPhase] = useState<Phase>("busy");
  const [status, setStatus] = useState<Status>("idle");
  const [value, setValue] = useState("");
  const [concern, setConcern] = useState<Concern | null>(null);

  const root = useRef<HTMLDivElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const idRef = useRef(0);
  const timers = useRef<number[]>([]);
  const seq = useRef(0); // bumps on restart so stale callbacks are ignored
  const motionRef = useRef(true);

  const nextId = () => ++idRef.current;
  const wait = (ms: number) =>
    new Promise<void>((res) => {
      const mine = seq.current;
      timers.current.push(window.setTimeout(() => { if (mine === seq.current) res(); }, motionRef.current ? ms : 0));
    });
  const push = (it: Omit<Item, "id">) => setItems((xs) => [...xs, { ...it, id: nextId() } as Item]);
  const dropChipsAndTyping = () => setItems((xs) => xs.filter((x) => x.k !== "chips" && x.k !== "typing"));

  // Sena "types", then a message streams in; resolves when the stream finishes.
  const say = (text: string) =>
    new Promise<void>(async (res) => {
      const mine = seq.current;
      push({ k: "typing" } as Item);
      await wait(motionRef.current ? 650 : 0);
      if (mine !== seq.current) return;
      setItems((xs) => xs.filter((x) => x.k !== "typing"));
      const id = nextId();
      streamDone.current.set(id, () => { if (mine === seq.current) res(); });
      setItems((xs) => [...xs, { k: "sena", id, text, stream: motionRef.current }]);
    });
  const streamDone = useRef(new Map<number, () => void>());

  const greet = useCallback(async () => {
    setStatus("idle");
    setPhase("busy");
    await say(C.greeting);
    push({ k: "chips", kind: "concern" } as Item);
    setPhase("concern");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Start once the card scrolls into view. Reduced motion skips the theatre.
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    motionRef.current = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver((es) => {
      if (!es.some((e) => e.isIntersecting)) return;
      io.disconnect();
      greet();
    }, { threshold: 0.3 });
    io.observe(el);
    const t = timers.current;
    return () => { io.disconnect(); t.forEach(clearTimeout); };
  }, [greet]);

  // Keep the latest message in view.
  useEffect(() => {
    const el = body.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: motionRef.current ? "smooth" : "auto" });
  }, [items]);

  const restart = () => {
    seq.current++;
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setItems([]);
    setConcern(null);
    setValue("");
    greet();
  };

  const askFeel = async (c: Concern, userText: string) => {
    dropChipsAndTyping();
    setConcern(c);
    setPhase("busy");
    setStatus("listening");
    push({ k: "user", text: userText } as Item);
    await say(C.feelQuestion);
    push({ k: "chips", kind: "feel" } as Item);
    setPhase("feel");
  };

  const analyse = async (f: Feel, userText: string, note?: string) => {
    const c = concern;
    if (!c) return;
    dropChipsAndTyping();
    setPhase("busy");
    setStatus("listening");
    push({ k: "user", text: userText } as Item);
    if (note) await say(note);
    await say(C.analysing);
    setStatus("analysing");
    const id = nextId();
    setItems((xs) => [...xs, { k: "analysis", id, concern: c, feel: f, lit: 0 }]);
    for (let i = 1; i <= 4; i++) {
      await wait(i === 1 ? 500 : 520);
      setItems((xs) => xs.map((x) => (x.k === "analysis" && x.id === id ? { ...x, lit: i } : x)));
    }
    await wait(700);
    await say(c.explain);
    push({ k: "routine", concern: c, feel: f, approved: false } as Item);
    setStatus("review");
    await say(C.sent);
    await wait(2200);
    setItems((xs) => xs.map((x) => (x.k === "routine" ? { ...x, approved: true } : x)));
    setStatus("approved");
    await wait(500);
    push({ k: "chips", kind: "restart" } as Item);
    setPhase("done");
  };

  const redFlag = async (userText: string) => {
    dropChipsAndTyping();
    setPhase("busy");
    setStatus("listening");
    push({ k: "user", text: userText } as Item);
    await say(C.redFlag);
    push({ k: "chips", kind: "redflag" } as Item);
    setStatus("idle");
    setPhase("done");
  };

  const fallback = async (userText: string) => {
    dropChipsAndTyping();
    setPhase("busy");
    setStatus("listening");
    push({ k: "user", text: userText } as Item);
    await say(C.fallback);
    push({ k: "chips", kind: "concern" } as Item);
    setStatus("idle");
    setPhase("concern");
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = value.trim();
    if (!text || phase === "busy") return;
    setValue("");
    if (RED_FLAG.test(text)) return void redFlag(text);
    if (phase === "feel") {
      const hit = FEELS.find(([, re]) => re.test(text));
      const f = C.feels.find((x) => x.id === (hit ? hit[0] : "combo"))!;
      return void analyse(f, text, hit ? undefined : C.feelFallback);
    }
    const route = ROUTES.find(([, re]) => re.test(text));
    const c = route ? C.concerns.find((x) => x.id === route[0]) : undefined;
    if (c) return void askFeel(c, text);
    fallback(text);
  };

  const orbState = status === "listening" ? "is-thinking" : status === "analysing" ? "is-analysing" : status === "approved" ? "is-done" : "";

  return (
    <div className="sl" ref={root}>
      <div className="sl-head">
        <span className={`sl-orb ${orbState}`} aria-hidden="true" />
        <span className="sl-id">
          <b>{C.name}</b>
          <span className={`sl-status s-${status}`}>{C.status[status]}</span>
        </span>
      </div>

      <div className="sl-body" ref={body} aria-live="polite">
        {items.map((it) => {
          switch (it.k) {
            case "user":
              return <p key={it.id} className="sl-msg user">{it.text}</p>;
            case "sena":
              return (
                <p key={it.id} className="sl-msg sena">
                  <Stream text={it.text} run={it.stream} onDone={() => { streamDone.current.get(it.id)?.(); streamDone.current.delete(it.id); }} />
                </p>
              );
            case "typing":
              return <span key={it.id} className="sl-typing" aria-hidden="true"><i /><i /><i /></span>;
            case "chips":
              return (
                <div key={it.id} className="sl-chips">
                  {it.kind === "concern" && C.concerns.map((c) => (
                    <button type="button" key={c.id} onClick={() => askFeel(c, c.say)}>{c.chip}</button>
                  ))}
                  {it.kind === "feel" && C.feels.map((f) => (
                    <button type="button" key={f.id} onClick={() => analyse(f, f.say)}>{f.chip}</button>
                  ))}
                  {it.kind === "redflag" && (
                    <>
                      <a className="is-primary" href="/#access" data-role="Patient (Sena waitlist)" data-cta="sena_clinic">{C.redFlagCta}</a>
                      <button type="button" onClick={restart}>{C.restart}</button>
                    </>
                  )}
                  {it.kind === "restart" && <button type="button" onClick={restart}>{C.restart}</button>}
                </div>
              );
            case "analysis":
              return (
                <div key={it.id} className="sl-think">
                  <ul>
                    {[it.concern.pattern, `Skin type: ${it.feel.chip.toLowerCase()}`, C.signals.climate, C.signals.safety].map((s, i) => (
                      <li key={s} className={it.lit > i ? "on" : undefined}>{s}</li>
                    ))}
                  </ul>
                  <div className="sl-print" aria-label="SkinPrint">
                    {C.printLabels.map((l, i) => (
                      <div key={l} className="sl-bar">
                        <span>{l}</span>
                        <i><b style={{ width: `${it.lit > i ? it.concern.print[i] : 0}%` }} /></i>
                        <em>{it.lit > i ? it.concern.print[i] : ""}</em>
                      </div>
                    ))}
                  </div>
                </div>
              );
            case "routine":
              return (
                <div key={it.id} className="sl-plan">
                  <b>Draft routine</b>
                  <ul>
                    {[...it.concern.routine, { time: "AM/PM", n: it.feel.moisturiser, ev: "Moderate evidence" }].map((r) => (
                      <li key={r.n}>
                        <span className="sl-t">{r.time}</span>
                        <span className="sl-n">{r.n}</span>
                        <span className="sl-ev">{r.ev}</span>
                      </li>
                    ))}
                  </ul>
                  <span className={`sl-state${it.approved ? " ok" : ""}`}>{it.approved ? C.doctor : C.pending}</span>
                </div>
              );
          }
        })}
      </div>

      <form className="sl-input" onSubmit={submit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={C.placeholder}
          aria-label={C.placeholder}
          maxLength={160}
          autoComplete="off"
        />
        <button type="submit" aria-label={C.send} disabled={!value.trim() || phase === "busy"}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
          </svg>
        </button>
      </form>
      <p className="sl-cap">{C.caption}</p>
    </div>
  );
}
