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

export const FIRST_BLOG_POST = BLOG_POSTS[0];
