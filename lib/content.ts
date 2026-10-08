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
      tag: "Early access", h2: "Get early access to veyderm.", p: "Tell us who you are and we'll reach out personally when your access is ready.",
      roleDoctor: "I'm a dermatologist", roleDistributor: "I'm a patient",
      formTitle: "Request access", hint: "We'll reach out with your invitation when your access is ready.",
      name: "Full name", namePh: "Dr. Full Name", email: "Work email", emailPh: "you@clinic.com", role: "I am a…", roleSelect: "Select one",
      roles: ["Dermatologist / Clinic", "Skincare brand / Distributor", "Patient (Sena waitlist)"],
      submit: "Request access", sending: "Sending…",
      privacy: "Your information is only used to contact you about veyderm access. We never share your data.",
      okTitle: "You're in.", okP: "We'll be in touch personally.",
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


// Home content (English). Light clinical-AI direction.
//
// Owned brand vocabulary is kept in `TERMS` so a name can be renamed in one
// place — SkinPrint especially, which is pending a trademark check. Content
// strings interpolate these rather than spelling the terms out, and never use
// the generic equivalents.
export const TERMS = {
  skinprint: "SkinPrint",
  tailoredPlan: "Tailored Plan",
  evidenceMatch: "Evidence Match",
  safeCheck: "SafeCheck",
  doctorSigned: "Doctor-Signed",
  verifiedShelf: "Verified Shelf",
} as const;
const T = TERMS;

export const PLATFORM_TAGLINE = "The intelligence layer for dermatology.";

export const homeContent = {
  nav: {
    links: [
      { label: "veyderm Pro", href: "/professional" },
      { label: "Sena", href: "/sena" },
      { label: "For brands", href: "/#brands" },
    ],
    cta: "Request access",
  },
  hero: {
    pill: "The first of its kind in the UAE",
    h1: "One AI platform for dermatology.",
    sub: "veyderm connects dermatologists, patients and skincare brands through one clinical AI. Doctors get a portal that drafts evidence-based plans. Patients get Sena, an AI agent that listens and guides. Brands see how their products perform in real care.",
    primary: { label: "Request access", role: "Dermatologist / Clinic", href: "#access" },
    secondary: { label: "Meet Sena", href: "#sena" },
  },
  // Scripted, illustrative Sena conversation used by the hero and /sena.
  chat: {
    title: "Sena",
    status: "AI skin agent",
    caption: "Illustrative conversation",
    user1: "I've had dark patches on my cheeks since the summer. What should I use?",
    sena1: "I can help with that. Could you share a photo in natural daylight, without makeup?",
    attachment: "cheek-photo.jpg",
    thinking: "Analysing your photo",
    checks: [
      "Skin type: combination, type IV",
      "Pattern consistent with melasma",
      "Climate: UV index 11, Dubai",
    ],
    disclaimer: "AI-assisted observation, not a diagnosis.",
    sena2: "Here's a draft routine. I've sent it to a dermatologist to review before you start.",
    plan: {
      title: "Draft routine",
      rows: [
        { time: "AM", n: "Broad-spectrum SPF 50", ev: "Strong evidence" },
        { time: "AM", n: "Niacinamide 10%", ev: "Moderate evidence" },
        { time: "PM", n: "Azelaic acid 20%", ev: "Strong evidence" },
      ],
      pending: "Waiting for dermatologist review",
      approved: "Approved by Dr. Sara M., dermatologist",
    },
    input: "Ask Sena anything about your skin",
    replay: "Replay conversation",
  },
  proSection: {
    name: "veyderm Pro",
    h2: "The clinical portal for dermatologists.",
    p: "Every patient arrives with a plan already drafted: ranked by clinical evidence, checked for safety, built for UAE skin and climate. You review, adjust and sign. Nothing reaches a patient without you.",
    facts: [
      { t: "Drafted before the consultation", d: "Intake, photos and history become a draft plan while the patient is still in the waiting room." },
      { t: "Ranked by evidence, not ad spend", d: "Products are ordered by the strength of clinical evidence for this patient's concern." },
      { t: "Safety checked, then signed by you", d: "Pregnancy, allergy and interaction risks are flagged first. Your signature releases the plan." },
    ],
    cta: "Request clinician access",
    role: "Dermatologist / Clinic",
    link: { label: "See veyderm Pro in detail", href: "/professional" },
  },
  senaSection: {
    name: "Sena",
    h2: "An AI agent that looks after the patient.",
    p: "Sena is the first AI skin agent built for the UAE. It listens, suggests the right products, finds a dermatologist nearby, and answers questions any hour, online or in the clinic.",
    abilities: [
      { k: "listen", t: "Listens", d: "Describe what's bothering you, share a photo, and Sena understands your skin and your climate." },
      { k: "suggest", t: "Suggests products", d: "A routine ranked by evidence and checked by a dermatologist, from authorized UAE distributors." },
      { k: "find", t: "Finds a dermatologist", d: "Matched to verified clinics near you, with booking in the chat." },
      { k: "answer", t: "Answers, online and in clinic", d: "In the app, on WhatsApp, or on a clinic's screen between visits." },
    ],
    cta: "Join the Sena waitlist",
    role: "Patient (Sena waitlist)",
    link: { label: "More about Sena", href: "/sena" },
  },
  brandsSection: {
    name: "For skincare brands",
    h2: "See how your products perform in real care.",
    p: "When dermatologists prescribe through veyderm, brands get anonymised, aggregated insight: where a product ranks for each concern, how often it's prescribed, and how patients keep up with it.",
    cta: "Become a brand partner",
    role: "Skincare brand / Distributor",
    dash: {
      title: "Brand insights",
      product: "Azelaic serum 20%",
      period: "Last 90 days",
      kpis: [
        { k: "Prescriptions", v: "1,284", d: "+18%" },
        { k: "Rank for melasma", v: "#1", d: "of 14" },
        { k: "Patient adherence", v: "82%", d: "+6 pts" },
      ],
      series: [18, 22, 21, 27, 31, 29, 36, 40, 38, 47, 52, 58],
      months: ["Jul", "Aug", "Sep"],
      byConcern: [["Melasma", 92], ["Post-acne marks", 71], ["Rosacea", 38]] as [string, number][],
      note: "Illustrative data. Always anonymised and aggregated.",
    },
  },
  guard: {
    h2: "AI prepares. Dermatologists decide.",
    p: "AI makes care faster. People stay accountable for it.",
    items: [
      { t: "Doctor-signed", d: "No plan reaches a patient until a licensed dermatologist approves it." },
      { t: "Private by default", d: "Data is encrypted, consent-led and never sold." },
      { t: "Authorized products only", d: "Everything comes from verified UAE distributors." },
      { t: "Guidance, not diagnosis", d: "Sena explains what it sees and refers you to a dermatologist." },
    ],
  },
  how: {
    h2: "From one skin to one plan.",
    p: `Every ${T.tailoredPlan} begins with a ${T.skinprint} and ends with a dermatologist's signature.`,
    steps: [
      { t: "Capture", d: "Concerns, photos and history, gathered in minutes before the visit." },
      { t: T.skinprint, d: "AI maps the skin's type, concerns and climate into one unique profile." },
      { t: "Evidence ranking", d: "Authorized products ranked by clinical evidence, never by ad spend." },
      { t: T.doctorSigned, d: "The dermatologist reviews, adjusts and signs. Nothing reaches a patient before that." },
      { t: "Follow-through", d: "Sena guides the patient between visits and tracks how the plan is going." },
    ],
  },
  pro: {
    kicker: "veyderm Pro, the clinical portal",
    h2: "Prescribe with precision. In minutes, not hours.",
    p: `Your expertise, amplified by AI. Every ${T.tailoredPlan} stays yours to sign.`,
    console: {
      url: "app.veyderm.com",
      nav: ["Today", "Patients", T.tailoredPlan + "s", "Product catalog", "Orders & RFQs"],
      patient: "Lana H. · Melasma",
      patientTag: "Fitzpatrick III",
      sample: "Illustrative example",
      assessment: {
        t: T.skinprint,
        rows: [["Pigmentation", 78], ["Barrier", 54], ["Sensitivity", 32]] as [string, number][],
      },
      plan: {
        t: T.tailoredPlan,
        badge: T.skinprint,
        items: [
          { time: "AM", n: "Broad-spectrum SPF 50", ev: "Strong", lvl: "s" as const },
          { time: "PM", n: "Azelaic acid 20%", ev: "Strong", lvl: "s" as const },
          { time: "PM", n: "Niacinamide 10%", ev: "Moderate", lvl: "m" as const },
        ],
      },
      safePass: `${T.safeCheck} passed`,
      safeWarn: "Pregnancy: avoid retinoids",
      approve: "Approve & sign",
      floats: [
        { t: T.evidenceMatch, k: "ev" as const },
        { t: T.safeCheck, k: "safe" as const },
        { t: T.doctorSigned, k: "ai" as const },
      ],
    },
    bento: {
      plan: { t: "A plan drafted before you open the file", d: "Every plan starts from the patient's SkinPrint. You adjust and sign it." },
      evidence: { t: "Ranked by evidence", d: "Ingredients ordered by clinical strength, not marketing claims.", rows: [["Azelaic acid", 92], ["Niacinamide", 74], ["Tranexamic acid", 61]] as [string, number][] },
      safe: { t: "Safety flags, automatically", d: "Interactions, pregnancy and sensitivity checked before you sign.", flags: ["Pregnancy: avoid retinoids", "No interactions found"] },
      shelf: { t: "Order in one click", d: "Authorized products from verified UAE distributors." },
      follow: { t: "See what happens next", d: "Adherence and progress tracked between visits." },
    },
    cta: "Request access",
    role: "Dermatologist / Clinic",
    photo: { note: "A licensed dermatologist reviews, adjusts and signs every Tailored Plan." },
  },
  brands: {
    kicker: "For skincare brands & distributors",
    h2: "Where great formulas meet the right skin.",
    p: "Put your clinical-grade products in front of dermatologists, matched to patients who need them.",
    benefits: [
      { t: "Clinical visibility", d: "Recommended on evidence, not ad spend." },
      { t: "Dermatologist network", d: "Reach verified UAE clinics directly." },
      { t: "Market insight", d: "Anonymised, aggregated trends on what's prescribed." },
      { t: T.verifiedShelf, d: "Authorized distribution, no grey market." },
    ],
    cta: "Become a brand partner",
    role: "Skincare brand / Distributor",
    shelf: { label: "The Verified Shelf", note: "Authorized products from verified UAE distributors." },
    // Evidence Match mini-visual (right column).
    match: {
      skinprint: `${T.skinprint} · Combination III`,
      goal: "Goal: Even tone",
      product: "Your serum",
      productNote: "Azelaic + niacinamide",
      label: T.evidenceMatch,
      rank: "Top match",
      ev: "Strong evidence",
    },
  },
  sena: {
    kicker: "Sena, the UAE's first AI skin agent",
    h2: "Meet Sena. Your skin, finally understood.",
    sub: "Chat, share a photo or video, and get guidance made for your skin.",
    reassure: "Sena suggests. Your dermatologist decides.",
    points: [
      "Ask anything",
      "Share a photo or video",
      `Get your ${T.skinprint}`,
      "See your options",
      "Book a dermatologist",
    ],
    cta: "Join the Sena waitlist",
    role: "Patient (Sena waitlist)",
    sample: "Illustrative example",
    chat: {
      user: "I've noticed dark spots and some irritation.",
      photo: "Photo shared",
      sena1: "Thanks — let's take a closer look.",
      skinprint: `Your ${T.skinprint} is ready`,
      skinprintSub: "Combination · III · High UV",
      analysisCap: "AI-assisted observations",
      analysisTitle: "Uneven tone, mild irritation",
      obs: ["Uneven tone", "Mild irritation", "Barrier looks stressed"],
      note: "Sena suggests. Your dermatologist decides.",
      recs: [
        { n: "Gentle barrier cream", tag: "Soothing" },
        { n: "Broad-spectrum SPF 50", tag: "Daily" },
      ],
      book: { t: "Book a dermatologist", s: "3 verified clinics near you", b: "Find" },
    },
  },
  safety: {
    badge: "Human in the loop",
    a: "AI prepares.",
    b: "Dermatologists decide.",
    pro: { k: "In the clinic", p: `Every ${T.tailoredPlan} is reviewed, adjusted and signed by a licensed dermatologist.` },
    sena: { k: "With Sena", p: "Sena suggests and guides. Your dermatologist makes the clinical call." },
  },
  trust: {
    h2: "AI prepares. Dermatologists decide.",
    points: [
      { t: T.doctorSigned, d: "No plan reaches a patient unapproved.", ic: "check" },
      { t: "Private by default", d: "Your data, encrypted and consent-led.", ic: "lock" },
      { t: T.verifiedShelf, d: "Authorized products, verified distributors.", ic: "box" },
      { t: "Built in the UAE", d: "For UAE skin, climate and regulation.", ic: "pin" },
    ],
  },
  final: {
    h2: "Be among the first to prescribe the future.",
    cards: [
      { tag: "For dermatologists", label: "Dermatologist / Clinic", cta: "Request early access", role: "Dermatologist / Clinic", tone: "clin" },
      { tag: "For brands", label: "Skincare brand", cta: "Become a partner", role: "Skincare brand / Distributor", tone: "sage" },
      { tag: "For patients", label: "Patient · Sena", cta: "Join the waitlist", role: "Patient (Sena waitlist)", tone: "lav" },
    ],
  },
  footer: {
    line: `veyderm · ${PLATFORM_TAGLINE} · Dubai, UAE.`,
    disclaimer: "Sena provides AI guidance, not a medical diagnosis.",
  },
};

export const proFaq = [
  { q: "What is veyderm Professional?", a: `A clinical system that turns each patient into a ${TERMS.skinprint} and a ${TERMS.tailoredPlan} you review, adjust and sign.` },
  { q: "Does the AI make the decision?", a: `No. AI prepares the ${TERMS.tailoredPlan}; the dermatologist reviews, adjusts and signs it. Every plan is ${TERMS.doctorSigned}.` },
  { q: "How are products chosen?", a: `${TERMS.evidenceMatch} ranks authorized products from the ${TERMS.verifiedShelf} by clinical evidence — not by ad spend.` },
  { q: "What is SafeCheck?", a: `${TERMS.safeCheck} flags interactions, pregnancy cautions and sensitivities automatically, before you sign the plan.` },
  { q: "How do I get access?", a: "Request clinician access below. We verify your medical license before activating your account." },
];

export const senaFaq = [
  { q: "What is Sena?", a: `Sena is an AI skin assistant. Chat, share a photo, and get your ${TERMS.skinprint} with guidance made for your skin.` },
  { q: "Can Sena replace a doctor?", a: "No. Sena suggests and guides; a licensed dermatologist makes every clinical decision and signs every plan." },
  { q: "What is a SkinPrint?", a: `Your ${TERMS.skinprint} is an AI profile of your skin — from your concerns, photos, skin type and the UAE climate.` },
  { q: "Is my data private?", a: "Yes. Your information is encrypted, consent-led and used only to help with your skin — never sold." },
  { q: "When can I use it?", a: "Sena is launching soon. Join the waitlist to be among the first to try it." },
];
