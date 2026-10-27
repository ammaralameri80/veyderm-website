import type { CSSProperties, ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { HOME } from "@/lib/site";

type Product = (typeof HOME.platform.products)[number];

/** The three products as an asymmetric showcase: veyderm Pro leads as the large
 *  tile, Sena and the brand platform stack beside it. Each tile is one link and
 *  carries a small code-built glimpse of the product, illustrative only. */
export function ProductShowcase() {
  const [pro, sena, brands] = HOME.platform.products;
  return (
    <div className="pb-grid">
      <Reveal className="pb-cell pb-cell-pro">
        <Tile p={pro}><ProGlimpse /></Tile>
      </Reveal>
      <Reveal className="pb-cell" delay={0.08}>
        <Tile p={sena}><SenaGlimpse /></Tile>
      </Reveal>
      <Reveal className="pb-cell" delay={0.16}>
        <Tile p={brands}><BrandGlimpse /></Tile>
      </Reveal>
    </div>
  );
}

function Tile({ p, children }: { p: Product; children: ReactNode }) {
  return (
    <a className={`pb-tile pb-${p.tone}`} href={p.href}>
      <div className="pb-copy">
        <div className="pb-id">
          <span className={`np-ic np-${p.tone}`}><Icon name={p.ic as IconName} aria-hidden="true" /></span>
          <span><b>{p.product}</b><small>{p.audience}</small></span>
        </div>
        <h3>{p.h}</h3>
        <p>{p.body}</p>
        <span className="pb-more">{p.more}<Icon name="arrow-up-right" aria-hidden="true" /></span>
      </div>
      <div className="pb-glimpse" aria-hidden="true">{children}</div>
    </a>
  );
}

const bar = (w: string) => <span className="g-bar" style={{ "--w": w } as CSSProperties} />;

/* an AI-drafted plan waiting for the dermatologist's signature */
function ProGlimpse() {
  return (
    <div className="g-stack">
      <span className="g-tag"><span className="aitag-pt" />Matched to authorized products</span>
      <div className="g-card">
        <div className="g-head">
          <span className="g-ic"><Icon name="scan-face" /></span>
          <b>Treatment plan</b>
          <span className="g-pill">AI draft</span>
        </div>
        <ul className="g-rows">
          <li><i />{bar("82%")}</li>
          <li><i />{bar("64%")}</li>
          <li><i />{bar("74%")}</li>
        </ul>
        <div className="g-foot">
          <small>Ready for your review</small>
          <span className="g-btn">Review &amp; sign</span>
        </div>
      </div>
    </div>
  );
}

/* a patient's photo in, a dermatologist-approved plan back */
function SenaGlimpse() {
  return (
    <div className="g-chat">
      <span className="g-bub g-me"><Icon name="camera" />Photo shared</span>
      <span className="g-bub g-sena"><span className="g-av">S</span>Here’s what I see — and a plan your dermatologist approved.</span>
      <span className="g-chip"><Icon name="badge" />Dermatologist-approved</span>
    </div>
  );
}

/* a medical update delivered to verified dermatologists */
function BrandGlimpse() {
  return (
    <div className="g-card">
      <div className="g-head">
        <span className="g-ic"><Icon name="book" /></span>
        <b>Medical update</b>
        <span className="g-pill">Delivered</span>
      </div>
      <div className="g-lines">{bar("92%")}{bar("68%")}</div>
      <div className="g-foot">
        <span className="g-avs"><i>LH</i><i>AM</i><i>RK</i></span>
        <small>Verified dermatologists</small>
      </div>
    </div>
  );
}
