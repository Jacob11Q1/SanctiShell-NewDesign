import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { privacyPolicy } from "@/lib/legal/privacy";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Sanctishell, our family workshop in Beit Sahour, handles your personal information: what we collect, why, who we share it with, and your rights.",
};

// Privacy Policy (tracker #11). Content lives in lib/legal/privacy.ts.
export default function PrivacyPage() {
  return <LegalPage doc={privacyPolicy} />;
}
