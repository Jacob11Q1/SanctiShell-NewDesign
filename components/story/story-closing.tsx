import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { LightSweep } from "@/components/motion/light-sweep";
import { ButtonLink } from "@/components/ui/button-link";

// Why the family shares its story (Kai's words, 2026-10-13), then the way into the pieces.
// TODO: Kai to approve final wording
export function StoryClosing() {
  return (
    <section className="overflow-x-clip bg-gradient-to-b from-bg to-surface">
      <FadeIn className="mx-auto max-w-[1536px] px-4 py-28 text-center md:px-8 md:py-44">
        <p className="eyebrow">Why we share our story</p>
        <h2 className="mt-6 font-display text-[clamp(3rem,7vw,7rem)] font-light leading-[0.95] tracking-[-0.02em]">
          <LightSweep>
            So others can
            <br />
            <em>see and believe.</em>
          </LightSweep>
        </h2>
        <p className="mx-auto mt-10 max-w-xl font-display text-[clamp(1.375rem,2.2vw,1.875rem)] font-light leading-snug text-text-muted">
          Now we want to share our story with the world, so that others can see and believe that
          Jesus is our Saviour.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
          <ButtonLink href="/pieces">Explore the pieces</ButtonLink>
          <Link href="/contact" className="nacre-underline text-[0.8125rem] font-medium tracking-[0.04em]">
            Contact the workshop
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
