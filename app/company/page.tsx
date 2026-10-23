import type { Metadata } from "next";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { PageHero } from "@/components/ui/PageParts";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { COMPANY_PAGE } from "@/lib/site";

const title = "Company — building the AI infrastructure for dermatology";
const description = "veyderm is building the AI infrastructure for dermatology, starting in the UAE: veyderm Pro for clinicians, Sena for patients, and an intelligence layer for skincare brands. A licensed dermatologist approves every output.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/company" },
  openGraph: { title, description, url: "/company" },
  twitter: { title, description },
};

export default function CompanyPage() {
  const { body, diagram, contact } = COMPANY_PAGE;
  return (
    <>
      <Nav />
      <main>
        <PageHero
          kicker={COMPANY_PAGE.kicker}
          heading={COMPANY_PAGE.h1}
          sub={COMPANY_PAGE.sub}
          print
        />
        <Section tight>
          <div className="company">
            <Reveal className="company-copy" >
              <div style={{ maxWidth: "46ch" }}>
                {body.map((p) => (
                  <p key={p} style={{ color: "var(--ink-soft)", fontSize: "1.1rem", marginBottom: 18 }}>{p}</p>
                ))}
                <p style={{ marginTop: 24, fontWeight: 600 }}>
                  {contact.label}{" "}
                  <a href={`mailto:${contact.email}`} className="tlink">{contact.email}</a>
                </p>
              </div>
            </Reveal>
            <Reveal className="diagram" delay={0.08}>
              <div className="diagram-row">
                {diagram.nodes.map((n) => (
                  <div className="dnode" key={n.t}>
                    <span className="d-ic"><Icon name={n.ic as IconName} /></span>
                    <b>{n.t}</b>
                    <small>{n.d}</small>
                  </div>
                ))}
              </div>
              <div className="dflow"><Icon name="arrow-down" /></div>
              <div className="dcore">{diagram.core}<small>Trained for UAE skin and climate</small></div>
              <div className="dflow"><Icon name="arrow-down" /></div>
              <div className="dbase"><Icon name="shield" />{diagram.base}</div>
            </Reveal>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
