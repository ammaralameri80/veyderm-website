export function PatientJourney() {
  return (
    <section className="sec" id="journey" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-tag">The patient journey</div>
        <h2>A connected experience — from first question to lasting results.</h2>
        <p className="lede">One AI assistant, on the channel patients already use: WhatsApp.</p>
        <div className="journey">
          <div className="jstep">
            <div className="jn">1</div>
            <h3>Ask &amp; discover</h3>
            <p>Describe a concern, learn what&apos;s clinically recommended.</p>
          </div>
          <div className="jstep">
            <div className="jn">2</div>
            <h3>See the right doctor</h3>
            <p>Matched to verified dermatologists and clinics nearby.</p>
          </div>
          <div className="jstep">
            <div className="jn">3</div>
            <h3>Receive the plan</h3>
            <span className="wa">● WhatsApp</span>
            <p>The plan arrives with ingredients, usage, and safety.</p>
          </div>
          <div className="jstep">
            <div className="jn">4</div>
            <h3>Ask anything, anytime</h3>
            <span className="wa">● 24/7 chatbot</span>
            <p>Product and usage questions answered, day or night.</p>
          </div>
          <div className="jstep">
            <div className="jn">5</div>
            <h3>Follow up &amp; reorder</h3>
            <p>Reminders keep patients on track; reorder in a message.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
