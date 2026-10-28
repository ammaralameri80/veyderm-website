/**
 * Site copy — authored verbatim from the brand brief, English only.
 * Brand names keep their casing (veyderm, veyderm Pro, Sena). The three role
 * values MUST match the API's VALID_ROLES and the CtaForm select.
 */

export const ROLES = {
  derm: "Dermatologist / Clinic",
  brand: "Skincare brand / Distributor",
  patient: "Patient (Sena waitlist)",
} as const;

export const NAV = {
  /** shown in the Platform menu (desktop) and the mobile sheet */
  products: [
    { label: "veyderm Pro", href: "/professional", ic: "stethoscope", tone: "pro", desc: "AI-drafted treatment plans you review and sign." },
    { label: "Sena", href: "/sena", ic: "message", tone: "sena", desc: "An AI skin companion for patients, on WhatsApp." },
    { label: "For brands", href: "/brands", ic: "building", tone: "brand", desc: "Reach and inform dermatologists across the UAE." },
  ],
  note: "The same clinical AI powers every product. A licensed dermatologist approves every output.",
  links: [
    { label: "Company", href: "/company" },
    { label: "Contact", href: "mailto:info@veyderm.com" },
  ],
  cta: { label: "Request access", href: "/#access" },
} as const;

export const FOOTER = {
  email: "info@veyderm.com",
  tagline: "The intelligence layer for dermatology, built in the UAE.",
  social: [
    { label: "Instagram", href: "https://instagram.com/veyderm", brand: "instagram" as const },
    { label: "LinkedIn", href: "https://linkedin.com/company/veyderm", brand: "linkedin" as const },
  ],
  groups: [
    {
      title: "Platform",
      links: [
        { label: "veyderm Pro", href: "/professional" },
        { label: "Sena", href: "/sena" },
        { label: "For brands", href: "/brands" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About veyderm", href: "/company" },
        { label: "info@veyderm.com", href: "mailto:info@veyderm.com" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ],
    },
  ],
  disclaimers: [
    "Sena provides guidance, not a medical diagnosis.",
    "veyderm connects licensed dermatologists with authorized UAE distributors. Information shown is not medical advice.",
  ],
  rights: "© 2026 veyderm. Dubai, United Arab Emirates.",
};

/* ------------------------------------------------------------------ Home */

export const HOME = {
  hero: {
    kicker: "Clinical AI for dermatology in the UAE",
    h1: "Dermatology, made intelligent.",
    sub: "AI that reads skin with a specialist’s eye — and a licensed dermatologist who approves every recommendation. For clinics, patients and skincare brands across the UAE.",
    primary: { label: "Request access", href: "#access", role: ROLES.derm },
    secondary: { label: "Meet Sena", href: "/sena" },
  },
  proof: [
    "Dermatologist review built in",
    "Authorized UAE product data",
  ],
  pro: {
    product: "veyderm Pro",
    audience: "For dermatologists and clinics",
    ic: "stethoscope",
    tone: "pro",
    kicker: "veyderm Pro",
    h2: ["Built for ", "dermatologists."],
    body: "Prescribe the way you always do. veyderm’s AI builds the complete treatment plan around it — the routine, the timing and the right authorized products — ready for you to review, adjust and approve.",
    points: ["Plans built around your prescription", "Matched to authorized UAE products", "Approve, then message your patient securely"],
    ctas: {
      primary: { label: "Request clinician access", href: "#access", role: ROLES.derm },
      secondary: { label: "Explore veyderm Pro", href: "/professional" },
    },
  },
  sena: {
    product: "Sena",
    audience: "For patients, on WhatsApp and in store",
    ic: "message",
    tone: "sena",
    kicker: "Sena",
    h2: ["Your AI skin ", "companion."],
    body: "Patients chat with Sena on WhatsApp, describe what’s bothering their skin and share a photo. Sena prepares a plan, a licensed dermatologist approves it, and it arrives right in the chat.",
    points: ["Describe concerns in plain language", "Photo-based AI skin analysis", "Plans approved by a licensed dermatologist"],
    caption: "Illustrative demo. Sena provides guidance, not a medical diagnosis.",
    ctas: {
      primary: { label: "Join the Sena waitlist", href: "#access", role: ROLES.patient },
      secondary: { label: "Meet Sena", href: "/sena" },
    },
  },
  brands: {
    product: "For skincare brands",
    audience: "For brands and distributors",
    ic: "building",
    tone: "brand",
    kicker: "For skincare brands",
    h2: ["Reach every ", "dermatologist", " in the UAE."],
    body: "See how dermatologists use and talk about your products — what they prescribe them for, what they ask, and where interest is growing — then respond with the latest medical information.",
    points: ["Insights from verified dermatologists", "Answer their questions with medical updates", "Qualified leads and proposals"],
    cta: { label: "Become a brand partner", href: "#access", role: ROLES.brand },
    secondary: { label: "Explore for brands", href: "/brands" },
  },
  trust: {
    kicker: "Where AI meets human",
    h2: ["Where AI meets ", "human."],
    sub: "AI prepares. Licensed dermatologists decide.",
    pillars: [
      { ic: "shield", t: "Dermatologist-approved", d: "No plan reaches a patient until a licensed dermatologist approves it." },
      { ic: "lock", t: "Private by default", d: "Your data is encrypted, consent-led, and never sold." },
      { ic: "check", t: "Authorized products only", d: "Every product comes from verified UAE distributors." },
      { ic: "info", t: "Guidance, not diagnosis", d: "Sena explains what it sees and refers you to a dermatologist." },
    ],
  },
  company: {
    kicker: "What we're building",
    h2: ["What we're ", "building."],
    body: "veyderm is the AI infrastructure for dermatology, starting in the UAE: veyderm Pro for clinicians, Sena for patients, and an intelligence layer for skincare brands.",
    link: { label: "About veyderm", href: "/company" },
  },
};

/* --------------------------------------------------------- Sub-pages */

export const PRO_PAGE = {
  kicker: "veyderm Pro",
  h1: ["The professional platform for ", "dermatologists."],
  sub: "AI prepares every consultation. You stay in control.",
  features: [
    { t: "Treatment plans, drafted by AI", d: "Prescribe the way you always do. AI builds the complete plan around it — routine, timing and products — for you to review, adjust and sign." },
    { t: "The right products, every time", d: "veyderm matches authorized products to each patient's skin, history, and plan — sourced from verified UAE distributors." },
    { t: "Patient communication, built in", d: "Send the approved plan straight to your patient's Sena, answer follow-ups securely, and track progress between visits." },
    { t: "Made for the UAE", d: "Built in the UAE, around locally authorized products and the dermatologists who prescribe them." },
  ],
  cta: { label: "Request clinician access", href: "/#access", role: ROLES.derm },
};

export const SENA_PAGE = {
  kicker: "Sena",
  h1: ["Meet ", "Sena."],
  sub: "The AI agent that looks after your skin — approved by licensed dermatologists.",
  features: [
    { t: "Wherever you are", d: "Talk to Sena on WhatsApp or in partner stores. Ask anything about your skin, any time." },
    { t: "Send a photo, get clarity", d: "Sena analyzes your photo, explains what it sees, and recommends the right products and routine." },
    { t: "A plan your doctor stands behind", d: "Treatment plans are reviewed and approved by a licensed dermatologist before they reach you." },
  ],
  disclaimer: "Sena provides guidance, not a medical diagnosis.",
  cta: { label: "Join the Sena waitlist", href: "/#access", role: ROLES.patient },
};

export const BRANDS_PAGE = {
  kicker: "For skincare brands",
  h1: ["Grow with the dermatologists who ", "prescribe."],
  sub: "veyderm connects your brand to UAE dermatologists — from medical education to the order.",
  features: [
    { t: "Share the science", d: "Deliver your latest medical information and product updates directly to verified dermatologists." },
    { t: "Qualified leads", d: "Reach the clinicians already treating the conditions your products serve, and share proposals where they work." },
    { t: "A smarter rep experience", d: "Give your medical reps one place to plan visits, present evidence, and follow up." },
    { t: "Effortless ordering", d: "Clinics order your authorized products through verified UAE distributors in a few taps." },
  ],
  cta: { label: "Become a brand partner", href: "/#access", role: ROLES.brand },
};

export const COMPANY_PAGE = {
  kicker: "Company",
  h1: ["Where AI meets ", "human."],
  sub: "We're building the AI infrastructure for dermatology, starting in the UAE.",
  body: [
    "veyderm is an AI platform for dermatology, built in the UAE. One clinical AI prepares every recommendation, from the first question a patient asks to the plan a dermatologist signs.",
    "Three products share that core: veyderm Pro, the professional platform for dermatologists; Sena, the AI skin companion for patients; and an intelligence layer for skincare brands.",
    "The principle behind all of it is simple. AI prepares; a licensed dermatologist reviews and approves every output before it reaches a patient.",
  ],
  diagram: {
    nodes: [
      { ic: "stethoscope", t: "veyderm Pro", d: "Doctors" },
      { ic: "message", t: "Sena", d: "Patients" },
      { ic: "building", t: "Brand platform", d: "Industry" },
    ],
    core: "One clinical AI core",
    base: "Licensed dermatologists approve every output",
  },
  contact: { label: "Partnerships and investor enquiries:", email: "info@veyderm.com" },
};
