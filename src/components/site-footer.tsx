import { SocialLinks } from "@/components/social-links";

export function SiteFooter() {
  return (
    <footer className="w-full px-6 sm:px-10 lg:px-16 pb-10">
      <div className="mx-auto max-w-7xl">
        <div className="border-t border-rule" />
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 text-[13px] text-ink-soft">
          <span className="tracking-wide">
            Mudskippers Camp · Burning Man 2026
          </span>
          <SocialLinks label="Follow us" iconClassName="h-6 w-6" />
          <span className="font-display tracking-widest text-terracotta text-sm">
            2026
          </span>
        </div>
      </div>
    </footer>
  );
}
