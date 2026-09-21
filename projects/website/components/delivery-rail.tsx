import { site } from "@/content/site";
import { ui } from "@/content/ui";

export function DeliveryRail() {
  return (
    <>
      <div className="fixed top-1/3 left-0 z-30 hidden origin-bottom-left flex-col md:flex">
        <a
          href={site.delivery.swiggyUrl}
          className="bg-ink px-3 py-3 text-[0.62rem] tracking-[0.18em] uppercase text-cream [writing-mode:vertical-rl] rotate-180 hover:bg-terracotta"
          target="_blank"
          rel="noreferrer"
        >
          {site.delivery.swiggyLabel}
        </a>
        <a
          href={site.delivery.zomatoUrl}
          className="bg-terracotta px-3 py-3 text-[0.62rem] tracking-[0.18em] uppercase text-cream [writing-mode:vertical-rl] rotate-180 hover:bg-terracotta-deep"
          target="_blank"
          rel="noreferrer"
        >
          {site.delivery.zomatoLabel}
        </a>
      </div>
      <div className="flex border-b border-ink/10 md:hidden">
        <a
          href={site.delivery.swiggyUrl}
          className="flex-1 py-2 text-center text-[0.62rem] tracking-[0.16em] uppercase"
          target="_blank"
          rel="noreferrer"
        >
          {site.delivery.swiggyLabel}
        </a>
        <a
          href={site.delivery.zomatoUrl}
          className="flex-1 border-l border-ink/10 py-2 text-center text-[0.62rem] tracking-[0.16em] uppercase text-terracotta"
          target="_blank"
          rel="noreferrer"
        >
          {site.delivery.zomatoLabel}
        </a>
        <span className="sr-only">{ui.orderOnline}</span>
      </div>
    </>
  );
}
