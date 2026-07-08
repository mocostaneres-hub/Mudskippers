import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { AboutPhotoCarousel } from "@/components/about-photo-carousel";
import { CAMP_LOCATION } from "@/lib/camp-location";
import {
  createBreadcrumbJsonLd,
  createPageMetadata,
  createWebPageJsonLd,
} from "@/lib/seo";

const description =
  "Meet Mudskippers Camp, a radically inclusive Burning Man camp with roots since 1993, The Pop Gym, pop music events, and a worldwide community.";

export const metadata: Metadata = createPageMetadata({
  title: "About Mudskippers Camp",
  description,
  path: "/about",
  image: {
    url: "/images/camp-group-real.png",
    width: 1024,
    height: 631,
    alt: "Mudskippers Camp community together on the playa",
  },
});

const aboutJsonLd = [
  createWebPageJsonLd({
    name: "About Mudskippers Camp",
    description,
    path: "/about",
    image: "/images/camp-group-real.png",
    keywords: [
      "Mudskippers Camp",
      "Burning Man camp community",
      "inclusive Burning Man camp",
      "Burning Man camp since 1993",
      "The Pop Gym",
    ],
  }),
  createBreadcrumbJsonLd([
    { name: "Mudskippers Camp", path: "/" },
    { name: "About", path: "/about" },
  ]),
];

export default function AboutPage() {
  return (
    <section className="px-6 sm:px-10 lg:px-16">
      <JsonLd data={aboutJsonLd} />
      <div className="mx-auto max-w-7xl w-full py-16 sm:py-24">
        <p className="text-sm tracking-[0.2em] uppercase text-ink-soft">
          About us
        </p>
        <h1 className="mt-4 font-display font-light text-ink leading-[1.0] tracking-tight text-[clamp(2.5rem,7vw,6rem)] max-w-5xl">
          A camp built around
          <br />movement, music, and care.
        </h1>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-7 space-y-6 text-lg text-ink-soft leading-relaxed">
            <p>
              Mudskippers Camp is a radically-inclusive, radically-diverse,
              radically-expressive tight-knit group of straights, bi, gay and
              unlabeled lovers from LA, SF, NYC, Miami, Montreal, Kansas City,
              Brazil, Argentina, Mexico, Central America, the Middle East,
              Europe, Australia &mdash; and everywhere in-between.
            </p>
            <p>
              We work and play together to make the burn more fun, more
              connected, and a little healthier than anyone expects from a week
              in the dust. Come for{" "}
              <Link href="/pop-gym" className="text-terracotta border-b border-terracotta/40 hover:border-terracotta">The Pop Gym</Link>,
              stay for the community, then swing by{" "}
              <Link href="/schedule" className="text-terracotta border-b border-terracotta/40 hover:border-terracotta">Madonnapocalypse</Link>{" "}
              and the Whitney tribute when it is time to dance. Or just chill
              with us in the lounge. We look forward to welcoming you to our
              dusty home at{" "}
              {CAMP_LOCATION} on the playa.
            </p>
          </div>

          <aside className="md:col-span-5">
            <div className="border-t border-rule pt-8">
              <p className="text-sm tracking-[0.2em] uppercase text-ink-soft">
                Our story
              </p>
              <p className="mt-4 font-display text-2xl text-ink leading-snug">
                Since 1993.
              </p>
              <p className="mt-4 text-ink-soft leading-relaxed">
                The Mudskippers started way back in 1993, when our founding
                fathers Nathan, Bart and Graham started{" "}
                <em>Uncharted Territories</em> at Burning Man. Three decades
                later we&rsquo;re still here, building The Pop Gym and keeping
                the music loud on the playa.
              </p>
            </div>
          </aside>
        </div>

        <AboutPhotoCarousel />

        <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-rule pt-10">
          <Link
            href="/join"
            className="group inline-flex items-center gap-2 text-terracotta text-lg"
          >
            <span className="border-b border-terracotta/40 group-hover:border-terracotta transition-colors pb-0.5">
              Want to join us?
            </span>
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
          <a
            href="mailto:info@mudskippercafe.com"
            className="text-ink-soft hover:text-ink"
          >
            info@mudskippercafe.com
          </a>
        </div>
      </div>
    </section>
  );
}
