import { site } from "@/content/site";
import { ui } from "@/content/ui";
import { pages } from "@/content/pages";

export function MapEmbed({ heading }: { heading?: string }) {
  return (
    <section className="relative">
      <div className="mx-auto max-w-[1440px] px-4 py-12 md:grid md:grid-cols-12 md:gap-10 md:px-8 md:py-16">
        <div className="md:col-span-4 md:sticky md:top-28 md:self-start">
          <h2 className="font-display text-display">
            {heading ?? pages.home.mapTitle}
          </h2>
          <address className="mt-6 not-italic text-ink-soft">
            {site.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <a
            href={site.mapsDirectionsUrl}
            className="mt-6 inline-flex text-[0.72rem] tracking-[0.16em] uppercase text-terracotta underline-offset-4 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            {ui.getDirections}
          </a>
        </div>
        <div className="mt-8 overflow-hidden border border-ink/10 md:col-span-8 md:mt-0">
          <iframe
            title={ui.mapTitle}
            src={site.mapsEmbedUrl}
            className="h-[320px] w-full md:h-[480px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
