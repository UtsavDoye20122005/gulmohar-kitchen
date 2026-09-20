import type { Metadata } from "next";
import { pages } from "@/content/pages";
import { reserve } from "@/content/reserve";
import { ReservationForm } from "@/components/reservation-form";
import { HoursList, OpenBadge } from "@/components/hours";
import { MapEmbed } from "@/components/map-embed";
import { ui } from "@/content/ui";

export const metadata: Metadata = {
  title: pages.reserve.title,
  description: pages.reserve.description,
  openGraph: {
    title: pages.reserve.title,
    description: pages.reserve.description,
  },
};

export default function ReservePage() {
  return (
    <main>
      <header className="mx-auto max-w-[1440px] px-4 py-12 md:grid md:grid-cols-12 md:px-8 md:py-16">
        <div className="md:col-span-8">
          <p className="text-[0.68rem] tracking-[0.22em] uppercase text-terracotta">
            {pages.reserve.kicker}
          </p>
          <h1 className="mt-3 font-display text-hero">{pages.reserve.headline}</h1>
        </div>
        <p className="mt-6 text-ink-soft md:col-span-4 md:mt-16">{pages.reserve.lede}</p>
      </header>
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 pb-12 md:grid-cols-12 md:px-8">
        <div className="md:col-span-7">
          <ReservationForm />
        </div>
        <aside className="border border-ink/10 bg-cream-deep p-6 md:col-span-5 md:sticky md:top-28 md:self-start">
          <OpenBadge />
          <h2 className="mt-6 font-display text-3xl">{reserve.sideTitle}</h2>
          <ul className="mt-4 space-y-3 text-sm text-ink-soft">
            {reserve.sidePoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <h3 className="mt-8 text-[0.68rem] tracking-[0.18em] uppercase text-muted-foreground">
            {ui.hoursHeading}
          </h3>
          <div className="mt-3">
            <HoursList compact />
          </div>
        </aside>
      </div>
      <MapEmbed />
    </main>
  );
}
