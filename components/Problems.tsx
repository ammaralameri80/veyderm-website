export function Problems() {
  return (
    <section className="sec dark">
      <div className="wrap">
        <div className="sec-tag">Problems to solve</div>
        <h2>The patient journey is broken at every handoff.</h2>
        <p className="lede">
          From the first search to follow-up, patients, doctors, and distributors
          work in disconnected silos — losing time, trust, and outcomes along the
          way.
        </p>
        <div className="prob-grid">
          <div className="prob">
            <div className="ic">◇</div>
            <h3>Patients are left guessing</h3>
            <p>
              Confusing advice, self-medication, and grey-market products — with no
              clear guidance after they leave the clinic and no one to ask.
            </p>
          </div>
          <div className="prob">
            <div className="ic">△</div>
            <h3>Doctors decide without data at hand</h3>
            <p>
              Evidence, contraindications, and ingredient data sit scattered — and
              there&apos;s no visibility into whether patients actually follow the
              plan.
            </p>
          </div>
          <div className="prob">
            <div className="ic">◻</div>
            <h3>No follow-up, no adherence</h3>
            <p>
              Once the consult ends, the relationship goes quiet — no reminders, no
              answers, no reordering, so results and repeat visits slip away.
            </p>
          </div>
          <div className="prob">
            <div className="ic">○</div>
            <h3>Distributors fly blind</h3>
            <p>
              No real demand signal from the ground — sourcing and ordering happen
              over calls and messages, with no view of what patients truly need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
