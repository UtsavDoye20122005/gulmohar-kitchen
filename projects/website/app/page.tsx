import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pages } from "@/content/pages";
import { site } from "@/content/site";
import { menuItems } from "@/content/menu";
import { HoursList, OpenBadge } from "@/components/hours";
import { Reviews } from "@/components/reviews";
import { MapEmbed } from "@/components/map-embed";
import { Reveal } from "@/components/reveal";
import { formatInr } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: pages.home.title,
  description: pages.home.description,
  openGraph: {
    title: pages.home.title,
    description: pages.home.description,
  },
};

const signatures = menuItems.filter((item) => item.bestseller).slice(0, 3);

export default function HomePage() {
  return (
    <main>
      <section className="relative md:grid md:min-h-[88vh] md:grid-cols-12">
        <div className="relative h-[56vh] min-h-[320px] md:col-span-7 md:h-auto">
          <Image
            src={pages.home.heroImage.src}
            alt={pages.home.heroImage.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 58vw"
            className="object-cover"
          />
        </div>
        <div className="relative z-10 -mt-16 mx-4 border border-ink/10 bg-cream px-5 py-8 md:col-span-5 md:mt-0 md:mx-0 md:flex md:flex-col md:justify-end md:border-0 md:px-10 md:py-20 lg:px-14">
          <p className="text-[0.68rem] tracking-[0.22em] uppercase text-terracotta">
            {pages.home.kicker}
          </p>
          <h1 className="mt-4 font-display text-hero">{pages.home.headline}</h1>
          <p className="mt-6 max-w-md text-lede text-ink-soft">{pages.home.lede}</p>
          <p className="mt-8 text-[0.68rem] tracking-[0.16em] uppercase text-muted-foreground">
            {pages.home.heroMeta}
          </p>
          <Link
            href={pages.home.heroCta.href}
            className={cn(buttonVariants(), "mt-6 w-fit")}
          >
            {pages.home.heroCta.label}
          </Link>
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-12 md:grid-cols-12 md:px-8 md:py-16">
          <div className="md:col-span-5">
            <p className="text-[0.68rem] tracking-[0.22em] uppercase text-terracotta">
              {pages.home.hoursBand.kicker}
            </p>
            <h2 className="mt-3 font-display text-display text-cream">
              {pages.home.hoursBand.title}
            </h2>
            <OpenBadge className="mt-6" />
          </div>
          <div className="md:col-span-4 md:col-start-8">
            <HoursList />
            <p className="mt-4 text-xs text-cream/50">{site.hoursNote}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-16 md:px-8 md:py-24">
        <div className="md:grid md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5 md:sticky md:top-28 md:self-start">
            <p className="text-[0.68rem] tracking-[0.22em] uppercase text-terracotta">
              {pages.home.signature.kicker}
            </p>
            <h2 className="mt-3 font-display text-display">
              {pages.home.signature.title}
            </h2>
            <p className="mt-5 text-ink-soft">{pages.home.signature.body}</p>
            <Link
              href={pages.home.signature.cta.href}
              className={cn(buttonVariants({ variant: "outline" }), "mt-8 inline-flex")}
            >
              {pages.home.signature.cta.label}
            </Link>
          </div>
          <ol className="mt-10 space-y-8 md:col-span-7 md:mt-0">
            {signatures.map((item, index) => (
              <Reveal key={item.id}>
                <li className="grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 border-t border-ink/10 pt-6">
                  <span className="font-display text-2xl text-terracotta">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl">{item.name}</h3>
                    <p className="mt-2 text-sm text-ink-soft">{item.description}</p>
                  </div>
                  <p className="font-display text-xl">{formatInr(item.price)}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-cream-deep">
        <div className="mx-auto grid max-w-[1440px] md:grid-cols-12">
          <div className="relative min-h-[320px] md:col-span-7 md:min-h-[560px]">
            <Image
              src={pages.home.chefTeaser.image.src}
              alt={pages.home.chefTeaser.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
          <div className="px-4 py-12 md:col-span-5 md:flex md:flex-col md:justify-center md:px-12">
            <p className="text-[0.68rem] tracking-[0.22em] uppercase text-terracotta">
              {pages.home.chefTeaser.kicker}
            </p>
            <h2 className="mt-3 font-display text-display">
              {pages.home.chefTeaser.title}
            </h2>
            <p className="mt-5 text-ink-soft">{pages.home.chefTeaser.body}</p>
            <Link
              href={pages.home.chefTeaser.cta.href}
              className="mt-8 inline-flex text-[0.72rem] tracking-[0.16em] uppercase text-terracotta underline-offset-4 hover:underline"
            >
              {pages.home.chefTeaser.cta.label}
            </Link>
          </div>
        </div>
      </section>

      <Reviews />
      <MapEmbed />
    </main>
  );
}
