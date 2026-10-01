// Layered product mockup for the hero — built entirely in HTML/CSS/SVG, no
// photos. All data is clearly fictional sample content; the whole thing is
// exposed to assistive tech as a single labelled image so the sample copy is
// never read as real clinical data.

const PRODUCTS = [
  { name: "Azelaic acid 20% cream", evidence: "Strong evidence", level: "strong" },
  { name: "Tranexamic acid serum", evidence: "Strong evidence", level: "strong" },
  { name: "Niacinamide 10% serum", evidence: "Moderate evidence", level: "moderate" },
];

export function HeroMockup() {
  return (
    <div
      className="mockup"
      role="img"
      aria-label="Sample Veyderm treatment plan: a melasma case with three evidence-ranked products, a passed safety check with a pregnancy warning to avoid retinoids, an approve-and-send button, and a WhatsApp message delivering the plan to the patient."
    >
      <div className="mk-card" aria-hidden="true">
        <div className="mk-head">
          <div>
            <div className="mk-kicker">Treatment plan</div>
            <div className="mk-concern">Melasma · Fitzpatrick III</div>
          </div>
          <span className="mk-sample">Illustrative example</span>
        </div>

        <ol className="mk-products">
          {PRODUCTS.map((p, i) => (
            <li key={p.name}>
              <span className="mk-rank">{i + 1}</span>
              <div className="mk-pinfo">
                <span className="mk-pname">{p.name}</span>
                <span className={`mk-badge ${p.level}`}>{p.evidence}</span>
              </div>
            </li>
          ))}
        </ol>

        <div className="mk-safety">
          <div className="mk-safe pass">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Safety check passed
          </div>
          <div className="mk-safe warn">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
            </svg>
            Pregnancy: avoid retinoids
          </div>
        </div>

        <div className="mk-approve">Approve &amp; send</div>
      </div>

      <div className="mk-chat" aria-hidden="true">
        <div className="mk-chat-head">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
            <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm0 2a8 8 0 1 1-4.1 14.9l-.3-.2-2.5.7.7-2.4-.2-.3A8 8 0 0 1 12 4zm-2.7 3.6c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.9 4.5 3.9 2.2.9 2.7.7 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.3-.3-.2-1.5-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.6.9-.8 1-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2-1.2-.7-.7-1.2-1.4-1.4-1.7-.1-.3 0-.4.1-.5l.4-.5c.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5 0-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4z" />
          </svg>
          WhatsApp
        </div>
        <div className="mk-bubble">
          Your plan is ready — 3 products, with how and when to use each.
        </div>
        <div className="mk-chat-meta">Delivered to patient · now</div>
      </div>
    </div>
  );
}
