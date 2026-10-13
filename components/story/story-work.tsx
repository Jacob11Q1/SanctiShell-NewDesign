import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { Parallax } from "@/components/motion/parallax";
import { RevealImage } from "@/components/motion/reveal-image";
import { SectionHeading } from "@/components/ui/section-heading";
import { getProductPhotos } from "@/lib/product-photos";

// Real pieces from the workshop. TODO: reshoot on clean background
const pieces = [
  { slug: "wall-reliquary-cross-abalone-mother-of-pearl", offset: "" },
  { slug: "god-bless-our-home-last-supper-lords-prayer", offset: "md:mt-32" },
  { slug: "wall-reliquary-cross-olive-wood-abalone", offset: "md:mt-12" },
].map(({ slug, offset }) => {
  const set = getProductPhotos(slug)!;
  return { slug, name: set.name, photo: set.photos[0], offset };
});

// The work itself: real pieces, staggered like a small exhibition, on evening ink.
export function StoryWork() {
  return (
    <section className="overflow-x-clip bg-text py-28 text-bg md:py-40">
      <div className="mx-auto max-w-[1536px] px-4 md:px-8">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <SectionHeading
            eyebrow="The work"
            tone="dark"
            title={
              <>
                Made by hand,
                <br />
                <em>in Beit Sahour.</em>
              </>
            }
            className="md:col-span-7"
          />
          <FadeIn className="md:col-span-4 md:col-start-9">
            <p className="max-w-sm text-base leading-relaxed text-bg/70">
              Mother-of-pearl, abalone and olive wood, cut and inlaid piece by piece in our family
              workshop.
            </p>
          </FadeIn>
        </div>

        <div className="mt-20 grid gap-14 md:mt-28 md:grid-cols-3 md:gap-8">
          {pieces.map((piece, i) => (
            <Parallax key={piece.slug} distance={i === 1 ? -80 : 40} className={piece.offset}>
              <figure>
                <RevealImage className="aspect-[4/5]" delay={i * 0.1}>
                  <Image
                    src={piece.photo.src}
                    alt={piece.photo.alt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </RevealImage>
                <figcaption className="mt-5 text-sm text-bg/70">{piece.name}</figcaption>
              </figure>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  );
}
