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
  url: "/images/pop-gym.jpg",
  width: 1280,
  height: 960,
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

type ArticleMetadata = PageMetadata & {
  publishedTime: string;
  modifiedTime?: string;
  authors?: string[];
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

export function createArticleMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  publishedTime,
  modifiedTime = publishedTime,
  authors = [SITE_NAME],
}: ArticleMetadata): Metadata {
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
      type: "article",
      publishedTime,
      modifiedTime,
      authors,
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

export function createArticleJsonLd({
  headline,
  description,
  path,
  publishedTime,
  modifiedTime = publishedTime,
  image = DEFAULT_OG_IMAGE.url,
}: {
  headline: string;
  description: string;
  path: `/${string}`;
  publishedTime: string;
  modifiedTime?: string;
  image?: `/${string}`;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    datePublished: publishedTime,
    dateModified: modifiedTime,
    image: absoluteUrl(image),
    mainEntityOfPage: absoluteUrl(path),
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
