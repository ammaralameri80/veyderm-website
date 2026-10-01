export function AiAgent() {
  return (
    <section className="engine" id="agent">
      <div className="wrap">
        <div className="sec-tag">The Veyderm AI Agent</div>
        <h2>One agent. Insight for every side.</h2>
        <p className="q">Reads the evidence, drafts the plan, answers patients.</p>
        <div className="agent-cards">
          <div className="acard">
            <div className="ah">
              <span className="ai">✚</span>
              <h3>For doctors</h3>
            </div>
            <ul>
              <li>Evidence-ranked product picks</li>
              <li>Automatic safety &amp; interaction checks</li>
            </ul>
          </div>
          <div className="acard">
            <div className="ah">
              <span className="ai">◈</span>
              <h3>For distributors</h3>
            </div>
            <ul>
              <li>Real demand signals</li>
              <li>Structured RFQs, not scattered chats</li>
            </ul>
          </div>
          <div className="acard">
            <div className="ah">
              <span className="ai">☺</span>
              <h3>For patients</h3>
            </div>
            <ul>
              <li>24/7 answers on WhatsApp</li>
              <li>Reminders &amp; easy reordering</li>
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
