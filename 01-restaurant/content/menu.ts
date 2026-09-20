export type Diet = "veg" | "nonveg" | "jain";

export type MenuCategoryId =
  | "small-plates"
  | "tandoor"
  | "kadhai"
  | "continental"
  | "bread-rice"
  | "dessert"
  | "glass";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategoryId;
  diet: Diet;
  spice: 0 | 1 | 2 | 3;
  bestseller: boolean;
};

export type MenuCategory = {
  id: MenuCategoryId;
  name: string;
  note: string;
};

export const menuFilters = [
  { id: "all", label: "All plates" },
  { id: "veg", label: "Veg" },
  { id: "nonveg", label: "Non-veg" },
  { id: "jain", label: "Jain" },
  { id: "bestseller", label: "Bestseller" },
] as const;

export const menuCategories: MenuCategory[] = [
  {
    id: "small-plates",
    name: "Small plates",
    note: "For the first twenty minutes, while the tandoor catches up.",
  },
  {
    id: "tandoor",
    name: "From the tandoor",
    note: "Marinated overnight. Ask if you want it off the bone.",
  },
  {
    id: "kadhai",
    name: "Kadhai & dum",
    note: "Gravies we start in the morning. They do not rush.",
  },
  {
    id: "continental",
    name: "Continental",
    note: "A short list, cooked properly — not a hotel buffet afterthought.",
  },
  {
    id: "bread-rice",
    name: "Breads & rice",
    note: "Naan is slapped to order. Biryani is for two, honestly.",
  },
  {
    id: "dessert",
    name: "Something sweet",
    note: "If you skip this, the captain will look disappointed. Fairly.",
  },
  {
    id: "glass",
    name: "Glasses",
    note: "We do not serve hard liquor. The lime soda is not apologetic about it.",
  },
];

export const menuItems: MenuItem[] = [
  {
    id: "dahi-bhalla",
    name: "Dahi bhalla, College Road style",
    description:
      "Lentil dumplings soaked just long enough, cold dahi, a discreet sweet chutney. Jain kitchen can hold the onion crunch.",
    price: 280,
    category: "small-plates",
    diet: "jain",
    spice: 0,
    bestseller: true,
  },
  {
    id: "ajwain-fish",
    name: "Ajwain-crusted river fish",
    description:
      "Godavari-side battering, ajwain in the crust, a squeeze of lime at the table. Comes off the tawa, not the freezer.",
    price: 460,
    category: "small-plates",
    diet: "nonveg",
    spice: 1,
    bestseller: false,
  },
  {
    id: "tawa-mushrooms",
    name: "Tawa mushrooms, garlic butter",
    description:
      "Button mushrooms blistered hard, a little garlic, a lot of butter. The vegetarian table’s usual argument-starter.",
    price: 320,
    category: "small-plates",
    diet: "veg",
    spice: 1,
    bestseller: false,
  },
  {
    id: "keema-pav-toast",
    name: "Keema, toasted pav",
    description:
      "Mutton mince with whole spices, pav buttered on the tawa. A Saturday lunch habit for the court crowd.",
    price: 390,
    category: "small-plates",
    diet: "nonveg",
    spice: 2,
    bestseller: true,
  },
  {
    id: "paneer-tikka",
    name: "Malai paneer tikka",
    description:
      "Hung curd, cashew, a patient char. Soft centre, smoky edge. The plate Nashik orders without looking at the menu.",
    price: 420,
    category: "tandoor",
    diet: "veg",
    spice: 1,
    bestseller: true,
  },
  {
    id: "jain-seekh",
    name: "Jain vegetable seekh",
    description:
      "No onion, no garlic, no root. Banana stem, raw banana and spices that still have a backbone.",
    price: 380,
    category: "tandoor",
    diet: "jain",
    spice: 1,
    bestseller: false,
  },
  {
    id: "murgh-tangdi",
    name: "Murgh tangdi, Kasuri",
    description:
      "Two drumsticks, kasuri methi in the marinade, lemon on the side. Bones you are supposed to eat around, slowly.",
    price: 480,
    category: "tandoor",
    diet: "nonveg",
    spice: 2,
    bestseller: true,
  },
  {
    id: "lamb-chops",
    name: "Raan chops, black pepper",
    description:
      "Three chops, a pepper crust, a rest after the fire. For the table that is celebrating something they will not name.",
    price: 720,
    category: "tandoor",
    diet: "nonveg",
    spice: 2,
    bestseller: false,
  },
  {
    id: "dal-gulmohar",
    name: "Dal Gulmohar",
    description:
      "Black dal, tomatoes, butter, a tadka that is not shy. We have been stirring this pot since the first week of 2018.",
    price: 340,
    category: "kadhai",
    diet: "veg",
    spice: 1,
    bestseller: true,
  },
  {
    id: "bhindi-do-pyaza",
    name: "Bhindi do pyaza",
    description:
      "Okra cooked dry so it does not slime, onions in two tempers. The aunties order this and then take a box home.",
    price: 310,
    category: "kadhai",
    diet: "veg",
    spice: 1,
    bestseller: false,
  },
  {
    id: "jain-kadhai",
    name: "Jain kadhai vegetables",
    description:
      "Capsicum, paneer, tomato masala with no onion or garlic. Heat from whole red chilli, not from a paste.",
    price: 360,
    category: "kadhai",
    diet: "jain",
    spice: 2,
    bestseller: false,
  },
  {
    id: "butter-chicken",
    name: "Butter chicken, not too sweet",
    description:
      "Tandoori chicken finished in a tomato-cashew gravy. We keep the sugar out of it. Nashik has said thank you.",
    price: 490,
    category: "kadhai",
    diet: "nonveg",
    spice: 1,
    bestseller: true,
  },
  {
    id: "nalli-nihari",
    name: "Nalli nihari",
    description:
      "Shank on the bone, slow from morning. Comes with a warning: it will not be rushed, and it will not be boneless.",
    price: 640,
    category: "kadhai",
    diet: "nonveg",
    spice: 2,
    bestseller: false,
  },
  {
    id: "grilled-catch",
    name: "Grilled catch, mustard butter",
    description:
      "The fish that came in that morning, a mustard-butter, boiled potatoes that have seen salt and dill.",
    price: 680,
    category: "continental",
    diet: "nonveg",
    spice: 0,
    bestseller: true,
  },
  {
    id: "gnocchi-sage",
    name: "Potato gnocchi, burnt sage",
    description:
      "We make the gnocchi in the afternoon. Sage, brown butter, walnuts. A quiet plate for a loud table.",
    price: 520,
    category: "continental",
    diet: "veg",
    spice: 0,
    bestseller: false,
  },
  {
    id: "jain-risotto",
    name: "Saffron risotto, roasted pumpkin",
    description:
      "No onion stock. Pumpkin roasted until it sweetens itself, saffron from the small tin we guard.",
    price: 540,
    category: "continental",
    diet: "jain",
    spice: 0,
    bestseller: false,
  },
  {
    id: "herb-chicken",
    name: "Herb roast chicken, pan juices",
    description:
      "Half a bird, thyme, garlic, a mash that is mostly potato and some pride. Sunday lunch without the in-laws if you like.",
    price: 620,
    category: "continental",
    diet: "nonveg",
    spice: 0,
    bestseller: false,
  },
  {
    id: "butter-naan",
    name: "Butter naan",
    description: "Slapped, blistered, brushed. Order more than you think.",
    price: 70,
    category: "bread-rice",
    diet: "veg",
    spice: 0,
    bestseller: true,
  },
  {
    id: "jain-roti",
    name: "Jain tandoori roti",
    description: "No ghee on the fire if you ask. Still has a char.",
    price: 55,
    category: "bread-rice",
    diet: "jain",
    spice: 0,
    bestseller: false,
  },
  {
    id: "mutton-biryani",
    name: "Dum mutton biryani",
    description:
      "Sealed, saffron, potatoes that have earned their place. Served for two. The raita is not an extra.",
    price: 780,
    category: "bread-rice",
    diet: "nonveg",
    spice: 2,
    bestseller: true,
  },
  {
    id: "veg-pulao",
    name: "Jeera pulao",
    description: "Basmati, cumin, a little ghee. The honest companion to dal.",
    price: 240,
    category: "bread-rice",
    diet: "jain",
    spice: 0,
    bestseller: false,
  },
  {
    id: "gulab-toast",
    name: "Gulab jamun, warm",
    description:
      "Two pieces, syrup that is not cloying, a spoon of rabri if you look like you need it.",
    price: 220,
    category: "dessert",
    diet: "veg",
    spice: 0,
    bestseller: true,
  },
  {
    id: "sitaphal",
    name: "Sitaphal cream",
    description:
      "When custard apple is in season in Nashik, this is the only dessert we talk about. Off-season, we tell you honestly.",
    price: 260,
    category: "dessert",
    diet: "jain",
    spice: 0,
    bestseller: false,
  },
  {
    id: "chocolate-pot",
    name: "Dark chocolate pot, sea salt",
    description:
      "A small ramekin, 70 percent, cream, a pinch of salt. The Continental list’s last word.",
    price: 280,
    category: "dessert",
    diet: "veg",
    spice: 0,
    bestseller: false,
  },
  {
    id: "chaas",
    name: "Masala chaas",
    description: "Cold, salted, cumin. The correct answer to a 42-degree Nashik afternoon.",
    price: 90,
    category: "glass",
    diet: "jain",
    spice: 1,
    bestseller: false,
  },
  {
    id: "nimbu",
    name: "Fresh lime soda, sweet-salt",
    description: "The way College Road has always drunk it. No cordial.",
    price: 110,
    category: "glass",
    diet: "jain",
    spice: 0,
    bestseller: true,
  },
  {
    id: "filter-coffee",
    name: "South filter coffee",
    description:
      "We keep a decoction for the uncle who refuses to end lunch without it. Fair enough.",
    price: 120,
    category: "glass",
    diet: "veg",
    spice: 0,
    bestseller: false,
  },
];
