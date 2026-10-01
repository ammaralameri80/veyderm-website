// Founding partners / advisory board. Hidden until there is real content to
// show — flip SHOW_PARTNERS to true once logos or advisors are confirmed, and
// replace the placeholder below with the real items. No fabricated partners.
const SHOW_PARTNERS = false;

export function FoundingPartners() {
  if (!SHOW_PARTNERS) return null;

  return (
    <section className="sec founding" id="partners">
      <div className="wrap">
        <div className="sec-tag">Founding partners</div>
        <h2>Built with the people who set the standard.</h2>
        <div className="founding-grid">
          <p className="founding-ph">[REPLACE: partner logos or advisory board]</p>
        </div>
      </div>
    </section>
  );
}
