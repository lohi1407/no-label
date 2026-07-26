import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden grain">
      <Image
        src="/images/rice-field.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-soil/82 via-leaf-deep/58 to-soil/32"
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20 md:justify-center md:pb-24">
        <p className="animate-fade-up font-display text-5xl leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          {site.name}
        </p>
        <p className="animate-fade-up animate-delay-1 mt-5 max-w-md text-lg leading-relaxed text-white/85 sm:text-xl">
          From Lakshmi’s kitchen and Veerraju’s farm — food grown and prepared
          the natural way, with a name behind every harvest.
        </p>
        <div className="animate-fade-up animate-delay-2 mt-10 flex flex-wrap gap-4">
          <Link
            href="#harvest"
            className="rounded-sm bg-straw px-6 py-3 text-sm font-medium text-soil transition hover:bg-[#d4b584]"
          >
            Shop the harvest
          </Link>
          <Link
            href="#people"
            className="rounded-sm border border-white/45 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Meet the makers
          </Link>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-mist to-transparent"
        aria-hidden
      />
    </section>
  );
}
