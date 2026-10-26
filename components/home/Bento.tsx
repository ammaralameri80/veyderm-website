import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { HOME } from "@/lib/site";

function Heading({ parts }: { parts: string[] }) {
  const [lead, accent, tail] = parts;
  return (
    <h3 className="tile-h">
      {lead}
      {accent && <span className="accent">{accent}</span>}
      {tail}
    </h3>
  );
}

/** One platform, three products — as a bento of unequal tiles. */
export function Bento() {
  const { pro, sena, brands, proof } = HOME;
  const proofIcons: IconName[] = ["badge", "sun", "package"];
  return (
    <div className="bento">
      <Reveal className="tile tile-sena">
        <a href="/sena" className="tile-link" aria-label="Sena — your AI skin companion">
          <Image src="/images/portrait-studio-front.webp" alt="" fill sizes="(max-width: 900px) 92vw, 58vw" />
          <div className="tile-shade" />
          <div className="tile-over">
            <span className="tile-k">{sena.kicker}</span>
            <Heading parts={sena.h2} />
            <ul className="tile-points">
              {sena.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
          <div className="tile-bubble">
            <span className="ok"><Icon name="check" /></span>
            <span><b>Plan approved</b><small>Dr. Noor · licensed dermatologist</small></span>
          </div>
        </a>
      </Reveal>

      <Reveal className="tile tile-pro" delay={0.06}>
        <a href="/professional" className="tile-link">
          <span className="tile-ic"><Icon name="stethoscope" /></span>
          <span className="tile-k">{pro.kicker}</span>
          <Heading parts={pro.h2} />
          <ul className="tile-points">
            {pro.points.map((p) => <li key={p}>{p}</li>)}
          </ul>
          <span className="tile-more">Explore veyderm Pro <Icon name="arrow-up-right" /></span>
        </a>
      </Reveal>

      <Reveal className="tile tile-brands" delay={0.12}>
        <a href="/brands" className="tile-link">
          <span className="tile-ic"><Icon name="building" /></span>
          <span className="tile-k">{brands.kicker}</span>
          <Heading parts={brands.h2} />
          <ul className="tile-points">
            {brands.points.map((p) => <li key={p}>{p}</li>)}
          </ul>
          <span className="tile-more">For brands <Icon name="arrow-up-right" /></span>
        </a>
      </Reveal>

      {proof.map((p, i) => (
        <Reveal key={p} className={`tile tile-proof${i === 0 ? " tile-core" : ""}`} delay={0.18 + i * 0.06}>
          <div className="tile-link">
            <span className="tile-ic"><Icon name={proofIcons[i]} /></span>
            <b className="tile-proof-t">{p}</b>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
