import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { LightSweep } from "@/components/motion/light-sweep";
import type { LegalBlock, LegalDoc } from "@/lib/legal/types";

function Block({ block }: { block: LegalBlock }) {
  if (typeof block === "string") {
    return <p className="text-base leading-[1.8] text-text-muted">{block}</p>;
  }
  return (
    <ul className="space-y-3">
      {block.list.map((item) => (
        <li key={item} className="flex gap-4 text-base leading-[1.8] text-text-muted">
          {/* Small pearl bullet */}
          <span aria-hidden="true" className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-nacre-rose to-nacre-aqua" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// Shared layout for Terms, Privacy and Cookies: a calm, readable document with a
// sticky table of contents, so long text still feels designed, not like fine print.
export function LegalPage({ doc }: { doc: LegalDoc }) {
  const external = (href: string) => href.startsWith("http");

  return (
    <>
      <section className="overflow-x-clip pb-16 pt-28 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-[1536px] px-4 md:px-8">
          <p className="eyebrow">{doc.eyebrow}</p>
          <h1 className="mt-6 font-display text-[clamp(3rem,8vw,8rem)] font-light leading-[0.92] tracking-[-0.02em]">
            <LightSweep>
              <span className="block">{doc.title[0]}</span>
              <span className="block sm:pl-[16%]">
                <em>{doc.title[1]}</em>
              </span>
            </LightSweep>
          </h1>
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-text-muted">{doc.intro}</p>
          <p className="eyebrow mt-8">
            Last updated <time dateTime={doc.updated.iso}>{doc.updated.label}</time>
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1536px] gap-12 px-4 pb-28 md:grid-cols-12 md:gap-8 md:px-8 md:pb-40">
        <nav aria-label="On this page" className="md:col-span-3">
          <p className="eyebrow hidden md:block">On this page</p>
          <ol className="flex flex-wrap gap-x-6 gap-y-3 md:sticky md:top-28 md:mt-6 md:flex-col md:gap-3">
            {doc.sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="nacre-underline text-sm text-text-muted hover:text-text">
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="md:col-span-7 md:col-start-5">
          {doc.sections.map((s, i) => (
            <FadeIn key={s.id}>
              <section
                id={s.id}
                aria-labelledby={`${s.id}-title`}
                className="scroll-mt-28 border-t border-border py-12 first:border-t-0 first:pt-0 md:py-14"
              >
                <p aria-hidden="true" className="font-display text-lg italic text-text-muted">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 id={`${s.id}-title`} className="mt-2 font-display text-[clamp(1.875rem,3vw,2.75rem)] font-light leading-tight">
                  {s.title}
                </h2>
                <div className="mt-6 max-w-2xl space-y-5">
                  {s.blocks.map((b, j) => (
                    <Block key={j} block={b} />
                  ))}
                </div>
                {s.links && (
                  <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                    {s.links.map((l) =>
                      external(l.href) ? (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="nacre-underline text-[0.8125rem] font-medium tracking-[0.04em]"
                        >
                          {l.label} <span aria-hidden="true">↗</span>
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      ) : (
                        <Link key={l.href} href={l.href} className="nacre-underline text-[0.8125rem] font-medium tracking-[0.04em]">
                          {l.label} <span aria-hidden="true">→</span>
                        </Link>
                      ),
                    )}
                  </div>
                )}
              </section>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
