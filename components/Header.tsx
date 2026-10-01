import { HeaderLogo } from "./Logo";

export function Header() {
  return (
    <header>
      <div className="wrap">
        <nav>
          <HeaderLogo />
          <div className="navlinks">
            <a href="#agent">AI Agent</a>
            <a href="#journey">Patient Journey</a>
            <a href="#doctors">For Doctors</a>
            <a href="#distributors">For Distributors</a>
          </div>
          <a className="btn btn-primary nav-cta" href="#access" data-cta="header">
            Request Early Access
          </a>
        </nav>
      </div>
    </header>
  );
}
