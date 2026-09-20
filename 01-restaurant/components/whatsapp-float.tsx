"use client";

import { MessageCircle } from "lucide-react";
import { site } from "@/content/site";
import { ui } from "@/content/ui";
import { whatsappHref } from "@/lib/site";
import { useUi } from "@/components/ui-provider";

export function WhatsAppFloat() {
  const { modalOpen } = useUi();
  if (modalOpen) return null;

  return (
    <a
      href={whatsappHref(site.whatsappPrefill)}
      className="fixed right-4 bottom-24 z-40 hidden size-14 items-center justify-center rounded-sm bg-ink text-cream shadow-[var(--shadow-soft)] md:bottom-6 md:flex"
      aria-label={ui.whatsappAria}
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
