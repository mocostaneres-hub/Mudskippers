import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { FIRST_BLOG_POST as post } from "@/lib/blog";
import {
  createArticleJsonLd,
  createArticleMetadata,
  createBreadcrumbJsonLd,
} from "@/lib/seo";

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

const playaRules = [
  {
    title: "Hydrate before you arrive",
    body: "Do not make the workout the moment you remember water exists. Drink steadily beforehand, bring your own bottle, and take recovery breaks before you feel depleted.",
  },
  {
    title: "Choose the cooler hours",
    body: "Morning is usually kinder than the middle of the afternoon. Whenever you train, use shade and lower your normal pace to account for heat, altitude, dust, and accumulated sleep debt.",
  },
  {
    title: "Keep the movements simple",
    body: "This is not the place to chase a personal record or learn a complicated lift. Favor controlled, familiar movements that you can stop cleanly when your form starts to fade.",
  },
  {
    title: "Respect the dust",
    body: "Keep eye protection and a well-fitting dust mask nearby, secure loose gear, and pause when visibility drops. A dust storm always wins the argument with your workout plan.",
  },
  {
    title: "Leave energy for the rest of your burn",
    body: "Finish feeling better than when you started. If you feel dizzy, unusually weak, confused, sick, or simply wrong, stop, cool down, and get help rather than trying to push through.",
  },
];

const packingList = [
  "A full water bottle you can identify as yours",
  "Electrolytes you have used before",
  "Dust mask and eye protection within reach",
  "Closed-toe training shoes with secure laces",
  "Sun protection and a light layer for changing weather",
  "A small towel, plus curiosity and absolutely no ego",
];

export default function PlayaWorkoutGuidePage() {
  return (
    <article className="px-6 sm:px-10 lg:px-16">
      <JsonLd data={articleJsonLd} />
      <div className="mx-auto w-full max-w-7xl py-16 sm:py-24">
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 text-ink-soft hover:text-ink"
        >
          <span
            aria-hidden
            className="transition-transform group-hover:-translate-x-1"
          >
            ←
          </span>
          <span>Back to the blog</span>
        </Link>

        <header className="mt-12 max-w-5xl">
          <p className="text-sm uppercase tracking-[0.2em] text-terracotta">
            {post.category}
          </p>
          <h1 className="mt-4 font-display text-[clamp(3rem,7vw,6.5rem)] font-light leading-[0.96] tracking-tight text-ink">
            How to work out at Burning Man without burning out.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-ink-soft sm:text-2xl">
            Movement can reset your whole day in Black Rock City. The trick is
            training for the environment you are actually in—not the gym you
            left at home.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-soft">
            <span>By Mudskippers Camp</span>
            <span aria-hidden>·</span>
            <time dateTime={post.publishedTime}>{post.displayDate}</time>
            <span aria-hidden>·</span>
            <span>{post.readingTime}</span>
          </div>
        </header>

        <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden bg-cream-soft sm:mt-16">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-12 md:gap-16 sm:mt-20">
          <aside className="md:col-span-3">
            <div className="border-t border-rule pt-6 md:sticky md:top-8">
              <p className="text-sm uppercase tracking-[0.18em] text-ink-soft">
                The short version
              </p>
              <p className="mt-4 font-display text-2xl font-light leading-snug text-ink">
                Move early. Drink water. Keep it simple. Stop before you are
                spent.
              </p>
            </div>
          </aside>

          <div className="space-y-14 text-lg leading-relaxed text-ink-soft md:col-span-9">
            <section>
              <h2 className="font-display text-4xl font-light leading-tight text-ink sm:text-5xl">
                Start with the environment, not the workout.
              </h2>
              <div className="mt-6 space-y-5">
                <p>
                  Black Rock City is hot, dry, dusty, high, and gloriously
                  distracting. You may have slept less, danced more, eaten
                  differently, and traveled farther than on a normal training
                  day. That does not mean you need to skip movement. It means
                  the goal changes.
                </p>
                <p>
                  A good playa workout should wake you up, loosen the miles out
                  of your legs, and send you back into the city with more
                  energy. Think of it as maintenance for the adventure—not a
                  test of toughness.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-4xl font-light leading-tight text-ink sm:text-5xl">
                Five rules for a playa-smart workout.
              </h2>
              <ol className="mt-8 space-y-8">
                {playaRules.map((rule, index) => (
                  <li
                    key={rule.title}
                    className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-rule pt-6"
                  >
                    <span className="font-display text-lg text-terracotta">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-light text-ink sm:text-3xl">
                        {rule.title}
                      </h3>
                      <p className="mt-3">{rule.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="font-display text-4xl font-light leading-tight text-ink sm:text-5xl">
                A simple 20-minute playa session.
              </h2>
              <p className="mt-6">
                Use movements you already know and adjust every round to how
                you feel that day. No equipment is required.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div className="border-t border-rule pt-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-terracotta">
                    4 minutes
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-light text-ink">
                    Warm up
                  </h3>
                  <p className="mt-3 text-base">
                    Easy walking, shoulder circles, hip hinges, and slow
                    bodyweight squats.
                  </p>
                </div>
                <div className="border-t border-rule pt-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-terracotta">
                    12 minutes
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-light text-ink">
                    Move
                  </h3>
                  <p className="mt-3 text-base">
                    Repeat comfortable rounds of squats, incline push-ups,
                    reverse lunges, and a suitcase carry.
                  </p>
                </div>
                <div className="border-t border-rule pt-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-terracotta">
                    4 minutes
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-light text-ink">
                    Come down
                  </h3>
                  <p className="mt-3 text-base">
                    Walk, breathe slowly, stretch what feels tight, drink, and
                    check in with yourself.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-4xl font-light leading-tight text-ink sm:text-5xl">
                What to bring.
              </h2>
              <ul className="mt-7 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
                {packingList.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-t border-rule pt-4"
                  >
                    <span aria-hidden className="text-terracotta">
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-4xl font-light leading-tight text-ink sm:text-5xl">
                Why movement belongs at Burning Man.
              </h2>
              <div className="mt-6 space-y-5">
                <p>
                  The best workout on the playa is not about looking a certain
                  way. It is a little ritual that helps you return to your body
                  after long travel, late nights, sensory overload, or hours on
                  a bike. Add music and other people, and it becomes another
                  form of participation.
                </p>
                <p>
                  That is the idea behind The Pop Gym: useful equipment,
                  familiar pop songs, and a place where serious lifters,
                  curious beginners, and dusty dancers can all move together.
                </p>
              </div>
            </section>

            <aside className="border-y border-rule py-10">
              <p className="text-sm uppercase tracking-[0.18em] text-terracotta">
                Come train with us
              </p>
              <p className="mt-4 max-w-2xl font-display text-3xl font-light leading-snug text-ink sm:text-4xl">
                The Pop Gym is open Monday through Friday at Mudskippers Camp.
                Drop in, bring water, and work out to the hits.
              </p>
              <Link
                href="/pop-gym"
                className="group mt-7 inline-flex items-center gap-2 text-lg text-terracotta"
              >
                <span className="border-b border-terracotta/40 pb-0.5 transition-colors group-hover:border-terracotta">
                  Explore The Pop Gym
                </span>
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </aside>

            <p className="text-sm leading-relaxed text-ink-soft">
              This article offers general fitness and event-preparation ideas,
              not medical advice. Adapt activity to your experience and health,
              and follow current event guidance and local conditions.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
