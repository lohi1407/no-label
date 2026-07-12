import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { products, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-soil/10 bg-leaf-deep text-mist">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 sm:px-8 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <div className="inline-flex items-center gap-2.5 text-mist">
            <BrandMark className="h-9 w-9 text-straw" />
            <span className="font-display text-2xl tracking-tight">
              {site.name}
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-mist/75">
            {site.tagline} Grown, prepared, and brought to you without the noise —
            just the origin.
          </p>
        </div>

        <div className="flex flex-wrap gap-12 text-sm">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-straw">
              Products
            </p>
            <ul className="space-y-2 text-mist/85">
              <li>
                <Link href={products.ghee.href} className="hover:text-white">
                  {products.ghee.shortName}
                </Link>
              </li>
              <li>
                <Link href={products.rice.href} className="hover:text-white">
                  {products.rice.shortName}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-straw">
              Contact
            </p>
            <ul className="space-y-2 text-mist/85">
              <li>
                <Link href="/enquire" className="hover:text-white">
                  Enquire / Order
                </Link>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-mist/50 sm:px-8">
        © {new Date().getFullYear()} {site.name}. Food from its origin.
      </div>
    </footer>
  );
}
