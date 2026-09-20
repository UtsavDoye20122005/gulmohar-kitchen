import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { pages } from "@/content/pages";
import { nav } from "@/content/nav";
import { JsonLd } from "@/components/json-ld";
import { UiProvider } from "@/components/ui-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { MobileBar } from "@/components/mobile-bar";
import { DeliveryRail } from "@/components/delivery-rail";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: pages.home.title,
    template: `%s`,
  },
  description: pages.home.description,
  openGraph: {
    title: pages.home.title,
    description: pages.home.description,
    locale: "en_IN",
    type: "website",
    url: site.url,
    siteName: site.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body
        className={`${fraunces.variable} ${dmSans.variable} bg-cream font-sans text-ink antialiased`}
      >
        <JsonLd />
        <UiProvider>
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
          >
            {nav.skipToContent}
          </a>
          <SiteHeader />
          <DeliveryRail />
          <div id="content" className="pb-20 md:pb-0">
            {children}
          </div>
          <SiteFooter />
          <WhatsAppFloat />
          <MobileBar />
        </UiProvider>
      </body>
    </html>
  );
}
