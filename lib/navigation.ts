// Single source of truth for site links, shared by the header, mobile menu and footer.
// Most of these pages are not built yet, so they will 404 until their turn in the tracker.

export type NavItem = {
  label: string;
  href: string;
  badge?: string; // small superscript label, e.g. "Soon"
};

export const shopNav: NavItem[] = [
  { label: "Shop all", href: "/shop" },
  { label: "Pieces", href: "/pieces" },
  { label: "Digital", href: "/digital" },
  { label: "Clothing", href: "/clothing", badge: "Soon" },
];

export const storyNav: NavItem[] = [
  { label: "Our story", href: "/our-story" },
  { label: "Artisans", href: "/artisans" },
  { label: "Journal", href: "/journal" },
];

export const helpNav: NavItem[] = [
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Shipping", href: "/shipping" },
  { label: "Returns", href: "/returns" },
];

export const legalNav: NavItem[] = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

// TODO: real social profile URLs from Kai
export const socialNav: NavItem[] = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
];
