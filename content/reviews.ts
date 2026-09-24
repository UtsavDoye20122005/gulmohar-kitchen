export type Review = {
  id: string;
  name: string;
  locality: string;
  rating: 4 | 5;
  date: string;
  body: string;
};

export const reviews = {
  average: 4.8,
  countLabel: "420 Google reviews",
  seeAllLabel: "See all reviews on Google",
  items: [
    {
      id: "anjali",
      name: "Anjali Kulkarni",
      locality: "Gangapur Road",
      rating: 5,
      date: "August 2026",
      body: "We have been coming since they opened — same dal, same butter naan, same Meenal walking the floor at 9. The Continental fish surprised my husband, who only wanted tandoor. Parking is still a Nashik problem. The food is not.",
    },
    {
      id: "rohan",
      name: "Rohan Patil",
      locality: "Panchavati",
      rating: 5,
      date: "July 2026",
      body: "Booked a table for my parents after the Trimbakeshwar trip. Jain kadhai was actually spiced, not the bland hotel version. Staff did not rush us for the next seating. That is rare on College Road.",
    },
    {
      id: "fatima",
      name: "Fatima Shaikh",
      locality: "Sadar Bazaar",
      rating: 4,
      date: "June 2026",
      body: "Butter chicken is not cloying, which I appreciate. Weekend wait without a reservation was twenty minutes even after WhatsApping. Worth it for the tangdi. AC in the long hall could be a degree colder in May.",
    },
    {
      id: "sandeep",
      name: "Sandeep Joshi",
      locality: "Satpur",
      rating: 5,
      date: "May 2026",
      body: "Office lunch for eight from the MIDC. They joined tables along the wall, sent the bill split without a speech. Mutton biryani fed more than the menu admitted. Will go back when the next client flies in from Pune.",
    },
    {
      id: "priya",
      name: "Priya Wagh",
      locality: "College Road",
      rating: 5,
      date: "April 2026",
      body: "I live three lanes away and still reserve on Fridays. The sitaphal cream in season is the reason I forgive them for not serving wine. Captain remembered we do not want onion in the salad. That is the whole point of a neighbourhood room.",
    },
  ] satisfies Review[],
};
