import Image from "next/image";
import { LightSweep } from "@/components/motion/light-sweep";
import grandfather from "@/public/story/grandfather-jacob-qumsiyeh.jpg";

// Our Story opens as a memorial to the founder, Kai's late grandfather.
// Kai: "This website will be his memory, from me to him." (2026-10-13)
// Date of passing given as 11-10-2023, read as day-month: 11 October 2023.
export function StoryHero() {
  return (
    <section className="relative overflow-x-clip pb-24 pt-28 md:pb-40 md:pt-40">
      <div className="mx-auto grid max-w-[1536px] items-center gap-14 px-4 md:grid-cols-12 md:gap-8 md:px-8">
        {/* Portrait, framed like a keepsake with a soft pearl glow behind it */}
        <figure className="relative mx-auto w-full max-w-[420px] md:col-span-5 md:mx-0">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-10 rounded-full bg-[radial-gradient(circle,var(--color-nacre-lilac),var(--color-nacre-rose)_40%,transparent_70%)] opacity-25 blur-3xl"
          />
          {/* Thin gold hairline offset behind the photo, like a mat in a frame */}
          <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 border border-gold/60" />
          <div className="relative aspect-[4/5] overflow-hidden bg-surface">
            <Image
              src={grandfather}
              alt="Jacob Qumsiyeh, founder of the workshop, smiling in a dark suit and tie"
              fill
              preload
              placeholder="blur"
              sizes="(min-width: 768px) 420px, 90vw"
              className="hero-settle object-cover"
            />
          </div>
        </figure>

        <div className="md:col-span-6 md:col-start-7">
          <p className="eyebrow">In loving memory</p>
          <h1 className="mt-6 font-display text-[clamp(3.5rem,8vw,8.5rem)] font-light leading-[0.92] tracking-[-0.02em]">
            <LightSweep>
              <span className="block">Jacob</span>
              <span className="block">
                <em>Qumsiyeh.</em>
              </span>
            </LightSweep>
          </h1>

          <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-5">
            <div>
              <dt className="eyebrow">Founded our workshop</dt>
              <dd className="mt-2 font-display text-3xl font-light">1980, Beit Sahour</dd>
            </div>
            <div>
              {/* TODO: Kai to confirm this wording (alternative: "Passed away") */}
              <dt className="eyebrow">Went home to the Lord</dt>
              <dd className="mt-2 font-display text-3xl font-light">
                <time dateTime="2023-10-11">11 October 2023</time>
              </dd>
            </div>
          </dl>

          {/* Kai's dedication, in his words */}
          <blockquote className="mt-12 max-w-lg border-l border-gold/60 pl-6">
            <p className="font-display text-[clamp(1.5rem,2.4vw,2.125rem)] font-light italic leading-snug">
              “This website is his memory, from me to him.”
            </p>
            <footer className="eyebrow mt-4">Jacob, his grandson</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
