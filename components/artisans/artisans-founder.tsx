import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import grandfather from "@/public/story/grandfather-jacob-qumsiyeh.jpg";

// The founder's words, kept exactly as Kai remembers them (2026-10-15).
// Never rewrite this quote: it is the grandfather's own voice.
export function ArtisansFounder() {
  return (
    <section className="bg-gradient-to-b from-bg to-surface">
      <div className="mx-auto grid max-w-[1536px] items-center gap-12 px-4 py-28 md:grid-cols-12 md:gap-8 md:px-8 md:py-44">
        <FadeIn className="md:col-span-3">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden bg-surface md:mx-0">
            <Image
              src={grandfather}
              alt="Jacob Qumsiyeh, founder of the workshop"
              fill
              placeholder="blur"
              sizes="280px"
              className="object-cover"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.12} className="md:col-span-8 md:col-start-5">
          <p className="eyebrow">What our founder taught us</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted">
            Jacob Qumsiyeh taught his son and his grandson to love this work and this craft. His
            grandson still carries the words he told him:
          </p>
          <blockquote className="mt-10 border-l border-gold/60 pl-6 md:pl-10">
            <p className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light italic leading-[1.1]">
              “You are the master of your own fate. Be great, and do whatever makes you feel
              comfortable.”
            </p>
            <footer className="eyebrow mt-6">Jacob Qumsiyeh · Founder · 1980 – 2023</footer>
          </blockquote>
          <Link
            href="/our-story"
            className="nacre-underline mt-10 inline-block text-[0.8125rem] font-medium tracking-[0.04em]"
          >
            Read his story <span aria-hidden="true">→</span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
