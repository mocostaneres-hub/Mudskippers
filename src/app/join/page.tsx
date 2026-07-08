import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { BecomeAMudskipper } from "@/components/become-a-mudskipper";
import {
  createBreadcrumbJsonLd,
  createPageMetadata,
  createWebPageJsonLd,
} from "@/lib/seo";

const description =
  "Apply to join Mudskippers Camp at Burning Man 2026 and learn the orientation, dues, membership, and community steps for becoming a Mudskipper.";

export const metadata: Metadata = createPageMetadata({
  title: "Join Mudskippers Camp at Burning Man 2026",
  description,
  path: "/join",
  image: {
    url: "/images/camp-group-hero.png",
    width: 1536,
    height: 1024,
    alt: "Mudskippers Camp community at Burning Man",
  },
});

const joinJsonLd = [
  createWebPageJsonLd({
    name: "Join Mudskippers Camp",
    description,
    path: "/join",
    image: "/images/camp-group-hero.png",
    keywords: [
      "join Mudskippers Camp",
      "join Burning Man camp",
      "Burning Man camp application",
      "Burning Man camp dues",
      "Burning Man orientation",
    ],
  }),
  createBreadcrumbJsonLd([
    { name: "Mudskippers Camp", path: "/" },
    { name: "Join", path: "/join" },
  ]),
];

export default function JoinPage() {
  return (
    <section className="px-6 sm:px-10 lg:px-16">
      <JsonLd data={joinJsonLd} />
      <div className="mx-auto max-w-7xl w-full py-16 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm tracking-[0.2em] uppercase text-ink-soft">
            Join us
          </p>
          <h1 className="mt-4 font-display font-light text-ink leading-[1.0] tracking-tight text-[clamp(2.5rem,7vw,6rem)]">
            Ready to join us?
          </h1>

          <p className="mt-10 text-lg text-ink-soft leading-relaxed max-w-2xl">
            Whether you&rsquo;re new to Burning Man or returning home, we
            welcome any burner who observes the{" "}
            <a
              href="https://burningman.org/about/10-principles/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracotta border-b border-terracotta/40 hover:border-terracotta"
            >
              Ten Principles
            </a>{" "}
            and wants to create memories while building community.
          </p>
        </div>

        <div className="mt-20 border-t border-rule pt-16">
          <BecomeAMudskipper />
        </div>

        <div className="mt-20 border-t border-rule pt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-ink-soft">
              Apply
            </p>
            <a
              href="https://www.g8road.com/camps/mudskippers"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 group inline-flex items-center gap-2 text-terracotta text-lg"
            >
              <span className="border-b border-terracotta/40 group-hover:border-terracotta transition-colors pb-0.5">
                Start your application
              </span>
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <p className="mt-3 text-sm text-ink-soft">
              Applications via g8road.com
            </p>
          </div>

          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-ink-soft">
              Get in touch
            </p>
            <a
              href="mailto:info@mudskippercafe.com"
              className="mt-3 group inline-flex items-center gap-2 text-terracotta text-lg"
            >
              <span className="border-b border-terracotta/40 group-hover:border-terracotta transition-colors pb-0.5">
                info@mudskippercafe.com
              </span>
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <p className="mt-3 text-sm text-ink-soft">
              We read every message.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
