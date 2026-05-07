import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl w-full py-16 sm:py-24">
          <h1 className="font-display font-light text-ink leading-[0.95] tracking-tight text-[clamp(3rem,10vw,9rem)]">
            The home of
            <br />
            pop on the playa.
          </h1>

          <p className="mt-10 text-lg sm:text-xl text-ink-soft max-w-2xl">
            A Burning Man camp. The Pop Gym. Madonnapocalypse. A Whitney
            Houston tribute. One unforgettable week.
          </p>

          <div className="mt-12">
            <Link
              href="/schedule"
              className="group inline-flex items-center gap-2 text-terracotta text-lg sm:text-xl"
            >
              <span className="border-b border-terracotta/40 group-hover:border-terracotta transition-colors pb-0.5">
                See the 2026 schedule
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

      <section className="px-6 sm:px-10 lg:px-16 pt-8 pb-24">
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
          <p className="mt-6 text-sm text-ink-soft max-w-xl">
            Mudskippers Camp, Black Rock City &mdash; the whole family, in
            front of the towers.
          </p>
        </div>
      </section>

      <section className="px-6 sm:px-10 lg:px-16 pb-24">
        <div className="mx-auto max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 border-t border-rule pt-16">
          <article>
            <p className="font-display text-terracotta text-lg">01</p>
            <h2 className="mt-4 font-display font-light text-ink text-3xl sm:text-4xl leading-tight">
              We are a camp.
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Every year we gather in Black Rock City for Burning Man, and keep
              a global community alive year-round.
            </p>
          </article>
          <article>
            <p className="font-display text-terracotta text-lg">02</p>
            <h2 className="mt-4 font-display font-light text-ink text-3xl sm:text-4xl leading-tight">
              We are a community.
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Life-long memories and connections are made every year when we
              gather in the desert &mdash; and beyond.
            </p>
          </article>
          <article>
            <p className="font-display text-terracotta text-lg">03</p>
            <h2 className="mt-4 font-display font-light text-ink text-3xl sm:text-4xl leading-tight">
              We are a family.
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              We keep in touch, we hang out. We show up for each other on the
              playa and wherever we meet, anywhere on the globe.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
