import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { CAMP_LOCATION_FULL } from "@/lib/camp-location";
import {
  createBreadcrumbJsonLd,
  createPageMetadata,
  createWebPageJsonLd,
} from "@/lib/seo";

const description =
  "The Pop Gym is Mudskippers Camp's fully functional Burning Man gym in Black Rock City, themed after the music, color, and workout culture of the 80s and 90s.";

export const metadata: Metadata = createPageMetadata({
  title: "The Pop Gym | Burning Man Gym in Black Rock City",
  description,
  path: "/pop-gym",
  image: {
    url: "/images/pop-gym/pop-gym-functional-training.jpg",
    width: 1280,
    height: 960,
    alt: "The fully equipped Pop Gym at Mudskippers Camp on the Burning Man playa",
  },
});

const popGymJsonLd = [
  createWebPageJsonLd({
    name: "The Pop Gym at Mudskippers Camp",
    description,
    path: "/pop-gym",
    image: "/images/pop-gym/pop-gym-functional-training.jpg",
    keywords: [
      "The Pop Gym",
      "Burning Man gym",
      "Black Rock City gym",
      "80s and 90s themed gym",
      "playa workout",
      "functional training Burning Man",
      "kettlebells Burning Man",
      "TRX Burning Man",
    ],
  }),
  createBreadcrumbJsonLd([
    { name: "Mudskippers Camp", path: "/" },
    { name: "The Pop Gym", path: "/pop-gym" },
  ]),
];

const classes = [
  {
    name: "Cher Cardio",
    note: "Believe-era choreo. Low impact, high glamour.",
  },
  {
    name: "Britney Bootcamp",
    note: "Slave 4 U conditioning. Bring water. Bring a hat.",
  },
  {
    name: "Mariah Mobility",
    note: "Whistle-tone breathwork and shoulder mobility.",
  },
  {
    name: "Lady Gaga Lift",
    note: "Strength circuit set to The Fame Monster, end-to-end.",
  },
];

export default function PopGymPage() {
  return (
    <section className="px-6 sm:px-10 lg:px-16">
      <JsonLd data={popGymJsonLd} />
      <div className="mx-auto max-w-7xl w-full py-16 sm:py-24">
        <p className="text-sm tracking-[0.2em] uppercase text-ink-soft">
          New for 2026
        </p>
        <h1 className="mt-4 font-display font-light text-ink leading-[0.95] tracking-tight text-[clamp(3rem,9vw,8rem)]">
          The Pop Gym.
        </h1>

        <div className="mt-10 max-w-3xl space-y-5 text-xl leading-relaxed text-ink-soft sm:text-2xl">
          <p>
            A fully functional open-air gym themed after the bold colors,
            music, and workout culture of the 80s and 90s.
          </p>
          <p>
            Train with squat racks, benches, free weights, kettlebells,
            mobility space, and a hydration station in the dust. Sweat to the
            icons and work out to pop hits from the 80s through today.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <figure className="relative aspect-[3/2] overflow-hidden bg-cream-soft sm:col-span-2">
            <Image
              src="/images/pop-gym/pop-gym-functional-training.jpg"
              alt="The fully equipped Pop Gym on the playa with squat racks, free weights, kettlebells, a hydration station, disco balls, and people training"
              fill
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover"
              priority
            />
          </figure>
          <figure className="relative aspect-[4/3] overflow-hidden bg-cream-soft">
            <Image
              src="/images/pop-gym/pop-gym-signage.jpg"
              alt="Pop Gym by Mudskippers sign surrounded by disco balls and bright 80s and 90s-inspired decor"
              fill
              sizes="(min-width: 1280px) 592px, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </figure>
          <figure className="relative aspect-[4/3] overflow-hidden bg-cream-soft">
            <Image
              src="/images/pop-gym/pop-gym-free-weights.jpg"
              alt="People using benches and free weights inside The Pop Gym's colorful retro workout space"
              fill
              sizes="(min-width: 1280px) 592px, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </figure>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 border-t border-rule pt-12">
          {classes.map((c, i) => (
            <div key={c.name} className="flex gap-6">
              <span className="font-display text-terracotta text-lg pt-1 w-8 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display font-light text-ink text-3xl">
                  {c.name}
                </h3>
                <p className="mt-2 text-ink-soft">{c.note}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-rule pt-12 max-w-4xl">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-ink-soft">
              Schedule
            </p>
            <p className="mt-3 font-display text-2xl text-ink">
              To be announced
            </p>
            <p className="text-ink-soft">
              Or drop in anytime for a workout!
            </p>
          </div>
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-ink-soft">
              Location
            </p>
            <p className="mt-3 font-display text-2xl text-ink">Mudskippers Camp</p>
            <p className="text-ink-soft">{CAMP_LOCATION_FULL}</p>
          </div>
        </div>

        <div className="mt-16">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-terracotta text-lg"
          >
            <span
              aria-hidden
              className="transition-transform group-hover:-translate-x-1"
            >
              ←
            </span>
            <span className="border-b border-terracotta/40 group-hover:border-terracotta transition-colors pb-0.5">
              Back home
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
