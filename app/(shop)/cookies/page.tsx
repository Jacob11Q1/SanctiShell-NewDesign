import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { cookiePolicy } from "@/lib/legal/cookies";

export const metadata: Metadata = {
  title: "Cookie policy",
  description:
    "Sanctishell uses no tracking, analytics or advertising cookies. Here is exactly which cookies our website uses, and why.",
};

// Cookie Policy (tracker #11). Content lives in lib/legal/cookies.ts.
export default function CookiesPage() {
  return <LegalPage doc={cookiePolicy} />;
}
