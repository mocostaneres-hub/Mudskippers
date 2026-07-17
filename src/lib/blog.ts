export type BlogPost = {
  title: string;
  shortTitle: string;
  slug: string;
  path: `/${string}`;
  description: string;
  category: string;
  publishedTime: string;
  displayDate: string;
  readingTime: string;
  image: `/${string}`;
  imageAlt: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Mo’s Burning Man Packing List: What to Bring to the Playa",
    shortTitle: "Mo’s Burning Man Packing List",
    slug: "burning-man-packing-list",
    path: "/blog/burning-man-packing-list",
    description:
      "A field-tested Burning Man packing list covering dust protection, lighting, bikes, camp essentials, clothing, documents, and playa-ready advice.",
    category: "Burning Man preparation",
    publishedTime: "2026-07-17T12:00:00-07:00",
    displayDate: "July 17, 2026",
    readingTime: "8 min read",
    image: "/images/camp-group-hero.png",
    imageAlt: "Mudskippers Camp members gathered together at Burning Man",
  },
  {
    title: "How to Work Out at Burning Man Without Burning Out",
    shortTitle: "Work Out at Burning Man Without Burning Out",
    slug: "how-to-work-out-at-burning-man",
    path: "/blog/how-to-work-out-at-burning-man",
    description:
      "A practical guide to playa-smart workouts, hydration, pacing, and recovery at Burning Man from The Pop Gym at Mudskippers Camp.",
    category: "Training & recovery",
    publishedTime: "2026-07-17T08:00:00-07:00",
    displayDate: "July 17, 2026",
    readingTime: "7 min read",
    image: "/images/pop-gym.jpg",
    imageAlt:
      "The Pop Gym on the Burning Man playa with workout equipment and a disco ball",
  },
];

export const getBlogPost = (slug: string) =>
  BLOG_POSTS.find((post) => post.slug === slug);
