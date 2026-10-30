import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { HOME } from "@/lib/site";

/* ---------------------------------------------------------- Proof bar */
const PROOF_ICONS: IconName[] = ["badge", "sun", "package"];

export function ProofBar() {
  return (
    <section className="proof" aria-label="What veyderm promises">
      <ul className="wrap proof-row">
        {HOME.proof.map((t, i) => (
          <li key={t}>
            <Icon name={PROOF_ICONS[i]} />
            {t}
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------------------------------------------------------- Trust band */
export function TrustBand() {
  const { trust } = HOME;
  return (
    <section className="band section" aria-label="Where AI meets human">
      <div className="wrap">
        <SectionHeader kicker={trust.kicker} heading={trust.h2} sub={trust.sub} center />
        <div className="pillars">
          {trust.pillars.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.07}>
              <div className="pillar">
                <span className="p-ic"><Icon name={p.ic as IconName} /></span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- Company strip */
export function CompanyStrip() {
  const { company } = HOME;
  const [lead, accent, tail] = company.h2;
  const nodes: { ic: IconName; t: string; d: string }[] = [
    { ic: "stethoscope", t: "veyderm Clinical", d: "Doctors" },
    { ic: "message", t: "Sena", d: "Patients" },
    { ic: "building", t: "Brand platform", d: "Industry" },
  ];
  return (
    <Section className="section--tight">
      <div className="company">
        <Reveal className="company-copy">
          <span className="kicker">{company.kicker}</span>
          <h2 className="heading">
            {lead}
            {accent && <span className="accent">{accent}</span>}
            {tail}
          </h2>
          <p>{company.body}</p>
          <TextLink href={company.link.href}>{company.link.label} →</TextLink>
        </Reveal>
        <Reveal className="diagram" delay={0.08}>
          <div className="diagram-row">
            {nodes.map((n) => (
              <div className="dnode" key={n.t}>
                <span className="d-ic"><Icon name={n.ic} /></span>
                <b>{n.t}</b>
                <small>{n.d}</small>
              </div>
            ))}
          </div>
          <div className="dflow"><Icon name="arrow-down" /></div>
          <div className="dcore">One clinical AI core<small>Trained for UAE skin and climate</small></div>
          <div className="dflow"><Icon name="arrow-down" /></div>
          <div className="dbase"><Icon name="shield" />Licensed dermatologists approve every output</div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------- Product cards */
