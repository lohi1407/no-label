import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { enquireHref, products } from "@/lib/site";

export const metadata: Metadata = {
  title: products.rice.name,
  description: products.rice.blurb,
};

export default function TelanganaSambaRicePage() {
  return (
    <>
      <section className="relative min-h-[70svh] overflow-hidden grain">
        <Image
          src={products.rice.images.product}
          alt={products.rice.name}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-soil/80 via-leaf-deep/55 to-soil/25"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 md:justify-center">
          <p className="animate-fade-up text-xs uppercase tracking-[0.25em] text-straw">
            From the field
          </p>
          <h1 className="animate-fade-up animate-delay-1 font-display mt-3 max-w-2xl text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            {products.rice.name}
          </h1>
          <p className="animate-fade-up animate-delay-2 mt-5 max-w-lg text-lg text-white/85">
            Naturally grown in Telangana — traditional farming, no pesticides,
            and a seed known for its low glycemic index.
          </p>
          <Link
            href={enquireHref("rice")}
            className="animate-fade-up animate-delay-3 mt-8 inline-flex w-fit rounded-sm bg-straw px-6 py-3 text-sm font-medium text-soil transition hover:bg-[#d4b584]"
          >
            Enquire about rice
          </Link>
        </div>
      </section>

      <section className="bg-atmosphere px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16 md:items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src={products.rice.images.field}
                alt="Traditional Telangana paddy fields"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-leaf">
              Grown naturally
            </p>
            <h2 className="font-display mt-3 text-3xl text-soil sm:text-4xl">
              Traditional farming in Telangana — without pesticides
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-soil/75">
              <p>
                Telangana Samba is cultivated the way rice was meant to be grown:
                with attention to the season, the soil, and the seed — not with
                a spray schedule.
              </p>
              <p>
                Fields are managed through traditional practices: natural
                fertilisers, careful water use, and no chemical pesticides. The
                grain that reaches you carries the character of that land —
                clean, whole, and true to place.
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
                src={products.rice.images.product}
                alt="Telangana Samba rice grains"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="md:order-1">
            <p className="text-xs uppercase tracking-[0.25em] text-leaf">
              The seed
            </p>
            <h2 className="font-display mt-3 text-3xl text-soil sm:text-4xl">
              Naturally low glycemic index
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-soil/75">
              Beyond how it is grown, Telangana Samba is valued for the seed
              itself: a variety known for its low glycemic index. That means a
              steadier release of energy — rice that fits a mindful plate as
              well as a traditional one.
            </p>
            <p className="mt-4 text-base leading-relaxed text-soil/70">
              Origin, method, and variety — three reasons this grain earns a
              place on the table without needing a loud label.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-leaf-deep px-5 py-16 text-center text-mist sm:px-8">
        <Reveal>
          <p className="font-display text-2xl sm:text-3xl">
            Bring the field to your kitchen.
          </p>
          <Link
            href={enquireHref("rice")}
            className="mt-6 inline-block rounded-sm bg-straw px-7 py-3 text-sm font-medium text-soil transition hover:bg-[#d4b584]"
          >
            Enquire or order
          </Link>
        </Reveal>
      </section>
    </>
  );
}
