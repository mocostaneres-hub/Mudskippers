import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { getBlogPost } from "@/lib/blog";
import {
  createArticleJsonLd,
  createArticleMetadata,
  createBreadcrumbJsonLd,
} from "@/lib/seo";

const post = getBlogPost("burning-man-packing-list")!;

export const metadata: Metadata = createArticleMetadata({
  title: post.title,
  description: post.description,
  path: post.path,
  publishedTime: post.publishedTime,
});

const articleJsonLd = [
  createArticleJsonLd({
    headline: post.title,
    description: post.description,
    path: post.path,
    publishedTime: post.publishedTime,
    image: post.image,
  }),
  createBreadcrumbJsonLd([
    { name: "Mudskippers Camp", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.shortTitle, path: post.path },
  ]),
];

const categories = [
  {
    number: "01",
    title: "Survival",
    intro: "Protect yourself from dust, wind, and unpredictable playa conditions.",
    items: [
      ["Dust masks", "Keep a well-fitting mask within reach for dust storms and full whiteouts."],
      ["Dust goggles", "Protect your eyes when the wind turns Black Rock City into a wall of dust."],
      ["12-inch lag screw tent stakes", "If you are pitching a tent or shade structure, use heavy-duty anchors made for strong playa winds."],
    ],
  },
  {
    number: "02",
    title: "Lighting",
    intro: "Bring reliable light for camp, late-night walks, and hands-free fixes.",
    items: [
      ["Rechargeable headlamp", "Essential for finding the porta-potties, navigating camp, and solving nighttime problems with both hands free."],
      ["Tent lights", "Soft interior lighting makes it much easier to find your gear and settle in after dark."],
    ],
  },
  {
    number: "03",
    title: "Bike essentials",
    intro: "Your bike is your transportation. Keep it secure, visible, and easy to identify.",
    items: [
      ["Combination bike lock", "Secure your bike every time without having to keep track of a tiny key."],
      ["Bike headlight and tail light", "Use both front and rear lights so you can see and other riders can see you."],
    ],
  },
  {
    number: "04",
    title: "Hygiene",
    intro: "Small comforts make dusty days and long nights much easier.",
    items: [
      ["Portable urinal", "A practical nighttime backup when the nearest porta-potty feels impossibly far away."],
      ["Baby wipes", "The quickest way to wipe away dust and freshen up when showers are limited."],
    ],
  },
  {
    number: "05",
    title: "Food and drink",
    intro: "Pack reusable personal gear for meals, hydration, and Leave No Trace living.",
    items: [
      ["Cup with a handle", "Bring a reusable cup that is easy to carry, clip to your bag, and identify as yours."],
      ["Collapsible water jug", "Keep extra drinking water conveniently available at camp."],
      ["Camping plate and utensils", "A reusable set keeps you ready for camp meals without creating disposable waste."],
    ],
  },
  {
    number: "06",
    title: "Clothing",
    intro: "Plan for a dramatic temperature shift between day and night.",
    items: [
      ["Light daytime clothes", "Pack shorts, swimwear, hats, sunglasses, and anything that helps you stay cool."],
      ["Real warm layers", "Desert temperatures can drop sharply after sunset, so bring warmth—not only nighttime costumes."],
      ["Rain boots", "Unexpected rain can turn playa dust into thick, sticky mud very quickly."],
      ["Wide-brimmed sun hat", "Shade for your face and neck matters during long, hot days."],
    ],
  },
  {
    number: "07",
    title: "Documents",
    intro: "Prepare identification and entry essentials before leaving home.",
    items: [
      ["Color copies of your ID", "Keep one copy in your pack and tape another securely to your cup."],
      ["Ticket and passes", "Double-check your Burning Man ticket, vehicle pass, and Early Arrival Pass, if applicable."],
    ],
  },
  {
    number: "08",
    title: "Useful extras",
    intro: "Helpful additions if you have the room.",
    items: [
      ["Tent tarp", "Place it under your tent to protect the floor from moisture, heat, and the playa surface."],
      ["Ziploc bags", "Bring a few for organizing small items and containing dust."],
      ["Battery-operated fan", "Makes hot tent mornings and afternoons much more manageable."],
      ["Portable power banks", "Pack one or two for your phone, headlamp, and small electronics."],
      ["Small solar setup", "Useful for reliable off-grid charging throughout the week."],
      ["Cooler", "Keeps food and drinks cold. Ice is sold on playa; camp does not provide refrigerators."],
    ],
  },
];

const amazonLinks: Record<string, string> = {
  "Dust masks":
    "https://www.amazon.com/dp/B0CG2G99MJ?tag=mobile09fe169-20",
  "Dust goggles":
    "https://www.amazon.com/dp/B0CHNN4S9G?tag=mobile09fe169-20",
  "12-inch lag screw tent stakes":
    "https://www.amazon.com/dp/B0DPN6VPZL",
  "Rechargeable headlamp":
    "https://www.amazon.com/dp/B0DK541NSS?tag=mobile09fe169-20",
  "Tent lights":
    "https://www.amazon.com/s?k=tent+lights+camping&tag=mobile09fe169-20",
  "Combination bike lock":
    "https://www.amazon.com/dp/B0F6D5RSGH?tag=mobile09fe169-20",
  "Bike headlight and tail light":
    "https://www.amazon.com/dp/B0CF8JRB6R?tag=mobile09fe169-20",
  "Portable urinal":
    "https://www.amazon.com/dp/B081S999SP?tag=mobile09fe169-20",
  "Cup with a handle":
    "https://www.amazon.com/dp/B0G7KD3TLK",
  "Collapsible water jug": "https://amzn.to/4ftzhb4",
  "Camping plate and utensils": "https://amzn.to/4ywigFO",
};

export default function BurningManPackingListPage() {
  return (
    <article className="px-6 sm:px-10 lg:px-16">
      <JsonLd data={articleJsonLd} />
      <div className="mx-auto w-full max-w-7xl py-16 sm:py-24">
        <Link href="/blog" className="group inline-flex items-center gap-2 text-ink-soft hover:text-ink">
          <span aria-hidden className="transition-transform group-hover:-translate-x-1">←</span>
          <span>Back to the blog</span>
        </Link>

        <header className="mt-12 max-w-5xl">
          <p className="text-sm uppercase tracking-[0.2em] text-terracotta">{post.category}</p>
          <h1 className="mt-4 font-display text-[clamp(3rem,7vw,6.5rem)] font-light leading-[0.96] tracking-tight text-ink">
            Mo’s Burning Man packing list.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-ink-soft sm:text-2xl">
            A field-tested collection of essentials for surviving the dust, heat, cold, and beautiful chaos of Black Rock City.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-soft">
            <span>By Mo &amp; Mudskippers Camp</span><span aria-hidden>·</span>
            <time dateTime={post.publishedTime}>{post.displayDate}</time><span aria-hidden>·</span><span>{post.readingTime}</span>
          </div>
        </header>

        <div className="mx-auto mt-14 max-w-6xl sm:mt-20">
          <div className="flex flex-col gap-3 border-t border-rule pt-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-terracotta">Packing checklist</p>
              <h2 className="mt-2 font-display text-4xl font-light text-ink sm:text-5xl">Check it. Pack it. Go.</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-ink-soft">
              Check each box as you pack. Amazon links are included where Mo recommends a specific item.
            </p>
          </div>

          <div className="mt-8 overflow-x-auto border border-rule">
            <table className="w-full min-w-[46rem] border-collapse text-left">
              <thead className="bg-cream-soft text-xs uppercase tracking-[0.16em] text-ink-soft">
                <tr>
                  <th scope="col" className="w-16 px-4 py-4 text-center font-normal">Pack</th>
                  <th scope="col" className="w-[28%] px-4 py-4 font-normal">Item</th>
                  <th scope="col" className="px-4 py-4 font-normal">What to know</th>
                  <th scope="col" className="w-36 px-4 py-4 font-normal">Link</th>
                </tr>
              </thead>
              {categories.map((category) => (
                <tbody key={category.number} className="border-t border-rule">
                  <tr className="bg-cream-soft/60">
                    <th colSpan={4} scope="colgroup" className="px-4 py-4 text-left font-normal">
                      <span className="mr-3 text-sm text-terracotta">{category.number}</span>
                      <span className="font-display text-2xl text-ink">{category.title}</span>
                      <span className="ml-3 text-sm text-ink-soft">{category.intro}</span>
                    </th>
                  </tr>
                  {category.items.map(([title, body]) => {
                    const amazonUrl = amazonLinks[title];

                    return (
                      <tr key={title} className="border-t border-rule align-top">
                        <td className="px-4 py-5 text-center">
                          <input
                            type="checkbox"
                            aria-label={`Mark ${title} as packed`}
                            className="h-5 w-5 cursor-pointer accent-terracotta"
                          />
                        </td>
                        <th scope="row" className="px-4 py-5 font-display text-xl font-light leading-snug text-ink">
                          {title}
                        </th>
                        <td className="px-4 py-5 text-base leading-relaxed text-ink-soft">{body}</td>
                        <td className="px-4 py-5">
                          {amazonUrl ? (
                            <a
                              href={amazonUrl}
                              target="_blank"
                              rel="noreferrer sponsored"
                              className="inline-flex items-center gap-1 border-b border-terracotta/40 pb-0.5 text-sm text-terracotta hover:border-terracotta"
                            >
                              Amazon <span aria-hidden>↗</span>
                            </a>
                          ) : (
                            <span className="text-sm text-ink-soft">—</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              ))}
            </table>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-ink-soft">
            As an Amazon Associate, we may earn from qualifying purchases.
          </p>

          <section className="mt-12 border-y border-rule py-8">
            <h2 className="font-display text-3xl font-light text-ink">Before you leave</h2>
            <ul className="mt-5 grid gap-4 text-base leading-relaxed text-ink-soft sm:grid-cols-2">
              <li>Keep your ticket, passes, ID, water, food, mask, goggles, and lights easy to reach.</li>
              <li>Keep your real license plate visible and follow every posted speed limit after Reno.</li>
            </ul>
          </section>

          <p className="mt-8 text-sm leading-relaxed text-ink-soft">
            Follow current Burning Man survival guidance, transportation rules, weather advisories, and your camp’s instructions.
          </p>
        </div>
      </div>
    </article>
  );
}
