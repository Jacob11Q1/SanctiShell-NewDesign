import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { Parallax } from "@/components/motion/parallax";
import { RevealImage } from "@/components/motion/reveal-image";
// TODO: replace with real photo (raw mother-of-pearl from the workshop)
import nacreImage from "@/public/placeholders/material-nacre.jpg";
// TODO: replace with real photo (olive wood from the workshop)
import oliveImage from "@/public/placeholders/material-olive-wood.jpg";
import { ChapterHeading } from "./chapter-heading";

// Chapter I: the two materials, side by side like exhibits. The page warms
// from ivory to linen as you scroll into it.
export function ChapterShell() {
  return (
    <section className="overflow-x-clip bg-gradient-to-b from-bg to-surface pb-28 pt-12 md:pb-44">
      <div className="mx-auto grid max-w-[1536px] gap-y-16 px-4 md:grid-cols-12 md:gap-x-8 md:px-8">
        <ChapterHeading
          number="I"
          label="The shell"
          title={
            <>
              Two materials,
              <br />
              <em>one light.</em>
            </>
          }
          className="md:col-span-7"
        />

        {/* TODO: approve material copy (Kai) */}
        <figure className="md:col-span-5 md:col-start-1">
          <RevealImage className="aspect-[3/4]">
            <Image
              src={nacreImage}
              alt="Iridescent mother-of-pearl, swirling blue, green and violet"
              fill
              placeholder="blur"
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </RevealImage>
          <FadeIn>
            <figcaption className="mt-6 max-w-sm">
              <span className="font-display text-3xl font-light">Mother-of-pearl</span>
              <span className="mt-3 block text-sm leading-relaxed text-text-muted">
                The inner layer of the shell. Thousands of thin layers catch the light and break
                it into soft color.
              </span>
            </figcaption>
          </FadeIn>
        </figure>

        {/* Offset and drifting at a different speed, for depth */}
        <Parallax distance={-120} className="md:col-span-5 md:col-start-8 md:mt-48">
          <figure>
            <RevealImage className="aspect-[3/4]" delay={0.15}>
              <Image
                src={oliveImage}
                alt="Close-up of warm, swirling olive wood grain"
                fill
                placeholder="blur"
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </RevealImage>
            <FadeIn>
              <figcaption className="mt-6 max-w-sm">
                <span className="font-display text-3xl font-light">Olive wood</span>
                <span className="mt-3 block text-sm leading-relaxed text-text-muted">
                  Dense, warm and slow-grown, with a grain that is never the same twice.
                </span>
              </figcaption>
            </FadeIn>
          </figure>
        </Parallax>
      </div>
    </section>
  );
}
