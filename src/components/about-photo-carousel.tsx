"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";

const AUTO_MS = 5000;

const SLIDES = [
  {
    src: "/images/about/about-01.png",
    alt: "Mudskippers camp: friends together under the playa shade",
  },
  {
    src: "/images/about/about-02.png",
    alt: "Mudskippers on the playa in colorful outfits",
  },
  {
    src: "/images/about/about-03.png",
    alt: "Camp party under the canopy",
  },
  {
    src: "/images/about/about-04.png",
    alt: "Crowd gathering at Mudskippers camp",
  },
  {
    src: "/images/about/about-05.png",
    alt: "Mudskippers camp frontage and Whitney tribute decor",
  },
  {
    src: "/images/about/about-06.png",
    alt: "Hugs and music at camp",
  },
  {
    src: "/images/about/about-07.png",
    alt: "Dancing and DJ setup at Mudskippers",
  },
  {
    src: "/images/about/about-08.png",
    alt: "Festive crowd at the bar and dance floor",
  },
  {
    src: "/images/about/about-09.png",
    alt: "Colorful camp moment on the playa",
  },
  {
    src: "/images/about/about-10.png",
    alt: "Mudskippers member with mug on the playa",
  },
  {
    src: "/images/about/about-11.png",
    alt: "Community and celebration at camp",
  },
  {
    src: "/images/about/about-12.png",
    alt: "DJ crew in front of Whitney Houston portrait at Mudskippers",
  },
] as const;

function subscribeToReducedMotion(onStoreChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function AboutPhotoCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  useEffect(() => {
    if (paused || reduceMotion) return;
    const t = window.setInterval(() => {
      setIndex((n) => (n + 1) % SLIDES.length);
    }, AUTO_MS);
    return () => window.clearInterval(t);
  }, [paused, reduceMotion]);

  const go = useCallback((n: number) => {
    setIndex(n);
  }, []);

  const current = SLIDES[index];

  return (
    <figure
      className="mt-12 sm:mt-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden bg-cream">
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          sizes="(min-width: 1024px) 1024px, 100vw"
          quality={95}
          className="object-cover"
          priority={index === 0}
        />
      </div>

      <p className="sr-only" aria-live="polite">
        Showing photo {index + 1} of {SLIDES.length}
      </p>

      <div
        className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start"
        role="tablist"
        aria-label="Camp photos"
      >
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Photo ${i + 1} of ${SLIDES.length}`}
            onClick={() => go(i)}
            className={`
              relative h-14 w-[5.5rem] sm:h-16 sm:w-28 shrink-0 overflow-hidden rounded-sm transition-opacity
              ${
                i === index
                  ? "ring-2 ring-terracotta ring-offset-2 ring-offset-cream opacity-100"
                  : "ring-1 ring-rule opacity-70 hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
              }
            `}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              quality={90}
              className="object-cover"
              sizes="240px"
            />
          </button>
        ))}
      </div>

    </figure>
  );
}
