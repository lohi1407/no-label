import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { enquireHref, products } from "@/lib/site";

export const metadata: Metadata = {
  title: products.ghee.name,
  description: products.ghee.blurb,
};

export default function A2CowGheePage() {
  return (
    <>
      <section className="relative min-h-[70svh] overflow-hidden grain">
        <Image
          src={products.ghee.images.product}
          alt={products.ghee.name}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-soil/80 via-soil/50 to-soil/25"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 md:justify-center">
          <p className="animate-fade-up text-xs uppercase tracking-[0.25em] text-straw">
            From the pasture
          </p>
          <h1 className="animate-fade-up animate-delay-1 font-display mt-3 max-w-2xl text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            {products.ghee.name}
          </h1>
          <p className="animate-fade-up animate-delay-2 mt-5 max-w-lg text-lg text-white/85">
            Slow-made ghee from A2 cow milk — prepared the traditional way,
            beginning with curd.
          </p>
          <Link
            href={enquireHref("ghee")}
            className="animate-fade-up animate-delay-3 mt-8 inline-flex w-fit rounded-sm bg-straw px-6 py-3 text-sm font-medium text-soil transition hover:bg-[#d4b584]"
          >
            Enquire about ghee
          </Link>
        </div>
      </section>

      <section className="bg-atmosphere px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16 md:items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src={products.ghee.images.source}
                alt="Cows grazing on natural pasture"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-leaf">
              The source
            </p>
            <h2 className="font-display mt-3 text-3xl text-soil sm:text-4xl">
              How the cows are fed, and where the milk begins
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-soil/75">
              <p>
                Our A2 ghee starts with cows raised on natural fodder — green
                pasture, dry fodder, and feed free from industrial additives.
                Their milk carries the A2 beta-casein protein, valued for its
                gentler, traditional character.
              </p>
              <p>
                Milk is collected from farms that follow organic practices:
                open grazing where possible, clean sheds, and no routine
                chemical shortcuts. What goes into the cow shapes what ends up
                in the jar — so we begin at the source, not at the shelf.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-soil/8 bg-mist px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16 md:items-center">
          <Reveal className="md:order-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src={products.ghee.images.method}
                alt="Traditional bilona-style ghee being clarified"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="md:order-1">
            <p className="text-xs uppercase tracking-[0.25em] text-leaf">
              The method
            </p>
            <h2 className="font-display mt-3 text-3xl text-soil sm:text-4xl">
              From curd — not milk poured straight into the pan
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-soil/75">
              <p>
                Most commercial ghee is made by heating cream or milk fat
                directly. Ours follows the older path: fresh milk is set into
                curd, then churned to separate butter — a bilona-style process
                that takes time and care.
              </p>
              <p>
                That butter is gently clarified over a slow fire until the water
                leaves and the milk solids settle, leaving pure ghee with a deep
                aroma and golden clarity. Curd first, then churn, then clarify —
                the long way, on purpose.
              </p>
            </div>
            <ol className="mt-8 space-y-3 text-sm text-soil/80">
              <li className="flex gap-3">
                <span className="font-display text-straw">01</span>
                Milk set into curd
              </li>
              <li className="flex gap-3">
                <span className="font-display text-straw">02</span>
                Curd churned into butter
              </li>
              <li className="flex gap-3">
                <span className="font-display text-straw">03</span>
                Butter slowly clarified into ghee
              </li>
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="bg-leaf-deep px-5 py-16 text-center text-mist sm:px-8">
        <Reveal>
          <p className="font-display text-2xl sm:text-3xl">
            Taste the difference origin makes.
          </p>
          <Link
            href={enquireHref("ghee")}
            className="mt-6 inline-block rounded-sm bg-straw px-7 py-3 text-sm font-medium text-soil transition hover:bg-[#d4b584]"
          >
            Enquire or order
          </Link>
        </Reveal>
      </section>
    </>
  );
}
