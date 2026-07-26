import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MakerStory } from "@/components/MakerStory";
import { Reveal } from "@/components/Reveal";
import { enquireHref, makers, products } from "@/lib/site";

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
            {products.ghee.fromLabel}
          </p>
          <h1 className="animate-fade-up animate-delay-1 font-display mt-3 max-w-2xl text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            {products.ghee.name}
          </h1>
          <p className="animate-fade-up animate-delay-2 mt-4 font-display text-2xl text-straw sm:text-3xl">
            {products.ghee.priceLabel}
          </p>
          <p className="animate-fade-up animate-delay-2 mt-5 max-w-lg text-lg text-white/85">
            Slow-made ghee from A2 cow milk — prepared in Lakshmi’s kitchen the
            traditional way, beginning with curd, offered with devotion.
          </p>
          <Link
            href={enquireHref("ghee")}
            className="animate-fade-up animate-delay-3 mt-8 inline-flex w-fit rounded-sm bg-straw px-6 py-3 text-sm font-medium text-soil transition hover:bg-[#d4b584]"
          >
            Enquire about ghee
          </Link>
        </div>
      </section>

      <MakerStory makerId="lakshmi" />

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
              Her cattle
            </p>
            <h2 className="font-display mt-3 text-3xl text-soil sm:text-4xl">
              Cows she knows — milk she trusts
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-soil/75">
              <p>
                Lakshmi’s love for cattle runs through every jar. The cows are
                companions of her rural household: tended with patience, fed on
                natural fodder — green pasture, dry fodder, and feed free from
                industrial additives — and never treated as a distant resource.
              </p>
              <p>
                Their milk carries the A2 beta-casein protein, valued for its
                gentler, traditional character. What goes into the cow shapes
                what ends up in the jar — so she begins at the bond with her
                animals, not at the shelf.
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
              From curd — clean enough for an offering
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-soil/75">
              <p>
                Most commercial ghee is made by heating cream or milk fat
                directly. In Lakshmi’s kitchen the older path holds: fresh milk
                is set into curd, then churned to separate butter — a
                bilona-style process that takes time and care.
              </p>
              <p>
                That butter is gently clarified over a slow fire until the water
                leaves and the milk solids settle, leaving pure ghee with a deep
                aroma and golden clarity. For her, authenticity and cleanliness
                are not marketing words — they are how an offering is made.
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

      <section className="relative overflow-hidden bg-leaf-deep px-5 py-16 text-center text-mist sm:px-8">
        <div className="pointer-events-none absolute inset-0 grain opacity-40" aria-hidden />
        <Reveal className="relative">
          <p className="font-display text-2xl sm:text-3xl">
            Taste the difference {makers.lakshmi.name}’s kitchen makes.
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
