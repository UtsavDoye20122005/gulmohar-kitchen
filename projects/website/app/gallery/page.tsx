import type { Metadata } from "next";
import { pages } from "@/content/pages";
import { gallery } from "@/content/gallery";
import { GalleryGrid } from "@/components/gallery-grid";

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
      <GalleryGrid />
    </main>
  );
}
