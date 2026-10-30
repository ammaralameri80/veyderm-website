import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { HOME } from "@/lib/site";

/* ------------------------------------------------------------------ chapter
   One product per chapter: an identity row, an obsidian headline, a short
   paragraph and three points on the hero's measurement dots, beside an
   illustrative, code-built product screen floating on a soft violet halo. */

type ChapterProps = {
  id: string;
  product: string;
  audience: string;
  heading: string;
  body: string;
  points: string[];
  icons: IconName[];
  ctas: ReactNode;
  stage: ReactNode;
  reversed?: boolean;
};

function Chapter({ id, product, audience, heading, body, points, icons, ctas, stage, reversed }: ChapterProps) {
  return (
    <section id={id} className={`chapter${reversed ? " rev" : ""}`}>
      <div className="wrap ch-grid">
        <Reveal className="ch-copy">
          <p className="ch-id"><span className="ch-name">{product}</span><span className="ch-aud">{audience}</span></p>
          <h2>{heading}</h2>
          <p className="ch-body">{body}</p>
          <ul className="ch-points">
            {points.map((p, i) => (
              <li key={p}><span className="ch-pi" aria-hidden="true"><Icon name={icons[i]} /></span>{p}</li>
            ))}
          </ul>
          <div className="ch-ctas">{ctas}</div>
        </Reveal>
        <Reveal className="ch-media" delay={0.08}>
          <div className="ch-stage">{stage}</div>
        </Reveal>
      </div>
    </section>
  );
}

export function ProductChapters() {
  const { pro, sena, brands } = HOME;
  return (
    <div className="chapters">
      <Chapter
        id="pro"
        product={pro.product}
        audience={pro.audience}
        heading={pro.h2.join("")}
        body={pro.body}
        points={pro.points}
        icons={["search", "sparkles", "badge"]}
        stage={<ProPlanStage />}
        ctas={
          <>
            <Button href={pro.ctas.primary.href} role={pro.ctas.primary.role} cta="feature_pro" arrow>{pro.ctas.primary.label}</Button>
            <Button href={pro.ctas.secondary.href} variant="soft">{pro.ctas.secondary.label}</Button>
          </>
        }
      />
      <Chapter
        id="sena"
        reversed
        product={sena.product}
        audience={sena.audience}
        heading={sena.h2.join("")}
        body={sena.body}
        points={sena.points}
        icons={["message", "badge", "scan"]}
        stage={<SenaChatStage />}
        ctas={
          <>
            <Button href={sena.ctas.primary.href} role={sena.ctas.primary.role} cta="feature_sena" arrow>{sena.ctas.primary.label}</Button>
            <Button href={sena.ctas.secondary.href} variant="soft">{sena.ctas.secondary.label}</Button>
          </>
        }
      />
      <Chapter
        id="brands"
        product={brands.product}
        audience={brands.audience}
        heading={brands.h2.join("")}
        body={brands.body}
        points={brands.points}
        icons={["sparkles", "help", "shield"]}
        stage={<BrandInsightsStage />}
        ctas={
          <>
            <Button href={brands.cta.href} role={brands.cta.role} cta="feature_brands" arrow>{brands.cta.label}</Button>
            <Button href={brands.secondary.href} variant="soft">{brands.secondary.label}</Button>
          </>
        }
      />
    </div>
  );
}

/* Sena's avatar in the chat: a lit orb with a spark at its heart */
function SenaOrb() {
  return (
    <>
      <circle cx="12" cy="12" r="9.6" fill="#b7ace4" fillOpacity="0.22" />
      <circle cx="12" cy="12" r="7.6" fill="#dcd6f1" />
      <circle cx="9.6" cy="9.2" r="3.8" fill="#fff" fillOpacity="0.7" />
      <path d="M12 6.9c.52 2.58 1.92 3.98 4.5 4.5-2.58.52-3.98 1.92-4.5 4.5-.52-2.58-1.92-3.98-4.5-4.5 2.58-.52 3.98-1.92 4.5-4.5Z" fill="#463f88" />
    </>
  );
}

/* a hero-style annotation: a measurement point with a slim label */
function Tag({ children, className }: { children: ReactNode; className: string }) {
  return <span className={`ch-tag ${className}`} aria-hidden="true"><span className="aitag-pt" />{children}</span>;
}

/* ---------------------------------------------------------- veyderm Clinical
   As simple as the product: the doctor describes the case and their
   prescription in one AI search form, and gets the full treatment plan back —
   prescribed items marked, ready to review and approve. Fictional patient. */

const AM = [
  { n: "Gentle cleanser", d: "Cleanse" },
  { n: "Niacinamide 5% serum", d: "Even tone" },
  { n: "Tinted mineral SPF 50+", d: "Daily photoprotection", rx: true },
];
const PM = [
  { n: "Gentle cleanser", d: "Cleanse" },
  { n: "Azelaic acid 20%", d: "Treat · 12 weeks", rx: true },
  { n: "Barrier repair cream", d: "Soothe" },
];

function PlanColumn({ label, icon, rows }: { label: string; icon: "sun" | "moon"; rows: typeof AM }) {
  return (
    <div className="px-col">
      <p className="px-tl"><Icon name={icon} />{label}</p>
      <ul>
        {rows.map((r) => (
          <li key={r.n}>
            <span className="px-prod" />
            <span className="px-pn"><b>{r.n}</b><small>{r.d}</small></span>
            {r.rx && <span className="px-rx">Prescribed</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProPlanStage() {
  return (
    <>
      <div className="scr ps px" role="img" aria-label="veyderm Clinical: the doctor describes a patient with epidermal melasma, skin type IV, and their prescription of azelaic acid 20% at night in an AI search form; veyderm returns a 12-week morning and evening treatment plan built around the prescription, matched to authorized UAE products and ready to approve.">
        <div className="ps-bar" aria-hidden="true">
          <span className="ps-dots"><i /><i /><i /></span>
          <span className="ps-app"><span className="ps-mark">v</span>veyderm Clinical</span>
          <span className="ps-crumb">New treatment plan</span>
        </div>
        <div className="px-body" aria-hidden="true">
          <div className="px-form">
            <p className="px-label">Describe the case and your prescription</p>
            <div className="px-field">
              <Icon name="sparkles" />
              <span className="px-q">Epidermal melasma, skin type IV. Azelaic acid 20% at night, daily sun protection.<i /></span>
              <span className="px-go">Generate plan</span>
            </div>
            <div className="px-chips"><span>Lana H., 29</span><span>Skin type IV</span><span>Melasma, epidermal</span></div>
          </div>
          <div className="px-result">
            <div className="px-rh">
              <b>Suggested treatment plan</b>
              <small>12 weeks · built around your prescription</small>
            </div>
            <div className="px-cols">
              <PlanColumn label="Morning" icon="sun" rows={AM} />
              <PlanColumn label="Evening" icon="moon" rows={PM} />
            </div>
          </div>
        </div>
        <div className="ps-foot" aria-hidden="true">
          <span className="ps-match"><Icon name="circle-check" />Matched to authorized UAE products</span>
          <span className="ps-btns">
            <span className="ps-btn ghost">Edit plan</span>
            <span className="ps-btn dark">Approve &amp; send</span>
          </span>
        </div>
      </div>
      <Tag className="t-pro-1">AI treatment search</Tag>
    </>
  );
}

/* ---------------------------------------------------------- Sena
   Sena's own chat: the patient describes her concern and shares a photo, Sena
   maps what it sees on the photo itself, and the care plan comes back
   approved by a licensed dermatologist — the same plan the doctor approved in
   veyderm Clinical. Photo: licensed Adobe Stock (AdobeStock_1895086210). */

function SenaChatStage() {
  return (
    <div className="scr sc" role="img" aria-label="A chat with Sena, the AI skincare assistant: the patient describes dark patches on her cheeks that get worse in summer and shares a daylight photo of her cheek; Sena marks the uneven pigmentation on the photo, summarises its findings, sends a care plan to a licensed dermatologist, and the approved morning and evening plan arrives in the chat.">
      <div className="sc-top" aria-hidden="true">
        <span className="sc-av"><svg viewBox="0 0 24 24" fill="none"><SenaOrb /></svg></span>
        <span className="sc-name"><b>Sena</b><small><i />AI skincare assistant</small></span>
        <span className="sc-badge"><Icon name="shield" />Dermatologist-reviewed</span>
      </div>
      <div className="sc-chat" aria-hidden="true">
        <span className="sc-day">Today</span>
        <p className="sc-msg ai">Hello, I’m Sena, your AI skincare assistant. Tell me what’s bothering your skin, and I’ll help you find the right care.</p>
        <p className="sc-msg me">I’ve noticed dark patches on my cheeks. They get worse every summer.</p>
        <p className="sc-msg ai">Thank you for sharing. Could you send a photo taken in daylight, without makeup? It helps me see the pattern clearly.</p>
        <div className="sc-photo">
          <Image src="/images/sena-skin.webp" alt="" fill sizes="(max-width: 600px) 60vw, 260px" />
          <span className="sc-pt sc-pt-1"><span className="aitag-pt" /></span>
          <span className="sc-pt sc-pt-2"><span className="aitag-pt" /></span>
          <span className="sc-mapped"><Icon name="scan-face" />Pigmentation mapped</span>
        </div>
        <div className="sc-analysis">
          <p className="sc-k"><Icon name="sparkles" />Skin analysis</p>
          <div className="sc-finds"><span>Uneven pigmentation</span><span>Both cheeks</span><span>Worse in summer</span></div>
          <p>I’ve prepared a care plan and sent it to a licensed dermatologist for review.</p>
        </div>
        <div className="sc-plan">
          <div className="sc-plan-h">
            <b>Your care plan</b>
            <small><Icon name="circle-check" />Approved by a licensed dermatologist</small>
          </div>
          <p><Icon name="sun" /><span><b>Morning</b>Gentle cleanser, niacinamide serum, tinted SPF 50+</span></p>
          <p><Icon name="moon" /><span><b>Evening</b>Gentle cleanser, azelaic acid 20%, barrier cream</span></p>
          <div className="sc-acts"><span>View my products</span><span>Ask a question</span></div>
        </div>
      </div>
      <div className="sc-input" aria-hidden="true">
        <span className="sc-cam"><Icon name="camera" /></span>
        <span className="sc-field">Ask Sena anything</span>
        <span className="sc-send"><Icon name="arrow-up-right" /></span>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------- brands
   What a brand learns from the dermatologists who use its product: an AI
   summary, relative prescribing interest by concern (no invented figures),
   the questions dermatologists ask, and the themes in their feedback. */

const INTEREST = [
  { c: "Melasma", w: "92%" },
  { c: "Post-acne marks", w: "64%" },
  { c: "Sensitive skin", w: "38%" },
];
const QUESTIONS = ["Is it suitable during pregnancy?", "Can it be paired with a retinoid?", "Is there a lighter texture?"];
const THEMES = ["Well tolerated with daily SPF", "Requested patient samples", "Asked for a lighter texture"];

function BrandInsightsStage() {
  return (
    <>
      <div className="scr bi" role="img" aria-label="veyderm for brands: insights from verified dermatologists about an azelaic acid serum — an AI summary, which concerns dermatologists prescribe it for, the questions they ask, and the themes in their feedback.">
        <div className="ps-bar" aria-hidden="true">
          <span className="ps-dots"><i /><i /><i /></span>
          <span className="ps-app"><span className="ps-mark">v</span>veyderm for brands</span>
          <span className="ps-crumb">Insights</span>
        </div>
        <div className="bi-body" aria-hidden="true">
          <div className="bi-head">
            <span><b>Insights from dermatologists</b><small>Azelaic serum 20% · Last 90 days</small></span>
            <span className="bi-verified"><Icon name="badge" />Verified dermatologists only</span>
          </div>
          <div className="bi-summary">
            <span className="bi-spark"><Icon name="sparkles" /></span>
            <p><b>AI summary</b>Dermatologists see your serum as a first-line choice for melasma. Most of their questions are about use during pregnancy.</p>
          </div>
          <div className="bi-grid">
            <div className="bi-card">
              <p className="bi-k">Prescribing interest by concern</p>
              <ul className="bi-bars">
                {INTEREST.map((i) => (
                  <li key={i.c}><span>{i.c}</span><i style={{ "--w": i.w } as CSSProperties} /></li>
                ))}
              </ul>
              <small className="bi-rel">Relative to each other</small>
            </div>
            <div className="bi-card">
              <p className="bi-k">What dermatologists are asking</p>
              <ul className="bi-qs">
                {QUESTIONS.map((q) => (
                  <li key={q}><Icon name="help" /><span>{q}</span><em>Answer</em></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bi-themes">
            <p className="bi-k">Feedback themes</p>
            <div>{THEMES.map((t) => <span key={t}>{t}</span>)}</div>
          </div>
        </div>
      </div>
      <Tag className="t-brand-1">From verified dermatologists</Tag>
    </>
  );
}
