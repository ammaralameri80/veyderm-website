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
            <a href="mailto:info@veyderm.com">Contact</a>
          </div>
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
