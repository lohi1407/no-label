import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { OriginMap } from "@/components/OriginMap";
import { PeopleOfOrigin } from "@/components/PeopleOfOrigin";
import { Reveal } from "@/components/Reveal";
import { enquireHref, products, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero />

      <section
        id="origin"
        className="relative scroll-mt-8 bg-atmosphere px-5 py-24 sm:px-8 sm:py-32"
      >
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-leaf">
              From the origin
            </p>
            <h2 className="font-display mt-4 text-3xl leading-tight text-soil sm:text-4xl md:text-5xl">
              No empty labels. Just where the food comes from — and who made it.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-soil/75">
              {site.name} exists to bring you food that has been grown,
              processed, or prepared in the most organic and natural way — traced
              back to Lakshmi’s kitchen, Veerraju’s paddy, and the land that
              feeds both. We believe the story of origin is the only label that
              matters.
            </p>
            <Link
              href="/#people"
              className="mt-8 inline-block text-sm text-leaf underline-offset-4 hover:underline"
            >
              Meet the people behind the harvest →
            </Link>
          </Reveal>
        </div>
      </section>

      <PeopleOfOrigin />

      <OriginMap />

      <section
        id="harvest"
        className="scroll-mt-8 border-t border-soil/8 bg-mist px-5 py-24 sm:px-8 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-leaf">
              The harvest
            </p>
            <h2 className="font-display mt-3 text-3xl text-soil sm:text-4xl">
              Two beginnings
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-10">
            <Reveal>
              <Link
                href={products.ghee.href}
                className="product-link group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-ghee-warm">
                  <Image
                    src={products.ghee.images.product}
                    alt={products.ghee.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="product-link-image object-cover"
                  />
                </div>
                <p className="mt-5 text-xs uppercase tracking-[0.22em] text-leaf">
                  {products.ghee.fromLabel}
                </p>
                <h3 className="font-display mt-2 text-2xl text-soil transition group-hover:text-leaf">
                  {products.ghee.name}
                </h3>
                <p className="mt-2 font-display text-lg text-leaf">
                  {products.ghee.priceLabel}
                </p>
                <p className="mt-2 max-w-md text-soil/70">{products.ghee.blurb}</p>
                <span className="mt-4 inline-block text-sm text-leaf underline-offset-4 group-hover:underline">
                  Discover the source →
                </span>
              </Link>
            </Reveal>

            <Reveal>
              <Link
                href={products.rice.href}
                className="product-link group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-paddy">
                  <Image
                    src={products.rice.images.product}
                    alt={products.rice.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="product-link-image object-cover"
                  />
                </div>
                <p className="mt-5 text-xs uppercase tracking-[0.22em] text-leaf">
                  {products.rice.fromLabel}
                </p>
                <h3 className="font-display mt-2 text-2xl text-soil transition group-hover:text-leaf">
                  {products.rice.name}
                </h3>
                <p className="mt-2 font-display text-lg text-leaf">
                  {products.rice.priceLabel}
                </p>
                <p className="mt-2 max-w-md text-soil/70">{products.rice.blurb}</p>
                <span className="mt-4 inline-block text-sm text-leaf underline-offset-4 group-hover:underline">
                  Discover the field →
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-leaf-deep px-5 py-20 text-mist sm:px-8 sm:py-24">
        <div className="pointer-events-none absolute inset-0 grain opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl">
              Ready to bring origin home?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-mist/75">
              Tell us what you need. We will respond with availability and how to
              order.
            </p>
            <Link
              href={enquireHref()}
              className="mt-8 inline-block rounded-sm bg-straw px-7 py-3 text-sm font-medium text-soil transition hover:bg-[#d4b584]"
            >
              Enquire or order
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
