import type { Metadata } from "next";

export const SITE_URL = "https://www.mudskippercafe.com";
export const SITE_NAME = "Mudskippers Camp";
export const SITE_EMAIL = "info@mudskippercafe.com";

export const DEFAULT_DESCRIPTION =
  "Mudskippers Camp is a Burning Man 2026 camp in Black Rock City built around The Pop Gym, playa workouts, pop music, community, and legendary afternoon events.";

type SeoImage = {
  url: `/${string}`;
  width: number;
  height: number;
  alt: string;
};

export const DEFAULT_OG_IMAGE = {
  url: "/images/pop-gym.png",
  width: 1536,
  height: 1024,
  alt: "The Pop Gym at Mudskippers Camp on the Burning Man playa",
} satisfies SeoImage;

export const SOCIAL_URLS = [
  "https://www.instagram.com/mudskipperscamp/",
  "https://www.facebook.com/mudskipperscamp",
];

type PageMetadata = {
  title: string;
  description: string;
  path: `/${string}`;
  image?: SeoImage;
};

export function absoluteUrl(path: `/${string}` = "/") {
  return new URL(path, SITE_URL).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
}: PageMetadata): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}

export function createWebPageJsonLd({
  name,
  description,
  path,
  keywords,
  image = DEFAULT_OG_IMAGE.url,
}: {
  name: string;
  description: string;
  path: `/${string}`;
  keywords: string[];
  image?: `/${string}`;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    url: absoluteUrl(path),
    description,
    inLanguage: "en-US",
    keywords: keywords.join(", "),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(image),
    },
  };
}

export function createBreadcrumbJsonLd(
  items: Array<{ name: string; path: `/${string}` }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
