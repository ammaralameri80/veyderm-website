import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button, TextLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { DeviceFrame, ProScreen, BrandScreen } from "./Screens";
import { SenaChat } from "./SenaChat";
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

/* ---------------------------------------------------------- Platform */
export function Platform() {
  return (
    <Section id="products" tight>
      <SectionHeader kicker={HOME.platform.kicker} heading={HOME.platform.h2} sub={HOME.platform.sub} center />
    </Section>
  );
}

/* ---------------------------------------------------------- Feature row */
function FeatureRow({
  id,
  kicker,
  heading,
  body,
  points,
  media,
  reversed,
  children,
}: {
  id: string;
  kicker: string;
  heading: string[];
  body: string;
  points: string[];
  media: ReactNode;
  reversed?: boolean;
  children: ReactNode; // CTAs
}) {
  const [lead, accent, tail] = heading;
  return (
    <article className={`feature${reversed ? " rev" : ""}`} id={id}>
      <Reveal className="feature-media">{media}</Reveal>
      <Reveal className="feature-copy" delay={0.08}>
        <span className="kicker">{kicker}</span>
        <h2 className="heading">
          {lead}
          {accent && <span className="accent">{accent}</span>}
          {tail}
        </h2>
        <p className="feature-p">{body}</p>
        <ul className="points">
          {points.map((p) => (
            <li key={p}>
              <Icon name="check" />
              {p}
            </li>
          ))}
        </ul>
        <div className="feature-ctas">{children}</div>
      </Reveal>
    </article>
  );
}

export function Features() {
  const { pro, sena, brands } = HOME;
  return (
    <Section id="pro">
      <FeatureRow
        id="pro-feature"
        kicker={pro.kicker}
        heading={pro.h2}
        body={pro.body}
        points={pro.points}
        media={<DeviceFrame><ProScreen /></DeviceFrame>}
      >
        <Button href={pro.ctas.primary.href} role={pro.ctas.primary.role} cta="feature_pro" arrow>
          {pro.ctas.primary.label}
        </Button>
        <TextLink href={pro.ctas.secondary.href}>{pro.ctas.secondary.label}</TextLink>
      </FeatureRow>

      <div id="sena">
        <FeatureRow
          id="sena-feature"
          kicker={sena.kicker}
          heading={sena.h2}
          body={sena.body}
          points={sena.points}
          reversed
          media={
            <div>
              <SenaChat />
              <p className="demo-caption">{sena.caption}</p>
            </div>
          }
        >
          <Button href={sena.ctas.primary.href} role={sena.ctas.primary.role} cta="feature_sena" arrow>
            {sena.ctas.primary.label}
          </Button>
          <TextLink href={sena.ctas.secondary.href}>{sena.ctas.secondary.label}</TextLink>
        </FeatureRow>
      </div>

      <div id="brands">
        <FeatureRow
          id="brands-feature"
          kicker={brands.kicker}
          heading={brands.h2}
          body={brands.body}
          points={brands.points}
          media={<DeviceFrame><BrandScreen /></DeviceFrame>}
        >
          <Button href={brands.cta.href} role={brands.cta.role} cta="feature_brands" arrow>
            {brands.cta.label}
          </Button>
        </FeatureRow>
      </div>
    </Section>
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
    { ic: "stethoscope", t: "veyderm Pro", d: "Doctors" },
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
