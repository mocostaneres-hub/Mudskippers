import Link from "next/link";
import { SocialLinks } from "@/components/social-links";

const nav = [
  { href: "/schedule", label: "2026 Schedule" },
  { href: "/pop-gym", label: "Pop Gym" },
  { href: "/about", label: "About Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/join", label: "Join" },
];

export function SiteHeader() {
  return (
    <header className="w-full px-6 sm:px-10 lg:px-16 pt-8 pb-6">
      <div className="mx-auto max-w-7xl flex items-center justify-between gap-6">
        <Link
          href="/"
          className="font-display text-2xl sm:text-3xl tracking-tight text-ink hover:text-terracotta transition-colors whitespace-nowrap"
        >
          Mudskippers Camp
        </Link>
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <nav className="flex items-center gap-5 lg:gap-7 text-[15px] text-ink-soft">
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
          <span className="hidden lg:block h-5 w-px bg-rule" aria-hidden />
          <SocialLinks
            label="Follow us"
            labelClassName="hidden lg:inline text-[12px] uppercase tracking-[0.2em] text-ink-soft whitespace-nowrap"
            iconClassName="h-7 w-7"
          />
        </div>
      </div>
    </header>
  );
}
