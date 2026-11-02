import { FAQ } from "@/lib/site";

/* Homepage FAQ. Native <details> so every answer is in the DOM (crawlable and
   AI-extractable) with no client JS. Mirrors the FAQPage JSON-LD in page.tsx. */
export function Faq() {
  return (
    <section id="faq" className="section section--mist">
      <div className="wrap">
        <div className="sec-head center">
          <span className="kicker">Questions</span>
          <h2 className="heading">Frequently asked questions.</h2>
        </div>
        <dl className="faq">
          {FAQ.map(({ q, a }) => (
            <details key={q} className="faq-item">
              <summary>
                <dt>{q}</dt>
                <span className="faq-mark" aria-hidden="true" />
              </summary>
              <dd>{a}</dd>
            </details>
          ))}
        </dl>
      </div>
    </section>
  );
}
