import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "@/content/not-found";
import { site } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: notFound.title,
  description: notFound.description,
};

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-4 py-24">
      <h1 className="font-display text-hero">{notFound.headline}</h1>
      <p className="mt-6 text-ink-soft">{notFound.body}</p>
      <Link href="/" className={cn(buttonVariants(), "mt-8 inline-flex")}>
        {notFound.cta}
      </Link>
      <p className="mt-8 text-sm text-muted-foreground">{site.phoneDisplay}</p>
    </main>
  );
}
