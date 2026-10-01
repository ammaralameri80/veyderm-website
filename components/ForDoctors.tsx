export function ForDoctors() {
  return (
    <section className="sec aud" id="doctors">
      <div className="wrap">
        <div className="aud-head">
          <div>
            <div className="sec-tag">For dermatologists</div>
            <h2>Recommend with confidence. Every time.</h2>
            <p className="lede">
              You know your patients best. Veyderm gives you the facts behind every
              product.
            </p>
          </div>
          <div className="reassure">
            <div className="rq">
              AI suggests.
              <br />
              <em>You decide.</em>
            </div>
            <p>Nothing reaches your patient without your approval.</p>
          </div>
        </div>
        <div className="bgrid">
          <div className="bcard">
            <div className="bi">
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3>Only authorized products</h3>
            <p>From authorized distributors — no fakes, no grey market.</p>
          </div>
          <div className="bcard">
            <div className="bi">
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="8" height="4" x="8" y="2" rx="1" />
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <path d="m9 14 2 2 4-4" />
              </svg>
            </div>
            <h3>The proof, in plain words</h3>
            <p>See how strong the evidence is, explained simply.</p>
          </div>
          <div className="bcard">
            <div className="bi">
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
            <h3>Safer for every patient</h3>
            <p>Allergies, pregnancy, and clashes flagged automatically.</p>
          </div>
        </div>
        <div className="control">
          <div className="control-t">The doctor stays in control</div>
          <ol className="control-flow">
            <li className="cf-step">
              <span className="cf-ic">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
                </svg>
              </span>
              <h3>AI suggests</h3>
              <p>Evidence-ranked options and safety flags, drafted in seconds.</p>
            </li>
            <li className="cf-arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m13 6 6 6-6 6" />
              </svg>
            </li>
            <li className="cf-step">
              <span className="cf-ic">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </span>
              <h3>You review the evidence</h3>
              <p>See how strong the evidence is, explained in plain words.</p>
            </li>
            <li className="cf-arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m13 6 6 6-6 6" />
              </svg>
            </li>
            <li className="cf-step">
              <span className="cf-ic">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <h3>You approve</h3>
              <p>Nothing reaches the patient until you say so.</p>
            </li>
          </ol>
        </div>

        <div className="start">
          <div className="start-t">Getting started is simple</div>
          <ol className="s3">
            <li>
              <b>1</b>
              <span>Request access — it takes a minute</span>
            </li>
            <li>
              <b>2</b>
              <span>We verify your medical license</span>
            </li>
            <li>
              <b>3</b>
              <span>Start recommending with confidence</span>
            </li>
          </ol>
          <a className="btn btn-primary" href="#access" data-role="Dermatologist" data-cta="for_doctors">
            Join as a doctor
          </a>
        </div>
      </div>
    </section>
  );
}
