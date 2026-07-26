import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { makers, products } from "@/lib/site";

const profiles = [makers.lakshmi, makers.veerraju] as const;

export function PeopleOfOrigin() {
  return (
    <section
      id="people"
      className="relative scroll-mt-8 overflow-hidden border-t border-soil/8 bg-earth-linen px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 grain" aria-hidden />
      <div
        className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-straw/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-leaf/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-leaf">
            The hands behind it
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl text-soil sm:text-4xl md:text-5xl">
            Food with a name, a kitchen, and a farm.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-soil/75">
            Behind every jar and every bag are people whose craft is older than
            branding — Lakshmi in her kitchen, Veerraju in his fields.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-10">
          {profiles.map((maker, index) => {
            const product = products[maker.productId];
            return (
              <Reveal key={maker.id} className={index === 1 ? "md:mt-10" : undefined}>
                <Link href={product.href} className="product-link group block">
                  <div className="relative aspect-[5/4] overflow-hidden rounded-sm">
                    <Image
                      src={maker.portraitImage}
                      alt={maker.portraitAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="product-link-image object-cover"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-soil/70 via-soil/20 to-transparent"
                      aria-hidden
                    />
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                      <p className="text-xs uppercase tracking-[0.22em] text-straw">
                        {maker.eyebrow}
                      </p>
                      <h3 className="font-display mt-2 text-2xl text-white sm:text-3xl">
                        {maker.name}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-5 max-w-md text-soil/75">{maker.summary}</p>
                  <span className="mt-4 inline-block text-sm text-leaf underline-offset-4 group-hover:underline">
                    Read {maker.name}’s story →
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
