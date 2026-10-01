export function Problems() {
  return (
    <section className="sec tint">
      <div className="wrap">
        <div className="sec-tag">Problems to solve</div>
        <h2>The patient journey is broken at every handoff.</h2>
        <p className="lede">
          Patients, doctors, and distributors work in disconnected silos.
        </p>
        <div className="prob-grid">
          <div className="prob">
            <div className="ic">◇</div>
            <h3>Patients are left guessing</h3>
            <p>Confusing advice, grey-market products, no one to ask.</p>
          </div>
          <div className="prob">
            <div className="ic">△</div>
            <h3>Doctors decide without data</h3>
            <p>Evidence scattered; no view of who follows the plan.</p>
          </div>
          <div className="prob">
            <div className="ic">◻</div>
            <h3>No follow-up, no adherence</h3>
            <p>The consult ends and the relationship goes quiet.</p>
          </div>
          <div className="prob">
            <div className="ic">○</div>
            <h3>Distributors fly blind</h3>
            <p>No real demand signal from the ground.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
