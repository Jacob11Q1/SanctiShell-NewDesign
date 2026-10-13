import type { Metadata } from "next";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { FadeIn } from "@/components/motion/fade-in";
import { LightSweep } from "@/components/motion/light-sweep";
import { ButtonLink } from "@/components/ui/button-link";
import { getPublishedFaq } from "@/lib/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about our handmade mother-of-pearl and olive wood pieces, payment, digital products, caring for your piece and our family workshop in Beit Sahour.",
};

// FAQ (tracker #11). Only questions Kai has answered appear here (see lib/faq.ts).
export default function FaqPage() {
  const categories = getPublishedFaq();

  // FAQPage structured data for search engines, built from the same visible answers.
  // Static content we control; "<" is escaped so it can never close the script tag.
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: categories.flatMap((c) =>
      c.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    ),
  }).replace(/</g, "\\u003c");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      {/* Opening */}
      <section className="overflow-x-clip pb-16 pt-28 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-[1536px] px-4 md:px-8">
          <p className="eyebrow">FAQ</p>
          <h1 className="mt-6 font-display text-[clamp(3.25rem,9vw,9.5rem)] font-light leading-[0.92] tracking-[-0.02em]">
            <LightSweep>
              <span className="block">Questions,</span>
              <span className="block sm:pl-[16%]">
                <em>answered.</em>
              </span>
            </LightSweep>
          </h1>
          <p className="mt-10 max-w-md text-lg leading-relaxed text-text-muted">
            Everything you might want to know about our pieces and how they reach you. If your
            question isn&apos;t here, we&apos;re happy to help.
          </p>
        </div>
      </section>

      {/* Questions, with a sticky index of topics on desktop */}
      <section className="mx-auto grid max-w-[1536px] gap-12 px-4 pb-28 md:grid-cols-12 md:gap-8 md:px-8 md:pb-40">
        <nav aria-label="FAQ topics" className="md:col-span-3">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 md:sticky md:top-28 md:flex-col md:gap-4">
            {categories.map((c) => (
              <li key={c.id}>
                <a href={`#${c.id}`} className="nacre-underline text-sm text-text-muted hover:text-text">
                  {c.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-20 md:col-span-8 md:col-start-5 md:space-y-28">
          {categories.map((c) => (
            // scroll-mt keeps the heading clear of the fixed header when jumping to it
            <FadeIn key={c.id}>
              <section id={c.id} aria-labelledby={`${c.id}-title`} className="scroll-mt-28">
                <h2 id={`${c.id}-title`} className="eyebrow border-b border-border pb-5">
                  {c.title}
                </h2>
                {c.items.map((item) => (
                  <FaqAccordion key={item.question} item={item} />
                ))}
              </section>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Still a question? */}
      <section className="overflow-x-clip bg-gradient-to-b from-bg to-surface">
        <FadeIn className="mx-auto max-w-[1536px] px-4 py-28 text-center md:px-8 md:py-40">
          <p className="eyebrow">Still wondering?</p>
          <h2 className="mt-6 font-display text-[clamp(2.75rem,6vw,5.5rem)] font-light leading-[0.98] tracking-[-0.015em]">
            Ask the <em>workshop.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-text-muted">
            Send us your question and our family will answer it personally.
          </p>
          <div className="mt-10">
            <ButtonLink href="/contact">Contact us</ButtonLink>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
