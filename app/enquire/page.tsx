import type { Metadata } from "next";
import { Suspense } from "react";
import { EnquireForm } from "@/components/EnquireForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Enquire",
  description: `Enquire or order from ${site.name}.`,
};

export default function EnquirePage() {
  return (
    <section className="bg-atmosphere px-5 pb-24 pt-28 sm:px-8 sm:pb-32 sm:pt-32">
      <div className="mx-auto max-w-xl">
        <p className="text-xs uppercase tracking-[0.25em] text-leaf">
          Enquire / Order
        </p>
        <h1 className="font-display mt-3 text-4xl text-soil sm:text-5xl">
          Tell us what you need
        </h1>
        <p className="mt-4 text-soil/70">
          Share a few details and we will get back with availability. Prefer
          WhatsApp or email — both work from the form below.
        </p>
        <div className="mt-10">
          <Suspense
            fallback={
              <p className="text-sm text-soil/50">Loading form…</p>
            }
          >
            <EnquireForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
