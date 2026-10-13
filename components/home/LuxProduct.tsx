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

export function BrandStage() {
  // a gently rising 12-week trend
  const pts = [38, 41, 39, 46, 44, 52, 55, 53, 61, 64, 70, 76];
  const w = 300, h = 96;
  const xy = pts.map((v, i) => [Math.round((i / (pts.length - 1)) * w), Math.round(h - (v / 84) * h)] as const);
  const line = xy.map(([x, y], i) => `${i ? "L" : "M"}${x} ${y}`).join(" ");
  const area = `${line} L${w} ${h} L0 ${h}Z`;
  const bars = [
    { n: "Melasma", v: 46 },
    { n: "Post-acne marks", v: 31 },
    { n: "Uneven tone", v: 23 },
  ];
  return (
    <div className="lx-stage st-brand" role="img" aria-label="veyderm brand insights for Azelaic serum 20%: ranked number 1 of 14 for melasma, prescriptions up 18% this month, 82% of patients still using it after 8 weeks.">
      <div className="ui ui-win brand-win" aria-hidden="true">
        <div className="ui-bar">
          <span className="ui-brand"><Mark />Brand insights</span>
          <span className="ui-seg"><span>4 wks</span><span className="on">12 wks</span><span>1 yr</span></span>
        </div>
        <div className="brand-body">
          <p className="brand-prod"><span className="prod sm" /><span><b>Azelaic serum 20%</b><small>All UAE clinics on veyderm</small></span></p>
          <div className="kpis">
            <div className="kpi"><small>Rank for melasma</small><b>#1<em>of 14</em></b></div>
            <div className="kpi"><small>Prescriptions</small><b>+18%<em className="up">this month</em></b></div>
            <div className="kpi"><small>Still using at 8 wks</small><b>82%<em>adherence</em></b></div>
          </div>
          <div className="chart">
            <p className="ui-h">Weekly prescriptions<span>12 weeks</span></p>
            <svg viewBox={`0 0 ${w} ${h + 2}`} preserveAspectRatio="none">
              <defs>
                <linearGradient id="brand-fill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#7C6CF2" stopOpacity=".28" />
                  <stop offset="1" stopColor="#7C6CF2" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[0.25, 0.5, 0.75].map((g) => <line key={g} x1="0" x2={w} y1={h * g} y2={h * g} className="grid" />)}
              <path d={area} fill="url(#brand-fill)" />
              <path d={line} className="trend" pathLength={1} />
              <circle cx={xy[xy.length - 1][0]} cy={xy[xy.length - 1][1]} r="3.6" className="dot" />
            </svg>
          </div>
          <div className="bars">
            <p className="ui-h">Prescribed for<span>share of scripts</span></p>
            {bars.map((b) => (
              <div className="bar" key={b.n}>
                <span>{b.n}</span>
                <span className="track"><i style={{ width: `${b.v * 2}%` }} /></span>
                <b>{b.v}%</b>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
