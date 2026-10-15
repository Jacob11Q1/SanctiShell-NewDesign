import { lastUpdated, type LegalDoc } from "./types";

// Cookie Policy. True today: the site sets NO cookies (no analytics, ads or tracking).
// Strictly necessary cookies will come with accounts and the cart; they are listed
// as planned. DRAFT. TODO: update the moment any cookie is added; legal review before launch.
export const cookiePolicy: LegalDoc = {
  eyebrow: "Cookie policy",
  title: ["No crumbs", "left behind."],
  intro:
    "Cookies are small files a website can save in your browser. We use as few as possible, and none that follow you around the internet.",
  updated: lastUpdated,
  sections: [
    {
      id: "today",
      title: "The cookies we use today",
      blocks: [
        "None. Right now this website does not set any cookies, and it does not use analytics, advertising or tracking of any kind.",
      ],
    },
    {
      id: "planned",
      title: "Cookies we will need later",
      blocks: [
        "When these parts of the shop open, we will use a small number of strictly necessary cookies. Without them, the features simply could not work:",
        {
          list: [
            "Signing in: a secure cookie that keeps you signed in to your account while you browse.",
            "Your bag: a cookie that remembers the pieces you have added, so they are still there when you come back.",
            "Security: a cookie that protects forms from being misused by other websites.",
          ],
        },
        "We will list each one on this page, with its name and how long it lasts, before it goes live.",
      ],
    },
    {
      id: "checkout",
      title: "When you pay",
      blocks: [
        "Payment happens on Stripe's secure checkout page. Stripe sets its own cookies there, mainly to prevent fraud. They are covered by Stripe's cookie policy, not ours.",
      ],
      links: [{ label: "Stripe's cookie policy", href: "https://stripe.com/cookies-policy/legal" }],
    },
    {
      id: "no-banner",
      title: "Why there is no cookie banner",
      blocks: [
        "Because we don't use cookies for analytics, advertising or tracking, there is nothing to ask your permission for. If that ever changes, we will ask you first.",
      ],
    },
    {
      id: "control",
      title: "Controlling cookies",
      blocks: [
        "You can see, block or delete cookies at any time in your browser's settings. If you block the strictly necessary ones, signing in and your bag won't work.",
      ],
    },
    {
      id: "questions",
      title: "Questions",
      blocks: ["If you have any questions about cookies on our website, write to us."],
      links: [
        { label: "Contact us", href: "/contact" },
        { label: "Read our privacy policy", href: "/privacy" },
      ],
    },
  ],
};
