import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

const routes: Array<{
  path: `/${string}`;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/pop-gym", changeFrequency: "weekly", priority: 0.95 },
  { path: "/schedule", changeFrequency: "weekly", priority: 0.9 },
  { path: "/faq", changeFrequency: "weekly", priority: 0.85 },
  { path: "/join", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.75 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
