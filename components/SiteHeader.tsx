"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { products } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const light = pathname.startsWith("/enquire");

  const linkClass = light
    ? "transition-opacity hover:opacity-70 text-soil"
    : "transition-opacity hover:opacity-70 text-white/90";

  const ctaClass = light
    ? "rounded-sm border border-soil/30 px-4 py-2 text-soil transition hover:bg-field"
    : "rounded-sm border border-white/40 px-4 py-2 text-white transition hover:bg-white/10";

  return (
    <header
      className={
        light
          ? "absolute inset-x-0 top-0 z-50 border-b border-soil/8 bg-mist/90 backdrop-blur"
          : "absolute inset-x-0 top-0 z-50"
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <BrandLogo variant={light ? "dark" : "light"} />

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <Link href="/#origin" className={linkClass}>
            Origin
          </Link>
          <Link href="/#people" className={linkClass}>
            People
          </Link>
          <Link href="/#source" className={linkClass}>
            Source
          </Link>
          <div className="group relative">
            <button type="button" className={linkClass} aria-haspopup="true">
              Products
            </button>
            <div className="invisible absolute left-1/2 top-full z-10 mt-3 w-56 -translate-x-1/2 rounded-md bg-mist p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              <Link
                href={products.ghee.href}
                className="block rounded px-3 py-2 text-ink transition hover:bg-field"
              >
                {products.ghee.shortName}
              </Link>
              <Link
                href={products.rice.href}
                className="block rounded px-3 py-2 text-ink transition hover:bg-field"
              >
                {products.rice.shortName}
              </Link>
            </div>
          </div>
          <Link href="/enquire" className={ctaClass}>
            Enquire
          </Link>
        </nav>

        <button
          type="button"
          className={`flex h-10 w-10 items-center justify-center md:hidden ${light ? "text-soil" : "text-white"}`}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          className={
            light
              ? "border-t border-soil/10 bg-mist px-5 py-6 text-soil md:hidden"
              : "border-t border-white/15 bg-soil/95 px-5 py-6 text-white backdrop-blur md:hidden"
          }
        >
          <nav className="flex flex-col gap-4 text-base">
            <Link href="/#origin" onClick={() => setOpen(false)}>
              Origin
            </Link>
            <Link href="/#people" onClick={() => setOpen(false)}>
              People
            </Link>
            <Link href="/#source" onClick={() => setOpen(false)}>
              Source
            </Link>
            <Link href={products.ghee.href} onClick={() => setOpen(false)}>
              {products.ghee.shortName}
            </Link>
            <Link href={products.rice.href} onClick={() => setOpen(false)}>
              {products.rice.shortName}
            </Link>
            <Link href="/enquire" onClick={() => setOpen(false)}>
              Enquire
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
