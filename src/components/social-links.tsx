type Props = {
  label?: string;
  labelClassName?: string;
  className?: string;
  iconClassName?: string;
};

export function SocialLinks({
  label,
  labelClassName = "text-[12px] uppercase tracking-[0.2em] text-ink-soft",
  className = "",
  iconClassName = "h-7 w-7",
}: Props) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {label && (
        <span className={labelClassName} aria-hidden>
          {label}
        </span>
      )}
      <a
        href="https://www.instagram.com/mudskipperscamp/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Mudskippers Camp on Instagram"
        className="text-ink-soft hover:text-terracotta transition-colors"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={iconClassName}
          aria-hidden
        >
          <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </a>
      <a
        href="https://www.facebook.com/mudskipperscamp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Mudskippers Camp on Facebook"
        className="text-ink-soft hover:text-terracotta transition-colors"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={iconClassName}
          aria-hidden
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      </a>
    </div>
  );
}
