import Link from "next/link";
import { nav } from "@/content/nav";
import { site } from "@/content/site";
import { ui } from "@/content/ui";
import { telHref } from "@/lib/site";
import { HoursList, OpenBadge } from "@/components/hours";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-4 py-16 md:grid-cols-12 md:px-8 md:py-20">
        <div className="md:col-span-4">
          <p className="font-display text-4xl text-cream">{site.name}</p>
          <p className="mt-4 max-w-sm text-cream/70">{site.tagline}</p>
          <OpenBadge className="mt-6 [&_span]:text-cream/80 [&_.text-terracotta]:text-terracotta" />
        </div>
        <div className="md:col-span-3">
          <h2 className="text-[0.68rem] tracking-[0.2em] uppercase text-terracotta">
            {ui.addressHeading}
          </h2>
          <address className="mt-4 not-italic text-cream/80">
            {site.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <a
            href={site.mapsDirectionsUrl}
            className="mt-4 inline-block text-sm text-terracotta underline-offset-4 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            {ui.getDirections}
          </a>
        </div>
        <div className="md:col-span-3">
          <h2 className="text-[0.68rem] tracking-[0.2em] uppercase text-terracotta">
            {ui.contactHeading}
          </h2>
          <ul className="mt-4 space-y-2 text-cream/80">
            <li>
              <a href={telHref()}>{site.phoneDisplay}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            {site.social.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-[0.68rem] tracking-[0.2em] uppercase text-terracotta">
            {ui.quickLinksHeading}
          </h2>
          <ul className="mt-4 space-y-2">
            {nav.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-cream/80 hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-cream/15 pt-8 md:col-span-12 md:grid md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="text-[0.68rem] tracking-[0.2em] uppercase text-terracotta">
              {ui.hoursHeading}
            </h2>
            <div className="mt-4 max-w-sm text-cream/80">
              <HoursList compact />
            </div>
            <p className="mt-3 text-xs text-cream/50">{site.hoursNote}</p>
          </div>
          <p className="mt-8 self-end text-xs tracking-[0.12em] uppercase text-cream/40 md:mt-0 md:text-right">
            {site.credit}
          </p>
        </div>
      </div>
    </footer>
  );
}
