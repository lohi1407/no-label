"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import {
  buildMailtoUrl,
  buildWhatsAppUrl,
  products,
  type ProductId,
} from "@/lib/site";

const productOptions: { value: ProductId; label: string }[] = [
  {
    value: "ghee",
    label: `${products.ghee.enquireLabel} (${products.ghee.priceLabel})`,
  },
  {
    value: "rice",
    label: `${products.rice.enquireLabel} (${products.rice.priceLabel})`,
  },
  { value: "both", label: "Both products" },
];

function productLabel(id: ProductId) {
  return productOptions.find((o) => o.value === id)?.label ?? id;
}

function productPriceLine(id: ProductId) {
  if (id === "ghee") return products.ghee.priceLabel;
  if (id === "rice") return products.rice.priceLabel;
  return `${products.ghee.priceLabel}; ${products.rice.priceLabel}`;
}

export function EnquireForm() {
  const searchParams = useSearchParams();
  const initial = useMemo(() => {
    const p = searchParams.get("product");
    if (p === "ghee" || p === "rice" || p === "both") return p;
    return "ghee";
  }, [searchParams]);

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [product, setProduct] = useState<ProductId>(initial);
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");

  function composeBody() {
    return [
      `Hello No Label,`,
      ``,
      `I would like to enquire / order:`,
      `Name: ${name}`,
      `Phone / Email: ${contact}`,
      `Product: ${productLabel(product)}`,
      `Listed price: ${productPriceLine(product)}`,
      quantity ? `Quantity / note: ${quantity}` : null,
      message ? `Message: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");
  }

  function onWhatsApp(e: FormEvent) {
    e.preventDefault();
    window.open(buildWhatsAppUrl(composeBody()), "_blank", "noopener,noreferrer");
  }

  function onEmail(e: FormEvent) {
    e.preventDefault();
    window.location.href = buildMailtoUrl(
      `Enquiry: ${productLabel(product)}`,
      composeBody(),
    );
  }

  return (
    <form className="space-y-6" onSubmit={onWhatsApp}>
      <div>
        <label htmlFor="name" className="mb-2 block text-sm text-soil/80">
          Name
        </label>
        <input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-sm border border-soil/15 bg-white/70 px-4 py-3 text-ink outline-none ring-leaf/40 transition focus:ring-2"
          autoComplete="name"
        />
      </div>

      <div>
        <label htmlFor="contact" className="mb-2 block text-sm text-soil/80">
          Phone or email
        </label>
        <input
          id="contact"
          required
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="w-full rounded-sm border border-soil/15 bg-white/70 px-4 py-3 text-ink outline-none ring-leaf/40 transition focus:ring-2"
          autoComplete="tel"
        />
      </div>

      <div>
        <label htmlFor="product" className="mb-2 block text-sm text-soil/80">
          Product
        </label>
        <select
          id="product"
          value={product}
          onChange={(e) => setProduct(e.target.value as ProductId)}
          className="w-full rounded-sm border border-soil/15 bg-white/70 px-4 py-3 text-ink outline-none ring-leaf/40 transition focus:ring-2"
        >
          {productOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="quantity" className="mb-2 block text-sm text-soil/80">
          Quantity or note
        </label>
        <input
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="e.g. 1 kg ghee, 5 kg rice"
          className="w-full rounded-sm border border-soil/15 bg-white/70 px-4 py-3 text-ink outline-none ring-leaf/40 transition focus:ring-2 placeholder:text-soil/35"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-soil/80">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-y rounded-sm border border-soil/15 bg-white/70 px-4 py-3 text-ink outline-none ring-leaf/40 transition focus:ring-2"
        />
      </div>

      <div className="flex flex-wrap gap-3 pt-2">
        <button
          type="submit"
          className="rounded-sm bg-leaf px-6 py-3 text-sm font-medium text-white transition hover:bg-leaf-deep"
        >
          Send on WhatsApp
        </button>
        <button
          type="button"
          onClick={onEmail}
          className="rounded-sm border border-soil/25 px-6 py-3 text-sm font-medium text-soil transition hover:bg-field"
        >
          Send by email
        </button>
      </div>
    </form>
  );
}
