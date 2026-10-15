import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { LightSweep } from "@/components/motion/light-sweep";
import { ShippingJourney } from "@/components/shipping/shipping-journey";
import { ButtonLink } from "@/components/ui/button-link";
import { getPublishedShippingSections, shippingPolicy } from "@/lib/shipping-policy";

export const metadata: Metadata = {
  title: "Shipping",
  description:
    "How our handmade mother-of-pearl and olive wood pieces travel from our family workshop in Beit Sahour, Palestine, to your door. Digital products arrive by email.",
};

// Shipping page (tracker #11). Policy details come only from lib/shipping-policy.ts;
// sections Kai hasn't answered are not shown.
export default function ShippingPage() {
  const sections = getPublishedShippingSections();

  return (
    <>
      <section className="overflow-x-clip pb-20 pt-28 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-[1536px] px-4 md:px-8">
          <p className="eyebrow">Shipping</p>
          <h1 className="mt-6 font-display text-[clamp(3.25rem,9vw,9.5rem)] font-light leading-[0.92] tracking-[-0.02em]">
            <LightSweep>
              <span className="block">From Beit Sahour,</span>
              <span className="block sm:pl-[18%]">
                <em>to your door.</em>
              </span>
            </LightSweep>
          </h1>
          <p className="mt-10 max-w-md text-lg leading-relaxed text-text-muted">
            Every piece leaves our family workshop on {shippingPolicy.shipsFrom}.
          </p>
        </div>
      </section>

      <ShippingJourney />

      {/* The policy itself: only the parts Kai has confirmed */}
      <section className="bg-gradient-to-b from-bg to-surface">
        <div className="mx-auto grid max-w-[1536px] gap-12 px-4 py-28 md:grid-cols-12 md:gap-8 md:px-8 md:py-40">
          <FadeIn className="md:col-span-4">
            <p className="eyebrow">The details</p>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[0.98]">
              Good to <em>know.</em>
            </h2>
          </FadeIn>

          <div className="md:col-span-7 md:col-start-6">
            {sections.length > 0 ? (
              <dl className="divide-y divide-border border-y border-border">
                {sections.map((s) => (
                  <FadeIn key={s.title} className="grid gap-3 py-8 md:grid-cols-[14rem_1fr] md:gap-8">
                    <dt className="eyebrow pt-1">{s.title}</dt>
                    <dd className="text-base leading-relaxed text-text-muted">{s.text}</dd>
                  </FadeIn>
                ))}
              </dl>
            ) : (
              // Honest placeholder until Kai shares the policy (true: the shop isn't open yet).
              // TODO: disappears automatically once lib/shipping-policy.ts is filled in
              <FadeIn className="border-y border-border py-10">
                <p className="font-display text-[clamp(1.5rem,2.4vw,2.125rem)] font-light leading-snug">
                  Destinations, delivery times and shipping costs will be listed here before our
                  shop opens.
                </p>
                <p className="mt-5 max-w-md text-base leading-relaxed text-text-muted">
                  Have a question about sending a piece to your country? Write to us and we will
                  answer you personally.
                </p>
                <Link
                  href="/contact"
                  className="nacre-underline mt-6 inline-block text-[0.8125rem] font-medium tracking-[0.04em]"
                >
                  Contact the workshop <span aria-hidden="true">→</span>
                </Link>
              </FadeIn>
            )}

            {/* Always true: digital products don't ship */}
            <FadeIn className="mt-14 grid gap-3 md:grid-cols-[14rem_1fr] md:gap-8">
              <p className="eyebrow pt-1">Digital products</p>
              <p className="text-base leading-relaxed text-text-muted">
                Nothing to ship. Right after your payment, we email you a secure, personal download
                link.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1536px] px-4 py-28 text-center md:px-8 md:py-40">
        <FadeIn>
          <p className="eyebrow">More answers</p>
          <h2 className="mt-6 font-display text-[clamp(2.75rem,6vw,5.5rem)] font-light leading-[0.98] tracking-[-0.015em]">
            Still have a <em>question?</em>
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            <ButtonLink href="/faq">Read the FAQ</ButtonLink>
            <Link href="/contact" className="nacre-underline text-[0.8125rem] font-medium tracking-[0.04em]">
              Contact us
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
