"use client";

import { motion, useReducedMotion, useScroll } from "motion/react";
import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { RevealImage } from "@/components/motion/reveal-image";
import { SectionHeading } from "@/components/ui/section-heading";
import father from "@/public/story/father-farah-qumsiyeh.jpg";
import grandfather from "@/public/story/grandfather-jacob-qumsiyeh.jpg";
import grandson from "@/public/story/grandson-jacob-qumsiyeh.jpg";

type Generation = {
  when: string;
  name: string;
  role: string;
  text: string;
  photo: { src: StaticImageData; alt: string };
};

// Facts from Kai (2026-10-13). Only what he told us; gaps are marked TODO.
const generations: Generation[] = [
  {
    when: "1980",
    name: "Jacob Qumsiyeh",
    role: "The grandfather · Founder · 1980 – 2023",
    text: "He loved this craft and wanted to craft what Jesus did for us, so he opened a small workshop of his own in Beit Sahour. He went home to the Lord on 11 October 2023.",
    photo: { src: grandfather, alt: "Jacob Qumsiyeh, the founder, smiling in a dark suit" },
  },
  {
    when: "Then", // TODO: the year Farah started working with his father
    name: "Farah Qumsiyeh",
    role: "The son",
    text: "He started working with his father in the workshop and learned the craft from him.",
    photo: { src: father, alt: "Farah Qumsiyeh, smiling, in a light shirt" },
  },
  {
    when: "Today",
    name: "Jacob Qumsiyeh",
    role: "The grandson",
    text: "Sharing his grandfather's name, he works beside his father. Since his grandfather passed away, the two of them have carried the work on together, and this website is built in his memory.",
    photo: { src: grandson, alt: "Jacob Qumsiyeh, the grandson, seated at a wooden table" },
  },
];

// Three generations, joined by a thin iridescent line that draws itself down
// the page as you scroll (scaleY only; static for reduced-motion visitors).
export function StoryTimeline() {
  const ref = useRef<HTMLOListElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });

  return (
    <section className="mx-auto max-w-[1536px] px-4 py-28 md:px-8 md:py-40">
      <SectionHeading
        eyebrow="Three generations"
        title={
          <>
            Passed from hand
            <br />
            <em>to hand.</em>
          </>
        }
      />

      <ol ref={ref} className="relative mt-20 space-y-24 md:mt-28 md:space-y-40">
        {/* The line: a faint track, with the iridescent line drawing over it */}
        <span aria-hidden="true" className="absolute bottom-0 left-[7px] top-0 w-px bg-border md:left-1/2" />
        <motion.span
          aria-hidden="true"
          style={reduceMotion ? undefined : { scaleY: scrollYProgress }}
          className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-gradient-to-b from-nacre-rose via-nacre-lilac to-nacre-aqua md:left-1/2"
        />

        {generations.map((g, i) => {
          const flip = i % 2 === 1; // alternate sides on desktop
          return (
            <li
              key={g.role}
              className="relative grid gap-8 pl-10 md:grid-cols-2 md:items-center md:gap-0 md:pl-0"
            >
              {/* Pearl dot on the line */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-4 h-[15px] w-[15px] rounded-full border border-nacre-lilac bg-bg md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
              />

              {/* Portrait on one side of the line */}
              <div className={flip ? "md:order-2 md:pl-20" : "md:pr-20"}>
                <RevealImage className={`aspect-[4/5] w-full max-w-sm ${flip ? "" : "md:ml-auto"}`}>
                  <Image
                    src={g.photo.src}
                    alt={g.photo.alt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 768px) 384px, 90vw"
                    className="object-cover"
                  />
                </RevealImage>
              </div>

              {/* Year and person on the other side */}
              <FadeIn delay={0.12} className={flip ? "md:order-1 md:pr-20 md:text-right" : "md:pl-20"}>
                <p className="font-display text-[clamp(3.5rem,7vw,6.5rem)] font-light italic leading-none text-text-muted">
                  {g.when}
                </p>
                <h3 className="mt-6 font-display text-4xl font-light md:text-5xl">{g.name}</h3>
                <p className="eyebrow mt-3">{g.role}</p>
                <p className={`mt-6 max-w-md text-base leading-relaxed text-text-muted ${flip ? "md:ml-auto" : ""}`}>
                  {g.text}
                </p>
              </FadeIn>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
