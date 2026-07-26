export const site = {
  name: "No Label",
  tagline: "Food from its origin.",
  description:
    "We source food grown, processed, and prepared in the most organic and natural way — from the land and the people who know it best.",
  email: "hello@nolabel.farm",
  /** E.164 without +, used for wa.me links */
  whatsapp: "919392939897",
  phoneDisplay: "+91 93929 39897",
  origin: {
    label: "Source location",
    place: "Reddy Ganapavaram, Buttayagudem",
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

export const makers = {
  lakshmi: {
    id: "lakshmi",
    name: "Lakshmi",
    role: "Ghee from her kitchen",
    productId: "ghee" as const,
    eyebrow: "From Lakshmi’s kitchen",
    headline: "An offering made by hand — and by heart",
    summary:
      "Born into a rural household, Lakshmi prepares ghee the way her land taught her: clean, patient, and offered first to the divine.",
    portraitImage: "/images/ghee-method.png",
    portraitAlt: "Traditional ghee preparation in Lakshmi’s kitchen",
    story: [
      "Lakshmi was born in a rural household where food was never only fuel — it was devotion, craft, and care. She is deeply religious, and the kitchen remains the quiet centre of her day: a place of ritual as much as nourishment.",
      "She has two sons — one settled in the United States, another in Hyderabad — and still she tends the work closest to home. Native preparations of her land are her passion; she cooks and clarifies with the patience of someone who believes haste has no place in honest food.",
      "Above all, she loves her cattle — especially the cows. They are not distant livestock to her, but companions of the household: fed with care, spoken to, watched over. The milk she trusts begins with that bond — with animals she knows by temperament and routine, raised on natural fodder and treated with dignity.",
      "She takes pride in preparing ghee in the most authentic and clean manner. For Lakshmi, each jar is first an offering to God — clarified slowly, kept pure, made worthy of the altar as much as the table. The same ghee has now become her path to self-sufficiency: a craft she honours, and a livelihood she can stand behind without apology.",
    ],
  },
  veerraju: {
    id: "veerraju",
    name: "Veerraju",
    role: "Paddy from his farm",
    productId: "rice" as const,
    eyebrow: "From Veerraju’s farm",
    headline: "A farmer the village turns to",
    summary:
      "Veerraju grows paddy the natural way — knowledge shared with neighbours, fields tended for clean eating first, and now for a wider community that trusts his values.",
    portraitImage: "/images/rice-field.png",
    portraitAlt: "Natural paddy fields on Veerraju’s farm",
    story: [
      "Veerraju is a highly passionate farmer — one of the most knowledgeable in his village, often consulted by neighbours for advice on soil, season, seed, and care. When questions about paddy arise, people walk to his door.",
      "He has also been associated with research labs focused on paddy, carrying field wisdom into conversation with science, and bringing careful observation back to the land he farms.",
      "For years he has grown paddy in a natural way — without the chemical shortcuts that dull the soil and the grain. What began as a practice of clean eating for his own household has quietly widened: the same values now reach a community that believes in Veerraju’s way — food grown with conscience, from fields he can stand in and explain.",
    ],
  },
} as const;

export const products = {
  ghee: {
    id: "ghee",
    slug: "a2-cow-ghee",
    name: "Pure Organic A2 Cow Ghee",
    shortName: "A2 Cow Ghee",
    href: "/products/a2-cow-ghee",
    makerId: "lakshmi" as const,
    fromLabel: "From Lakshmi’s kitchen",
    blurb:
      "Bilona-style ghee from Lakshmi’s kitchen — A2 milk, curd-churned, prepared as an offering and kept clean enough for the altar.",
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
    makerId: "veerraju" as const,
    fromLabel: "From Veerraju’s farm",
    blurb:
      "Paddy from Veerraju’s farm — grown naturally for years, without pesticides, by a farmer the village trusts.",
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
export type MakerId = keyof typeof makers;

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
