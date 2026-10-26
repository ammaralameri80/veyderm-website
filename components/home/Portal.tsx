import { ProScreen } from "./Screens";

/** The product, shown the way the reference sites show theirs: a real-looking
 *  app in a browser frame. Sidebar + the AI-drafted plan + the patient's Sena
 *  thread. Illustrative; fictional patient. */
export function Portal() {
  return (
    <div className="browser" role="img" aria-label="The veyderm Pro portal: a dermatologist reviews an AI-drafted plan for a patient while the patient's Sena conversation runs alongside. Illustrative.">
      <div className="browser-bar" aria-hidden="true">
        <span className="dots"><i /><i /><i /></span>
        <span className="url">app.veyderm.com / patients / lana-h</span>
        <span className="illustrative">Illustrative</span>
      </div>
      <div className="portal" aria-hidden="true">
        <aside className="portal-nav">
          <div className="pn-brand"><span className="win-mark">v</span>veyderm&nbsp;<b>Pro</b></div>
          <ul>
            <li className="on">Today</li>
            <li>Patients</li>
            <li>Plans</li>
            <li>Messages</li>
            <li>Orders</li>
          </ul>
          <div className="pn-user">
            <span className="pt-av">DN</span>
            <span><b>Dr. Noor</b><small>Dermatologist</small></span>
          </div>
        </aside>
        <div className="portal-main">
          <ProScreen />
        </div>
        <aside className="portal-side">
          <div className="ps-h">
            <span className="sena-orb" />
            <span><b>Sena</b><small>Lana H. · WhatsApp</small></span>
          </div>
          <div className="ps-chat">
            <p className="bub2 me">Hi Sena, my cheeks got darker this summer.</p>
            <p className="bub2 sena">Thanks for the photo, Lana. I can see a melasma pattern. Dr. Noor is reviewing your plan now.</p>
            <p className="bub2 sena good">Your plan is approved. Azelaic acid 20%, tranexamic acid 5%, mineral SPF 50+.</p>
          </div>
          <div className="ps-input">Message Sena…</div>
        </aside>
      </div>
    </div>
  );
}
