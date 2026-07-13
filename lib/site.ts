export const site = {
  name: "No Label",
  tagline: "Food from its origin.",
  description:
    "We source food grown, processed, and prepared in the most organic and natural way — from the land and the people who know it best.",
  email: "hello@nolabel.farm",
  /** E.164 without +, used for wa.me links */
  whatsapp: "919493929897",
  phoneDisplay: "+91 94939 29897",
  origin: {
    label: "Source location",
    place: "Nimmala Gudem, Buttayagudem",
    region: "Eluru, Andhra Pradesh",
    country: "India",
    latitude: 17.201377,
    longitude: 81.251406,
    mapsUrl: "https://maps.app.goo.gl/j4GPWV5LLV7r6CpR7",
    mapsEmbedUrl:
      "https://www.google.com/maps?q=17.201377,81.251406&z=13&output=embed",
    blurb:
      "This is where our harvest begins — land we can point to, not a vague claim on a packet.",
  },
} as const;

export const products = {
  ghee: {
    id: "ghee",
    slug: "a2-cow-ghee",
    name: "Pure Organic A2 Cow Ghee",
    shortName: "A2 Cow Ghee",
    href: "/products/a2-cow-ghee",
    blurb:
      "Bilona-style ghee from A2 milk — made from curd, not milk poured straight into the pan.",
    enquireLabel: "Pure Organic A2 Cow Ghee",
    priceInr: 3000,
    priceUnit: "per kg",
    priceLabel: "₹3,000 / kg",
    images: {
      product: "/images/ghee-product.png",
      source: "/images/ghee-source.png",
      method: "/images/ghee-method.png",
    },
  },
  rice: {
    id: "rice",
    slug: "telangana-samba-rice",
    name: "Telangana Samba Rice",
    shortName: "Telangana Samba",
    href: "/products/telangana-samba-rice",
    blurb:
      "Traditionally grown without pesticides — a seed known for its naturally low glycemic index.",
    enquireLabel: "Telangana Samba Rice",
    priceInr: 2000,
    priceUnit: "per 25 kg bag",
    priceLabel: "₹2,000 / 25 kg bag",
    images: {
      product: "/images/rice-product.png",
      field: "/images/rice-field.png",
    },
  },
} as const;

export type ProductId = keyof typeof products | "both";

export function enquireHref(product?: ProductId) {
  if (!product) return "/enquire";
  return `/enquire?product=${product}`;
}

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function buildMailtoUrl(subject: string, body: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
