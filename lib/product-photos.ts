// Kai's real product photos, grouped by product slug (files in /public/products/[slug]/).
// Until the database exists (Prisma, CLAUDE.md §5), this is the one place that knows
// which photo belongs to which product. prisma/seed.ts can read from it later.
//
// TODO: reshoot on clean background. All of these were taken at home / in the workshop
// on mixed surfaces (marble, lace, terrazzo). Fine for development, reshoot before launch.

import type { StaticImageData } from "next/image";
// TODO: reshoot on clean background
import jerusalemClose from "@/public/products/god-bless-our-home-last-supper-jerusalem/close.jpg";
// TODO: reshoot on clean background
import jerusalemFront from "@/public/products/god-bless-our-home-last-supper-jerusalem/front.jpg";
// TODO: reshoot on clean background
import lordsPrayerFlat from "@/public/products/god-bless-our-home-last-supper-lords-prayer/flat.jpg";
// TODO: reshoot on clean background
import lordsPrayerFront from "@/public/products/god-bless-our-home-last-supper-lords-prayer/front.jpg";
// TODO: reshoot on clean background
import standingAbaloneAngle from "@/public/products/standing-reliquary-cross-abalone-mother-of-pearl/angle.jpg";
// TODO: reshoot on clean background
import standingAbaloneFront from "@/public/products/standing-reliquary-cross-abalone-mother-of-pearl/front.jpg";
// TODO: reshoot on clean background
import standingOliveFront from "@/public/products/standing-reliquary-cross-olive-wood-abalone/front.jpg";
// TODO: reshoot on clean background
import wallAbaloneFront from "@/public/products/wall-reliquary-cross-abalone-mother-of-pearl/front.jpg";
// TODO: reshoot on clean background
import wallOliveFront from "@/public/products/wall-reliquary-cross-olive-wood-abalone/front.jpg";

export type ProductPhoto = {
  src: StaticImageData;
  alt: string;
};

export type ProductPhotoSet = {
  slug: string;
  name: string; // working name. TODO: final product names from Kai
  photos: ProductPhoto[]; // first photo = main image
};

export const productPhotos: ProductPhotoSet[] = [
  {
    slug: "wall-reliquary-cross-abalone-mother-of-pearl",
    name: "Wall reliquary cross, abalone & mother-of-pearl",
    photos: [
      {
        src: wallAbaloneFront,
        alt: "Wall cross inlaid with iridescent abalone and white mother-of-pearl, with a silver corpus and four gold-rimmed reliquary windows",
      },
    ],
  },
  {
    slug: "wall-reliquary-cross-olive-wood-abalone",
    name: "Wall reliquary cross, olive wood with abalone inlay",
    photos: [
      {
        src: wallOliveFront,
        alt: "Olive wood wall cross edged with abalone inlay, with a silver corpus and four gold-rimmed reliquary windows",
      },
    ],
  },
  {
    slug: "standing-reliquary-cross-abalone-mother-of-pearl",
    name: "Standing reliquary cross, abalone & mother-of-pearl",
    photos: [
      {
        src: standingAbaloneFront,
        alt: "Standing cross covered in abalone and mother-of-pearl on an inlaid base, with a silver corpus and four reliquary windows",
      },
      {
        src: standingAbaloneAngle,
        alt: "The abalone and mother-of-pearl standing cross seen from a slight angle, showing its olive wood core",
      },
    ],
  },
  {
    slug: "standing-reliquary-cross-olive-wood-abalone",
    name: "Standing reliquary cross, olive wood with abalone inlay",
    photos: [
      {
        src: standingOliveFront,
        alt: "Standing olive wood cross with abalone inlay on a mother-of-pearl base, with a silver corpus and four reliquary windows",
      },
    ],
  },
  {
    slug: "god-bless-our-home-last-supper-lords-prayer",
    name: "“God Bless Our Home” Last Supper frame, Lord’s Prayer",
    photos: [
      {
        src: lordsPrayerFront,
        alt: "Mother-of-pearl frame edged in abalone reading God Bless Our Home, with a silver Last Supper relief and the Lord's Prayer below",
      },
      {
        src: lordsPrayerFlat,
        alt: "The Lord's Prayer Last Supper frame photographed lying flat",
      },
    ],
  },
  {
    slug: "god-bless-our-home-last-supper-jerusalem",
    name: "“God Bless Our Home” Last Supper frame, Jerusalem",
    photos: [
      {
        src: jerusalemFront,
        alt: "Mother-of-pearl frame edged in abalone reading God Bless Our Home and Jerusalem, with a silver Last Supper relief and Jerusalem crosses",
      },
      {
        src: jerusalemClose,
        alt: "Closer view of the Jerusalem Last Supper frame and its mother-of-pearl tiles",
      },
    ],
  },
];

export function getProductPhotos(slug: string): ProductPhotoSet | undefined {
  return productPhotos.find((p) => p.slug === slug);
}
