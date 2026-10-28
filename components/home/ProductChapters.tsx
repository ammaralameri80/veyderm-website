import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ProductMark, SenaOrb, type ProductKind } from "@/components/ui/ProductMark";
import { HOME } from "@/lib/site";

/* ------------------------------------------------------------------ chapter
   One product per chapter: an identity row, an obsidian headline, a short
   paragraph and three points on the hero's measurement dots, beside a plum
   stage that an illustrative, code-built product screen rises out of. */

type ChapterProps = {
  id: string;
  product: string;
  audience: string;
  mark: ProductKind;
  heading: string;
  body: string;
  points: string[];
  ctas: ReactNode;
  stage: ReactNode;
  caption?: string;
  reversed?: boolean;
};

function Chapter({ id, product, audience, mark, heading, body, points, ctas, stage, caption, reversed }: ChapterProps) {
  return (
    <section id={id} className={`chapter${reversed ? " rev" : ""}`}>
      <div className="wrap ch-grid">
        <Reveal className="ch-copy">
          <div className="ch-id">
            <ProductMark kind={mark} />
            <span><b>{product}</b><small>{audience}</small></span>
          </div>
          <h2>{heading}</h2>
          <p className="ch-body">{body}</p>
          <ul className="ch-points">
            {points.map((p) => (
              <li key={p}><span className="ch-pt" aria-hidden="true" />{p}</li>
            ))}
          </ul>
          <div className="ch-ctas">{ctas}</div>
        </Reveal>
        <Reveal className="ch-media" delay={0.08}>
          <div className="ch-stage">
            <span className="ch-illus">Illustrative</span>
            {stage}
          </div>
          {caption && <p className="ch-caption">{caption}</p>}
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
        mark={pro.mark}
        heading={pro.h2.join("")}
        body={pro.body}
        points={pro.points}
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
        mark={sena.mark}
        heading={sena.h2.join("")}
        body={sena.body}
        points={sena.points}
        caption={sena.caption}
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
        mark={brands.mark}
        heading={brands.h2.join("")}
        body={brands.body}
        points={brands.points}
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

/* a hero-style annotation: a measurement point with a slim label */
function Tag({ children, className }: { children: ReactNode; className: string }) {
  return <span className={`ch-tag ${className}`} aria-hidden="true"><span className="aitag-pt" />{children}</span>;
}

/* ---------------------------------------------------------- veyderm Pro
   The doctor's prescription on the left; the AI-suggested plan built around
   it on the right — prescribed items marked, AI additions marked, matched to
   authorized products, waiting for the doctor's approval. Fictional patient. */

const AM = [
  { n: "Gentle cleanser", d: "Cleanse", by: "ai" },
  { n: "Niacinamide 5% serum", d: "Even tone", by: "ai" },
  { n: "Tinted mineral SPF 50+", d: "Daily photoprotection", by: "rx" },
];
const PM = [
  { n: "Gentle cleanser", d: "Cleanse", by: "ai" },
  { n: "Azelaic acid 20%", d: "Treat · 12 weeks", by: "rx" },
  { n: "Barrier repair cream", d: "Soothe", by: "ai" },
];

function PlanRows({ rows }: { rows: typeof AM }) {
  return (
    <ul className="ps-rows">
      {rows.map((r) => (
        <li key={r.n}>
          <span className={`ps-prod ps-prod-${r.by}`} />
          <span className="ps-pn"><b>{r.n}</b><small>{r.d}</small></span>
          {r.by === "rx" ? <span className="ps-badge rx">Prescribed</span> : <span className="ps-badge ai"><Icon name="sparkles" />AI</span>}
        </li>
      ))}
    </ul>
  );
}

function ProPlanStage() {
  return (
    <>
      <div className="scr ps" role="img" aria-label="veyderm Pro: a dermatologist's prescription for melasma — azelaic acid 20% at night and daily tinted sun protection — and the AI-suggested morning and evening plan built around it, matched to authorized UAE products and awaiting the doctor's approval. Illustrative.">
        <div className="ps-bar" aria-hidden="true">
          <span className="ps-dots"><i /><i /><i /></span>
          <span className="ps-app"><span className="ps-mark">v</span>veyderm Pro</span>
          <span className="ps-crumb">Treatment plan</span>
        </div>
        <div className="ps-head" aria-hidden="true">
          <span className="ps-av">LH</span>
          <span className="ps-who"><b>Lana H., 29</b><small>Melasma · Skin type IV</small></span>
          <span className="ps-status"><i />Awaiting your approval</span>
        </div>
        <div className="ps-body" aria-hidden="true">
          <section className="ps-rx">
            <p className="ps-k"><Icon name="pen" />Your prescription</p>
            <div className="ps-dx">
              <small>Diagnosis</small>
              <b>Melasma, epidermal</b>
              <span className="ps-sev">Moderate</span>
            </div>
            <ul className="ps-rx-list">
              <li><b>Azelaic acid 20%</b><small>Evenings · 12 weeks</small></li>
              <li><b>Daily photoprotection</b><small>Broad-spectrum, tinted</small></li>
            </ul>
            <p className="ps-note">Avoid irritants. Review in 12 weeks.</p>
          </section>
          <div className="ps-link"><span><Icon name="sparkles" /></span></div>
          <section className="ps-plan">
            <p className="ps-k"><Icon name="sparkles" />AI-suggested plan<span className="ps-draft">Draft</span></p>
            <div className="ps-time">
              <p className="ps-tl"><Icon name="sun" />Morning</p>
              <PlanRows rows={AM} />
            </div>
            <div className="ps-time">
              <p className="ps-tl"><Icon name="moon" />Evening</p>
              <PlanRows rows={PM} />
            </div>
          </section>
        </div>
        <div className="ps-foot" aria-hidden="true">
          <span className="ps-match"><Icon name="package" />Matched to authorized UAE products</span>
          <span className="ps-btns">
            <span className="ps-btn ghost">Edit plan</span>
            <span className="ps-btn dark">Approve &amp; send</span>
          </span>
        </div>
      </div>
      <Tag className="t-pro-1">Built around your prescription</Tag>
    </>
  );
}

/* ---------------------------------------------------------- Sena
   Sena's own chat: the patient describes her concern and shares a photo, Sena
   explains what it sees, and the plan comes back approved by a licensed
   dermatologist — the same plan the doctor approved in veyderm Pro. */

function SenaChatStage() {
  return (
    <>
      <div className="scr sc" role="img" aria-label="A chat with Sena, the AI skincare assistant: the patient describes dark patches on her cheeks that get worse in summer and shares a daylight photo; Sena explains what it sees, sends a care plan to a licensed dermatologist, and the approved morning and evening plan arrives in the chat. Illustrative.">
        <div className="sc-top" aria-hidden="true">
          <span className="sc-av"><svg viewBox="0 0 24 24" fill="none"><SenaOrb /></svg></span>
          <span className="sc-name"><b>Sena</b><small><i />AI skincare assistant</small></span>
          <span className="sc-badge"><Icon name="shield" />Dermatologist-reviewed</span>
        </div>
        <div className="sc-chat" aria-hidden="true">
          <p className="sc-msg ai">Hello, I’m Sena, your AI skincare assistant. Tell me what’s bothering your skin, and I’ll help you find the right care.</p>
          <p className="sc-msg me">I’ve noticed dark patches on my cheeks. They get worse every summer.</p>
          <p className="sc-msg ai">Thank you for sharing. Could you send a photo taken in daylight, without makeup? It helps me see the pattern clearly.</p>
          <div className="sc-msg me sc-photo">
            <span className="sc-img"><Image src="/images/sena-selfie.webp" alt="" fill sizes="200px" /></span>
          </div>
          <p className="sc-msg ai">I can see uneven pigmentation across both cheeks. I’ve prepared a care plan and sent it to a licensed dermatologist for review.</p>
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
          <span className="sc-field"><Icon name="plus" />Ask Sena anything</span>
          <span className="sc-send"><Icon name="mic" /></span>
        </div>
      </div>
      <Tag className="t-sena-1">Photo-based AI analysis</Tag>
    </>
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
      <div className="scr bi" role="img" aria-label="veyderm for brands: insights from verified dermatologists about an azelaic acid serum — an AI summary, which concerns dermatologists prescribe it for, the questions they ask, and the themes in their feedback. Illustrative.">
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
