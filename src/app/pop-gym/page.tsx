import Image from "next/image";
import Link from "next/link";

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
      <div className="mx-auto max-w-7xl w-full py-16 sm:py-24">
        <p className="text-sm tracking-[0.2em] uppercase text-ink-soft">
          New for 2026
        </p>
        <h1 className="mt-4 font-display font-light text-ink leading-[0.95] tracking-tight text-[clamp(3rem,9vw,8rem)]">
          The Pop Gym.
        </h1>

        <p className="mt-10 text-xl sm:text-2xl text-ink-soft max-w-2xl leading-relaxed">
          A pop-up gym in the dust. Sweat to the icons. Free for all camps.
          Drop in any morning.
        </p>

        <div className="mt-16 relative w-full aspect-[3/2] overflow-hidden">
          <Image
            src="/images/pop-gym.png"
            alt="The Pop Gym at sunrise on the playa, with kettlebells, mats, and a disco ball"
            fill
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover"
            priority
          />
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

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-10 border-t border-rule pt-12">
          <div className="md:col-span-4">
            <p className="text-sm tracking-[0.2em] uppercase text-ink-soft">
              Hours
            </p>
            <p className="mt-3 font-display text-2xl text-ink">7am — 11am</p>
            <p className="text-ink-soft">Daily, the week of Burning Man</p>
          </div>
          <div className="md:col-span-4">
            <p className="text-sm tracking-[0.2em] uppercase text-ink-soft">
              Location
            </p>
            <p className="mt-3 font-display text-2xl text-ink">Mudskippers Camp</p>
            <p className="text-ink-soft">Black Rock City &mdash; address TBA</p>
          </div>
          <div className="md:col-span-4">
            <p className="text-sm tracking-[0.2em] uppercase text-ink-soft">
              Cost
            </p>
            <p className="mt-3 font-display text-2xl text-ink">Free</p>
            <p className="text-ink-soft">In the spirit of gifting</p>
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
