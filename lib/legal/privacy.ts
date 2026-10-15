import { business, lastUpdated, type LegalDoc } from "./types";

// Privacy Policy. Describes only what the site really does (or will do when a feature
// launches, said plainly). DRAFT. TODO: Kai to review, then a lawyer before launch,
// especially for customers in the EU (GDPR) and other regions.
export const privacyPolicy: LegalDoc = {
  eyebrow: "Privacy policy",
  title: ["Your privacy,", "kept with care."],
  intro:
    "We are a small family workshop. We collect as little about you as we can, only to answer you and to send you what you order, and we never sell it.",
  updated: lastUpdated,
  sections: [
    {
      id: "who-we-are",
      title: "Who we are",
      blocks: [
        `${business.name} is ${business.who}, on ${business.address}. We are responsible for the personal information described in this policy.`,
      ],
    },
    {
      id: "what-we-collect",
      title: "What we collect, and why",
      blocks: [
        "We only collect information you give us, for a clear reason:",
        {
          list: [
            "When you write to us through our contact form: your name, email address, the topic and your message, so we can answer you.",
            "When you join our newsletter (once it is switched on): your email address, so we can send you news from the workshop.",
            "When you place an order (once our shop opens): your name, email address, shipping address and what you ordered, so we can send it to you and keep a record of the sale.",
            "When you create an account (once accounts are available): your email address, name, orders and downloads, so you can see them in one place.",
          ],
        },
        "To protect our contact form from abuse, our server briefly remembers the internet (IP) address that sent each message, for a few minutes, and only in its working memory. Like almost every website, our hosting server also keeps basic technical logs for a limited time to keep the site secure and working.",
      ],
    },
    {
      id: "payments",
      title: "Payments",
      blocks: [
        "Payments are handled by Stripe, a trusted payment provider. Your card details go straight to Stripe and are never seen or stored by us. Stripe's use of your information is described in its own privacy policy.",
      ],
      links: [{ label: "Stripe's privacy policy", href: "https://stripe.com/privacy" }],
    },
    {
      id: "what-we-dont-do",
      title: "What we don't do",
      blocks: [
        {
          list: [
            "We don't sell, rent or trade your personal information.",
            "We don't use advertising trackers or analytics on this website.",
            "We don't load fonts or maps from other companies when you visit; our fonts are served from our own website, and maps open only if you choose to click the link.",
          ],
        },
      ],
    },
    {
      id: "who-we-share-with",
      title: "Who we share it with",
      blocks: [
        "We only share your information with the services that help us run the shop, and only what they need:",
        {
          list: [
            "Stripe, to take payments.",
            "Our email provider, to deliver messages and order emails.", // TODO: name it once chosen
            "Our hosting provider, whose servers run this website.",
            "Shipping carriers, who need your name and address to deliver your order.",
          ],
        },
      ],
    },
    {
      id: "how-long",
      title: "How long we keep it",
      blocks: [
        // TODO: Kai, confirm how long messages and order records are kept
        "We keep your information only as long as we need it for the reason you gave it to us. Order records are kept for as long as the law requires us to keep business records. You can ask us to delete your information at any time, unless we must keep it by law.",
      ],
    },
    {
      id: "your-rights",
      title: "Your rights",
      blocks: [
        "You can ask us at any time to:",
        {
          list: [
            "show you the personal information we hold about you,",
            "correct it if it is wrong,",
            "delete it,",
            "stop sending you our newsletter (every email will also have an unsubscribe link).",
          ],
        },
        "Just write to us through our contact page, and we will answer you personally.",
      ],
      links: [{ label: "Contact us", href: "/contact" }],
    },
    {
      id: "children",
      title: "Children",
      blocks: [
        "Our shop is meant for adults. We don't knowingly collect personal information from children.",
      ],
    },
    {
      id: "changes",
      title: "Changes to this policy",
      blocks: [
        "If we change how we handle your information, we will update this page and the date at the top.",
      ],
    },
  ],
};
