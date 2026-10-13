import Image from "next/image";
import Link from "next/link";
import { LightSweep } from "@/components/motion/light-sweep";
import { Parallax } from "@/components/motion/parallax";
import { ButtonLink } from "@/components/ui/button-link";
// TODO: replace with real photo (macro of the workshop's own mother-of-pearl)
import heroImage from "@/public/placeholders/hero-nautilus.jpg";

// Opening scene: the shell. Giant headline with a light sweep, then the
// full-bleed photo, which settles from a slight zoom and drifts with the scroll.
export function Hero() {
  return (
    <section className="relative overflow-x-clip pt-28 md:pt-36">
      <div className="mx-auto max-w-[1536px] px-4 md:px-8">
        <p className="eyebrow">Beit Sahour · Bethlehem</p>

        {/* TODO: approve headline copy (Kai) */}
        <h1 className="mt-6 font-display text-[clamp(3.25rem,10.5vw,11rem)] font-light leading-[0.92] tracking-[-0.02em]">
          {/* Second line slides right on larger screens: an editorial stagger */}
          <LightSweep>
            <span className="block">Light, carved</span>
            <span className="block sm:pl-[22%] lg:pl-[38%]">
              by <em>hand.</em>
            </span>
          </LightSweep>
        </h1>

        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-12 md:items-end">
          {/* TODO: approve intro copy (Kai) */}
          <p className="max-w-md text-lg leading-relaxed text-text-muted md:col-span-5">
            Mother-of-pearl and olive wood, shaped in our family workshop near Bethlehem. Many
            pieces are one of a kind.
          </p>
          <div className="flex flex-wrap items-center gap-8 md:col-span-7 md:justify-end">
            <ButtonLink href="/pieces">Explore the pieces</ButtonLink>
            <Link href="/our-story" className="nacre-underline text-[0.8125rem] font-medium tracking-[0.04em]">
              Our story
            </Link>
          </div>
        </div>
      </div>

      {/* Full-bleed photo. Visible on first paint (LCP), so only transform animations. */}
      <div className="relative mt-14 aspect-[4/5] w-full overflow-hidden bg-surface sm:aspect-[16/9] md:mt-20 lg:aspect-[21/9]">
        <Parallax distance={140} className="absolute inset-x-0 -bottom-[10%] -top-[10%]">
          <Image
            src={heroImage}
            alt="Close-up of the pearly spiral inside a nautilus shell"
            fill
            preload
            placeholder="blur"
            sizes="100vw"
            className="hero-settle object-cover"
          />
        </Parallax>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-4 flex items-center gap-3 md:left-8">
          <span aria-hidden="true" className="relative block h-10 w-px overflow-hidden bg-bg/40">
            <span className="scroll-cue absolute inset-0 bg-bg" />
          </span>
          <span className="eyebrow text-bg">Scroll</span>
        </div>
      </div>
    </section>
  );
}
