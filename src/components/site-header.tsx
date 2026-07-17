import Link from "next/link";
import { SocialLinks } from "@/components/social-links";

const nav = [
  { href: "/schedule", label: "2026 Schedule" },
  { href: "/pop-gym", label: "Pop Gym" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/join", label: "Join" },
];

const APPLY_URL = "https://www.g8road.com/apply?camp=mudskippers";

export function SiteHeader() {
  return (
    <header className="w-full px-6 sm:px-10 lg:px-16 pt-8 pb-6">
      <div className="mx-auto max-w-7xl flex items-start justify-between gap-6">
        <Link
          href="/"
          className="font-display text-2xl sm:text-3xl tracking-tight text-ink hover:text-terracotta transition-colors whitespace-nowrap"
        >
          Mudskippers Camp
        </Link>
        <div className="hidden md:flex flex-col items-end gap-4 shrink-0">
          <nav className="flex flex-wrap justify-end gap-x-5 lg:gap-x-7 gap-y-1 text-[15px] text-ink-soft">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-ink transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <SocialLinks
            label="Follow us"
            labelClassName="hidden xl:inline text-[12px] uppercase tracking-[0.2em] text-ink-soft whitespace-nowrap"
            iconClassName="h-7 w-7"
          />
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 text-[13px] uppercase tracking-[0.18em] bg-terracotta text-cream border border-terracotta hover:bg-terracotta-soft hover:border-terracotta-soft transition-colors whitespace-nowrap"
          >
            Apply to join us
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-6 md:hidden flex flex-col gap-4 border-t border-rule pt-6">
        <SocialLinks label="Follow us" iconClassName="h-7 w-7" />
        <a
          href={APPLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center self-start px-5 py-2.5 text-[13px] uppercase tracking-[0.18em] bg-terracotta text-cream border border-terracotta hover:bg-terracotta-soft hover:border-terracotta-soft transition-colors"
        >
          Apply to join us
        </a>
      </div>

      <nav
        className="mx-auto max-w-7xl mt-5 md:hidden flex flex-wrap gap-x-5 gap-y-2 text-[15px] text-ink-soft"
        aria-label="Primary"
      >
        {nav.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-ink">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
