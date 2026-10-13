import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { Parallax } from "@/components/motion/parallax";
import { RevealImage } from "@/components/motion/reveal-image";
// TODO: replace with real photo (the workshop on Eweena Street)
import landImage from "@/public/placeholders/land-olive-tree.jpg";
// TODO: replace with real photo (inside the workshop, natural light)
import workshopImage from "@/public/placeholders/workshop-window.jpg";
import { ChapterHeading } from "./chapter-heading";

// Chapter II: the workshop. The page turns to evening ink, and a full-bleed
// photo of light falling into the workshop drifts behind the title.
export function ChapterWorkshop() {
  return (
    <section className="overflow-x-clip bg-text text-bg">
      <div className="relative h-[85vh] min-h-[560px] w-full overflow-hidden">
        <Parallax distance={160} className="absolute inset-x-0 -bottom-[12%] -top-[12%]">
          <Image
            src={workshopImage}
            alt="A workbench with hand tools, lit by a small window"
            fill
            placeholder="blur"
            sizes="100vw"
            className="object-cover"
          />
        </Parallax>
        {/* Darken toward the bottom so the title stays readable */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-text via-text/40 to-text/10"
        />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1536px] px-4 pb-14 md:px-8 md:pb-20">
          <ChapterHeading
            number="II"
            label="The workshop"
            tone="dark"
            title={
              <>
                Eweena Street,
                <br />
                <em>Beit Sahour.</em>
              </>
            }
          />
        </div>
      </div>

      <div className="mx-auto grid max-w-[1536px] gap-16 px-4 py-24 md:grid-cols-12 md:gap-8 md:px-8 md:py-36">
        {/* TODO: Kai, add the family's story: when the workshop began, who works there */}
        <FadeIn className="md:col-span-6 md:pt-10">
          <p className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-light leading-[1.2]">
            Every piece begins here, as raw shell and rough wood, in our family workshop just east
            of Bethlehem.
          </p>
          <p className="mt-8 max-w-md text-base leading-relaxed text-bg/70">
            The same streets, the same light, the same patience, carried from one pair of hands to
            the next.
          </p>
        </FadeIn>

        <div className="md:col-span-4 md:col-start-9">
          <RevealImage className="aspect-[4/5]">
            <Image
              src={landImage}
              alt="An old olive tree growing among pale rocks"
              fill
              placeholder="blur"
              sizes="(min-width: 768px) 30vw, 100vw"
              className="object-cover"
            />
          </RevealImage>
        </div>
      </div>
    </section>
  );
}
