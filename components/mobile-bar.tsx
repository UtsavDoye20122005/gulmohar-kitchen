"use client";

import Link from "next/link";
import { MessageCircle, Phone, CalendarDays } from "lucide-react";
import { nav } from "@/content/nav";
import { site } from "@/content/site";
import { telHref, whatsappHref } from "@/lib/site";
import { useUi } from "@/components/ui-provider";

export function MobileBar() {
  const { modalOpen } = useUi();
  if (modalOpen) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-cream md:hidden">
      <div className="grid grid-cols-3">
        <a
          href={telHref()}
          className="flex flex-col items-center gap-1 py-3 text-[0.62rem] tracking-[0.14em] uppercase"
        >
          <Phone className="size-4 text-terracotta" />
          {nav.callLabel}
        </a>
        <a
          href={whatsappHref(site.whatsappPrefill)}
          className="flex flex-col items-center gap-1 py-3 text-[0.62rem] tracking-[0.14em] uppercase"
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle className="size-4 text-terracotta" />
          {nav.whatsappLabel}
        </a>
        <Link
          href={nav.primaryCta.href}
          className="flex flex-col items-center gap-1 bg-terracotta py-3 text-[0.62rem] tracking-[0.14em] uppercase text-primary-foreground"
        >
          <CalendarDays className="size-4" />
          {nav.mobileBarPrimary}
        </Link>
      </div>
    </div>
  );
}
