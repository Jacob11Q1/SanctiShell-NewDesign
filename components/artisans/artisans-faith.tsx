import { FadeIn } from "@/components/motion/fade-in";
import { LightSweep } from "@/components/motion/light-sweep";

// What the work means to Farah and Jacob. Kai's meaning, in polished words at his
// request ("make it more unique"). TODO: Kai to approve the final wording.
export function ArtisansFaith() {
  return (
    <section className="relative overflow-hidden bg-text text-bg">
      {/* Soft pearl glow, like light behind the words */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--color-nacre-lilac),var(--color-nacre-aqua)_40%,transparent_70%)] opacity-[0.14] blur-3xl"
      />
      <FadeIn className="relative mx-auto max-w-[1536px] px-4 py-32 text-center md:px-8 md:py-48">
        <p className="eyebrow text-bg/70">What the work gives us</p>
        <h2 className="mt-6 font-display text-[clamp(3rem,7.5vw,7.5rem)] font-light leading-[0.95] tracking-[-0.02em]">
          <LightSweep>
            Closer to God,
            <br />
            <em>one piece at a time.</em>
          </LightSweep>
        </h2>
        <blockquote className="mx-auto mt-12 max-w-2xl">
          <p className="font-display text-[clamp(1.375rem,2.4vw,2rem)] font-light italic leading-snug text-bg/85">
            “This work has drawn us closer to God than anything else in our lives. In every piece
            we shape by hand, day after day, we come to know a little more of His love for all of
            His people.”
          </p>
          <footer className="eyebrow mt-8 text-bg/60">Farah &amp; Jacob Qumsiyeh</footer>
        </blockquote>
      </FadeIn>
    </section>
  );
}
