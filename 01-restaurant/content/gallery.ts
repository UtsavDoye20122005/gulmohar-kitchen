export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  span: "normal" | "wide" | "tall";
  group: "room" | "plate";
};

export const gallery = {
  introNote:
    "All photographs are from our own room, the tandoor bay, and a few plates we were willing to let go cold for a minute.",
  groups: [
    { id: "all", label: "The whole house" },
    { id: "room", label: "The room" },
    { id: "plate", label: "The plates" },
  ] as const,
  images: [
    {
      id: "room-evening",
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
      alt: "Evening service in the main dining room with pendant lights and set tables",
      caption: "The long room, 7:40 pm, before the College Road rush.",
      span: "wide",
      group: "room",
    },
    {
      id: "plated-curry",
      src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80",
      alt: "North Indian thali with dal, sabzi, roti and rice on a metal plate",
      caption: "A weekday thali for two who could not decide.",
      span: "tall",
      group: "plate",
    },
    {
      id: "tandoor-bread",
      src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=80",
      alt: "Close-up of a rich Indian curry in a copper kadhai",
      caption: "Butter chicken, not too sweet — as promised.",
      span: "normal",
      group: "plate",
    },
    {
      id: "paneer",
      src: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1200&q=80",
      alt: "Paneer curry with cream and spices in a dark bowl",
      caption: "Malai paneer, after the tikka has gone into gravy.",
      span: "normal",
      group: "plate",
    },
    {
      id: "kebab",
      src: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=1200&q=80",
      alt: "Tandoori kebabs on a platter with onions and lime",
      caption: "Tangdi and seekh, from the first tandoor of dinner.",
      span: "wide",
      group: "plate",
    },
    {
      id: "fine-plate",
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80",
      alt: "Plated Continental dish with sauce and herbs in a restaurant setting",
      caption: "The grilled catch, when the fisherman in Copargaon calls early.",
      span: "tall",
      group: "plate",
    },
    {
      id: "bar-counter",
      src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=80",
      alt: "Restaurant bar counter with bottles and warm lighting",
      caption: "No hard bar. Plenty of nimbu soda and conversation.",
      span: "normal",
      group: "room",
    },
    {
      id: "dessert",
      src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80",
      alt: "Chocolate dessert in a glass with cream",
      caption: "Dark chocolate pot. The last argument at the table.",
      span: "normal",
      group: "plate",
    },
    {
      id: "courtyard",
      src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1600&q=80",
      alt: "Outdoor restaurant seating with string lights",
      caption: "The Gulmohar Plaza courtyard, winter evenings only.",
      span: "wide",
      group: "room",
    },
  ] satisfies GalleryImage[],
};
