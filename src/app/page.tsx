import Link from "next/link";
import Image from "next/image";
import { CAMP_LOCATION } from "@/lib/camp-location";

export default function Home() {
  return (
    <>
      <section className="px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl w-full py-12 sm:py-16">
          <h1 className="font-display font-light text-ink leading-[0.95] tracking-tight text-[clamp(2.75rem,9vw,8rem)]">
            The home of
            <br />
            pop on the playa.
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-ink-soft max-w-xl">
            Pop Gym · Madonnapocalypse · Whitney tribute · one week in the dust.
          </p>

          <div className="mt-10">
            <Link
              href="/schedule"
              className="group inline-flex items-center gap-2 text-terracotta text-lg sm:text-xl"
            >
              <span className="border-b border-terracotta/40 group-hover:border-terracotta transition-colors pb-0.5">
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
              src="/images/camp-group-real.png"
              alt="Mudskippers Camp gathered on the playa at sunset, in front of two scaffolding towers"
              fill
              priority
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover [filter:brightness(1.12)_saturate(1.05)]"
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
                Camp
              </p>
              <p className="mt-1 text-ink-soft">
                Burning Man 2026 &mdash; {CAMP_LOCATION}.
              </p>
            </li>
            <li>
              <span className="font-display text-terracotta text-base">02</span>
              <p className="mt-2 font-display font-light text-ink text-xl sm:text-2xl">
                Community
              </p>
              <p className="mt-1 text-ink-soft">
                Global crew; memories that outlast the dust.
              </p>
            </li>
            <li>
              <span className="font-display text-terracotta text-base">03</span>
              <p className="mt-2 font-display font-light text-ink text-xl sm:text-2xl">
                Family
              </p>
              <p className="mt-1 text-ink-soft">
                We show up for each other on playa and off.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
