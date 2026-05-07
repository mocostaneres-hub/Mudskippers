import Link from "next/link";
import type { ReactNode } from "react";

type FaqItem = { q: string; a: ReactNode };
type FaqSection = { n: string; title: string; intro?: string; items: FaqItem[] };

const sections: FaqSection[] = [
  {
    n: "01",
    title: "Applying & dues",
    items: [
      {
        q: "How do I apply to join the camp?",
        a: (
          <p>
            You can{" "}
            <a
              href="https://www.g8road.com/camps/mudskippers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracotta border-b border-terracotta/40 hover:border-terracotta"
            >
              start here
            </a>
            . The whole application takes about one minute.
          </p>
        ),
      },
      {
        q: "What are the next steps after I apply?",
        a: (
          <>
            <p>
              After we receive your application, our{" "}
              <strong className="text-ink">memberships team</strong> will reach
              out to schedule an informal{" "}
              <strong className="text-ink">orientation call</strong> (online).
              On that call we walk you through how the camp works, share dues
              and logistics, and you get to ask anything you want &mdash; and we
              get to know each other a little.
            </p>
            <p>
              After orientation you&rsquo;ll have everything you need to make
              an <strong className="text-ink">informed decision</strong> about
              joining us.
            </p>
          </>
        ),
      },
      {
        q: "How much are camp dues?",
        a: (
          <>
            <p>
              We totally understand that camp dues are an important factor,
              but we don&rsquo;t want anyone making a decision about joining
              based only on the dues amount. We try to stay aligned with
              Burning Man principles and keep the focus on participation,
              community, and contribution.
            </p>
            <p>
              That said, we do work hard to keep dues as low as possible, and
              this year our dues are <strong className="text-ink">under $500</strong>.
            </p>
            <p>
              If you&rsquo;d like to learn more, please apply. During
              orientation, we&rsquo;ll share all the details, including the
              exact dues amount, what the dues cover, and what being part of
              the camp looks like. After that, you can decide whether joining
              us feels like the right fit.
            </p>
          </>
        ),
      },
      {
        q: "What do my dues cover?",
        a: (
          <ul className="list-disc pl-5 space-y-1.5 marker:text-terracotta/60">
            <li>Potable water delivery</li>
            <li>
              New tent shade we just purchased after the 2025 weather destroyed
              most of our equipment
            </li>
            <li>The gym we are bringing to the playa in 2026</li>
            <li>Showers and evaporation pond</li>
            <li>Communal shade</li>
            <li>USB and USB-C device charging</li>
            <li>Kitchen gear</li>
            <li>Camp d&eacute;cor and frontage</li>
            <li>Government fees</li>
            <li>Alcohol and ice for events</li>
            <li>Transportation and storage of gear</li>
          </ul>
        ),
      },
    ],
  },
  {
    n: "02",
    title: "The 2026 camp",
    items: [
      {
        q: "What will the camp be like in 2026?",
        a: (
          <>
            <p>
              The camp will be 80&ndash;90 people, and we expect to be placed
              again in the 7:30 sector. We requested a 200&times;200 space
              (TBC by June).
            </p>
            <p>
              This year, we&rsquo;re bringing a compact, functional &ldquo;playa
              gym&rdquo; focused on bodyweight and functional training. Planned
              equipment includes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 marker:text-terracotta/60">
              <li>Squat rack</li>
              <li>Leg press machine</li>
              <li>Pull-up / knee-raise station</li>
              <li>Kettlebells</li>
              <li>3&ndash;4 TRX systems</li>
              <li>Battle ropes</li>
              <li>Gym flooring (TBD)</li>
            </ul>
            <p>
              We&rsquo;re also activating the front of camp with a small sports
              area featuring a basketball hoop and a turf soccer goal.
            </p>
            <p className="text-sm text-ink-soft italic">
              An AI rendering of the 2026 camp plan will be added here once
              finalized.
            </p>
          </>
        ),
      },
      {
        q: "How many people are in the camp?",
        a: <p>We&rsquo;re aiming for 80&ndash;90 people in 2026.</p>,
      },
      {
        q: "What is expected of me as a camp member?",
        a: (
          <ul className="list-disc pl-5 space-y-2 marker:text-terracotta/60">
            <li>
              You&rsquo;re expected to join a team (teams will be announced
              soon) and work at least one 3-hour shift during the week. Once
              you&rsquo;re confirmed, we&rsquo;ll advise how to pick a shift.
            </li>
            <li>
              You&rsquo;re expected to participate in <em>strike</em> (camp
              teardown) at the end of the event.
            </li>
            <li>
              If you must leave before Sunday at 5pm, please inform a camp lead
              in advance. We&rsquo;ll assign you a project so you can
              contribute before your departure.
            </li>
          </ul>
        ),
      },
    ],
  },
  {
    n: "03",
    title: "Food, bathrooms & showers",
    items: [
      {
        q: "Does the camp provide meals and bathrooms?",
        a: (
          <>
            <p>
              <strong className="text-ink">What meals are included and when are they served?</strong>{" "}
              For an additional cost (TBD), the camp will offer breakfast and
              dinner on Wednesday and Friday. Outside of those shared meals,
              you&rsquo;ll be on your own for food.
            </p>
            <p>
              <strong className="text-ink">Do I need to bring my own food and cooking setup?</strong>{" "}
              Yes. You should plan to bring enough food, snacks, water, and any
              cooking supplies you&rsquo;ll need for the rest of the week.
              Radical self-reliance is the name of the game out there, so come
              prepared to fuel yourself beyond the camp meals.
            </p>
            <p>
              <strong className="text-ink">What bathroom facilities does the camp provide?</strong>{" "}
              We don&rsquo;t provide private camp bathrooms. You&rsquo;ll be
              using the porto-potties or your RV, so plan accordingly and bring
              any personal supplies that help you stay clean and comfortable
              (hand sanitizer, wipes, etc.).
            </p>
          </>
        ),
      },
      {
        q: "What does the kitchen include?",
        a: (
          <>
            <p>The kitchen is a 20&times;40 shade structure with:</p>
            <ul className="list-disc pl-5 space-y-1.5 marker:text-terracotta/60">
              <li>2 microwaves</li>
              <li>2 electric kettles</li>
              <li>Picnic tables</li>
              <li>Cleaning supplies</li>
              <li>Heavy-duty trash bags</li>
              <li>A stovetop</li>
              <li>No oven, fridge or cookware</li>
            </ul>
            <p>
              <strong className="text-ink">You can bring your own:</strong>{" "}
              cookware and cleaning supplies.
            </p>
            <p>
              <strong className="text-ink">Definitely bring:</strong> paper
              plates, wooden cutlery, mixing spoons, paper towels, and
              heavy-duty trash bags.
            </p>
          </>
        ),
      },
      {
        q: "What's the shower policy?",
        a: (
          <>
            <ul className="list-disc pl-5 space-y-1.5 marker:text-terracotta/60">
              <li>One shower per day, max 4 gallons of water.</li>
              <li>No inviting outsiders &mdash; showers are for camp members only.</li>
            </ul>
            <p>
              <strong className="text-ink">New this year:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1.5 marker:text-terracotta/60">
              <li>No need to bring solar shower bags.</li>
              <li>We provide buckets for measuring.</li>
              <li>A how-to-use guide will be available in the kitchen area.</li>
            </ul>
          </>
        ),
      },
      {
        q: "What does the shower look like?",
        a: (
          <>
            <p>
              It&rsquo;s pretty basic, without walls (yes, no privacy).
              It&rsquo;s set up on platforms inside the evaporation pond.
            </p>
            <p className="text-sm text-ink-soft italic">
              Reference photos coming soon &mdash; somewhere between the
              roughest playa setup and a luxury build, leaning toward simple
              and functional.
            </p>
          </>
        ),
      },
    ],
  },
  {
    n: "04",
    title: "Power, generators & fuel",
    items: [
      {
        q: "Does the camp provide power?",
        a: (
          <>
            <p>
              Yes &mdash; for USB, Lightning, Micro USB and USB-C devices only
              (phones, small power banks). <strong className="text-ink">No outlets for fans, laptops, or appliances.</strong>
            </p>
            <p>You may bring your own:</p>
            <ul className="list-disc pl-5 space-y-1.5 marker:text-terracotta/60">
              <li>Solar generator</li>
              <li>Quiet gas generator</li>
            </ul>
            <p>
              The camp will be illuminated in the front and inside the
              campground, around your shelter.
            </p>
            <p>
              There might be a way to pitch in $ and get power for your RV
              from our neighbor camp. If you&rsquo;re interested, please ask
              your camp leads.
            </p>
            <p className="text-sm text-ink-soft">
              <strong className="text-ink">P.S.</strong> We will have a
              regular outlet for mattress pumps during setup. Please don&rsquo;t
              plug anything else into it.
            </p>
          </>
        ),
      },
      {
        q: "Why are there limitations on power?",
        a: (
          <>
            <p>
              We decided to go green and dramatically reduced our power demands
              this year. We&rsquo;re experimenting with a solar power system
              and plan to keep increasing it year after year.
            </p>
            <p>
              Burning Man happens in a harsh desert environment: no running
              water, no electrical grid, no stores, no deliveries. Everything
              we need is transported in, making costs and logistics high. There
              isn&rsquo;t a Walmart, Costco, or Home Depot nearby.
            </p>
            <p>
              We also don&rsquo;t have a power expert in the camp who can own
              that project end-to-end. If you or someone you know is an
              electrician (or knows a lot about it) and wants to join the camp
              and volunteer on the project next year, we&rsquo;d love to hear
              from you!
            </p>
          </>
        ),
      },
      {
        q: "Can I bring my own personal generator?",
        a: (
          <p>
            Yes, you can &mdash; but please check out{" "}
            <a
              href="https://burningman.org/event/preparation/playa-living/generators/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracotta border-b border-terracotta/40 hover:border-terracotta"
            >
              Burning Man&rsquo;s generator guidelines
            </a>{" "}
            first.
          </p>
        ),
      },
      {
        q: "Can I bring extra fuel for my generator?",
        a: (
          <>
            <p>
              Yes, you can also do that. Burning Man has strict guidelines for
              fuel storage &mdash; please review them on the{" "}
              <a
                href="https://burningman.org/event/preparation/playa-living/generators/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-terracotta border-b border-terracotta/40 hover:border-terracotta"
              >
                BM site
              </a>
              .
            </p>
            <p>
              Just make sure you let your camp leads know &mdash; they&rsquo;ll
              follow up if you&rsquo;re planning on bringing your generator so
              we can align on fuel storage expectations.
            </p>
          </>
        ),
      },
    ],
  },
  {
    n: "05",
    title: "RVs, shade & logistics",
    items: [
      {
        q: "Does the camp offer RV hookups?",
        a: (
          <>
            <p>
              No, we don&rsquo;t offer RV hookups. Our camp follows the Ten
              Principles of Burning Man, which include Radical Self-Reliance
              and Communal Effort.
            </p>
            <p>
              There might be a way to pitch in $ and get power for your RV
              from our neighbor camp. If you&rsquo;re interested, please ask
              your camp leads.
            </p>
            <p>This means:</p>
            <ul className="list-disc pl-5 space-y-1.5 marker:text-terracotta/60">
              <li>
                You&rsquo;re responsible for your own non-survival needs (like
                power, water, and waste for your RV).
              </li>
              <li>
                Your community can help, but only if you take initiative and
                make the effort to participate and contribute.
              </li>
            </ul>
            <p>If you need RV services on the playa:</p>
            <ul className="list-disc pl-5 space-y-1.5 marker:text-terracotta/60">
              <li>Pumping is available from vendors &mdash; you can flag them down.</li>
              <li>Prices typically start at $75 per service.</li>
              <li>Payment is cash only.</li>
            </ul>
            <p className="text-sm text-ink-soft">
              <strong className="text-ink">Note:</strong> we&rsquo;ll place
              your RV on the camp map so that service trucks can reach it.
            </p>
          </>
        ),
      },
      {
        q: "What about shade for my tent or shiftpod?",
        a: (
          <>
            <p>If you requested it early:</p>
            <ul className="list-disc pl-5 space-y-1.5 marker:text-terracotta/60">
              <li>Roof-only shade, no walls.</li>
              <li>You and your group set it up, take it down, and load it.</li>
              <li>
                The shade may already be set up when you arrive &mdash; just
                make sure to thank your campmates and help them take it down
                and store it in the trailer.
              </li>
            </ul>
          </>
        ),
      },
      {
        q: "Why are there limitations on space, water, and power?",
        a: (
          <>
            <p>
              Burning Man happens in a harsh desert environment: no running
              water, no electrical grid, no stores, no deliveries. Everything
              we need is transported in, making costs and logistics high. There
              isn&rsquo;t a Walmart, Costco, or Home Depot nearby.
            </p>
            <p>
              Water delivery, power, and shade are expensive luxuries.
              There&rsquo;s no sewage and gray water can&rsquo;t go on the
              ground &mdash; so it must evaporate or be pumped out.
            </p>
            <p>
              Limits ensure fairness and keep camp dues manageable. The more we
              try to offer, the more vendors we need to manage (Radical
              Self-Reliance and Leave No Trace). In other words, you can&rsquo;t
              just &ldquo;pay for all your services&rdquo; at BM.
            </p>
          </>
        ),
      },
    ],
  },
  {
    n: "06",
    title: "Guests & events",
    items: [
      {
        q: "Can I bring guests to the camp?",
        a: (
          <>
            <p>
              Absolutely &mdash; we&rsquo;re at Burning Man (Radical Inclusion).
              Invite friends to our events or chill in communal spaces, just
              remember:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 marker:text-terracotta/60">
              <li>You&rsquo;re responsible for them and any trash they produce.</li>
              <li>They must follow Leave No Trace.</li>
            </ul>
            <p className="text-sm text-ink-soft">
              <strong className="text-ink">Notes:</strong> the Monday camp
              potluck is for Mudskippers only. Showers are for Mudskippers only.
            </p>
          </>
        ),
      },
      {
        q: "What public events are scheduled by the camp for the week?",
        a: (
          <>
            <p>We have several events open to the BRC community:</p>
            <ul className="list-disc pl-5 space-y-1.5 marker:text-terracotta/60">
              <li>
                <strong className="text-ink">Monday&ndash;Friday, 9am&ndash;11am:</strong>{" "}
                Yoga
              </li>
              <li>
                <strong className="text-ink">Monday&ndash;Friday, 10am&ndash;7pm:</strong>{" "}
                Pop Gym
              </li>
              <li>
                <strong className="text-ink">Wednesday, ~2pm:</strong> we
                transform into a bar and become a stop for the BRC Naked Bar
                Crawl
              </li>
              <li>
                <strong className="text-ink">Thursday, 3pm:</strong>{" "}
                Madonnapocalypse &mdash; our tribute to Madonna
              </li>
              <li>
                <strong className="text-ink">Saturday, 1pm:</strong> the
                Whitney Houston Tribute Party &mdash; our signature event,
                what we&rsquo;re best known for
              </li>
            </ul>
            <p>
              See the full{" "}
              <Link
                href="/schedule"
                className="text-terracotta border-b border-terracotta/40 hover:border-terracotta"
              >
                2026 schedule
              </Link>
              .
            </p>
          </>
        ),
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <section className="px-6 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl w-full py-16 sm:py-24">
        <p className="text-sm tracking-[0.2em] uppercase text-ink-soft">FAQ</p>
        <h1 className="mt-4 font-display font-light text-ink leading-[1.0] tracking-tight text-[clamp(2.5rem,7vw,6rem)]">
          Frequently asked.
        </h1>
        <p className="mt-8 text-lg text-ink-soft max-w-2xl leading-relaxed">
          Everything you need to know before you join us in the dust. Tap any
          question to expand the answer.
        </p>

        <div className="mt-16 sm:mt-20 space-y-16">
          {sections.map((section) => (
            <div key={section.n}>
              <div className="flex items-baseline gap-4">
                <span className="font-display text-terracotta text-lg tracking-widest">
                  {section.n}
                </span>
                <h2 className="font-display font-light text-ink text-3xl sm:text-4xl leading-tight">
                  {section.title}
                </h2>
              </div>

              <div className="mt-8 border-t border-rule">
                {section.items.map((item, i) => (
                  <details
                    key={i}
                    className="group border-b border-rule open:bg-cream-soft/30 transition-colors"
                  >
                    <summary className="cursor-pointer list-none py-6 sm:py-7 flex items-start gap-4 hover:text-ink">
                      <span className="flex-1 font-display font-light text-ink text-xl sm:text-2xl leading-snug pr-4">
                        {item.q}
                      </span>
                      <span
                        aria-hidden
                        className="shrink-0 text-terracotta text-2xl pt-0.5 transition-transform duration-200 group-open:rotate-45 select-none"
                      >
                        +
                      </span>
                    </summary>
                    <div className="pb-8 pr-4 sm:pr-8 -mt-1 text-ink-soft text-[16px] leading-relaxed space-y-4 [&>p]:max-w-prose [&_strong]:font-medium">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-rule pt-10">
          <p className="text-ink-soft">
            Email us at info@mudskippercafe.com
          </p>
        </div>
      </div>
    </section>
  );
}
