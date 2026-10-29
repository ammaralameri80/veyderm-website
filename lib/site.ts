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
  /** one link per audience, each jumping to its section of the landing page;
   *  Company and contact live in the footer, Request access is the one action */
  links: [
    { label: "For dermatologists", href: "/#pro", desc: "veyderm Pro — AI search and AI-drafted treatment plans." },
    { label: "For patients", href: "/#sena", desc: "Sena — your personal AI skin and beauty advisor." },
    { label: "For brands", href: "/#brands", desc: "Partner Portal — AI insight into how dermatology prescribes." },
  ],
  cta: { label: "Request access", href: "/#access" },
} as const;

export const FOOTER = {
  tagline: "The intelligence layer for dermatology, built in the UAE.",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/veyderm/", brand: "linkedin" as const },
    { label: "Instagram", href: "https://instagram.com/veyderm", brand: "instagram" as const },
  ],
  address: ["Media One Tower, Level 38", "Dubai Media City", "Dubai – United Arab Emirates"],
  email: "info@veyderm.com",
  rights: "© 2026 veyderm. Dubai, United Arab Emirates.",
};

/* ------------------------------------------------------------------ Home */

export const HOME = {
  hero: {
    kicker: "AI dermatology platform · Built in the UAE",
    // a non-breaking space keeps "connected by" together on its line
    h1: "Dermatology, connected\u00a0by intelligence.",
    sub: "AI that supports every step of dermatology — from case assessment and product intelligence to treatment planning and patient care, with the dermatologist always in control.",
    primary: { label: "Request access", href: "#access", role: ROLES.derm },
    secondary: { label: "Meet Sena", href: "/sena" },
  },
  proof: [
    "Dermatologist approval built in",
    "Verified product data",
  ],
  pro: {
    product: "veyderm Pro",
    audience: "For dermatologists and clinics",
    ic: "stethoscope",
    kicker: "veyderm Pro",
    h2: ["Your expertise, ", "amplified by AI."],
    body: "veyderm’s AI searches every product, ingredient and concern for you, then drafts a complete treatment plan around your case — ready for you to review, adjust and send to your patient in minutes.",
    points: ["AI search by product, ingredient or concern", "AI-drafted plans built around each case", "You approve every plan before it’s shared"],
    ctas: {
      primary: { label: "Request clinician access", href: "#access", role: ROLES.derm },
      secondary: { label: "Explore veyderm Pro", href: "/professional" },
    },
  },
  sena: {
    product: "Sena",
    audience: "Personal AI skin and beauty advisor",
    ic: "message",
    kicker: "Sena",
    h2: ["AI skin advice, ", "in your pocket."],
    body: "Sena is an AI agent that understands your skin concerns in a natural conversation, knows the plan your dermatologist approved, and guides you every day on WhatsApp — from the clinic to the pharmacy to your routine at home.",
    points: ["AI that understands your skin concerns", "Advice drawn only from your dermatologist’s approved plan", "Scans products in store to check they fit your plan"],
    ctas: {
      primary: { label: "Join the Sena waitlist", href: "#access", role: ROLES.patient },
      secondary: { label: "Meet Sena", href: "/sena" },
    },
  },
  brands: {
    product: "Partner Portal",
    audience: "For skincare and pharma brands",
    ic: "building",
    kicker: "Partner Portal",
    h2: ["AI insight into how ", "dermatology prescribes."],
    body: "veyderm’s AI turns anonymised treatment plans into real-world insight — which concerns your products are prescribed for, what dermatologists are asking, and where demand is growing. A compliant channel to earn your place on the plan with evidence.",
    points: ["AI summaries of prescribing trends", "Demand signals and questions from dermatologists", "Brand-neutral ranking — never paid placement"],
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
