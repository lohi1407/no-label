import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function OriginMap() {
  const { origin } = site;
  const coords = `${origin.latitude.toFixed(6)}, ${origin.longitude.toFixed(6)}`;

  return (
    <section
      id="source"
      className="scroll-mt-8 border-t border-soil/8 bg-mist px-5 py-24 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:items-end">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-leaf">
              {origin.label}
            </p>
            <h2 className="font-display mt-3 text-3xl text-soil sm:text-4xl">
              A place on the map — not just a story.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-soil/75">
              {origin.blurb} Here Lakshmi tends her kitchen craft, and Veerraju
              keeps his paddy the natural way.
            </p>

            <dl className="mt-10 space-y-5">
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-soil/45">
                  Place
                </dt>
                <dd className="mt-1.5 font-display text-xl text-soil">
                  {origin.place}
                </dd>
                <dd className="text-soil/70">
                  {origin.region}, {origin.country}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-soil/45">
                  Coordinates
                </dt>
                <dd className="mt-1.5 font-mono text-sm tracking-wide text-leaf-deep">
                  {coords}
                </dd>
              </div>
            </dl>

            <a
              href={origin.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-sm border border-soil/20 px-5 py-3 text-sm font-medium text-soil transition hover:border-leaf hover:bg-field"
            >
              Open in Google Maps
              <span aria-hidden>↗</span>
            </a>
          </Reveal>

          <Reveal>
            <div className="relative overflow-hidden rounded-sm border border-soil/10 bg-field shadow-[0_20px_50px_-28px_rgba(44,36,22,0.45)]">
              <div className="relative aspect-[4/3] w-full sm:aspect-[16/11]">
                <iframe
                  title={`Map of ${origin.place}`}
                  src={origin.mapsEmbedUrl}
                  className="absolute inset-0 h-full w-full border-0 grayscale-[20%] contrast-[1.05]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-soil/10 bg-mist/95 px-4 py-3 text-xs text-soil/65 backdrop-blur">
                <span>
                  Pin · {origin.latitude.toFixed(4)}° N,{" "}
                  {origin.longitude.toFixed(4)}° E
                </span>
                <span className="text-leaf">Source verified on map</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
