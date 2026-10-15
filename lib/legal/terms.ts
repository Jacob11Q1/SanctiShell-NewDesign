import { business, lastUpdated, type LegalDoc } from "./types";

// Terms of Service. Plain-language draft based on how the shop actually works
// (Stripe Checkout, one-of-a-kind pieces, expiring download links).
// DRAFT. TODO: Kai to review; a lawyer before launch.
// TODO (hidden until decided): governing law and courts, i.e. which country's law
// applies to sales. This needs a lawyer's advice, so it is deliberately left out.
export const termsOfService: LegalDoc = {
  eyebrow: "Terms of service",
  title: ["The terms", "we keep."],
  intro:
    "These terms explain how buying from our family workshop works. We have written them as plainly as we can. By using this website or placing an order, you agree to them.",
  updated: lastUpdated,
  sections: [
    {
      id: "about-us",
      title: "About us",
      blocks: [`${business.name} is ${business.who}, on ${business.address}.`],
    },
    {
      id: "our-pieces",
      title: "Our pieces",
      blocks: [
        "Every piece is made by hand from natural materials: mother-of-pearl, abalone shell and olive wood. No two shells or pieces of wood are the same, so the color, grain and pattern of your piece may differ a little from the photos. This is part of what makes each piece handmade, not a fault.",
        "Many of our pieces are one of a kind. Once a one-of-a-kind piece is sold, it is gone.",
      ],
    },
    {
      id: "prices-and-payment",
      title: "Prices and payment",
      blocks: [
        "The price of each piece is shown on its page and again at checkout, before you pay. Payments are handled securely by Stripe.", // TODO: currency, and whether taxes are included
        "Your order is confirmed once your payment has gone through. If a piece turns out to be unavailable after you pay, for example if a one-of-a-kind piece was bought by someone else at the same moment, we will tell you and refund you in full.",
      ],
    },
    {
      id: "shipping",
      title: "Shipping",
      blocks: ["How and where we ship is explained on our shipping page."],
      links: [{ label: "Shipping details", href: "/shipping" }],
    },
    {
      id: "returns",
      title: "Returns",
      // TODO: Kai's returns policy; then link the Returns page
      blocks: [
        "Our returns policy will be published here before our shop opens. Until then, if anything is wrong with your order, please write to us and we will make it right with you.",
      ],
      links: [{ label: "Contact us", href: "/contact" }],
    },
    {
      id: "digital-products",
      title: "Digital products",
      blocks: [
        "When you buy a digital product, you receive a personal download link by email. The link is for you alone, can be used a limited number of times and expires after a while, to keep your purchase safe.",
        "Digital products are for your own personal use. Please don't share, resell or publish them.",
      ],
    },
    {
      id: "our-work",
      title: "Our work and our words",
      blocks: [
        "The designs, photographs and words on this website belong to our family. Please don't copy or reuse them without asking us first.",
      ],
    },
    {
      id: "using-this-website",
      title: "Using this website",
      blocks: [
        "Please use this website honestly: don't try to break it, overload it, or use it to send spam or harmful content.",
      ],
    },
    {
      id: "responsibility",
      title: "Our responsibility",
      blocks: [
        "We take great care with every piece and every order. As far as the law allows, we are not responsible for losses we could not have reasonably foreseen. Nothing in these terms takes away any rights you have under the consumer laws of your country.",
      ],
    },
    {
      id: "changes",
      title: "Changes to these terms",
      blocks: [
        "We may update these terms from time to time. The version on this page, with the date at the top, is the one that applies to your order.",
      ],
    },
    {
      id: "contact",
      title: "Questions",
      blocks: ["If you have any questions about these terms, write to us."],
      links: [{ label: "Contact us", href: "/contact" }],
    },
  ],
};
