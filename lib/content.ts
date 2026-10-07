// Bilingual site content. The same components render both locales by reading
// the slice for the active `lang`. English is the source of truth; Arabic is a
// natural translation for a UAE medical audience.
//
// NATIVE-REVIEW: strings marked with a trailing `/* review */` comment contain
// medical or regulatory phrasing and should be checked by a native Arabic
// speaker before launch.

export type Lang = "en" | "ar";

// Feature flag: when false, Arabic is hidden everywhere (switcher, /ar routes,
// sitemap, hreflang) but all AR code/content/fonts stay in place. Flip to true
// to restore the Arabic version.
export const ENABLE_ARABIC = false;

// Solution names kept as single constants so they can be renamed in one place.
export const PRODUCT_PRO_NAME = "veyderm Professional";
export const PRODUCT_SENA_NAME = "Sena";

export const LANGS: Lang[] = ["en", "ar"];

export function isLang(v: string | undefined): v is Lang {
  return v === "en" || v === "ar";
}

/** Path helper: "/" for en, "/ar" for ar; nested paths get the /ar prefix. */
export function localizedPath(lang: Lang, path = "/"): string {
  const clean = path === "/" ? "" : path;
  return lang === "ar" ? `/ar${clean}` : clean || "/";
}

type Dict = {
  dir: "ltr" | "rtl";
  htmlLang: string;
  nav: { agent: string; journey: string; doctors: string; distributors: string; cta: string; switch: string; switchLabel: string };
  hero: {
    eyebrow: string; h1a: string; h1b: string; sub: string; cta: string; secondary: string;
    trust: string[];
  };
  mockup: {
    kicker: string; concern: string; sample: string;
    products: { name: string; evidence: string; level: "strong" | "moderate" }[];
    pass: string; warn: string; approve: string;
    chat: string; bubble: string; meta: string;
  };
  whatis: { h2: string; cols: { title: string; body: string }[] };
  metrics: { head: string; label: string }[];
  trust: { label: string; standards: string[] };
  problems: { tag: string; h2: string; lede: string; items: { title: string; body: string }[] };
  agent: {
    tag: string; h2: string; q: string;
    cards: { title: string; points: string[] }[];
    demo: { sample: string; patient: string; agent: string; evidence: string; pending: string; approved: string };
    cta: string;
  };
  how: { tag: string; h2: string; lede: string; steps: { num: string; title: string; body: string }[]; ui: { search: string; send: string; qty: string; quote: string; strong: string; moderate: string } };
  journey: { tag: string; h2: string; lede: string; steps: { title: string; tag?: string; body: string }[]; phoneName: string; online: string; messages: { in: boolean; text: string; time: string }[]; cap: string };
  doctors: {
    tag: string; h2: string; lede: string; reassureA: string; reassureEm: string; reassureP: string;
    cards: { title: string; body: string }[];
    controlT: string; control: { title: string; body: string }[];
    startT: string; steps: string[]; cta: string;
  };
  distributors: {
    tag: string; h2: string; lede: string;
    beforeT: string; before: string[]; afterT: string; after: string[];
    rfqBadge: string; rfqTime: string; rfqClinic: string; rfqItems: string[]; rfqSample: string; rfqAction: string;
    trendTitle: string; trendSub: string; trendUp: string; trendFoot: string;
    cards: { title: string; body: string }[];
    startT: string; steps: string[]; cta: string;
  };
  faqTitle: { tag: string; h2: string };
  faq: { q: string; a: string }[];
  cta: { tag: string; h2: string; p: string; roleDoctor: string; roleDistributor: string; formTitle: string; hint: string; name: string; namePh: string; email: string; emailPh: string; role: string; roleSelect: string; roles: string[]; submit: string; sending: string; privacy: string; okTitle: string; okP: string };
  footer: { links: { label: string; href: string }[]; contactT: string; whatsapp: string; rights: string; disclaimer: string };
  consent: { title: string; body: string; privacy: string; accept: string; decline: string };
  legalBack: string;
};

export const content: Record<Lang, Dict> = {
  en: {
    dir: "ltr",
    htmlLang: "en",
    nav: { agent: "AI Agent", journey: "Patient Journey", doctors: "For Doctors", distributors: "For Distributors", cta: "Request Early Access", switch: "عربي", switchLabel: "التبديل إلى العربية" },
    hero: {
      eyebrow: "AI-powered dermatology platform, built for the UAE",
      h1a: "AI dermatology,", h1b: "doctor-led.",
      sub: "veyderm is an AI agent that helps UAE dermatologists build evidence-based treatment plans, recommend verified products, and stay connected to patients on WhatsApp.",
      cta: "Request Early Access", secondary: "See how it works",
      trust: ["Doctor approves every plan", "Authorized products only", "WhatsApp-ready"],
    },
    mockup: {
      kicker: "Treatment plan", concern: "Melasma · Fitzpatrick III", sample: "Illustrative example",
      products: [
        { name: "Azelaic acid 20% cream", evidence: "Strong evidence", level: "strong" },
        { name: "Tranexamic acid serum", evidence: "Strong evidence", level: "strong" },
        { name: "Niacinamide 10% serum", evidence: "Moderate evidence", level: "moderate" },
      ],
      pass: "Safety check passed", warn: "Pregnancy: avoid retinoids", approve: "Approve & send",
      chat: "WhatsApp", bubble: "Your plan is ready — 3 products, with how and when to use each.", meta: "Delivered to patient · now",
    },
    whatis: {
      h2: "What is veyderm?",
      cols: [
        { title: "An AI agent for dermatologists", body: "It reads the evidence and drafts a treatment plan — the doctor reviews, edits, and approves every one." },
        { title: "Verified products only", body: "Recommendations come from authorized distributors — no fakes and no grey-market stock." },
        { title: "Patients followed up on WhatsApp", body: "Plans arrive where patients already are, with reminders and a 24/7 chat for questions." },
      ],
    },
    metrics: [
      { head: "Authorized products only", label: "from verified distributors and brands" },
      { head: "Doctor-approved plans", label: "nothing reaches a patient without the doctor's approval" },
      { head: "24/7 on WhatsApp", label: "patients get answers any time" },
    ],
    trust: { label: "Built around recognised standards", standards: ["EU Cosmetics Regulation 1223/2009", "EU Cosmetic Claims Regulation 655/2013", "ISO 22716 (Cosmetics GMP)", "UAE MOHAP labelling & registration"] },
    problems: {
      tag: "Problems to solve", h2: "The patient journey is broken at every handoff.", lede: "Patients, doctors, and distributors work in disconnected silos.",
      items: [
        { title: "Patients are left guessing", body: "Confusing advice, grey-market products, no one to ask." },
        { title: "Doctors decide without data", body: "Evidence scattered; no view of who follows the plan." },
        { title: "No follow-up, no adherence", body: "The consult ends and the relationship goes quiet." },
        { title: "Distributors fly blind", body: "No real demand signal from the ground." },
      ],
    },
    agent: {
      tag: "The veyderm AI Agent", h2: "One agent. Insight for every side.", q: "Reads the evidence, drafts the plan, answers patients.",
      cards: [
        { title: "For doctors", points: ["Evidence-ranked product picks", "Automatic safety & interaction checks"] },
        { title: "For distributors", points: ["Real demand signals", "Structured RFQs, not scattered chats"] },
        { title: "For patients", points: ["24/7 answers on WhatsApp", "Reminders & easy reordering"] },
      ],
      demo: { sample: "Illustrative example", patient: "My melasma is worse with the summer sun — what can I use?", agent: "For melasma, start with azelaic acid 20% plus daily SPF.", evidence: "Strong evidence", pending: "Awaiting doctor approval", approved: "Approved" },
      cta: "Request Early Access",
    },
    how: {
      tag: "How it works", h2: "AI-assisted, doctor-led — from search to delivery.", lede: "Find, plan, and deliver — in one system.",
      steps: [
        { num: "Step 01", title: "Search & discover", body: "Search the catalog by concern, condition, or ingredient." },
        { num: "Step 02", title: "Review evidence", body: "Evidence levels, contraindications, and INCI in one view." },
        { num: "Step 03", title: "Share the plan", body: "Send it to your patient on WhatsApp or email." },
        { num: "Step 04", title: "Procure & order", body: "Submit RFQs to distributors and convert to orders." },
      ],
      ui: { search: "melasma", send: "Send on WhatsApp", qty: "Qty", quote: "Request quote", strong: "Strong", moderate: "Moderate" },
    },
    journey: {
      tag: "The patient journey", h2: "A connected experience — from first question to lasting results.", lede: "One AI assistant, on the channel patients already use: WhatsApp.",
      steps: [
        { title: "Ask & discover", body: "Describe a concern, learn what's clinically recommended." },
        { title: "See the right doctor", body: "Matched to verified dermatologists and clinics nearby." },
        { title: "Receive the plan", tag: "WhatsApp", body: "The plan arrives with ingredients, usage, and safety." },
        { title: "Ask anything, anytime", tag: "24/7 chatbot", body: "Product and usage questions answered, day or night." },
        { title: "Follow up & reorder", body: "Reminders keep patients on track; reorder in a message." },
      ],
      phoneName: "veyderm", online: "online",
      messages: [
        { in: true, text: "Your treatment plan is ready — tap to view your 3 products.", time: "09:14" },
        { in: false, text: "Thanks! How often do I apply the azelaic acid?", time: "09:16" },
        { in: true, text: "Once daily at night. I'll remind you to reorder in 2 weeks.", time: "09:16" },
      ],
      cap: "Illustrative example",
    },
    doctors: {
      tag: "For dermatologists", h2: "Recommend with confidence. Every time.", lede: "You know your patients best. veyderm gives you the facts behind every product.",
      reassureA: "AI suggests.", reassureEm: "You decide.", reassureP: "Nothing reaches your patient without your approval.",
      cards: [
        { title: "Only authorized products", body: "From authorized distributors — no fakes, no grey market." },
        { title: "The proof, in plain words", body: "See how strong the evidence is, explained simply." },
        { title: "Safer for every patient", body: "Allergies, pregnancy, and clashes flagged automatically." },
      ],
      controlT: "The doctor stays in control",
      control: [
        { title: "AI suggests", body: "Evidence-ranked options and safety flags, drafted in seconds." },
        { title: "You review the evidence", body: "See how strong the evidence is, explained in plain words." },
        { title: "You approve", body: "Nothing reaches the patient until you say so." },
      ],
      startT: "Getting started is simple", steps: ["Request access — it takes a minute", "We verify your medical license", "Start recommending with confidence"], cta: "Join as a doctor",
    },
    distributors: {
      tag: "For distributors", h2: "Be in front of dermatologists at the moment they choose.", lede: "Your products where decisions happen — inside the dermatologist's workflow.",
      beforeT: "Today", before: ["Chasing clinics with calls and visits", "Orders lost in WhatsApp and email threads", "Guessing what patients actually need", "Undercut by grey-market sellers"],
      afterT: "With veyderm", after: ["Doctors find your products while planning treatment", "Clear requests and orders in one place", "Real demand insight from real patients", "Authorized-only platform that protects your brand"],
      rfqBadge: "New RFQ received", rfqTime: "2m ago", rfqClinic: "Sample Clinic", rfqItems: ["Azelaic acid 20% cream", "Broad-spectrum SPF 50"], rfqSample: "Illustrative example", rfqAction: "Send quote",
      trendTitle: "Demand trend", trendSub: "Azelaic acid · last 8 weeks", trendUp: "▲ trending", trendFoot: "Illustrative data",
      cards: [
        { title: "Reach the right buyers", body: "Visible to the dermatologists who recommend and buy." },
        { title: "Real requests, ready to close", body: "Structured quote requests from clinics — no back-and-forth." },
        { title: "Know what sells, and why", body: "Trending concerns, top products, and where demand grows." },
      ],
      startT: "Early partners get the advantage", steps: ["Apply as a distributor", "Share your product portfolio", "Start receiving clinic requests"], cta: "Become a partner",
    },
    faqTitle: { tag: "FAQ", h2: "Questions, answered plainly." },
    faq: [
      { q: "What is veyderm?", a: "veyderm is an AI agent that helps licensed dermatologists in the UAE build evidence-based treatment plans, recommend verified products, and stay connected with patients on WhatsApp. The dermatologist reviews and approves every plan." },
      { q: "Is this medical advice?", a: "No. veyderm supports dermatologists — it doesn't replace them. The sample plans, products and evidence levels shown on this site are illustrative examples, not recommendations. Always consult a qualified healthcare professional." },
      { q: "How are products verified?", a: "Every product comes from an authorized distributor or brand. We verify the distributor's authorization and the product's regulatory status before it appears in recommendations." },
      { q: "Who decides the treatment plan?", a: "The dermatologist. The AI suggests evidence-ranked options and flags safety issues such as interactions or pregnancy cautions, but nothing reaches a patient until the doctor reviews and approves it — AI suggests, the doctor decides." },
      { q: "How do patients use it on WhatsApp?", a: "Once a dermatologist approves a plan, it is delivered to the patient on WhatsApp with ingredients, usage and safety notes, follow-up reminders, and a 24/7 assistant for product and usage questions." },
      { q: "Who can join?", a: "veyderm is for licensed dermatologists and authorized dermocosmetic distributors in the UAE. We verify your medical license or distribution authorization before activating your account." },
      { q: "How is my data handled?", a: "The early-access form collects only your name, email and role, used solely to contact you about access. We don't sell your data, and analytics load only if you accept the cookie banner. See our Privacy Policy for details." },
    ],
    cta: {
      tag: "Get started", h2: "Join veyderm early — and grow with it.", p: "We're onboarding a limited number of dermatologists and distributors in the UAE.",
      roleDoctor: "I'm a doctor", roleDistributor: "I'm a distributor",
      formTitle: "Request early access", hint: "We'll reach out with your invitation when your region goes live.",
      name: "Full name", namePh: "Dr. Full Name", email: "Work email", emailPh: "you@clinic.com", role: "I am a…", roleSelect: "Select one",
      roles: ["Dermatologist", "Clinic / Hospital", "Authorized Distributor", "Patient", "Other"],
      submit: "Request Early Access", sending: "Sending…",
      privacy: "Your information is only used to contact you about veyderm access. We never share your data.",
      okTitle: "You're on the list.", okP: "We'll be in touch at the email you provided.",
    },
    footer: {
      links: [
        { label: "AI Agent", href: "#agent" }, { label: "Patient Journey", href: "#journey" },
        { label: "For Doctors", href: "#doctors" }, { label: "For Distributors", href: "#distributors" },
      ],
      contactT: "Get in touch", whatsapp: "WhatsApp: available soon",
      rights: "© 2026 veyderm. All rights reserved. Dubai, United Arab Emirates.",
      disclaimer: "veyderm is a digital platform connecting licensed healthcare professionals with authorized dermocosmetic distributors. Product information on this platform does not constitute medical advice. Always consult a qualified healthcare professional.",
    },
    consent: { title: "We use analytics cookies", body: "Only to understand how the site is used, and only if you agree. No ads, and we never sell your data. See our", privacy: "Privacy Policy", accept: "Accept", decline: "Decline" },
    legalBack: "← Back to home",
  },

  ar: {
    dir: "rtl",
    htmlLang: "ar",
    nav: { agent: "الوكيل الذكي", journey: "رحلة المريض", doctors: "للأطباء", distributors: "للموزّعين", cta: "اطلب وصولاً مبكراً", switch: "EN", switchLabel: "Switch to English" },
    hero: {
      eyebrow: "منصّة أمراض جلدية مدعومة بالذكاء الاصطناعي، مبنيّة لدولة الإمارات",
      h1a: "أمراض جلدية بالذكاء الاصطناعي،", h1b: "بقيادة الطبيب.",
      sub: "veyderm وكيل ذكاء اصطناعي يساعد أطباء الجلدية في الإمارات على بناء خطط علاجية قائمة على الأدلّة، والتوصية بمنتجات موثّقة، والبقاء على تواصل مع المرضى عبر واتساب.",
      cta: "اطلب وصولاً مبكراً", secondary: "شاهد كيف يعمل",
      trust: ["الطبيب يعتمد كل خطة", "منتجات مرخّصة فقط", "جاهز على واتساب"],
    },
    mockup: {
      kicker: "خطة علاجية", concern: "كلف · فيتزباتريك III", sample: "مثال توضيحي",
      products: [
        { name: "كريم حمض الأزيليك 20%", evidence: "دليل قوي", level: "strong" }, /* review */
        { name: "سيروم حمض الترانيكساميك", evidence: "دليل قوي", level: "strong" }, /* review */
        { name: "سيروم نياسيناميد 10%", evidence: "دليل متوسط", level: "moderate" }, /* review */
      ],
      pass: "اجتاز فحص السلامة", warn: "الحمل: تجنّب الريتينويد", approve: "اعتمد وأرسل", /* review */
      chat: "واتساب", bubble: "خطتك جاهزة — 3 منتجات، مع كيفية ووقت استخدام كلٍّ منها.", meta: "تم التسليم للمريض · الآن",
    },
    whatis: {
      h2: "ما هو veyderm؟",
      cols: [
        { title: "وكيل ذكاء اصطناعي للأطباء", body: "يقرأ الأدلّة ويصيغ خطة علاجية — ويراجعها الطبيب ويعدّلها ويعتمدها بالكامل." },
        { title: "منتجات موثّقة فقط", body: "التوصيات تأتي من موزّعين مرخّصين — لا منتجات مقلّدة ولا سوق موازٍ." },
        { title: "متابعة المرضى عبر واتساب", body: "تصل الخطط حيث المرضى أصلاً، مع تذكيرات ومحادثة على مدار الساعة للأسئلة." },
      ],
    },
    metrics: [
      { head: "منتجات مرخّصة فقط", label: "من موزّعين وعلامات تجارية موثّقة" },
      { head: "خطط باعتماد الطبيب", label: "لا شيء يصل إلى المريض دون اعتماد الطبيب" },
      { head: "على واتساب 24/7", label: "يحصل المرضى على إجابات في أي وقت" },
    ],
    trust: { label: "مبنيّ وفق معايير معترف بها", standards: ["لائحة الاتحاد الأوروبي لمستحضرات التجميل 1223/2009", "لائحة الاتحاد الأوروبي لادّعاءات التجميل 655/2013", "آيزو 22716 (ممارسات التصنيع الجيّدة)", "متطلّبات الوسم والتسجيل لدى وزارة الصحّة الإماراتية"] }, /* review */
    problems: {
      tag: "مشكلات بحاجة إلى حلّ", h2: "رحلة المريض تتعطّل عند كل نقطة تسليم.", lede: "المرضى والأطباء والموزّعون يعملون في جزرٍ منفصلة.",
      items: [
        { title: "المرضى في حيرة", body: "نصائح مربكة، ومنتجات من السوق الموازي، ولا أحد يسألونه." },
        { title: "الأطباء يقرّرون دون بيانات", body: "الأدلّة متناثرة؛ ولا رؤية لمن يلتزم بالخطة." },
        { title: "لا متابعة ولا التزام", body: "تنتهي الاستشارة وتنقطع العلاقة." },
        { title: "الموزّعون بلا رؤية", body: "لا إشارة حقيقية للطلب من الميدان." },
      ],
    },
    agent: {
      tag: "وكيل veyderm الذكي", h2: "وكيل واحد. رؤية لكل الأطراف.", q: "يقرأ الأدلّة، يصيغ الخطة، يجيب المرضى.",
      cards: [
        { title: "للأطباء", points: ["اختيارات منتجات مرتّبة حسب الأدلّة", "فحوص سلامة وتفاعلات تلقائية"] },
        { title: "للموزّعين", points: ["إشارات طلب حقيقية", "طلبات أسعار منظّمة، لا محادثات متناثرة"] },
        { title: "للمرضى", points: ["إجابات على واتساب 24/7", "تذكيرات وإعادة طلب سهلة"] },
      ],
      demo: { sample: "مثال توضيحي", patient: "الكلف لديّ يزداد مع شمس الصيف — ماذا أستخدم؟", agent: "للكلف، ابدأ بحمض الأزيليك 20% مع واقٍ شمسي يومي.", evidence: "دليل قوي", pending: "بانتظار اعتماد الطبيب", approved: "مُعتمد" }, /* review */
      cta: "اطلب وصولاً مبكراً",
    },
    how: {
      tag: "كيف يعمل", h2: "بمساعدة الذكاء الاصطناعي وبقيادة الطبيب — من البحث إلى التسليم.", lede: "ابحث، خطّط، وسلّم — في نظام واحد.",
      steps: [
        { num: "الخطوة 01", title: "ابحث واكتشف", body: "ابحث في الدليل حسب المشكلة أو الحالة أو المكوّن." },
        { num: "الخطوة 02", title: "راجع الأدلّة", body: "مستويات الأدلّة وموانع الاستعمال ومكوّنات INCI في عرضٍ واحد." },
        { num: "الخطوة 03", title: "شارك الخطة", body: "أرسلها إلى مريضك عبر واتساب أو البريد الإلكتروني." },
        { num: "الخطوة 04", title: "اطلب ووفّر", body: "أرسل طلبات الأسعار إلى الموزّعين وحوّلها إلى طلبات شراء." },
      ],
      ui: { search: "كلف", send: "أرسل على واتساب", qty: "الكمية", quote: "اطلب عرض سعر", strong: "قوي", moderate: "متوسط" },
    },
    journey: {
      tag: "رحلة المريض", h2: "تجربة متّصلة — من أول سؤال إلى نتائج دائمة.", lede: "مساعد ذكاء اصطناعي واحد، على القناة التي يستخدمها المرضى أصلاً: واتساب.",
      steps: [
        { title: "اسأل واكتشف", body: "صِف حالتك، واعرف ما يُوصى به سريرياً." },
        { title: "قابل الطبيب المناسب", body: "تطابُق مع أطباء جلدية وعيادات موثّقة قريبة منك." },
        { title: "استلم الخطة", tag: "واتساب", body: "تصل الخطة بالمكوّنات والاستعمال والسلامة." },
        { title: "اسأل أي شيء، في أي وقت", tag: "محادثة 24/7", body: "إجابات عن المنتجات والاستعمال ليلاً ونهاراً." },
        { title: "تابِع وأعد الطلب", body: "تذكيرات تُبقي المرضى على المسار؛ وإعادة الطلب برسالة." },
      ],
      phoneName: "veyderm", online: "متصل",
      messages: [
        { in: true, text: "خطتك العلاجية جاهزة — اضغط لعرض منتجاتك الثلاثة.", time: "09:14" },
        { in: false, text: "شكراً! كم مرة أضع حمض الأزيليك؟", time: "09:16" },
        { in: true, text: "مرة واحدة ليلاً. سأذكّرك بإعادة الطلب بعد أسبوعين.", time: "09:16" },
      ],
      cap: "مثال توضيحي",
    },
    doctors: {
      tag: "لأطباء الجلدية", h2: "أوصِ بثقة. في كل مرة.", lede: "أنت أدرى بمرضاك. يمنحك veyderm الحقائق خلف كل منتج.",
      reassureA: "الذكاء الاصطناعي يقترح.", reassureEm: "أنت تقرّر.", reassureP: "لا شيء يصل إلى مريضك دون اعتمادك.",
      cards: [
        { title: "منتجات مرخّصة فقط", body: "من موزّعين مرخّصين — لا تقليد ولا سوق موازٍ." },
        { title: "الدليل، بكلمات واضحة", body: "اطّلع على قوّة الدليل بشرحٍ مبسّط." },
        { title: "أأمن لكل مريض", body: "تنبيهات تلقائية للحساسية والحمل والتعارضات." }, /* review */
      ],
      controlT: "الطبيب يبقى مسيطراً",
      control: [
        { title: "الذكاء الاصطناعي يقترح", body: "خيارات مرتّبة حسب الأدلّة وتنبيهات سلامة، تُصاغ في ثوانٍ." },
        { title: "أنت تراجع الأدلّة", body: "اطّلع على قوّة الدليل بكلمات واضحة." },
        { title: "أنت تعتمد", body: "لا شيء يصل إلى المريض حتى توافق." },
      ],
      startT: "البدء بسيط", steps: ["اطلب الوصول — يستغرق دقيقة", "نتحقّق من ترخيصك الطبي", "ابدأ التوصية بثقة"], cta: "انضم كطبيب",
    },
    distributors: {
      tag: "للموزّعين", h2: "كن أمام أطباء الجلدية في لحظة اتخاذ القرار.", lede: "منتجاتك حيث تُتّخذ القرارات — داخل سير عمل طبيب الجلدية.",
      beforeT: "اليوم", before: ["ملاحقة العيادات بالاتصالات والزيارات", "طلبات ضائعة في واتساب والبريد", "تخمين ما يحتاجه المرضى فعلاً", "منافسة بائعي السوق الموازي"],
      afterT: "مع veyderm", after: ["الأطباء يجدون منتجاتك أثناء وضع الخطة", "طلبات واضحة في مكان واحد", "رؤية طلب حقيقية من مرضى حقيقيين", "منصّة للمرخّصين فقط تحمي علامتك"],
      rfqBadge: "طلب سعر جديد", rfqTime: "قبل دقيقتين", rfqClinic: "عيادة تجريبية", rfqItems: ["كريم حمض الأزيليك 20%", "واقٍ شمسي واسع الطيف SPF 50"], rfqSample: "مثال توضيحي", rfqAction: "أرسل عرض السعر",
      trendTitle: "اتجاه الطلب", trendSub: "حمض الأزيليك · آخر 8 أسابيع", trendUp: "▲ متصاعد", trendFoot: "بيانات توضيحية",
      cards: [
        { title: "صِل إلى المشترين المناسبين", body: "ظاهر لأطباء الجلدية الذين يوصون ويشترون." },
        { title: "طلبات حقيقية جاهزة للإغلاق", body: "طلبات أسعار منظّمة من العيادات — دون أخذٍ وردّ." },
        { title: "اعرف ما يُباع، ولماذا", body: "المشكلات الرائجة وأفضل المنتجات ومواضع نمو الطلب." },
      ],
      startT: "الشركاء المبكّرون يكسبون الأفضلية", steps: ["قدّم كموزّع", "شارك محفظة منتجاتك", "ابدأ باستقبال طلبات العيادات"], cta: "كن شريكاً",
    },
    faqTitle: { tag: "الأسئلة الشائعة", h2: "أسئلة بإجابات واضحة." },
    faq: [
      { q: "ما هو veyderm؟", a: "veyderm وكيل ذكاء اصطناعي يساعد أطباء الجلدية المرخّصين في الإمارات على بناء خطط علاجية قائمة على الأدلّة، والتوصية بمنتجات موثّقة، والبقاء على تواصل مع المرضى عبر واتساب. ويراجع الطبيب كل خطة ويعتمدها." },
      { q: "هل هذه استشارة طبية؟", a: "لا. يدعم veyderm أطباء الجلدية ولا يحلّ محلّهم. الخطط والمنتجات ومستويات الأدلّة المعروضة هنا أمثلة توضيحية لا توصيات. استشر دائماً مختصّاً صحّياً مؤهّلاً." }, /* review */
      { q: "كيف تُوثَّق المنتجات؟", a: "كل منتج يأتي من موزّع أو علامة تجارية مرخّصة. نتحقّق من ترخيص الموزّع ومن الوضع التنظيمي للمنتج قبل ظهوره في التوصيات." }, /* review */
      { q: "من يقرّر الخطة العلاجية؟", a: "طبيب الجلدية. يقترح الذكاء الاصطناعي خيارات مرتّبة حسب الأدلّة وينبّه إلى مسائل السلامة كالتفاعلات أو تحذيرات الحمل، لكن لا شيء يصل إلى المريض حتى يراجعه الطبيب ويعتمده — الذكاء الاصطناعي يقترح، والطبيب يقرّر." }, /* review */
      { q: "كيف يستخدمه المرضى على واتساب؟", a: "بعد اعتماد الطبيب للخطة، تُسلَّم إلى المريض على واتساب مع المكوّنات وملاحظات الاستعمال والسلامة وتذكيرات المتابعة ومساعد على مدار الساعة لأسئلة المنتجات والاستعمال." },
      { q: "من يمكنه الانضمام؟", a: "veyderm مخصّص لأطباء الجلدية المرخّصين وموزّعي مستحضرات التجميل الطبية المعتمدين في الإمارات. نتحقّق من ترخيصك الطبي أو من تفويض التوزيع قبل تفعيل حسابك." }, /* review */
      { q: "كيف تُعالَج بياناتي؟", a: "يجمع نموذج الوصول المبكر اسمك وبريدك ودورك فقط، لاستخدامها حصراً للتواصل معك بشأن الوصول. لا نبيع بياناتك، ولا تُحمَّل أدوات التحليل إلا إذا وافقت على شريط الكوكيز. راجع سياسة الخصوصية للتفاصيل." },
    ],
    cta: {
      tag: "ابدأ الآن", h2: "انضم إلى veyderm مبكراً — وانمُ معه.", p: "نستقبل عدداً محدوداً من أطباء الجلدية والموزّعين في الإمارات.",
      roleDoctor: "أنا طبيب", roleDistributor: "أنا موزّع",
      formTitle: "اطلب وصولاً مبكراً", hint: "سنتواصل معك بدعوتك عندما تنطلق منطقتك.",
      name: "الاسم الكامل", namePh: "د. الاسم الكامل", email: "البريد المهني", emailPh: "you@clinic.com", role: "أنا…", roleSelect: "اختر واحداً",
      roles: ["طبيب جلدية", "عيادة / مستشفى", "موزّع معتمد", "مريض", "أخرى"],
      submit: "اطلب وصولاً مبكراً", sending: "جارٍ الإرسال…",
      privacy: "تُستخدَم معلوماتك فقط للتواصل معك بشأن الوصول إلى veyderm. لا نشارك بياناتك إطلاقاً.",
      okTitle: "أنت على القائمة.", okP: "سنتواصل معك عبر البريد الذي زوّدتنا به.",
    },
    footer: {
      links: [
        { label: "الوكيل الذكي", href: "#agent" }, { label: "رحلة المريض", href: "#journey" },
        { label: "للأطباء", href: "#doctors" }, { label: "للموزّعين", href: "#distributors" },
      ],
      contactT: "تواصل معنا", whatsapp: "واتساب: قريباً",
      rights: "© 2026 veyderm. جميع الحقوق محفوظة. دبي، الإمارات العربية المتحدة.",
      disclaimer: "veyderm منصّة رقمية تربط المختصّين الصحّيين المرخّصين بموزّعي مستحضرات التجميل الطبية المعتمدين. المعلومات عن المنتجات على هذه المنصّة لا تُعدّ استشارة طبية. استشر دائماً مختصّاً صحّياً مؤهّلاً.", /* review */
    },
    consent: { title: "نستخدم كوكيز التحليلات", body: "فقط لفهم كيفية استخدام الموقع، وبموافقتك وحدها. لا إعلانات، ولا نبيع بياناتك أبداً. راجع", privacy: "سياسة الخصوصية", accept: "موافقة", decline: "رفض" },
    legalBack: "→ العودة إلى الرئيسية",
  },
};

// ---------------------------------------------------------------------------
// Multi-product site copy (English). Kept here so all copy lives in one file.
// The new /, /pro and /sena pages are English-only for now (Arabic is flagged
// off); the lang-keyed `content` dictionary above still powers the Arabic build.
// ---------------------------------------------------------------------------

export const homeContent = {
  nav: {
    platform: "Platform",
    professionals: "For Professionals",
    sena: PRODUCT_SENA_NAME,
    contact: "Contact",
    cta: "Explore veyderm",
  },
  hero: {
    eyebrow: "AI-powered dermatology",
    headline: "Intelligence for every skin decision.",
    sub: "veyderm brings AI-powered dermatology intelligence to professionals and patients.",
    pathPro: { label: "For Professionals", cta: `Explore ${PRODUCT_PRO_NAME}`, href: "/professional" },
    pathPat: { label: "For Patients", cta: `Meet ${PRODUCT_SENA_NAME}`, href: "/sena" },
  },
  platform: {
    tag: "The platform",
    h2: "One platform. Multiple dermatology experiences.",
    sub: "veyderm is the AI dermatology intelligence layer — powering a professional clinical system and a patient companion.",
    core: { name: "veyderm", sub: "AI dermatology intelligence" },
    nodes: [
      { name: PRODUCT_PRO_NAME, audience: "For professionals", desc: "Clinical intelligence for dermatologists, aesthetic doctors and clinics.", href: "/professional", cta: "Explore" },
      { name: PRODUCT_SENA_NAME, audience: "For patients", desc: "An AI dermatology companion that guides you and connects you to a doctor.", href: "/sena", cta: "Meet Sena" },
    ],
  },
  professional: {
    tag: PRODUCT_PRO_NAME,
    audience: "For dermatology professionals",
    h2: "Clinical intelligence, in the flow of care.",
    sub: "Assess cases, understand products and safety, and plan treatment — AI-assisted, clinician-led.",
    capabilities: [
      { t: "Assess", d: "AI-assisted case assessment" },
      { t: "Understand", d: "Product, ingredient & safety intelligence" },
      { t: "Decide", d: "Evidence-based decision support" },
      { t: "Build", d: "Personalized treatment plans" },
      { t: "Engage", d: "Patient communication & follow-up" },
    ],
    cta: `Explore ${PRODUCT_PRO_NAME}`,
    href: "/professional",
  },
  sena: {
    tag: PRODUCT_SENA_NAME,
    audience: "For patients",
    h2: "Meet Sena. Your AI dermatology companion.",
    sub: "Chat about your skin, share a photo, get AI-assisted guidance — and connect with a dermatologist when it matters.",
    chat: [
      { from: "user", text: "My skin has been getting more irritated recently." },
      { from: "sena", text: "Let's take a closer look — share a photo and I'll analyze it." },
    ],
    analysis: "Likely mild irritant reaction",
    rec: "Gentle barrier repair + SPF",
    book: "Book a dermatologist",
    cta: `Meet ${PRODUCT_SENA_NAME}`,
    href: "/sena",
  },
  ai: {
    tag: "The intelligence",
    h2: "AI across every step.",
    sub: "From a skin concern to considered care — intelligence connects it all.",
    flow: ["Skin", "Analysis", "Intelligence", "Recommendation", "Care"],
  },
  trust: {
    tag: "Trust & safety",
    h2: "AI-assisted. Clinician-centered. Safety-first.",
    points: [
      { t: "Evidence-informed", d: "Guidance grounded in clinical evidence." },
      { t: "Safety-aware", d: "Interactions and cautions flagged early." },
      { t: "Human in the loop", d: "A dermatologist decides — AI never replaces them." },
    ],
  },
  faqTitle: { tag: "FAQ", h2: "Quick answers." },
  faq: [
    { q: "What is veyderm?", a: `veyderm is an AI-powered dermatology intelligence platform. It powers ${PRODUCT_PRO_NAME} for clinicians and ${PRODUCT_SENA_NAME}, an AI companion for patients.` },
    { q: `What's the difference between ${PRODUCT_PRO_NAME} and ${PRODUCT_SENA_NAME}?`, a: `${PRODUCT_PRO_NAME} is the clinical intelligence system professionals use. ${PRODUCT_SENA_NAME} is the patient-facing assistant that guides you and connects you to a dermatologist.` },
    { q: "Does Sena diagnose my skin?", a: "No. Sena analyzes and suggests, then connects you with a licensed dermatologist who makes the clinical decision." },
    { q: "Is the AI a replacement for a doctor?", a: "No. veyderm is AI-assisted and clinician-centered — a dermatologist stays in the loop for decisions." },
    { q: "Who is veyderm for?", a: "Dermatologists, aesthetic doctors and clinics use veyderm Professional; patients use Sena for guidance and to reach a dermatologist." },
  ],
  finalCta: {
    tag: "Get started",
    h2: "The future of dermatology is intelligent.",
    sub: "Explore veyderm — join early as a professional, or get on the Sena waitlist.",
  },
};
