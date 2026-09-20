import type { Metadata } from "next";
import Image from "next/image";
import { pages } from "@/content/pages";
import { gallery } from "@/content/gallery";

export const metadata: Metadata = {
  title: pages.gallery.title,
  description: pages.gallery.description,
  openGraph: {
    title: pages.gallery.title,
    description: pages.gallery.description,
  },
};

export default function GalleryPage() {
  return (
    <main>
      <header className="mx-auto max-w-[1440px] px-4 py-12 md:grid md:grid-cols-12 md:gap-10 md:px-8 md:py-20">
        <div className="md:col-span-7">
          <p className="text-[0.68rem] tracking-[0.22em] uppercase text-terracotta">
            {pages.gallery.kicker}
          </p>
          <h1 className="mt-3 font-display text-hero">{pages.gallery.headline}</h1>
        </div>
        <p className="mt-6 text-ink-soft md:col-span-4 md:col-start-9 md:mt-16">
          {pages.gallery.lede}
        </p>
      </header>
      <p className="mx-auto max-w-[1440px] px-4 pb-8 text-sm text-muted-foreground md:px-8">
        {gallery.introNote}
      </p>
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-3 px-4 pb-20 sm:grid-cols-2 lg:grid-cols-4 md:px-8">
        {gallery.images.map((image) => (
          <figure
            key={image.id}
            className={
              image.span === "wide"
                ? "sm:col-span-2"
                : image.span === "tall"
                  ? "lg:row-span-2"
                  : ""
            }
          >
            <div
              className={`relative overflow-hidden ${
                image.span === "tall" ? "aspect-[3/4] lg:h-full lg:aspect-auto min-h-[280px]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 text-sm text-ink-soft">{image.caption}</figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}
