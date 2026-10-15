import type { Metadata } from "next";
import { ArtisanProfiles } from "@/components/artisans/artisan-profiles";
import { ArtisansFaith } from "@/components/artisans/artisans-faith";
import { ArtisansFounder } from "@/components/artisans/artisans-founder";
import { ArtisansHero } from "@/components/artisans/artisans-hero";
import { ArtisansProcess } from "@/components/artisans/artisans-process";
import { FadeIn } from "@/components/motion/fade-in";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata: Metadata = {
  title: "The artisans",
  description:
    "Meet Farah and Jacob Qumsiyeh, father and son, who make every mother-of-pearl, abalone and olive wood cross by hand in Beit Sahour. Each cross takes four to five days.",
};

// The Artisans page (tracker #10). Facts from Kai, 2026-10-15.
export default function ArtisansPage() {
  return (
    <>
      <ArtisansHero />
      <ArtisanProfiles />
      <ArtisansFaith />
      <ArtisansProcess />
      <ArtisansFounder />

      <section className="mx-auto max-w-[1536px] px-4 py-28 text-center md:px-8 md:py-40">
        <FadeIn>
          <p className="eyebrow">Made in Beit Sahour</p>
          <h2 className="mt-6 font-display text-[clamp(2.75rem,6vw,5.5rem)] font-light leading-[0.98] tracking-[-0.015em]">
            See their <em>work.</em>
          </h2>
          <div className="mt-10">
            <ButtonLink href="/pieces">Explore the pieces</ButtonLink>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
