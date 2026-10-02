// FAQ content — shared between the client accordion (components/Faq.tsx) and the
// server-rendered FAQPage JSON-LD (app/page.tsx). Kept in a plain (non-client)
// module so both the server and client can import it.
//
// Honest answers drawn from the site's own claims. Where a concrete fact isn't
// established yet, the answer carries a [REPLACE: ...] marker, which is stripped
// before rendering and before use in structured data.

export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What is Veyderm?",
    a: "Veyderm is an AI agent that helps licensed dermatologists in the UAE build evidence-based treatment plans, recommend verified products, and stay connected with patients on WhatsApp. The dermatologist reviews and approves every plan.",
  },
  {
    q: "Is this medical advice?",
    a: "No. Veyderm supports dermatologists — it doesn't replace them. The sample plans, products and evidence levels shown on this site are illustrative examples, not recommendations. Always consult a qualified healthcare professional.",
  },
  {
    q: "How are products verified?",
    a: "Every product comes from an authorized distributor or brand. We verify the distributor's authorization and the product's regulatory status before it appears in recommendations.",
  },
  {
    q: "Who decides the treatment plan?",
    a: "The dermatologist. The AI suggests evidence-ranked options and flags safety issues such as interactions or pregnancy cautions, but nothing reaches a patient until the doctor reviews and approves it — AI suggests, the doctor decides.",
  },
  {
    q: "How do patients use it on WhatsApp?",
    a: "Once a dermatologist approves a plan, it is delivered to the patient on WhatsApp with ingredients, usage and safety notes, follow-up reminders, and a 24/7 assistant for product and usage questions.",
  },
  {
    q: "Who can join?",
    a: "Veyderm is for licensed dermatologists and authorized dermocosmetic distributors in the UAE. We verify your medical license or distribution authorization before activating your account.",
  },
  {
    q: "How is my data handled?",
    a: "The early-access form collects only your name, email and role, used solely to contact you about access. We don't sell your data, and analytics load only if you accept the cookie banner. See our Privacy Policy for details.",
  },
];

// Strip [REPLACE: ...] markers so placeholder text never leaks into the rendered
// answer or the FAQPage structured data.
export function cleanAnswer(a: string): string {
  return a.replace(/\s*\[REPLACE:[^\]]*\]/g, "").trim();
}
