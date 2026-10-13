/**
 * Product "stages" for the three feature sections: real veyderm screens,
 * built in HTML so they stay crisp at any size. Everything inside scales with
 * the stage width (container query units), so the layout is identical on
 * phone and desktop. Names and numbers are illustrative.
 */

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

function Mark() {
  return <span className="ui-mark" aria-hidden="true">v</span>;
}

export function ProStage() {
  const rows = [
    { t: "09:30", n: "Omar K.", c: "Acne", s: "Signed", k: "done" },
    { t: "10:30", n: "Lana H.", c: "Melasma", s: "Draft ready", k: "draft", on: true },
    { t: "11:15", n: "Mira S.", c: "Rosacea", s: "Draft ready", k: "draft" },
    { t: "12:00", n: "Yousef A.", c: "Eczema", s: "Intake", k: "wait" },
    { t: "14:30", n: "Huda R.", c: "Acne", s: "Intake", k: "wait" },
  ];
  const plan = [
    { n: "Azelaic acid 20%", d: "Twice daily, 12 weeks", e: "Strong" },
    { n: "Tranexamic acid 5%", d: "Evenings", e: "Strong" },
    { n: "Mineral SPF 50+", d: "Every 2 hours outdoors", e: "Essential" },
  ];
  return (
    <div className="lx-stage st-pro" role="img" aria-label="veyderm Pro on a clinician's screen: today's patients, and an AI-drafted plan for Lana H. that passed the safety check and is ready to sign.">
      <div className="ui ui-win pro-win" aria-hidden="true">
        <div className="ui-bar">
          <span className="ui-brand"><Mark />veyderm <b>Pro</b></span>
          <span className="ui-search">Search patients</span>
          <span className="ui-av">DN</span>
        </div>
        <div className="pro-body">
          <div className="pro-list">
            <p className="ui-h">Today<span>5 patients</span></p>
            {rows.map((r) => (
              <div className={`pro-row${r.on ? " on" : ""}`} key={r.n}>
                <span className="pro-t">{r.t}</span>
                <span className="pro-n"><b>{r.n}</b><small>{r.c}</small></span>
                <span className={`ui-chip k-${r.k}`}>{r.s}</span>
              </div>
            ))}
          </div>
          <div className="pro-detail">
            <div className="pro-pt">
              <span className="ui-pav">LH</span>
              <span><b>Lana H., 29</b><small>Melasma · skin type IV · visit 10:30</small></span>
            </div>
            <p className="ui-h">AI draft plan<span>ranked by evidence</span></p>
            {plan.map((p, i) => (
              <div className="pro-item" key={p.n}>
                <span className="pro-num">{i + 1}</span>
                <span className="pro-n"><b>{p.n}</b><small>{p.d}</small></span>
                <span className="ui-chip k-ev">{p.e}</span>
              </div>
            ))}
            <div className="pro-safe">
              <span className="ui-ok"><Check /></span>
              <span><b>Safety check passed</b><small>Retinoids excluded: pregnancy planned</small></span>
            </div>
            <div className="pro-actions">
              <span className="ui-btn ghost">Edit plan</span>
              <span className="ui-btn">Review and sign</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SenaStage() {
  return (
    <div className="lx-stage st-sena" role="img" aria-label="Sena on a phone: a patient asks about dark spots, Sena suggests a dermatologist-approved serum and offers to book an appointment.">
      <div className="sena-glow" aria-hidden="true" />
      <div className="ui phone" aria-hidden="true">
        <div className="phone-screen">
          <div className="phone-top">
            <span className="ui-orb" />
            <span><b>Sena</b><small><i className="ui-live" />Online · replies in seconds</small></span>
          </div>
          <div className="chat">
            <p className="bub me">My dark spots got worse after summer. What should I use?</p>
            <p className="bub sena">Sun often darkens melasma. Your dermatologist approved this for you:</p>
            <div className="bub-card">
              <span className="prod" />
              <span className="bc-tx"><b>Azelaic serum 20%</b><small>Approved by Dr. Noor · in stock</small></span>
            </div>
            <p className="bub sena">Want a check-up before Eid? Dr. Noor is free Thursday.</p>
            <div className="chips">
              <span className="chip on">Book Thu 4:00 pm</span>
              <span className="chip">Other times</span>
            </div>
            <p className="bub me ar" lang="ar" dir="rtl">شكراً، احجز لي</p>
            <p className="typing"><i /><i /><i /></p>
          </div>
          <div className="phone-input">Ask Sena anything…</div>
        </div>
      </div>
    </div>
  );
}

function Spark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.5l1.9 5.6 5.6 1.9-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.9z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" opacity=".7" />
    </svg>
  );
}

/**
 * Brands: ask veyderm AI a question in plain language; it answers from
 * anonymised prescriptions, shows what dermatologists switched from, and
 * flags signals it spotted. Figures are illustrative.
 */
export function BrandStage() {
  // "What it replaced": a small flow (Sankey) from previous products into the serum.
  const src = [
    { n: "Hydroquinone 4%", v: 148, c: "#5B4FE0" },
    { n: "Tretinoin 0.05%", v: 96, c: "#8E80F0" },
    { n: "Vitamin C serum", v: 61, c: "#BDB2F7" },
  ];
  const total = src.reduce((a, b) => a + b.v, 0);
  const H = 104, gap = 7, top = 8;
  const k = (H - gap * (src.length - 1)) / total;
  const x0 = 80, x1 = 86, x2 = 262, x3 = 268;
  let ly = top, ry = top + gap; // right node is centred against the stack
  const bands = src.map((d) => {
    const h = d.v * k;
    const l0 = ly, l1 = ly + h, r0 = ry, r1 = ry + h;
    ly += h + gap; ry += h;
    const m = (x1 + x2) / 2;
    return {
      ...d, l0, l1,
      path: `M${x1} ${l0} C${m} ${l0} ${m} ${r0} ${x2} ${r0} L${x2} ${r1} C${m} ${r1} ${m} ${l1} ${x1} ${l1} Z`,
    };
  });
  const rTop = top + gap, rBot = ry;
  return (
    <div className="lx-stage st-brand" role="img" aria-label="veyderm brand insights: a brand asks why its azelaic serum grew in Dubai, veyderm AI answers from anonymised prescriptions, shows which products dermatologists switched from, and flags a rising opportunity and an early drop-off.">
      <div className="ui ui-win brand-win" aria-hidden="true">
        <div className="ui-bar">
          <span className="ui-brand"><Mark />Brand insights</span>
          <span className="brand-tag"><span className="prod sm" />Azelaic serum 20%</span>
        </div>
        <div className="brand-body">
          <div className="ask">
            <span className="ask-ic"><Spark /></span>
            <span className="ask-q">Why did our serum grow in Dubai this summer?</span>
            <span className="ask-k">Ask</span>
          </div>
          <div className="ans">
            <span className="ui-orb sm" />
            <div>
              <p>
                Dubai dermatologists prescribed it <mark>18% more</mark> since June, mostly as a
                pregnancy-safe switch from hydroquinone. <mark>3 in 4</mark> switches cite pregnancy
                plans or sensitive skin.
              </p>
              <span className="src">From 1,240 anonymised plans across 38 clinics</span>
            </div>
          </div>
          <div className="flow">
            <p className="ui-h">What it replaced<span>{total} switches, 12 weeks</span></p>
            <svg viewBox="0 0 320 124">
              {bands.map((b) => (
                <path key={b.n} d={b.path} fill={b.c} opacity=".34" />
              ))}
              {bands.map((b) => (
                <g key={b.n + "l"}>
                  <rect x={x0} y={b.l0} width={x1 - x0} height={b.l1 - b.l0} rx="2" fill={b.c} />
                  <text x={x0 - 6} y={(b.l0 + b.l1) / 2 - 1} textAnchor="end" className="fl-n">{b.n}</text>
                  <text x={x0 - 6} y={(b.l0 + b.l1) / 2 + 9} textAnchor="end" className="fl-v">{b.v}</text>
                </g>
              ))}
              <rect x={x2} y={rTop} width={x3 - x2} height={rBot - rTop} rx="2" fill="#1C1722" />
              <text x={x3 + 6} y={(rTop + rBot) / 2 - 2} className="fl-n strong">Your</text>
              <text x={x3 + 6} y={(rTop + rBot) / 2 + 9} className="fl-n strong">serum</text>
            </svg>
          </div>
          <p className="ui-h">Signals veyderm AI spotted</p>
          <div className="sig">
            <span className="sig-ic up">↗</span>
            <span><b>Post-acne marks rising in teens, Sharjah</b><small>+24% in 6 weeks. Few products are prescribed for it yet.</small></span>
          </div>
          <div className="sig">
            <span className="sig-ic warn">!</span>
            <span><b>Patients drop off at week 6</b><small>They mention stinging. A starter strength could keep them.</small></span>
          </div>
        </div>
      </div>
    </div>
  );
}
