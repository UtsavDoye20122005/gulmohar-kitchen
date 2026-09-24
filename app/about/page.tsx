import type { Metadata } from "next";
import Image from "next/image";
import { pages } from "@/content/pages";
import { about } from "@/content/about";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: pages.about.title,
  description: pages.about.description,
  openGraph: {
    title: pages.about.title,
    description: pages.about.description,
  },
};

export default function AboutPage() {
  return (
    <main>
      <section className="relative min-h-[48vh]">
        <Image
          src={about.heroImage.src}
          alt={about.heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/35" />
        <div className="relative mx-auto flex min-h-[48vh] max-w-[1440px] items-end px-4 py-12 md:px-8">
          <div className="max-w-3xl text-cream">
            <p className="text-[0.68rem] tracking-[0.22em] uppercase text-cream/80">
              {pages.about.kicker}
            </p>
            <h1 className="mt-3 font-display text-hero">{pages.about.headline}</h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-16 md:grid md:grid-cols-12 md:px-8">
        <p className="text-lede text-ink-soft md:col-span-5">{pages.about.lede}</p>
        <div className="mt-10 space-y-6 md:col-span-6 md:col-start-7 md:mt-0">
          {about.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-[1440px] md:grid-cols-12">
          <div className="relative min-h-[360px] md:col-span-5">
            <Image
              src={about.chef.portrait.src}
              alt={about.chef.portrait.alt}
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
          <div className="px-4 py-12 md:col-span-6 md:col-start-7 md:px-0 md:py-20 md:pr-8">
            <p className="text-[0.68rem] tracking-[0.22em] uppercase text-terracotta">
              {about.chef.role}
            </p>
            <h2 className="mt-3 font-display text-display">{about.chef.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{about.chef.training}</p>
            <blockquote className="mt-8 font-display text-title text-ink-soft">
              {about.chef.quote}
            </blockquote>
            <p className="mt-6 max-w-xl">{about.chef.body}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-16 md:px-8 md:py-24">
        <h2 className="font-display text-display">{about.room.title}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {about.room.points.map((point, index) => (
            <Reveal key={point.title} delay={index * 0.06}>
              <article className="border-t border-ink pt-6">
                <h3 className="font-display text-2xl">{point.title}</h3>
                <p className="mt-3 text-ink-soft">{point.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-20 md:px-8">
        <Accordion>
          {about.faq.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  );
}
