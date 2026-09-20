export const pages = {
  home: {
    title: "Gulmohar Kitchen | North Indian & Continental, College Road Nashik",
    description:
      "Family tables and quiet corners on College Road, Nashik. Tandoor, slow gravies, and a short Continental list. Reserve a table or order in.",
    kicker: "College Road · Nashik",
    headline: "The gulmohar is in bloom. Come eat.",
    lede: "We cook the North Indian plates Nashik families actually order on a Thursday — plus a few Continental dishes for the table that wants a break from gravy.",
    heroImage: {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80",
      alt: "Warm dining room at Gulmohar Kitchen with wood tables and low lights",
    },
    heroMeta: "Lunch from noon · Dinner from 7",
    heroCta: { href: "/reserve", label: "See tonight’s tables" },
    hoursBand: {
      kicker: "Kitchen clock",
      title: "We cook two services. Come for the one that fits your day.",
    },
    signature: {
      kicker: "On the tawa tonight",
      title: "Plates we will not take off the menu.",
      body: "College Road regulars come back for the same three things: the dal that tastes of home, the tandoor that still has a char, and the Continental fish that does not feel like an afterthought.",
      cta: { href: "/menu", label: "Open the full menu" },
    },
    chefTeaser: {
      kicker: "From the pass",
      title: "Meenal still tastes every gravy before service.",
      body: "Chef Meenal Deshmukh grew up between a Nashik kitchen and her grandmother’s house in Latur. The restaurant is her argument that a family table can be both generous and precise.",
      cta: { href: "/about", label: "Read the kitchen’s story" },
      image: {
        src: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80",
        alt: "Chef in a professional kitchen checking a pan over the pass",
      },
    },
    reviewsKicker: "From tables on College Road",
    reviewsTitle: "What Nashik writes after the bill.",
    mapTitle: "Find us between the bookshops and the old bakeries.",
    directionsLabel: "Get directions",
  },
  menu: {
    title: "Menu | Gulmohar Kitchen, Nashik",
    description:
      "Tandoor, gravies, Continental plates, breads and desserts at Gulmohar Kitchen, College Road, Nashik. Filter veg, Jain and bestsellers.",
    kicker: "Kitchen list",
    headline: "What the tandoor, the kadhai and the grill are doing.",
    lede: "Prices include GST. Spice is a suggestion — tell the captain if you want it kinder, or if you want it to argue back.",
    empty:
      "Nothing on the tawa matches those filters. Clear them, or ask us on WhatsApp for a Jain rewrite.",
    filtersLabel: "Show me",
    sidebarLabel: "Jump to",
    spiceLegend: "Chillies on the card are heat, not a dare.",
  },
  gallery: {
    title: "Gallery | Gulmohar Kitchen, Nashik",
    description:
      "Dining room, tandoor, plated dishes and courtyard tables at Gulmohar Kitchen on College Road, Nashik.",
    kicker: "Rooms & plates",
    headline: "How the room looks when the gulmohar catches the evening.",
    lede: "We shoot in available light. The dal is the colour it is. The naan has those dark spots on purpose.",
  },
  about: {
    title: "About | Gulmohar Kitchen, Nashik",
    description:
      "The story of Gulmohar Kitchen and Chef Meenal Deshmukh — a College Road dining room for North Indian and Continental cooking in Nashik.",
    kicker: "Since 2018",
    headline: "A dining room named after the tree outside the old house.",
    lede: "Gulmohar Kitchen opened on College Road because that is where Nashik still walks after class, after court, after the factory shift in Satpur.",
  },
  reserve: {
    title: "Reserve a table | Gulmohar Kitchen, Nashik",
    description:
      "Book a table at Gulmohar Kitchen, College Road Nashik. Choose date, time and party size. We confirm on WhatsApp.",
    kicker: "Reservations",
    headline: "Tell us who is coming. We will keep the corner table.",
    lede: "Weekend dinners fill by Thursday afternoon. If you are more than six, WhatsApp us — we will join tables along the courtyard wall.",
  },
} as const;
