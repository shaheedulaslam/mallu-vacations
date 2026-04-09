export interface Activity {
  name: string;
  image: string;
  description: string;
  price?: string;
}

export interface Package {
  name: string;
  duration: string;
  price: string;
  features: string[];
}

export interface Accommodation {
  name: string;
  type: string; // e.g. "Luxury Resort", "Eco-Friendly Hut"
  image: string;
  rating: number;
}

export interface Destination {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  heroImage: string;
  gallery: string[];
  activities: Activity[];
  highlights: {
    title: string;
    description: string;
  }[];
  packages: Package[];
  accommodations: Accommodation[];
}

export const destinations: Destination[] = [
  {
    slug: "havelock-island",
    title: "Havelock Island",
    description: "Famous for crystal clear waters and Radhanagar Beach.",
    fullDescription: "Havelock Island is the jewel of the Andaman Islands. It is home to Radhanagar Beach, consistently ranked among the best beaches in Asia. Whether you're looking for world-class scuba diving, serene sunset walks, or luxury beachfront stays, Havelock offers an unmatched tropical experience.",
    heroImage: "/images/havelock.png",
    gallery: ["/images/scuba_diving.png", "/images/snorkeling.png", "/images/sea_walk.png"],
    activities: [
      { name: "Scuba Diving", image: "/images/scuba_diving.png", description: "Experience the vibrant Nemo Reef with certified instructors.", price: "₹3,500" },
      { name: "Elephant Beach Trekking", image: "/images/trekking.png", description: "A jungle trail leading to the blue lagoon.", price: "₹1,200" },
      { name: "Kayaking in Mangroves", image: "/images/sea_walk.png", description: "Night kayaking under the stars and bioluminescence.", price: "₹2,500" }
    ],
    highlights: [
      { title: "Radhanagar Beach", description: "The most beautiful beach in Asia with golden sands." },
      { title: "Nemo Reef", description: "The top spot for beginner-friendly scuba diving." },
      { title: "Elephant Beach", description: "Perfect for snorkeling and glass-bottom boats." }
    ],
    packages: [
      { name: "Honeymoon special", duration: "3D/2N", price: "₹24,999", features: ["Luxury Stay", "Candlelight Dinner", "Scuba Diving"] },
      { name: "Adventure Explorer", duration: "4D/3N", price: "₹18,500", features: ["Resort Stay", "Trekking", "Island Hopping"] }
    ],
    accommodations: [
      { name: "Taj Exotica Resort", type: "Luxury 5-Star", image: "/images/hero.png", rating: 5 },
      { name: "Barefoot at Havelock", type: "Eco-Luxury", image: "/images/about_us.png", rating: 5 }
    ]
  },
  {
    slug: "neil-island",
    title: "Neil Island",
    description: "Natural coral bridges and absolute tranquility.",
    fullDescription: "Neil Island (Shaheed Dweep) is the calm cousin of Havelock. Known for its lush green vegetables and shallow warm waters, it's perfect for families and those seeking peace. The natural bridge formation is a marvel of the marine world.",
    heroImage: "/images/neil_island.png",
    gallery: ["/images/jet_skiing.png", "/images/parasailing.png", "/images/trekking.png"],
    activities: [
      { name: "Glass Bottom Boat", image: "/images/jet_skiing.png", description: "Safe coral viewing for non-swimmers.", price: "₹800" },
      { name: "Coral Bridge Walk", image: "/images/trekking.png", description: "Guided tour through low-tide marine life.", price: "₹500" }
    ],
    highlights: [
      { title: "Natural Bridge", description: "Iconic rock formation visible during low tide." },
      { title: "Bharatpur Beach", description: "Shallow waters ideal for family swimming." },
      { title: "Laxmanpur Beach", description: "Spectacular sunset views over the Indian Ocean." }
    ],
    packages: [
      { name: "Serenity Tour", duration: "2D/1N", price: "₹12,499", features: ["Ocean View Stay", "Guided Sightseeing", "Breakfast"] }
    ],
    accommodations: [
      { name: "Sea Shell Neil", type: "Premium Resort", image: "/images/havelock.png", rating: 4.5 }
    ]
  },
  {
    slug: "port-blair",
    title: "Port Blair",
    description: "A journey through India's historical heart.",
    fullDescription: "The capital city and the gateway to your Andaman adventure. Port Blair offers a deep dive into the historical significance of the islands, from the cellular jail to the anthropological museum.",
    heroImage: "/images/cellular_jail.png",
    gallery: ["/images/cellular_jail.png", "/images/chidiyatapu.png"],
    activities: [
      { name: "Cellular Jail Show", image: "/images/cellular_jail.png", description: "Breathtaking Light & Sound history show.", price: "₹300" },
      { name: "Chidiyatapu Sunset", image: "/images/chidiyatapu.png", description: "Drive to the southern tip for a serene sunset.", price: "₹1,500" }
    ],
    highlights: [
      { title: "Cellular Jail", description: "A national monument dedicated to freedom fighters." },
      { title: "Corbyn's Cove", description: "The most accessible beach for a quick dip." }
    ],
    packages: [
      { name: "City Heritage", duration: "2D/1N", price: "₹8,999", features: ["3-Star Hotel", "Private Car", "Museum Passes"] }
    ],
    accommodations: [
      { name: "Welcomehotel by ITC", type: "Luxury Living", image: "/images/about_us.png", rating: 5 }
    ]
  },
  {
    slug: "ross-island",
    title: "Ross Island",
    description: "Mystical ruins and friendly deer trails.",
    fullDescription: "Once the 'Paris of the East', Ross Island is a beautiful ghost town that served as the British headquarters. Now, nature has reclaimed it, with deer roaming among colonial church ruins.",
    heroImage: "/images/ross_island.png",
    gallery: ["/images/ross_island.png"],
    activities: [
      { name: "Ghost Town Walk", image: "/images/ross_island.png", description: "Walk through the roots of history.", price: "₹500" }
    ],
    highlights: [
      { title: "British Ruins", description: "Overgrown churches and ballrooms." },
      { title: "Deer Trails", description: "Friendly spotted deer throughout the island." }
    ],
    packages: [
      { name: "Half-Day History", duration: "4 Hours", price: "₹1,500", features: ["Boat Ferry", "Guided Walk", "Photography"] }
    ],
    accommodations: [
      { name: "Mainland Stay Only", type: "Day Trip", image: "/images/hero.png", rating: 0 }
    ]
  },
  {
    slug: "chidiyatapu",
    title: "Chidiyatapu",
    description: "The sunset point and bird watcher's paradise.",
    fullDescription: "A tranquil paradise located at the southernmost tip of Port Blair. Known for its mesmerizing sunsets and rich birdlife, it's the perfect escape from the city bustle.",
    heroImage: "/images/chidiyatapu.png",
    gallery: ["/images/chidiyatapu.png"],
    activities: [
      { name: "Munda Pahar Trek", image: "/images/trekking.png", description: "A 1.5km hike to the cliff edge.", price: "₹200" }
    ],
    highlights: [
      { title: "Sunset Point", description: "The most photographed sunset spot in Andaman." },
      { title: "Birds Paradise", description: "Home to many endemic island bird species." }
    ],
    packages: [
      { name: "Sunset Special", duration: "Evening", price: "₹2,500", features: ["AC Cab", "Trek Guide", "Refreshments"] }
    ],
    accommodations: [
      { name: "Symphony Palms", type: "Luxury Stay", image: "/images/neil_island.png", rating: 4.5 }
    ]
  },
  {
    slug: "barren-island",
    title: "Barren Island",
    description: "Discover Asia's only active volcano.",
    fullDescription: "One of the most remote and mysterious places in India. Barren Island is home to an active volcano. While landing is forbidden, private charters allow you to witness this geological marvel from the sea.",
    heroImage: "/images/barren_island.png",
    gallery: ["/images/barren_island.png"],
    activities: [
      { name: "Volcano Cruise", image: "/images/barren_island.png", description: "Private charter boat to the volcanic coast.", price: "₹85,000" }
    ],
    highlights: [
      { title: "Active Crater", description: "Watch smoke plumes from the volcanic vent." },
      { title: "Tuna Fishing", description: "Deep sea fishing in the rich volcanic waters." }
    ],
    packages: [
      { name: "Private Charter", duration: "Full Day", price: "₹1.5 Lakh", features: ["Gourmet Food", "Scuba Gear", "Private Boat"] }
    ],
    accommodations: [
      { name: "On-Board Cabin", type: "Luxury Yacht", image: "/images/hero.png", rating: 5 }
    ]
  }
];
