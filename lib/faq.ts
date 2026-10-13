// FAQ content. Single source for the FAQ page and its structured data (JSON-LD).
//
// Rule (CLAUDE.md §10, §13): never invent policies. An entry with `answer: null` is a
// question we know customers will ask but Kai hasn't answered yet. It is NOT shown on
// the site until he does. Answers marked TODO are drafts based on facts Kai gave us.

export type FaqLink = { label: string; href: string };

export type FaqItem = {
  question: string;
  answer: string | null; // null = waiting for Kai, hidden from the page
  link?: FaqLink;
};

export type FaqCategory = {
  id: string; // anchor, e.g. /faq#shipping
  title: string;
  items: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    id: "pieces",
    title: "The pieces",
    items: [
      {
        question: "Are your pieces really handmade?",
        answer:
          "Yes. Every piece is made by hand in our family workshop in Beit Sahour, near Bethlehem, founded by Jacob Qumsiyeh in 1980.",
        link: { label: "Read our story", href: "/our-story" },
      },
      {
        question: "What are they made of?",
        answer:
          "Mother-of-pearl, abalone shell and olive wood. Many pieces bring them together, like our olive wood crosses with abalone inlay.",
      },
      {
        question: "Is every piece one of a kind?",
        // TODO: Kai to confirm wording
        answer:
          "Many are. Because each piece is cut and inlaid by hand, and no two shells or pieces of wood are the same, no two pieces are exactly alike.",
      },
      {
        question: "What is inside the small windows on the reliquary crosses?",
        answer: null, // TODO: Kai, what do the windows hold?
      },
      {
        question: "Can I order a custom piece?",
        answer: null, // TODO: Kai, do you take custom orders or engravings?
      },
    ],
  },
  {
    id: "orders",
    title: "Orders & payment",
    items: [
      {
        question: "How do I pay?",
        answer:
          "Checkout is handled securely by Stripe, a trusted payment provider. Your card details go straight to Stripe; we never see or store them.",
      },
      {
        question: "Which currency are prices in?",
        answer: null, // TODO: Kai, USD only, or other currencies too?
      },
    ],
  },
  {
    id: "shipping",
    title: "Shipping",
    items: [
      { question: "Where do you ship?", answer: null }, // TODO: Kai, which countries?
      { question: "How long does delivery take?", answer: null }, // TODO: Kai
      { question: "How much does shipping cost?", answer: null }, // TODO: Kai
      { question: "Will I get a tracking number?", answer: null }, // TODO: Kai
      { question: "Will I have to pay customs or import fees?", answer: null }, // TODO: Kai
    ],
  },
  {
    id: "returns",
    title: "Returns",
    items: [
      { question: "Can I return a piece?", answer: null }, // TODO: Kai, returns window and conditions
      { question: "What if my piece arrives damaged?", answer: null }, // TODO: Kai
    ],
  },
  {
    id: "digital",
    title: "Digital products",
    items: [
      {
        question: "How do I receive a digital product?",
        // TODO: Kai to confirm once checkout (tracker #6) and accounts (#7) are built
        answer:
          "Right after your payment, we email you a secure, personal download link. Your downloads will also be waiting in your account.",
      },
      { question: "Can I get a refund on a digital product?", answer: null }, // TODO: Kai
    ],
  },
  {
    id: "care",
    title: "Caring for your piece",
    items: [
      {
        question: "How do I look after mother-of-pearl and olive wood?",
        // TODO: Kai to confirm or add the workshop's own care advice
        answer:
          "Keep your piece dry and out of long, direct sunlight. Dust it gently with a soft, dry cloth, and keep perfume, cleaning sprays and water away from the mother-of-pearl.",
      },
    ],
  },
  {
    id: "workshop",
    title: "The workshop",
    items: [
      {
        question: "Who makes the pieces?",
        answer:
          "Our family. Farah Qumsiyeh and his son Jacob carry on the workshop that Farah's father, Jacob Qumsiyeh, founded in 1980.",
        link: { label: "Meet the family", href: "/our-story" },
      },
      {
        question: "Where is the workshop?",
        answer: "On Eweena Street in Beit Sahour, Palestine, just east of Bethlehem.",
      },
      { question: "Can I visit the workshop?", answer: null }, // TODO: Kai
      {
        question: "How can I contact you?",
        answer: "Send us a message through our contact page and we will get back to you.",
        link: { label: "Contact the workshop", href: "/contact" },
      },
      {
        question: "When is the clothing line coming?",
        answer: "Our own apparel line is on its way. Join the waitlist to be the first to know.",
        link: { label: "Join the waitlist", href: "/clothing" },
      },
    ],
  },
];

/** Only answered questions, and only categories that still have some. */
export function getPublishedFaq(): FaqCategory[] {
  return faqCategories
    .map((c) => ({ ...c, items: c.items.filter((i) => i.answer !== null) }))
    .filter((c) => c.items.length > 0);
}
