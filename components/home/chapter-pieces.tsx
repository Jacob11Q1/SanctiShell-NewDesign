import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { RevealImage } from "@/components/motion/reveal-image";
// TODO: replace with real photo (a group of finished workshop pieces)
import digitalImage from "@/public/placeholders/collection-digital.jpg";
import { getProductPhotos } from "@/lib/product-photos";
import { ChapterHeading } from "./chapter-heading";

// Real piece from the workshop. TODO: reshoot on clean background
const featuredPiece = getProductPhotos("standing-reliquary-cross-abalone-mother-of-pearl")!.photos[0];

type Collection = {
  title: string;
  text: string;
  href: string;
  cta: string;
  image: { src: StaticImageData; alt: string };
};

const collections: Collection[] = [
  {
    title: "Workshop pieces",
    text: "Crosses, rosaries, gifts, jewelry and antiques in mother-of-pearl and olive wood.",
    href: "/pieces",
    cta: "Explore the pieces",
    image: featuredPiece,
  },
  {
    title: "Digital",
    text: "PDFs and online-only goods, delivered the moment you buy.",
    href: "/digital",
    cta: "Browse digital",
    image: { src: digitalImage, alt: "Sunlight falling across an old stone wall" },
  },
];

function CollectionTile({ item, index }: { item: Collection; index: number }) {
  return (
    <FadeIn delay={index * 0.1}>
      <Link href={item.href} className="group block">
        <RevealImage className="sheen aspect-[4/5]" delay={index * 0.1}>
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            placeholder="blur"
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          />
        </RevealImage>
        <h3 className="mt-6 font-display text-3xl font-light md:text-4xl">{item.title}</h3>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-muted">{item.text}</p>
        <span className="nacre-underline mt-5 inline-block text-[0.8125rem] font-medium tracking-[0.04em]">
          {item.cta} <span aria-hidden="true">→</span>
        </span>
      </Link>
    </FadeIn>
  );
}

// Chapter IV: the piece. The three ways into the shop, presented like exhibits.
export function ChapterPieces() {
  return (
    <section className="overflow-x-clip bg-gradient-to-b from-bg to-surface py-28 md:py-40">
      <div className="mx-auto max-w-[1536px] px-4 md:px-8">
        <ChapterHeading
          number="IV"
          label="The piece"
          title={
            <>
              Find <em>your</em> piece.
            </>
          }
        />

        <div className="mt-16 grid gap-16 md:mt-24 md:grid-cols-3 md:gap-8">
          {collections.map((item, i) => (
            <CollectionTile key={item.href} item={item} index={i} />
          ))}

          {/* Clothing: not launched yet, so a typographic tile instead of a photo */}
          <FadeIn delay={0.2}>
            <Link href="/clothing" className="group block">
              <div className="sheen relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-bg">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,var(--color-nacre-rose),transparent_55%),radial-gradient(ellipse_at_75%_70%,var(--color-nacre-aqua),transparent_55%),radial-gradient(ellipse_at_60%_30%,var(--color-nacre-lilac),transparent_50%)] opacity-40 transition-transform duration-[1.6s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
                <span className="relative font-display text-6xl font-light italic md:text-7xl">
                  Soon
                </span>
              </div>
              <h3 className="mt-6 font-display text-3xl font-light md:text-4xl">Clothing</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-muted">
                Our own apparel line is on its way.
              </p>
              <span className="nacre-underline mt-5 inline-block text-[0.8125rem] font-medium tracking-[0.04em]">
                Join the waitlist <span aria-hidden="true">→</span>
              </span>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
