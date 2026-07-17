import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { BLOG_POSTS } from "@/lib/blog";
import {
  createBreadcrumbJsonLd,
  createPageMetadata,
  createWebPageJsonLd,
} from "@/lib/seo";

const description =
  "Stories and practical guides from Mudskippers Camp about The Pop Gym, playa workouts, Burning Man preparation, community, and life in the dust.";

export const metadata: Metadata = createPageMetadata({
  title: "Blog | Playa Workouts, Camp Life, and Burning Man Guides",
  description,
  path: "/blog",
});

const blogJsonLd = [
  createWebPageJsonLd({
    name: "Mudskippers Camp Blog",
    description,
    path: "/blog",
    keywords: [
      "Burning Man blog",
      "Burning Man workout",
      "playa fitness",
      "Burning Man preparation",
      "The Pop Gym",
      "Mudskippers Camp",
    ],
  }),
  createBreadcrumbJsonLd([
    { name: "Mudskippers Camp", path: "/" },
    { name: "Blog", path: "/blog" },
  ]),
];

export default function BlogPage() {
  return (
    <section className="px-6 sm:px-10 lg:px-16">
      <JsonLd data={blogJsonLd} />
      <div className="mx-auto w-full max-w-7xl py-16 sm:py-24">
        <p className="text-sm uppercase tracking-[0.2em] text-ink-soft">
          From the dust
        </p>
        <h1 className="mt-4 max-w-5xl font-display text-[clamp(3rem,8vw,7rem)] font-light leading-[0.95] tracking-tight text-ink">
          Notes from
          <br />
          the Mudskippers.
        </h1>
        <p className="mt-10 max-w-2xl text-xl leading-relaxed text-ink-soft sm:text-2xl">
          Practical guides to moving, recovering, and finding your people in
          Black Rock City.
        </p>

        <div className="mt-16 sm:mt-20">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="grid grid-cols-1 gap-8 border-t border-rule py-10 md:grid-cols-12 md:gap-12"
            >
              <Link
                href={post.path}
                className="group relative aspect-[16/10] overflow-hidden bg-cream-soft md:col-span-5"
                aria-label={`Read ${post.title}`}
              >
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(min-width: 768px) 42vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </Link>

              <div className="flex flex-col justify-center md:col-span-7">
                <p className="text-sm uppercase tracking-[0.18em] text-terracotta">
                  {post.category}
                </p>
                <h2 className="mt-4 max-w-3xl font-display text-4xl font-light leading-tight text-ink sm:text-5xl">
                  <Link
                    href={post.path}
                    className="transition-colors hover:text-terracotta"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
                  {post.description}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-soft">
                  <time dateTime={post.publishedTime}>{post.displayDate}</time>
                  <span aria-hidden>·</span>
                  <span>{post.readingTime}</span>
                </div>
                <Link
                  href={post.path}
                  className="group mt-7 inline-flex w-fit items-center gap-2 text-lg text-terracotta"
                >
                  <span className="border-b border-terracotta/40 pb-0.5 transition-colors group-hover:border-terracotta">
                    Read the guide
                  </span>
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
