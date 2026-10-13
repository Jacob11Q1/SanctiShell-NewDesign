import Link from "next/link";
import type { FaqItem } from "@/lib/faq";

// One question. Native <details>/<summary>: keyboard and screen-reader friendly
// with no JavaScript. Styles live in globals.css (.faq-item).
export function FaqAccordion({ item }: { item: FaqItem }) {
  return (
    <details className="faq-item group border-b border-border">
      <summary className="flex items-start justify-between gap-8 py-7 md:py-8">
        <span className="font-display text-[clamp(1.5rem,2.2vw,2rem)] font-light leading-snug transition-colors group-hover:text-accent">
          {item.question}
        </span>
        {/* Plus that becomes a minus when open */}
        <span aria-hidden="true" className="relative mt-3 h-4 w-4 shrink-0">
          <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-text" />
          <span className="faq-icon-vertical absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-text" />
        </span>
      </summary>
      <div className="faq-answer max-w-2xl pb-8 pr-12">
        <p className="text-base leading-relaxed text-text-muted">{item.answer}</p>
        {item.link && (
          <Link
            href={item.link.href}
            className="nacre-underline mt-5 inline-block text-[0.8125rem] font-medium tracking-[0.04em]"
          >
            {item.link.label} <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </details>
  );
}
