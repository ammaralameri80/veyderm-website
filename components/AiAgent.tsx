export function AiAgent() {
  return (
    <section className="engine" id="agent">
      <div className="wrap">
        <div className="sec-tag">The Veyderm AI Agent</div>
        <h2>An AI agent that does the work — and turns it into insight.</h2>
        <p className="q">
          It reads the evidence, builds the plan, answers patients around the
          clock, and learns from every interaction — then hands each side the
          insight it needs to act.
        </p>
        <div className="agent-cards">
          <div className="acard">
            <div className="ah">
              <span className="ai">✚</span>
              <h3>For doctors</h3>
            </div>
            <ul>
              <li>Evidence-ranked product recommendations for each condition</li>
              <li>Automatic safety, allergen &amp; interaction checks</li>
              <li>Adherence signals — see who&apos;s following their plan</li>
              <li>Draft treatment plans ready to review in seconds</li>
            </ul>
          </div>
          <div className="acard">
            <div className="ah">
              <span className="ai">◈</span>
              <h3>For distributors</h3>
            </div>
            <ul>
              <li>Real demand signals from actual patient needs</li>
              <li>Most-requested products and emerging concern trends</li>
              <li>Structured RFQs instead of scattered messages</li>
              <li>Insight into what&apos;s selling, where, and why</li>
            </ul>
          </div>
          <div className="acard">
            <div className="ah">
              <span className="ai">☺</span>
              <h3>For patients</h3>
            </div>
            <ul>
              <li>A 24/7 chatbot that explains their plan in plain language</li>
              <li>Ingredient, usage &amp; safety questions answered on WhatsApp</li>
              <li>Reminders, follow-ups, and easy reordering</li>
              <li>Guidance toward verified doctors and real products</li>
            </ul>
          </div>
        </div>
        <a className="btn btn-mint" href="#access">
          Request Early Access
        </a>
      </div>
    </section>
  );
}
