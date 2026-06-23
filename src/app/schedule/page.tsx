import Image from "next/image";
import Link from "next/link";
import { CAMP_LOCATION, CAMP_LOCATION_FULL } from "@/lib/camp-location";

const schedule = [
  {
    n: "01",
    name: "The Pop Gym",
    when: "Monday — Friday",
    time: "Mornings",
    blurb:
      "A new concept of gym with everything you need to work out while listening to the best pop hits from the 80s through the 2020s. Drop in any morning, all week.",
    cta: { href: "/pop-gym", label: "More about The Pop Gym" },
    image: "/images/pop-gym.png",
    alt: "The Pop Gym at sunrise on the playa, with kettlebells, mats, and a disco ball",
  },
  {
    n: "02",
    name: "Naked Bar Crawl Stop",
    when: "Wednesday",
    time: "Around 2:45pm",
    blurb:
      "We&rsquo;re an official stop on the BRC Naked Bar Crawl. Drop in, get a drink, dance for a song, and let the parade carry on.",
    image: null,
    alt: null,
  },
  {
    n: "03",
    name: "Madonnapocalypse",
    when: "Thursday",
    time: "3pm",
    blurb:
      "A devotional to the Queen of Pop &mdash; afternoon edition. Every era, every era-defining outfit, every banger. Express yourself.",
    image: "/images/madonna-apocalypse.png",
    alt: "Camper in Madonna t-shirt and sunglasses at Mudskippers camp under the playa shade",
  },
  {
    n: "04",
    name: "Whitney Houston Tribute Party",
    when: "Saturday",
    time: "1pm",
    blurb:
      "<p>We know you want it: 4+ hrs of the greatest voice that ever existed in this universe.</p><p>The Mudskippers close the week with this pre-burn BANGER and want you to come dance with somebody, feel the heat with somebody while sipping on our delicious ice-cold cocktails. Do we have a date?</p>",
    image: "/images/whitney-tribute.png",
    alt: "Mudskippers Whitney tribute party: singer with microphone, crowd celebrating under playa shade",
  },
];

export default function SchedulePage() {
  return (
    <section className="px-6 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl w-full py-16 sm:py-24">
        <p className="text-sm tracking-[0.2em] uppercase text-ink-soft">
          Programme · 2026
        </p>
        <h1 className="mt-4 font-display font-light text-ink leading-[1.0] tracking-tight text-[clamp(2.5rem,7vw,6rem)]">
          The 2026 schedule.
        </h1>
        <p className="mt-8 text-lg text-ink-soft max-w-2xl leading-relaxed">
          The Pop Gym is open all week for workouts, movement, and music in the
          dust. Our afternoon events are still on the calendar, but the gym is
          the heartbeat of Mudskippers 2026. Find us at{" "}
          <strong className="text-ink font-normal">{CAMP_LOCATION}</strong>.
        </p>

        <div className="mt-16 sm:mt-20 border-t border-rule">
          {schedule.map((e, i) => (
            <article
              key={e.n}
              className="border-b border-rule py-12 sm:py-16 grid grid-cols-12 gap-6 sm:gap-10"
            >
              <div className="col-span-12 sm:col-span-1 font-display text-terracotta text-2xl">
                {e.n}
              </div>
              <div
                className={`col-span-12 ${
                  e.image ? "sm:col-span-5" : "sm:col-span-11"
                } order-2 sm:order-none`}
              >
                <h2 className="font-display font-light text-ink text-4xl sm:text-5xl leading-tight">
                  {e.name}
                </h2>
                <p
                  className="mt-4 text-ink-soft text-lg max-w-2xl leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: e.blurb }}
                />
                <dl className="mt-8 space-y-2 text-[15px] text-ink-soft">
                  <div className="flex gap-4">
                    <dt className="w-16 uppercase tracking-wider text-xs pt-1">
                      When
                    </dt>
                    <dd>{e.when}</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="w-16 uppercase tracking-wider text-xs pt-1">
                      Time
                    </dt>
                    <dd>{e.time}</dd>
                  </div>
                </dl>
                {e.cta && (
                  <Link
                    href={e.cta.href}
                    className="mt-8 group inline-flex items-center gap-2 text-terracotta"
                  >
                    <span className="border-b border-terracotta/40 group-hover:border-terracotta transition-colors pb-0.5">
                      {e.cta.label}
                    </span>
                    <span
                      aria-hidden
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                )}
              </div>
              {e.image && (
                <div className="col-span-12 sm:col-span-6 order-1 sm:order-none">
                  <div className="relative w-full aspect-[3/2] overflow-hidden">
                    <Image
                      src={e.image}
                      alt={e.alt ?? ""}
                      fill
                      sizes="(min-width: 1280px) 600px, 100vw"
                      className="object-cover"
                      priority={i === 0}
                    />
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-8">
          <p className="text-ink-soft">
            <span className="text-ink font-display text-lg">{CAMP_LOCATION}</span>
            {" · "}
            {CAMP_LOCATION_FULL}
          </p>
          <span className="text-ink-soft">
            Gym hours and public events are open to the BRC community. Be kind.
            Bring water.
          </span>
        </div>
      </div>
    </section>
  );
}
