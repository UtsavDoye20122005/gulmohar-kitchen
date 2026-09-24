import type { Metadata } from "next";
import { pages } from "@/content/pages";
import { MenuBoard } from "@/components/menu-board";

export const metadata: Metadata = {
  title: pages.menu.title,
  description: pages.menu.description,
  openGraph: {
    title: pages.menu.title,
    description: pages.menu.description,
  },
};

export default function MenuPage() {
  return (
    <main className="pt-10 md:pt-16">
      <header className="mx-auto max-w-[1440px] px-4 pb-10 md:grid md:grid-cols-12 md:px-8">
        <div className="md:col-span-8">
          <p className="text-[0.68rem] tracking-[0.22em] uppercase text-terracotta">
            {pages.menu.kicker}
          </p>
          <h1 className="mt-3 font-display text-hero">{pages.menu.headline}</h1>
        </div>
        <p className="mt-6 max-w-md text-ink-soft md:col-span-4 md:mt-12">
          {pages.menu.lede}
        </p>
      </header>
      <MenuBoard />
    </main>
  );
}
