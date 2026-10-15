import { LightSweep } from "@/components/motion/light-sweep";

// Opening of the Artisans page. Facts from Kai (2026-10-15):
// today the workshop is Farah and his son Jacob, and everything is still made by hand.
export function ArtisansHero() {
  return (
    <section className="overflow-x-clip pb-20 pt-28 md:pb-28 md:pt-40">
      <div className="mx-auto max-w-[1536px] px-4 md:px-8">
        <p className="eyebrow">The artisans</p>
        <h1 className="mt-6 font-display text-[clamp(3.25rem,9vw,9.5rem)] font-light leading-[0.92] tracking-[-0.02em]">
          <LightSweep>
            <span className="block">Two pairs</span>
            <span className="block sm:pl-[20%]">
              of <em>hands.</em>
            </span>
          </LightSweep>
        </h1>
        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-12">
          <p className="max-w-md text-lg leading-relaxed text-text-muted md:col-span-5">
            Today our workshop is a father and his son: Farah Qumsiyeh and Jacob Qumsiyeh. Every
            piece, to this day, is made entirely by hand.
          </p>
        </div>
      </div>
    </section>
  );
}
