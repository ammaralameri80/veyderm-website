function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

function Send() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12l16-7-7 16-2.5-6.5z" />
    </svg>
  );
}

const CHIPS = ["Dark spots", "Breakouts", "Dryness", "Redness", "Fine lines"];

/**
 * Sena — the AI skin companion, shown as the chat a patient actually has:
 * a prompt in plain language (English or Arabic), quick concerns to tap, and
 * a short reply that ends in a dermatologist-approved plan. Illustrative.
 */
export function SenaChat() {
  return (
    <div className="senachat" role="img" aria-label="A Sena conversation: the patient describes dark spots, Sena recognises sun-driven melasma and shares a routine approved by Dr. Noor. Illustrative.">
      <div className="sc-top" aria-hidden="true">
        <span className="sena-orb" />
        <span className="sc-id"><b>Sena</b><small><i className="live-dot" />Online</small></span>
        <span className="sc-lang">EN · عربي</span>
      </div>
      <div className="sc-body" aria-hidden="true">
        <p className="sc-msg sena">Hi, I&rsquo;m Sena. Tell me what&rsquo;s bothering your skin — or pick one:</p>
        <ul className="sc-chips">
          {CHIPS.map((c) => (
            <li key={c} className={c === "Dark spots" ? "on" : undefined}>{c}</li>
          ))}
        </ul>
        <p className="sc-msg me">Dark spots on my cheeks, worse after summer.</p>
        <div className="sc-msg sena sc-reply">
          <p>That looks like sun-driven melasma. Here&rsquo;s a gentle routine your dermatologist can approve.</p>
          <span className="sc-approve"><span className="ok"><Check /></span>Plan approved · Dr. Noor</span>
        </div>
      </div>
      <div className="sc-input" aria-hidden="true">
        <span>Describe your skin, in English or Arabic…</span>
        <span className="sc-send"><Send /></span>
      </div>
    </div>
  );
}
