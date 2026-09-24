"use client";

import Link from "next/link";
import { Phone, Menu as MenuIcon } from "lucide-react";
import { nav } from "@/content/nav";
import { site } from "@/content/site";
import { telHref } from "@/lib/site";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { ui } from "@/content/ui";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/95 backdrop-blur-[2px]">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-3 px-4 md:h-[4.5rem] md:px-8">
        <Link href="/" className="min-w-0">
          <span className="font-display text-[1.65rem] leading-none tracking-tight">
            {site.shortName}
          </span>
          <span className="mt-0.5 hidden text-[0.62rem] tracking-[0.22em] uppercase text-muted-foreground sm:block">
            {site.city}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label={ui.quickLinksHeading}>
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.72rem] tracking-[0.18em] uppercase text-ink-soft hover:text-terracotta"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telHref()}
            className="inline-flex items-center gap-2 text-sm text-ink md:text-[0.72rem] md:tracking-[0.16em] md:uppercase"
            aria-label={ui.callAria}
          >
            <Phone className="size-4 text-terracotta" />
            <span className="hidden sm:inline">{site.phoneDisplay}</span>
            <span className="sm:hidden">{nav.callLabel}</span>
          </a>
          <Link
            href={nav.primaryCta.href}
            className={cn(buttonVariants(), "hidden md:inline-flex")}
          >
            {nav.primaryCta.label}
          </Link>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  aria-label={nav.openMenu}
                />
              }
            >
              <MenuIcon />
            </DialogTrigger>
            <DialogContent className="max-w-none inset-3 top-3 left-3 right-3 translate-x-0 translate-y-0 h-[calc(100dvh-1.5rem)] w-auto grid-rows-[auto_1fr] sm:max-w-none">
              <DialogTitle className="font-display text-4xl">
                {site.name}
              </DialogTitle>
              <nav className="flex flex-col gap-4 pt-6">
                {nav.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl tracking-tight"
                  >
                    {link.label}
                  </Link>
                ))}
                <a href={telHref()} className="pt-6 text-lg text-terracotta">
                  {site.phoneDisplay}
                </a>
              </nav>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
