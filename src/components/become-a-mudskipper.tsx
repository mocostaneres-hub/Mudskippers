import type { ReactNode } from "react";

const APPLY_URL = "https://www.g8road.com/camps/mudskippers";

type IconProps = { className?: string };

const ClipboardIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.25"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <rect x="11" y="9" width="26" height="32" rx="2" />
    <path d="M19 9V7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2" />
    <path d="M19 9h10" />
    <path d="M17 20h12M17 26h12M17 32h8" />
  </svg>
);

const CompassIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.25"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <circle cx="24" cy="24" r="17" />
    <path d="M30 18l-3 9-9 3 3-9 9-3z" />
    <circle cx="24" cy="24" r="1" fill="currentColor" />
  </svg>
);

const DuesIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.25"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <ellipse cx="24" cy="13" rx="11" ry="3.5" />
    <path d="M13 13v6c0 1.93 4.92 3.5 11 3.5s11-1.57 11-3.5v-6" />
    <path d="M13 19v6c0 1.93 4.92 3.5 11 3.5s11-1.57 11-3.5v-6" />
    <path d="M13 25v6c0 1.93 4.92 3.5 11 3.5s11-1.57 11-3.5v-6" />
    <path d="M21 41h6M24 38v3" />
  </svg>
);

const FireIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.25"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <path d="M24 6c2 5 8 7 8 14a8 8 0 0 1-16 0c0-3 1.5-5 3-6 0 3 2 4 3 4 0-4-2-7 2-12z" />
    <path d="M10 41h28" />
    <path d="M14 41l8-6M34 41l-8-6" />
  </svg>
);

const Arrow = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 48 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <path d="M2 12 H42" />
    <path d="M36 6 L42 12 L36 18" />
  </svg>
);

type Step = {
  n: string;
  title: string;
  desc: ReactNode;
  Icon: (props: IconProps) => React.JSX.Element;
};

const steps: Step[] = [
  {
    n: "01",
    title: "Sign up",
    desc: (
      <>
        <a
          href={APPLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-terracotta border-b border-terracotta/40 hover:border-terracotta"
        >
          Apply here
        </a>
        . Tell us a bit about you: which pop icon is your favorite, your
        favorite workout routine, and anything you&rsquo;d like.
      </>
    ),
    Icon: ClipboardIcon,
  },
  {
    n: "02",
    title: "Orientation",
    desc: "Meet the camp leads on a video call and ask anything. Hear more about what we're planning to bring and do together at Burning Man—including dues, what they cover, and more.",
    Icon: CompassIcon,
  },
  {
    n: "03",
    title: "Pay dues",
    desc: "Once you pay your dues, we'll send you an official receipt with key refund dates to keep in mind. We know things change, so we try to be flexible.",
    Icon: DuesIcon,
  },
  {
    n: "04",
    title: "Welcome",
    desc: "You're officially in the camp. We add you to all the group chats right away so we can start building community long before we hit the playa.",
    Icon: FireIcon,
  },
];

export function BecomeAMudskipper() {
  return (
    <div>
      <p className="text-sm tracking-[0.2em] uppercase text-ink-soft">
        How to become a Mudskipper
      </p>
      <h2 className="mt-4 font-display font-light text-ink leading-[1.05] tracking-tight text-[clamp(2rem,5vw,4rem)]">
        Four simple steps.
      </h2>

      <ol className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0">
        {steps.map((s, i) => {
          const { Icon } = s;
          return (
            <li key={s.n} className="relative md:px-6 first:md:pl-0 last:md:pr-0">
              <div className="border border-rule p-6 sm:p-8 h-full bg-cream-soft/40 flex flex-col">
                <span className="font-display text-terracotta text-sm tracking-widest">
                  {s.n}
                </span>
                <Icon className="mt-6 h-12 w-12 text-terracotta" />
                <h3 className="mt-6 font-display font-light text-ink text-2xl leading-snug">
                  {s.title}
                </h3>
                <p className="mt-3 text-ink-soft leading-relaxed text-[15px]">
                  {s.desc}
                </p>
              </div>

              {i < steps.length - 1 && (
                <Arrow
                  className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 h-5 w-10 text-terracotta/60"
                />
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
