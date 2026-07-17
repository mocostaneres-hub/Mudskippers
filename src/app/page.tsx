import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { CAMP_LOCATION } from "@/lib/camp-location";
import {
  createBreadcrumbJsonLd,
  createPageMetadata,
  createWebPageJsonLd,
} from "@/lib/seo";

const description =
  "Mudskippers Camp is a Burning Man 2026 camp at 6:45 & C in Black Rock City, home of The Pop Gym, playa workouts, pop music, and community events.";

export const metadata: Metadata = createPageMetadata({
  title: "Mudskippers Camp and the Pop Gym",
  description,
  path: "/",
});

const homeJsonLd = [
  createWebPageJsonLd({
    name: "Mudskippers Camp",
    description,
    path: "/",
    keywords: [
      "Mudskippers Camp",
      "Burning Man camp",
      "Burning Man 2026 camp",
      "The Pop Gym",
      "Burning Man gym",
      "Black Rock City gym",
      "playa workouts",
    ],
  }),
  createBreadcrumbJsonLd([{ name: "Mudskippers Camp", path: "/" }]),
];

export default function Home() {
  return (
    <>
      <JsonLd data={homeJsonLd} />
      <section className="px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl w-full py-12 sm:py-16">
          <h1 className="font-display font-light text-ink leading-[0.95] tracking-tight text-[clamp(2.75rem,9vw,8rem)]">
            Mudskippers Camp
            <br />
            and the Pop Gym
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-ink-soft max-w-xl">
            Lift, stretch, sweat, and recover at The Pop Gym &mdash; our
            Burning Man 2026 camp centerpiece, with pop-fueled workouts and
            dusty community all week long in Black Rock City.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="/pop-gym"
              className="group inline-flex items-center gap-2 text-terracotta text-lg sm:text-xl"
            >
              <span className="border-b border-terracotta/40 group-hover:border-terracotta transition-colors pb-0.5">
                Explore The Pop Gym
              </span>
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
            <Link
              href="/schedule"
              className="group inline-flex items-center gap-2 text-ink-soft hover:text-ink text-lg sm:text-xl"
            >
              <span className="border-b border-rule group-hover:border-ink transition-colors pb-0.5">
                2026 schedule
              </span>
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-10 lg:px-16 pb-12 sm:pb-16">
        <div className="mx-auto max-w-7xl w-full">
          <div className="relative w-full aspect-[16/9] overflow-hidden bg-cream">
            <Image
              src="/images/pop-gym.jpg"
              alt="The fully equipped Pop Gym on the playa with free weights, workout benches, retro decor, and disco balls"
              fill
              priority
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-10 lg:px-16 pb-16">
        <div className="mx-auto max-w-7xl border-t border-rule pt-10">
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm sm:text-[15px]">
            <li>
              <span className="font-display text-terracotta text-base">01</span>
              <p className="mt-2 font-display font-light text-ink text-xl sm:text-2xl">
                The Pop Gym
              </p>
              <p className="mt-1 text-ink-soft">
                Open Monday through Friday for workouts in the dust.
              </p>
            </li>
            <li>
              <span className="font-display text-terracotta text-base">02</span>
              <p className="mt-2 font-display font-light text-ink text-xl sm:text-2xl">
                Functional training
              </p>
              <p className="mt-1 text-ink-soft">
                Squat rack, TRX, kettlebells, battle ropes, and more.
              </p>
            </li>
            <li>
              <span className="font-display text-terracotta text-base">03</span>
              <p className="mt-2 font-display font-light text-ink text-xl sm:text-2xl">
                Camp
              </p>
              <p className="mt-1 text-ink-soft">
                Burning Man 2026 &mdash; {CAMP_LOCATION}.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
