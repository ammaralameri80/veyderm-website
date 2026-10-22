import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  children,
  id,
  className,
  tight,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  tight?: boolean;
}) {
  return (
    <section id={id} className={`section${tight ? " section--tight" : ""}${className ? ` ${className}` : ""}`}>
      <div className="wrap">{children}</div>
    </section>
  );
}

/** Kicker + heading (with Instrument-italic accent) + optional sub. The
 *  heading is passed as [lead, accent, tail] so the accent sits mid-phrase. */
export function SectionHeader({
  kicker,
  heading,
  sub,
  center,
}: {
  kicker: string;
  heading: string[];
  sub?: string;
  center?: boolean;
}) {
  const [lead, accent, tail] = heading;
  return (
    <Reveal className={`sec-head${center ? " center" : ""}`}>
      <span className="kicker">{kicker}</span>
      <h2 className="heading">
        {lead}
        {accent && <span className="accent">{accent}</span>}
        {tail}
      </h2>
      {sub && <p>{sub}</p>}
    </Reveal>
  );
}
