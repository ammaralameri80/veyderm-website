import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { Icon, type IconName } from "./Icon";

/** Shared sub-page hero: kicker + headline (with accent) + sub. */
export function PageHero({
  kicker,
  heading,
  sub,
  center,
  children,
}: {
  kicker: string;
  heading: string[];
  sub: string;
  center?: boolean;
  children?: ReactNode;
}) {
  const [lead, accent, tail] = heading;
  return (
    <section className={`page-hero${center ? " center" : ""}`} id="top">
      <div className="wrap">
        <Reveal>
          <span className="kicker">{kicker}</span>
          <h1 className="display">
            {lead}
            {accent && <span className="accent">{accent}</span>}
            {tail}
          </h1>
          <p className="lead">{sub}</p>
          {children}
        </Reveal>
      </div>
    </section>
  );
}

/** A grid of feature cards (no numbering — these are capabilities, not steps). */
export function FeatureGrid({
  items,
  icons,
}: {
  items: { t: string; d: string }[];
  icons: IconName[];
}) {
  return (
    <div className="feature-grid">
      {items.map((f, i) => (
        <Reveal key={f.t} delay={(i % 2) * 0.06}>
          <div className="fcard">
            <span className="f-ic"><Icon name={icons[i % icons.length]} /></span>
            <h3>{f.t}</h3>
            <p>{f.d}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/** Closing call-to-action that ends every sub-page. */
export function Closer({
  heading,
  cta,
}: {
  heading: string;
  cta: { label: string; href: string; role?: string };
}) {
  return (
    <section className="section section--tight access">
      <div className="wrap closer">
        <Reveal>
          <h2 className="heading">{heading}</h2>
          <Button href={cta.href} role={cta.role} cta="closer" arrow>
            {cta.label}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
