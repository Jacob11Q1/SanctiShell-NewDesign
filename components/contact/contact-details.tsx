import Link from "next/link";

// A plain search link: opens the visitor's maps app at the workshop's street.
// (No embedded map, so no third-party tracking on the page.)
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Eweena Street, Beit Sahour, Palestine",
)}`;

// The workshop's details, beside the form. Only facts Kai has given us.
// TODO: add the workshop's email / phone / WhatsApp once Kai shares them.
export function ContactDetails() {
  return (
    <aside className="space-y-12">
      <div>
        <p className="eyebrow">The workshop</p>
        <address className="mt-5 font-display text-3xl font-light not-italic leading-snug">
          Eweena Street
          <br />
          Beit Sahour
          <br />
          Palestine
        </address>
        <p className="mt-4 text-sm text-text-muted">Just east of Bethlehem.</p>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="nacre-underline mt-6 inline-block text-[0.8125rem] font-medium tracking-[0.04em]"
        >
          Open in Maps <span aria-hidden="true">↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>

      <div className="border-t border-border pt-10">
        <p className="eyebrow">Who reads your message</p>
        <p className="mt-5 max-w-xs text-base leading-relaxed text-text-muted">
          Our family workshop is Farah Qumsiyeh and his son Jacob. Your message comes straight to
          us.
        </p>
        <Link
          href="/artisans"
          className="nacre-underline mt-6 inline-block text-[0.8125rem] font-medium tracking-[0.04em]"
        >
          Meet the artisans <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="border-t border-border pt-10">
        <p className="eyebrow">Before you write</p>
        <p className="mt-5 max-w-xs text-base leading-relaxed text-text-muted">
          Many questions about our pieces and how they&apos;re made are already answered.
        </p>
        <Link
          href="/faq"
          className="nacre-underline mt-6 inline-block text-[0.8125rem] font-medium tracking-[0.04em]"
        >
          Read the FAQ <span aria-hidden="true">→</span>
        </Link>
      </div>
    </aside>
  );
}
