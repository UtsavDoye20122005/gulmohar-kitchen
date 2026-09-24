import { Star } from "lucide-react";
import { reviews } from "@/content/reviews";
import { site } from "@/content/site";
import { pages } from "@/content/pages";
import { ui } from "@/content/ui";
import { Reveal } from "@/components/reveal";

export function Reviews() {
  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="md:flex md:items-end md:justify-between">
          <div>
            <p className="text-[0.68rem] tracking-[0.22em] uppercase text-terracotta">
              {pages.home.reviewsKicker}
            </p>
            <h2 className="mt-3 max-w-xl font-display text-display">
              {pages.home.reviewsTitle}
            </h2>
          </div>
          <p className="mt-4 text-sm text-muted-foreground md:mt-0">
            {reviews.average} · {reviews.countLabel}
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {reviews.items.map((review, index) => (
            <Reveal key={review.id} delay={index * 0.05} className="h-full">
              <article className="flex h-full flex-col border border-ink/10 bg-cream p-5">
                <div className="flex gap-1" aria-label={`${review.rating} ${ui.starsAria}`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`size-3.5 ${i < review.rating ? "fill-terracotta text-terracotta" : "text-ink/20"}`}
                    />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
                  {review.body}
                </p>
                <p className="mt-6 font-display text-lg">{review.name}</p>
                <p className="text-xs tracking-[0.12em] uppercase text-muted-foreground">
                  {review.locality} · {review.date}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <a
          href={site.googleReviewsUrl}
          className="mt-10 inline-flex text-[0.72rem] tracking-[0.16em] uppercase text-terracotta underline-offset-4 hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          {reviews.seeAllLabel}
        </a>
      </div>
    </section>
  );
}
