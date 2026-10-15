import type { Metadata } from "next";
import { ContactDetails } from "@/components/contact/contact-details";
import { ContactForm } from "@/components/contact/contact-form";
import { FadeIn } from "@/components/motion/fade-in";
import { LightSweep } from "@/components/motion/light-sweep";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Write to the Sanctishell workshop on Eweena Street, Beit Sahour, Palestine. Questions about a piece, an order or our story go straight to our family.",
};

// Contact page (tracker #11). Form validated on the server; delivery waits for an
// email provider (see lib/contact-delivery.ts).
export default function ContactPage() {
  return (
    <>
      <section className="overflow-x-clip pb-16 pt-28 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-[1536px] px-4 md:px-8">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-6 font-display text-[clamp(3.25rem,9vw,9.5rem)] font-light leading-[0.92] tracking-[-0.02em]">
            <LightSweep>
              <span className="block">Write to</span>
              <span className="block sm:pl-[18%]">
                <em>the workshop.</em>
              </span>
            </LightSweep>
          </h1>
          <p className="mt-10 max-w-md text-lg leading-relaxed text-text-muted">
            A question about a piece, an order, or our story? Send us a message and our family will
            answer you.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1536px] gap-20 px-4 pb-28 md:grid-cols-12 md:gap-8 md:px-8 md:pb-44">
        <FadeIn className="md:col-span-7">
          <ContactForm />
        </FadeIn>
        <FadeIn delay={0.15} className="md:col-span-4 md:col-start-9">
          <ContactDetails />
        </FadeIn>
      </section>
    </>
  );
}
