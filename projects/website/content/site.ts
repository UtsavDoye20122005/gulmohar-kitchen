export type Weekday =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type TimeRange = {
  open: string;
  close: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export const site = {
  name: "Gulmohar Kitchen",
  shortName: "Gulmohar",
  legalName: "Gulmohar Kitchen",
  tagline: "North Indian fire, Continental calm — served on College Road.",
  city: "Nashik",
  locality: "College Road",
  phoneDisplay: "+91 93251 14580",
  phoneTel: "+919325114580",
  whatsappNumber: "919325114580",
  email: "reservations@gulmoharkitchen.in",
  addressLines: [
    "Shop 3 & 4, Gulmohar Plaza",
    "College Road, off Gangapur Road",
    "Nashik, Maharashtra 422005",
  ],
  addressSingleLine:
    "Shop 3 & 4, Gulmohar Plaza, College Road, off Gangapur Road, Nashik, Maharashtra 422005",
  geo: {
    lat: 20.0068,
    lng: 73.7704,
  },
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=20.0068,73.7704&z=16&output=embed",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=20.0068,73.7704",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Gulmohar+Kitchen+College+Road+Nashik",
  priceRange: "₹₹",
  cuisine: "North Indian, Continental",
  foundedYear: 2018,
  timezone: "Asia/Kolkata",
  hours: {
    monday: [{ open: "12:00", close: "15:30" }, { open: "19:00", close: "23:00" }],
    tuesday: [{ open: "12:00", close: "15:30" }, { open: "19:00", close: "23:00" }],
    wednesday: [{ open: "12:00", close: "15:30" }, { open: "19:00", close: "23:00" }],
    thursday: [{ open: "12:00", close: "15:30" }, { open: "19:00", close: "23:00" }],
    friday: [{ open: "12:00", close: "16:00" }, { open: "19:00", close: "23:30" }],
    saturday: [{ open: "12:00", close: "16:00" }, { open: "19:00", close: "23:30" }],
    sunday: [{ open: "12:00", close: "16:00" }, { open: "19:00", close: "23:30" }],
  } satisfies Record<Weekday, TimeRange[]>,
  hoursNote: "Kitchen closes 30 minutes before last seating. Monday lunch can run quieter — walk-ins welcome.",
  social: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/gulmoharkitchen.nsk",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/gulmoharkitchen",
    },
  ] satisfies SocialLink[],
  delivery: {
    swiggyUrl: "https://www.swiggy.com/city/nashik",
    zomatoUrl: "https://www.zomato.com/nashik",
    swiggyLabel: "Order on Swiggy",
    zomatoLabel: "Order on Zomato",
  },
  whatsappPrefill:
    "Namaste, I would like to enquire about a table at Gulmohar Kitchen, College Road.",
  credit: "Website by Utsav Doye",
  url: "https://gulmohar-kitchen.vercel.app",
} as const;

export type Site = typeof site;
