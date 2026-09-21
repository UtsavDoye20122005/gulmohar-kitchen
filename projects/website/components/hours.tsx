"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { weekdayLabels } from "@/content/hours";
import { formatTimeRange, getOpenStatus } from "@/lib/site";
import type { Weekday } from "@/content/site";

const days: Weekday[] = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export function OpenBadge({ className = "" }: { className?: string }) {
  const [status, setStatus] = useState(() => getOpenStatus());

  useEffect(() => {
    setStatus(getOpenStatus());
    const id = window.setInterval(() => setStatus(getOpenStatus()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <p
      className={`inline-flex items-center gap-2 text-[0.68rem] tracking-[0.18em] uppercase ${className}`}
    >
      <span
        className={`size-1.5 rounded-full ${status.isOpen ? "bg-terracotta" : "bg-ink/30"}`}
        aria-hidden
      />
      <span className="text-terracotta">{status.label}</span>
      <span className="text-muted-foreground">{status.detail}</span>
    </p>
  );
}

export function HoursList({ compact = false }: { compact?: boolean }) {
  return (
    <ul className={compact ? "space-y-1 text-sm" : "space-y-2 text-sm"}>
      {days.map((day) => {
        const ranges = site.hours[day]
          .map((range) => formatTimeRange(range.open, range.close))
          .join(" · ");
        return (
          <li key={day} className="flex justify-between gap-6">
            <span className="text-muted-foreground">{weekdayLabels[day]}</span>
            <span className="text-right tabular-nums">{ranges}</span>
          </li>
        );
      })}
    </ul>
  );
}
