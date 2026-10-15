import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { termsOfService } from "@/lib/legal/terms";

export const metadata: Metadata = {
  title: "Terms of service",
  description:
    "The terms for buying handmade mother-of-pearl, abalone and olive wood pieces and digital products from Sanctishell, our family workshop in Beit Sahour.",
};

// Terms of Service (tracker #11). Content lives in lib/legal/terms.ts.
export default function TermsPage() {
  return <LegalPage doc={termsOfService} />;
}
