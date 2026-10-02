import { FooterLogo } from "./Logo";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <FooterLogo />
          <div className="flinks">
            <a href="#agent">AI Agent</a>
            <a href="#journey">Patient Journey</a>
            <a href="#doctors">For Doctors</a>
            <a href="#distributors">For Distributors</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
        </div>
        <div className="fcontact">
          <span className="fcontact-t">Get in touch</span>
          <a className="fcontact-item" href="mailto:info@veyderm.com">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            info@veyderm.com
          </a>
          <span className="fcontact-item">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
              <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 2a8 8 0 1 1-4.1 14.9l-.3-.2-2.5.7.7-2.4-.2-.3A8 8 0 0 1 12 4zm4.6 11.3c-.2.6-1.2 1.1-1.7 1.2-.5.1-1 .2-3.2-.7-2.7-1-4.4-3.7-4.5-3.9-.1-.2-1-1.4-1-2.6s.7-1.8.9-2.1c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.5.8 2 .9 2.1 0 .1.1.3 0 .5l-.4.6-.4.4c-.1.1-.3.3-.1.5.2.3.7 1 1.4 1.7.9.8 1.7 1.1 2 1.2.2.1.4.1.5-.1l.8-1c.2-.2.4-.2.6-.1.3.1 1.5.7 1.8.9.3.1.4.2.5.3.1.2.1.6-.1 1.2z" />
            </svg>
            WhatsApp: available soon
          </span>
        </div>
        <div className="fbar">
          © 2026 Veyderm. All rights reserved. Dubai, United Arab Emirates.
          <br />
          Veyderm is a digital platform connecting licensed healthcare
          professionals with authorized dermocosmetic distributors. Product
          information on this platform does not constitute medical advice. Always
          consult a qualified healthcare professional.
        </div>
      </div>
    </footer>
  );
}
