"use client";

import { useEffect, useMemo, useState } from "react";
import { Flame, Leaf } from "lucide-react";
import { menuCategories, menuFilters, menuItems, type Diet } from "@/content/menu";
import { pages } from "@/content/pages";
import { ui } from "@/content/ui";
import { formatInr } from "@/lib/site";
import { Button } from "@/components/ui/button";

type FilterId = (typeof menuFilters)[number]["id"];

function matches(filter: FilterId, diet: Diet, bestseller: boolean) {
  if (filter === "all") return true;
  if (filter === "bestseller") return bestseller;
  if (filter === "veg") return diet === "veg" || diet === "jain";
  if (filter === "nonveg") return diet === "nonveg";
  if (filter === "jain") return diet === "jain";
  return true;
}

export function MenuBoard() {
  const [filter, setFilter] = useState<FilterId>("all");
  const [active, setActive] = useState(menuCategories[0].id);

  const visible = useMemo(
    () => menuItems.filter((item) => matches(filter, item.diet, item.bestseller)),
    [filter]
  );

  const grouped = menuCategories
    .map((category) => ({
      ...category,
      items: visible.filter((item) => item.category === category.id),
    }))
    .filter((category) => category.items.length > 0);

  useEffect(() => {
    const nodes = grouped.map((category) => document.getElementById(category.id)).filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visibleEntries[0]?.target.id) {
          setActive(visibleEntries[0].target.id as (typeof menuCategories)[number]["id"]);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [grouped]);

  return (
    <div className="mx-auto max-w-[1440px] px-4 pb-24 md:px-8 lg:grid lg:grid-cols-[220px_1fr] lg:gap-12">
      <aside className="mb-8 lg:sticky lg:top-28 lg:mb-0 lg:self-start">
        <p className="text-[0.68rem] tracking-[0.18em] uppercase text-muted-foreground">
          {pages.menu.filtersLabel}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {menuFilters.map((item) => (
            <Button
              key={item.id}
              type="button"
              size="sm"
              variant={filter === item.id ? "default" : "outline"}
              onClick={() => setFilter(item.id)}
              aria-pressed={filter === item.id}
            >
              {item.label}
            </Button>
          ))}
        </div>
        <p className="mt-8 hidden text-[0.68rem] tracking-[0.18em] uppercase text-muted-foreground lg:block">
          {pages.menu.sidebarLabel}
        </p>
        <nav className="mt-3 hidden flex-col lg:flex" aria-label={pages.menu.sidebarLabel}>
          {menuCategories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className={`border-l py-2 pl-4 text-sm ${
                active === category.id
                  ? "border-terracotta text-terracotta"
                  : "border-ink/10 text-ink-soft hover:text-ink"
              }`}
            >
              {category.name}
            </a>
          ))}
        </nav>
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2 lg:hidden">
          {menuCategories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="shrink-0 border border-ink/15 px-3 py-1.5 text-[0.68rem] tracking-[0.12em] uppercase"
            >
              {category.name}
            </a>
          ))}
        </div>
      </aside>

      <div>
        {grouped.length === 0 ? (
          <p className="border border-dashed border-ink/20 p-10 text-ink-soft">
            {pages.menu.empty}
          </p>
        ) : (
          grouped.map((category) => (
            <section key={category.id} id={category.id} className="scroll-mt-28 mb-16">
              <div className="md:flex md:items-end md:justify-between">
                <h2 className="font-display text-display">{category.name}</h2>
                <p className="mt-2 max-w-md text-sm text-muted-foreground md:mt-0 md:text-right">
                  {category.note}
                </p>
              </div>
              <ul className="mt-8 divide-y divide-ink/10 border-t border-ink/10">
                {category.items.map((item) => (
                  <li key={item.id} className="grid gap-3 py-6 md:grid-cols-[1fr_auto] md:gap-8">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <DietMark diet={item.diet} />
                        <h3 className="font-display text-2xl tracking-tight">{item.name}</h3>
                        {item.bestseller ? (
                          <span className="text-[0.62rem] tracking-[0.14em] uppercase text-terracotta">
                            {ui.bestseller}
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-2 max-w-2xl text-sm text-ink-soft">{item.description}</p>
                      <Spice level={item.spice} />
                    </div>
                    <p className="font-display text-2xl tabular-nums">{formatInr(item.price)}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))
        )}
        <p className="text-xs tracking-[0.12em] uppercase text-muted-foreground">
          {pages.menu.spiceLegend}
        </p>
      </div>
    </div>
  );
}

function DietMark({ diet }: { diet: Diet }) {
  const label = diet === "jain" ? ui.jain : diet === "veg" ? ui.veg : ui.nonveg;
  if (diet === "jain") {
    return (
      <span className="inline-flex items-center text-terracotta" title={label} aria-label={label}>
        <Leaf className="size-3.5" />
      </span>
    );
  }
  return (
    <span
      className={`inline-block size-2.5 border ${
        diet === "veg" ? "border-terracotta bg-terracotta/20" : "border-ink bg-ink/80"
      }`}
      title={label}
      aria-label={label}
    />
  );
}

function Spice({ level }: { level: 0 | 1 | 2 | 3 }) {
  if (level === 0) return null;
  return (
    <p className="mt-3 flex items-center gap-1 text-terracotta" aria-label={`${ui.a11y.spiceLevel} ${level}`}>
      {Array.from({ length: level }).map((_, i) => (
        <Flame key={i} className="size-3.5" />
      ))}
    </p>
  );
}
