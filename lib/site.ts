import { site, type Weekday } from "@/content/site";
import { openNowLabels } from "@/content/hours";

const WEEKDAYS: Weekday[] = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function getIndiaParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: site.timezone,
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  const read = (type: string) =>
    parts.find((part) => part.type === type)?.value ?? "";

  const weekdayShort = read("weekday").toLowerCase();
  const weekdayMap: Record<string, Weekday> = {
    sun: "sunday",
    mon: "monday",
    tue: "tuesday",
    wed: "wednesday",
    thu: "thursday",
    fri: "friday",
    sat: "saturday",
  };

  return {
    weekday: weekdayMap[weekdayShort] ?? WEEKDAYS[date.getDay()],
    hour: Number(read("hour")),
    minute: Number(read("minute")),
    ymd: `${read("year")}-${read("month")}-${read("day")}`,
  };
}

function toMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

export function getOpenStatus(date = new Date()) {
  const { weekday, hour, minute } = getIndiaParts(date);
  const now = hour * 60 + minute;
  const ranges = site.hours[weekday];

  for (const range of ranges) {
    const start = toMinutes(range.open);
    const end = toMinutes(range.close);
    if (now >= start && now < end) {
      return {
        isOpen: true,
        label: openNowLabels.open,
        detail: `${openNowLabels.closesAt} ${range.close}`,
      };
    }
  }

  const next = ranges.find((range) => now < toMinutes(range.open));
  if (next) {
    return {
      isOpen: false,
      label: openNowLabels.closed,
      detail: `${openNowLabels.opensAt} ${next.open}`,
    };
  }

  return {
    isOpen: false,
    label: openNowLabels.closed,
    detail: openNowLabels.closed,
  };
}

export function formatTimeRange(open: string, close: string) {
  return `${open}–${close}`;
}

export function todayInputValue() {
  return getIndiaParts().ymd;
}

export function formatInr(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function whatsappHref(text: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function telHref() {
  return `tel:${site.phoneTel}`;
}

export function formatParty(n: number) {
  return `${n}`;
}

export { pad };
