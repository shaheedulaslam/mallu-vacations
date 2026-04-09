export interface Destination {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  heroImage: string;
  gallery: string[];
  activities: {
    name: string;
    image: string;
    description: string;
  }[];
  highlights: {
    title: string;
    description: string;
  }[];
}

export const destinations: Destination[] = [
  {
    slug: "havelock-island",
    title: "Havelock Island",
    description: "Famous for crystal clear waters and Radhanagar Beach.",
    fullDescription: "Havelock Island is the most popular island in the Andaman archipelago. It is home to Radhanagar Beach, consistently ranked among the best beaches in Asia. The island is a haven for water sports enthusiasts and those looking for a luxurious tropical escape.",
    heroImage: "/images/havelock.png",
    gallery: ["/images/scuba_diving.png", "/images/snorkeling.png", "/images/sea_walk.png"],
    activities: [
      { name: "Scuba Diving", image: "/images/scuba_diving.png", description: "Explore the vibrant coral reefs." },
      { name: "Snorkeling", image: "/images/snorkeling.png", description: "Get close to marine life in shallow waters." },
      { name: "Sea Walk", image: "/images/sea_walk.png", description: "Walk on the ocean floor." }
    ],
    highlights: [
      { title: "Radhanagar Beach", description: "Savor the sunset at Asia's best beach." },
      { title: "Elephant Beach", description: "A hub for water sports and pristine corals." },
      { title: "Kalapathar Beach", description: "A quiet spot with stunning turquoise waters." }
    ]
  },
  {
    slug: "neil-island",
    title: "Neil Island",
    description: "Natural coral bridges and absolute tranquility.",
    fullDescription: "Neil Island, officially known as Shaheed Dweep, is the 'vegetable bowl' of the Andamans. It offers a slower pace of life with its many small beaches and unique natural rock formations, including the famous Natural Bridge.",
    heroImage: "/images/neil_island.png",
    gallery: ["/images/jet_skiing.png", "/images/parasailing.png", "/images/trekking.png"],
    activities: [
      { name: "Glass Bottom Boat", image: "/images/jet_skiing.png", description: "See the reefs without getting wet." },
      { name: "Cycling", image: "/images/trekking.png", description: "Explore the island's lush lanes." }
    ],
    highlights: [
      { title: "Natural Bridge", description: "A stunning rock formation carved by the sea." },
      { title: "Bharatpur Beach", description: "Famous for coral watching and swimming." },
      { title: "Sitapur Beach", description: "The best spot to witness the sunrise." }
    ]
  },
  {
    slug: "port-blair",
    title: "Port Blair",
    description: "A journey through India's historical heart.",
    fullDescription: "Port Blair is the gateway to the Andaman Islands. It blends a rich colonial history with modern island life. From the somber Cellular Jail to the vibrant local markets, it's a must-visit for every traveler.",
    heroImage: "/images/cellular_jail.png",
    gallery: ["/images/cellular_jail.png", "/images/ross_island.png", "/images/chidiyatapu.png"],
    activities: [
      { name: "Light & Sound Show", image: "/images/cellular_jail.png", description: "Witness the history of Indian struggle." },
      { name: "Museum Visit", image: "/images/about_us.png", description: "Learn about the tribes and ecology." }
    ],
    highlights: [
      { title: "Cellular Jail", description: "A historic monument of India's freedom fight." },
      { title: "Corbyn's Cove", description: "The closest beach to the city center." },
      { title: "Samudrika Museum", description: "An insightful look at marine life." }
    ]
  },
  {
    slug: "ross-island",
    title: "Ross Island",
    description: "Mystical ruins and friendly deer trails.",
    fullDescription: "Ross Island, now known as Netaji Subhash Chandra Bose Island, was once the administrative headquarters of the British. Today, it stands as a ghost town with overgrown ruins, inhabited by deer and peacocks.",
    heroImage: "/images/ross_island.png",
    gallery: ["/images/ross_island.png", "/images/about_us.png"],
    activities: [
      { name: "Heritage Walk", image: "/images/ross_island.png", description: "Walk through the colonial ruins." },
      { name: "Deer Feeding", image: "/images/trekking.png", description: "Interact with local wildlife." }
    ],
    highlights: [
      { title: "Presbyterian Church", description: "A beautifully ruined colonial church." },
      { title: "Chief Commissioner's House", description: "Ruins of the former luxury residence." }
    ]
  },
  {
    slug: "chidiyatapu",
    title: "Chidiyatapu",
    description: "The sunset point and bird watcher's paradise.",
    fullDescription: "Chidiyatapu is famous for its sunset views and lush green mangroves. It's a paradise for bird enthusiasts and those seeking a quiet evening by the sea.",
    heroImage: "/images/chidiyatapu.png",
    gallery: ["/images/chidiyatapu.png", "/images/trekking.png"],
    activities: [
      { name: "Trekking", image: "/images/trekking.png", description: "Hike to Munda Pahar sunset point." },
      { name: "Bird Watching", image: "/images/about_us.png", description: "Spot endemic island birds." }
    ],
    highlights: [
      { title: "Munda Pahar Beach", description: "A hidden gem for swimming and relaxing." },
      { title: "Biological Park", description: "Home to the diverse flora and fauna of Andaman." }
    ]
  },
  {
    slug: "barren-island",
    title: "Barren Island",
    description: "Discover Asia's only active volcano.",
    fullDescription: "Barren Island is home to the only active volcano in South Asia. While landing on the island is not allowed, you can see the smoking volcano from a private charter boat.",
    heroImage: "/images/barren_island.png",
    gallery: ["/images/barren_island.png"],
    activities: [
      { name: "Scuba Diving", image: "/images/scuba_diving.png", description: "Dive in the crystal clear volcanic waters." },
      { name: "Fishing", image: "/images/jet_skiing.png", description: "Deep sea fishing near the volcano." }
    ],
    highlights: [
      { title: "Volcanic Crater", description: "See the smoke rising from the active crater." },
      { title: "Pristine Diving", description: "Unmatched visibility in the deep blue." }
    ]
  }
];
