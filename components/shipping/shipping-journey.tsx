import { FadeIn } from "@/components/motion/fade-in";

// The four moments of a piece's journey. Only what is true for every order;
// no times or carriers until Kai confirms them (lib/shipping-policy.ts).
const steps = [
  { title: "Your order reaches us", text: "The moment you order, it comes straight to our family workshop." },
  { title: "We prepare your piece", text: "Your piece is made ready for its journey in Beit Sahour." },
  { title: "It leaves Palestine", text: "From Eweena Street, your piece sets out on its way to you." },
  { title: "It reaches you", text: "From our hands to yours." },
];

// From Beit Sahour to the customer: a pearl line with a point of light travelling
// along it, then the four steps beneath.
export function ShippingJourney() {
  return (
    <section className="mx-auto max-w-[1536px] overflow-x-clip px-4 pb-28 md:px-8 md:pb-40">
      <FadeIn>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">From</p>
            <p className="mt-3 font-display text-[clamp(1.75rem,4vw,3.5rem)] font-light leading-none">
              Beit Sahour
            </p>
          </div>
          <div className="text-right">
            <p className="eyebrow">To</p>
            <p className="mt-3 font-display text-[clamp(1.75rem,4vw,3.5rem)] font-light italic leading-none">
              your door
            </p>
          </div>
        </div>

        {/* The line, with its two end points and the travelling light */}
        <div aria-hidden="true" className="relative mt-8 h-[15px]">
          <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-nacre-rose via-nacre-lilac to-nacre-aqua" />
          <span className="absolute left-0 top-0 h-[15px] w-[15px] rounded-full border border-nacre-rose bg-bg" />
          <span className="absolute right-0 top-0 h-[15px] w-[15px] rounded-full border border-nacre-aqua bg-bg" />
          <span className="absolute inset-0 overflow-hidden">
            <span className="journey-runner absolute inset-0">
              <span className="absolute right-[2px] top-1/2 h-[11px] w-[11px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#fff,var(--color-nacre-lilac)_60%,transparent_75%)] shadow-[0_0_14px_4px_color-mix(in_srgb,var(--color-nacre-lilac)_55%,transparent)]" />
            </span>
          </span>
        </div>
      </FadeIn>

      <ol className="mt-16 grid gap-10 sm:grid-cols-2 md:mt-20 md:grid-cols-4 md:gap-8">
        {steps.map((step, i) => (
          <li key={step.title}>
            <FadeIn delay={0.1 + i * 0.1}>
              <p className="font-display text-xl italic text-text-muted">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-2 font-display text-3xl font-light">{step.title}</h2>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-muted">{step.text}</p>
            </FadeIn>
          </li>
        ))}
      </ol>
    </section>
  );
}
