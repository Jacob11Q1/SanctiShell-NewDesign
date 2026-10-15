import Image, { type StaticImageData } from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { Parallax } from "@/components/motion/parallax";
import { RevealImage } from "@/components/motion/reveal-image";
import father from "@/public/story/father-farah-qumsiyeh.jpg";
import grandson from "@/public/story/grandson-jacob-qumsiyeh.jpg";

type Artisan = {
  name: string;
  role: string;
  since: string;
  text: string;
  photo: { src: StaticImageData; alt: string };
};

// Facts from Kai (2026-10-15): Farah does everything in the workshop and has worked
// since 1990; Jacob helps him, taught by his father and grandfather, since 2005.
const artisans: Artisan[] = [
  {
    name: "Farah Qumsiyeh",
    role: "Master craftsman",
    since: "1990",
    text: "Farah does everything in the workshop, from the first cut of the shell to the last polish. He learned the craft from his father, Jacob, and has worked at it since 1990.",
    photo: { src: father, alt: "Farah Qumsiyeh, smiling, in a light shirt" },
  },
  {
    name: "Jacob Qumsiyeh",
    role: "Craftsman",
    since: "2005",
    text: "Taught by his father and his grandfather, Jacob has worked beside his father since 2005, helping with every piece that leaves the workshop.",
    photo: { src: grandson, alt: "Jacob Qumsiyeh, seated at a wooden table" },
  },
];

// One large, alternating profile per artisan, with their starting year set huge
// in iridescent type behind the text, like a date engraved in nacre.
export function ArtisanProfiles() {
  return (
    <section className="mx-auto max-w-[1536px] space-y-28 overflow-x-clip px-4 pb-28 md:space-y-44 md:px-8 md:pb-44">
      {artisans.map((a, i) => {
        const flip = i % 2 === 1;
        return (
          <article key={a.name} className="grid items-center gap-12 md:grid-cols-12 md:gap-8">
            <div className={`md:col-span-5 ${flip ? "md:order-2 md:col-start-8" : ""}`}>
              <Parallax distance={flip ? -60 : 60}>
                <RevealImage className="aspect-[4/5]">
                  <Image
                    src={a.photo.src}
                    alt={a.photo.alt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                </RevealImage>
              </Parallax>
            </div>

            <FadeIn className={`relative md:col-span-6 ${flip ? "md:order-1 md:col-start-1" : "md:col-start-7"}`}>
              <p
                aria-hidden="true"
                className="nacre-text pointer-events-none select-none font-display text-[clamp(6rem,16vw,15rem)] font-light italic leading-[0.8] opacity-60"
              >
                {a.since}
              </p>
              <p className="eyebrow mt-6">
                {a.role} <span aria-hidden="true">·</span> At the bench since {a.since}
              </p>
              <h2 className="mt-4 font-display text-[clamp(2.75rem,5vw,4.5rem)] font-light leading-none">
                {a.name}
              </h2>
              <p className="mt-8 max-w-md text-base leading-relaxed text-text-muted">{a.text}</p>
            </FadeIn>
          </article>
        );
      })}
    </section>
  );
}
