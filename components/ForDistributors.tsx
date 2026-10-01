const ICO = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ForDistributors() {
  return (
    <section className="sec tint aud" id="distributors">
      <div className="wrap">
        <div className="sec-tag">For distributors</div>
        <h2>Be in front of dermatologists at the moment they choose.</h2>
        <p className="lede">
          Your products where decisions happen — inside the dermatologist&apos;s
          workflow.
        </p>

        <div className="ba">
          <div className="ba-col before">
            <div className="ba-t">Today</div>
            <ul>
              <li>Chasing clinics with calls and visits</li>
              <li>Orders lost in WhatsApp and email threads</li>
              <li>Guessing what patients actually need</li>
              <li>Undercut by grey-market sellers</li>
            </ul>
          </div>
          <div className="ba-arrow" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </div>
          <div className="ba-col after">
            <div className="ba-t">With Veyderm</div>
            <ul>
              <li>Doctors find your products while planning treatment</li>
              <li>Clear requests and orders in one place</li>
              <li>Real demand insight from real patients</li>
              <li>Authorized-only platform that protects your brand</li>
            </ul>
          </div>
        </div>

        <div className="dist-widgets">
          <div className="rfq-card">
            <div className="rfq-head">
              <span className="rfq-badge">New RFQ received</span>
              <span className="rfq-time">2m ago</span>
            </div>
            <div className="rfq-clinic">Marina Dermatology Clinic</div>
            <ul className="rfq-items">
              <li>
                <span>Azelaic acid 20% cream</span>
                <span className="rfq-qty">×24</span>
              </li>
              <li>
                <span>Broad-spectrum SPF 50</span>
                <span className="rfq-qty">×40</span>
              </li>
            </ul>
            <div className="rfq-foot">
              <span className="rfq-sample">Sample</span>
              <span className="rfq-action">Send quote</span>
            </div>
          </div>

          <div className="trend-card">
            <div className="trend-head">
              <div>
                <div className="trend-title">Demand trend</div>
                <div className="trend-sub">Azelaic acid · last 8 weeks</div>
              </div>
              <span className="trend-up">▲ trending</span>
            </div>
            <svg className="spark" viewBox="0 0 240 72" preserveAspectRatio="none" role="img" aria-label="Illustrative upward demand trend over eight weeks">
              <defs>
                <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(108,101,194,.28)" />
                  <stop offset="100%" stopColor="rgba(108,101,194,0)" />
                </linearGradient>
              </defs>
              <path
                d="M0 58 L34 52 L68 54 L102 40 L136 44 L170 26 L204 24 L240 10 L240 72 L0 72 Z"
                fill="url(#sparkFill)"
              />
              <path
                d="M0 58 L34 52 L68 54 L102 40 L136 44 L170 26 L204 24 L240 10"
                fill="none"
                stroke="var(--purple)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="240" cy="10" r="3.5" fill="var(--purple)" />
            </svg>
            <div className="trend-foot">Illustrative data</div>
          </div>
        </div>

        <div className="bgrid">
          <div className="bcard">
            <div className="bi">
              <svg {...ICO} aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <h3>Reach the right buyers</h3>
            <p>Visible to the dermatologists who recommend and buy.</p>
          </div>
          <div className="bcard">
            <div className="bi">
              <svg {...ICO} aria-hidden="true">
                <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
              </svg>
            </div>
            <h3>Real requests, ready to close</h3>
            <p>Structured quote requests from clinics — no back-and-forth.</p>
          </div>
          <div className="bcard">
            <div className="bi">
              <svg {...ICO} aria-hidden="true">
                <path d="M3 3v18h18" />
                <path d="M18 17V9" />
                <path d="M13 17V5" />
                <path d="M8 17v-3" />
              </svg>
            </div>
            <h3>Know what sells, and why</h3>
            <p>Trending concerns, top products, and where demand grows.</p>
          </div>
        </div>

        <div className="start">
          <div className="start-t">Early partners get the advantage</div>
          <ol className="s3">
            <li>
              <b>1</b>
              <span>Apply as a distributor</span>
            </li>
            <li>
              <b>2</b>
              <span>Share your product portfolio</span>
            </li>
            <li>
              <b>3</b>
              <span>Start receiving clinic requests</span>
            </li>
          </ol>
          <a
            className="btn btn-primary"
            href="#access"
            data-role="Authorized Distributor"
          >
            Become a partner
          </a>
        </div>
      </div>
    </section>
  );
}
