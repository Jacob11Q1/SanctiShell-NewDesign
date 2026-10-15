"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { RevealImage } from "@/components/motion/reveal-image";
import { SectionHeading } from "@/components/ui/section-heading";
// Close-ups cut from Kai's real product photos. TODO: reshoot on clean background
import abaloneDetail from "@/public/artisans/detail-abalone-mother-of-pearl.jpg";
import tilesDetail from "@/public/artisans/detail-frame-tiles.jpg";
import oliveDetail from "@/public/artisans/detail-olive-wood-abalone.jpg";

// The real process, as Kai described it (2026-10-15).
const steps = [
  { title: "The shell", text: "Every cross begins with a sea shell." },
  { title: "Cut", text: "The shell is cut, all of it, by hand." },
  { title: "Polish", text: "Each piece is polished to bring out its light." },
  { title: "Set", text: "The pieces are laid onto the cross and glued, one by one." },
  { title: "Shape", text: "Each piece is roughed and shaped to fit its exact place on the cross." },
];

const details = [
  { src: abaloneDetail, alt: "Close-up of abalone and white mother-of-pearl around a gold-rimmed window", caption: "Abalone & mother-of-pearl" },
  { src: oliveDetail, alt: "Close-up of olive wood edged with a thin abalone inlay", caption: "Olive wood, abalone inlay" },
  { src: tilesDetail, alt: "Close-up of hand-cut mother-of-pearl tiles framed by abalone", caption: "Hand-cut mother-of-pearl tiles" },
];

const ease = [0.22, 1, 0.36, 1] as const;

// How a cross is made: five steps joined by a hairline that draws across them,
// the time it takes, and macro details of the finished work.
export function ArtisansProcess() {
  return (
    <section className="mx-auto max-w-[1536px] overflow-x-clip px-4 py-28 md:px-8 md:py-44">
      <div className="grid gap-12 md:grid-cols-12 md:items-end md:gap-8">
        <SectionHeading
          eyebrow="How a cross is made"
          title={
            <>
              From the sea,
              <br />
              <em>by hand.</em>
            </>
          }
          className="md:col-span-7"
        />
        {/* The time it takes, set large */}
        <FadeIn className="md:col-span-4 md:col-start-9">
          <p className="font-display text-[clamp(4.5rem,9vw,8rem)] font-light leading-none">
            4–5 <em className="text-[0.45em]">days</em>
          </p>
          <p className="mt-4 max-w-xs text-base leading-relaxed text-text-muted">
            for every cross, because everything, to this day, is made by hand.
          </p>
        </FadeIn>
      </div>

      <div className="relative mt-20 md:mt-28">
        {/* Hairline that draws across the steps (scaleX, desktop) */}
        <motion.span
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "0px 0px -20% 0px" }}
          transition={{ duration: 1.6, ease }}
          className="absolute left-0 right-0 top-[11px] hidden h-px origin-left bg-gradient-to-r from-nacre-rose via-nacre-lilac to-nacre-aqua md:block"
        />
        <ol className="grid gap-10 border-l border-border pl-8 md:grid-cols-5 md:gap-8 md:border-l-0 md:pl-0">
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              {/* Pearl dot sitting on the line */}
              <span
                aria-hidden="true"
                className="absolute -left-[39px] top-[4px] h-[15px] w-[15px] rounded-full border border-nacre-lilac bg-bg md:left-0"
              />
              <FadeIn delay={0.15 + i * 0.12}>
                <p className="font-display text-xl italic text-text-muted md:pt-10">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-3xl font-light md:text-4xl">{step.title}</h3>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-muted">{step.text}</p>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>

      {/* Macro details of the finished work */}
      <div className="mt-24 grid gap-6 sm:grid-cols-3 md:mt-36 md:gap-8">
        {details.map((d, i) => (
          <figure key={d.caption}>
            <RevealImage className="sheen aspect-square" delay={i * 0.12}>
              <Image src={d.src} alt={d.alt} fill placeholder="blur" sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
            </RevealImage>
            <figcaption className="eyebrow mt-4">{d.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
