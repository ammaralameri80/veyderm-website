export function PatientJourney() {
  return (
    <section className="sec" id="journey" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-tag">The patient journey</div>
        <h2>A connected experience — from first question to lasting results.</h2>
        <p className="lede">
          Veyderm follows the patient the whole way, with an AI assistant on the
          channel they already use every day: WhatsApp.
        </p>
        <div className="journey">
          <div className="jstep">
            <div className="jn">1</div>
            <h3>Ask &amp; discover</h3>
            <p>
              Patients describe a concern to the AI chatbot and learn what&apos;s
              clinically recommended — no guessing, no grey market.
            </p>
          </div>
          <div className="jstep">
            <div className="jn">2</div>
            <h3>See the right doctor</h3>
            <p>
              Get matched to verified dermatologists and clinics nearby, connected
              to authorized products.
            </p>
          </div>
          <div className="jstep">
            <div className="jn">3</div>
            <h3>Receive the plan</h3>
            <span className="wa">● WhatsApp</span>
            <p>
              The doctor&apos;s treatment plan arrives on WhatsApp — with
              ingredients, usage, and safety guidance included.
            </p>
          </div>
          <div className="jstep">
            <div className="jn">4</div>
            <h3>Ask anything, anytime</h3>
            <span className="wa">● 24/7 chatbot</span>
            <p>
              The AI assistant answers product, ingredient, and usage questions
              instantly — day or night.
            </p>
          </div>
          <div className="jstep">
            <div className="jn">5</div>
            <h3>Follow up &amp; reorder</h3>
            <p>
              Reminders keep patients on track, and reordering verified products is
              one message away.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
