// Shape of a legal document (Terms, Privacy, Cookies), rendered by components/legal/legal-page.tsx.

export type LegalBlock = string | { list: string[] };

export type LegalSection = {
  id: string; // anchor, e.g. /privacy#your-rights
  title: string;
  blocks: LegalBlock[];
  links?: { label: string; href: string }[];
};

export type LegalDoc = {
  eyebrow: string;
  title: [string, string]; // two lines; the second is set in italic
  intro: string;
  updated: { iso: string; label: string };
  sections: LegalSection[];
};

// Shared facts, so all three documents describe the business the same way.
export const business = {
  name: "Sanctishell",
  who: "the family workshop of Farah Qumsiyeh and Jacob Qumsiyeh",
  address: "Eweena Street, Beit Sahour, Palestine",
};

export const lastUpdated = { iso: "2026-10-15", label: "15 October 2026" };
