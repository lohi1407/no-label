import Image from "next/image";
import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { site } from "@/lib/site";

type BrandLogoProps = {
  variant?: "light" | "dark";
  showWordmark?: boolean;
  className?: string;
  markClassName?: string;
  /** Use photographic/generated mark instead of SVG */
  useImage?: boolean;
};

export function BrandLogo({
  variant = "dark",
  showWordmark = true,
  className = "",
  markClassName = "h-8 w-8",
  useImage = false,
}: BrandLogoProps) {
  const textClass =
    variant === "light"
      ? "text-white drop-shadow-sm"
      : "text-soil";

  const markColor =
    variant === "light" ? "text-straw" : "text-leaf-deep";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 ${textClass} ${className}`}
    >
      {useImage ? (
        <Image
          src="/brand/mark.png"
          alt=""
          width={32}
          height={32}
          className={`${markClassName} object-contain`}
          priority
        />
      ) : (
        <BrandMark className={`${markClassName} ${markColor}`} />
      )}
      {showWordmark && (
        <span className="font-display text-xl tracking-tight sm:text-2xl">
          {site.name}
        </span>
      )}
    </Link>
  );
}
