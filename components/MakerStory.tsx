import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { makers, products, type MakerId } from "@/lib/site";

type MakerStoryProps = {
  makerId: MakerId;
  /** When true, show a link through to the product page */
  withProductLink?: boolean;
  /** Flip image/text for visual rhythm */
  reverse?: boolean;
  className?: string;
};

export function MakerStory({
  makerId,
  withProductLink = false,
  reverse = false,
  className = "",
}: MakerStoryProps) {
  const maker = makers[makerId];
  const product = products[maker.productId];

  return (
    <section
      className={`relative overflow-hidden border-t border-soil/8 bg-earth-linen px-5 py-20 sm:px-8 sm:py-28 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 grain opacity-60" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16 md:items-center">
        <Reveal className={reverse ? "md:order-2" : undefined}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-[0_24px_60px_-36px_rgba(44,36,22,0.55)]">
            <Image
              src={maker.portraitImage}
              alt={maker.portraitAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-soil/45 via-transparent to-transparent"
              aria-hidden
            />
            <p className="absolute bottom-4 left-4 right-4 font-display text-lg text-white/95 sm:text-xl">
              {maker.name}
              <span className="mt-1 block text-sm font-sans tracking-wide text-straw/90">
                {maker.role}
              </span>
            </p>
          </div>
        </Reveal>

        <Reveal className={reverse ? "md:order-1" : undefined}>
          <p className="text-xs uppercase tracking-[0.25em] text-leaf">
            {maker.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl text-soil sm:text-4xl">
            {maker.headline}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-soil/75">
            {maker.story.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
          {withProductLink && (
            <Link
              href={product.href}
              className="mt-8 inline-block text-sm text-leaf underline-offset-4 hover:underline"
            >
              Meet {product.shortName} →
            </Link>
          )}
        </Reveal>
      </div>
    </section>
  );
}
