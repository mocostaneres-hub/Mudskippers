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
];

const smartExtras = [
  "Put a tarp under your tent to protect the floor from moisture, heat, and the harsh playa surface.",
  "Bring a few Ziploc bags, but not so many that you create a pile of dusty leftovers.",
  "A battery-operated fan can make hot tent mornings much more manageable.",
  "Pack one or two portable power banks for your phone, headlamp, and small electronics.",
  "Bring a small solar setup if you need reliable off-grid charging throughout the week.",
  "Use a cooler for food and drinks. Ice is sold on playa, but camp does not provide refrigerators.",
];

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

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-12 md:gap-16 sm:mt-20">
          <aside className="md:col-span-3">
            <div className="border-t border-rule pt-6 md:sticky md:top-8">
              <p className="text-sm uppercase tracking-[0.18em] text-ink-soft">Before you drive in</p>
              <p className="mt-4 font-display text-2xl font-light leading-snug text-ink">
                Keep your mask, goggles, water, food, lights, ticket, and passes where you can reach them without unpacking the car.
              </p>
            </div>
          </aside>

          <div className="space-y-14 text-lg leading-relaxed text-ink-soft md:col-span-9">
            <section>
              <h2 className="font-display text-4xl font-light leading-tight text-ink sm:text-5xl">Pack for the environment.</h2>
              <div className="mt-6 space-y-5">
                <p>Burning Man packing is less about bringing everything and more about being ready for extremes. Dust, wind, blazing afternoons, cold nights, and sudden rain can all happen in the same week.</p>
                <p>This list covers the personal essentials that have earned their place in Mo’s kit. Your camp may provide some shared infrastructure, but you are responsible for your own comfort, safety, hydration, and Leave No Trace supplies.</p>
              </div>
            </section>

            {categories.map((category) => (
              <section key={category.number}>
                <p className="text-sm uppercase tracking-[0.18em] text-terracotta">{category.number}</p>
                <h2 className="mt-2 font-display text-4xl font-light leading-tight text-ink sm:text-5xl">{category.title}.</h2>
                <p className="mt-5">{category.intro}</p>
                <ul className="mt-7 space-y-5">
                  {category.items.map(([title, body]) => (
                    <li key={title} className="grid grid-cols-[1.5rem_1fr] gap-3 border-t border-rule pt-5">
                      <span aria-hidden className="text-terracotta">✓</span>
                      <div><h3 className="font-display text-2xl font-light text-ink">{title}</h3><p className="mt-2">{body}</p></div>
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            <section>
              <h2 className="font-display text-4xl font-light leading-tight text-ink sm:text-5xl">Smart extras worth the space.</h2>
              <ul className="mt-7 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
                {smartExtras.map((item) => <li key={item} className="flex gap-3 border-t border-rule pt-4"><span aria-hidden className="text-terracotta">→</span><span>{item}</span></li>)}
              </ul>
            </section>

            <aside className="border-y border-rule py-10">
              <p className="text-sm uppercase tracking-[0.18em] text-terracotta">Two road rules</p>
              <p className="mt-4 font-display text-3xl font-light leading-snug text-ink sm:text-4xl">Keep your real license plate fully visible, and follow every posted speed limit exactly after Reno.</p>
              <p className="mt-5">Enforcement on the route to Black Rock City is strict. If bikes or gear block your plate, use a legal relocation bracket or approved auxiliary plate—never improvise a fake one.</p>
            </aside>

            <section>
              <h2 className="font-display text-4xl font-light leading-tight text-ink sm:text-5xl">One final check.</h2>
              <p className="mt-6">Before pulling away, confirm that your ticket, passes, ID, water, food, mask, goggles, and lights are in the vehicle and easy to reach. If weather delays entry, you may need to wait safely for hours.</p>
              <p className="mt-5 font-display text-3xl font-light text-ink">Pack smart. Leave no trace. See you in the dust.</p>
              <a
                href="https://mos-burning-man-packing-list.mocostaneres.chatgpt.site"
                target="_blank"
                rel="noreferrer"
                className="group mt-7 inline-flex items-center gap-2 text-lg text-terracotta"
              >
                <span className="border-b border-terracotta/40 pb-0.5 transition-colors group-hover:border-terracotta">
                  Open Mo’s interactive packing checklist
                </span>
                <span aria-hidden className="transition-transform group-hover:translate-x-1">↗</span>
              </a>
            </section>

            <p className="text-sm leading-relaxed text-ink-soft">Product links and recommendations can change. Follow current Burning Man survival guidance, transportation rules, weather advisories, and the instructions provided by your camp.</p>
          </div>
        </div>
      </div>
    </article>
  );
}
