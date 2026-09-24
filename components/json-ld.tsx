import { site } from "@/content/site";

export function JsonLd() {
  const payload = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.name,
    image: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    ],
    url: site.url,
    telephone: site.phoneTel,
    email: site.email,
    priceRange: site.priceRange,
    servesCuisine: site.cuisine,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop 3 & 4, Gulmohar Plaza, College Road, off Gangapur Road",
      addressLocality: site.city,
      addressRegion: "Maharashtra",
      postalCode: "422005",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "12:00",
        closes: "15:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "19:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday", "Sunday"],
        opens: "12:00",
        closes: "16:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday", "Sunday"],
        opens: "19:00",
        closes: "23:30",
      },
    ],
    sameAs: site.social.map((item) => item.href),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
