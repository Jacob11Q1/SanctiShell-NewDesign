import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { LightSweep } from "@/components/motion/light-sweep";
import { Parallax } from "@/components/motion/parallax";
import { ButtonLink } from "@/components/ui/button-link";
// TODO: replace with real photo (a piece in a customer's hands, or Bethlehem light)
import closingImage from "@/public/placeholders/closing-olive-light.jpg";

// Chapter V: in your hands. Sunlight through olive leaves, and the final call to shop.
// Flows straight into the dark footer.
export function ChapterClosing() {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-text text-bg">
      <Parallax distance={160} className="absolute inset-x-0 -bottom-[12%] -top-[12%]">
        <Image
          src={closingImage}
          alt="Sunlight shining through olive branches"
          fill
          placeholder="blur"
          sizes="100vw"
          className="object-cover"
        />
      </Parallax>
      <div aria-hidden="true" className="absolute inset-0 bg-text/45" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-text to-transparent" />

      <div className="relative mx-auto flex h-full max-w-[1536px] flex-col items-center justify-center px-4 text-center md:px-8">
        <FadeIn>
          <p className="eyebrow text-bg/75">
            Chapter V <span aria-hidden="true">·</span> In your hands
          </p>
          {/* TODO: approve closing copy (Kai) */}
          <h2 className="mt-6 font-display text-[clamp(3rem,8vw,8rem)] font-light leading-[0.95] tracking-[-0.02em]">
            <LightSweep>
              From Bethlehem,
              <br />
              <em>to you.</em>
            </LightSweep>
          </h2>
          <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-bg/80">
            Each piece leaves our workshop carrying the place it was made, and the hands that made it.
          </p>
          <div className="mt-10">
            <ButtonLink href="/shop" variant="light">
              Shop the collection
            </ButtonLink>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
