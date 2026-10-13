import { ScrollWords } from "@/components/motion/scroll-words";

// TODO: approve prologue copy (Kai)
const text =
  "In a family workshop in Beit Sahour, near Bethlehem, mother-of-pearl and olive wood are cut, carved and polished by hand into crosses, rosaries and keepsakes. Many of them exist only once.";

// A single statement that lights up word by word as you scroll.
export function Prologue() {
  return (
    <section className="mx-auto max-w-[1536px] px-4 py-28 md:px-8 md:py-44">
      <div className="grid gap-8 md:grid-cols-12">
        <p className="eyebrow md:col-span-3 md:pt-4">Prologue</p>
        <ScrollWords
          text={text}
          className="font-display text-[clamp(2rem,4.2vw,4rem)] font-light leading-[1.15] tracking-[-0.01em] md:col-span-9"
        />
      </div>
    </section>
  );
}
