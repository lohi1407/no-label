export function BrandMark({
  className = "h-8 w-8",
  title = "No Label",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      {/* Leaf */}
      <path
        d="M32 6C20 14 12 26 12 38c0 12 8.5 20 20 20s20-8 20-20C52 26 44 14 32 6Z"
        fill="currentColor"
        opacity="0.92"
      />
      {/* Center vein */}
      <path
        d="M32 14v38"
        stroke="var(--mist, #f2f5ef)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />
      {/* Side veins */}
      <path
        d="M32 24c-6 4-10 9-12 14M32 24c6 4 10 9 12 14M32 34c-5 3-8 7-9 11M32 34c5 3 8 7 9 11"
        stroke="var(--mist, #f2f5ef)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
      {/* Grain / seed at base */}
      <ellipse cx="32" cy="52" rx="4.5" ry="6" fill="currentColor" />
      <path
        d="M32 47v10"
        stroke="var(--mist, #f2f5ef)"
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
