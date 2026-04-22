"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const screens = [
  {
    src: "/app-screenshots/screen-01.png",
    alt: "Doku app screenshot 1",
    title: "One home for every critical document",
    description:
      "Bring PAN, passport, insurance, and bills into one unified, searchable workspace.",
    bullets: ["Unified dashboard", "Zero folder hunting", "Fast mobile-first navigation"],
  },
  {
    src: "/app-screenshots/screen-02.png",
    alt: "Doku app screenshot 2",
    title: "AI categories that organize for you",
    description:
      "Doku auto-tags files by document type so your records stay clean without manual effort.",
    bullets: ["Smart taxonomy", "Context-aware labels", "No manual naming overhead"],
  },
  {
    src: "/app-screenshots/screen-03.png",
    alt: "Doku app screenshot 3",
    title: "OCR search to the exact page",
    description:
      "Ask in plain language and jump directly to the section you need in seconds.",
    bullets: ["Semantic search", "Page-level retrieval", "Natural language queries"],
  },
  {
    src: "/app-screenshots/screen-04.png",
    alt: "Doku app screenshot 4",
    title: "Expiry intelligence that keeps you ahead",
    description:
      "Track passports, policies, and certificates with timely reminders before deadlines.",
    bullets: ["Early alerts", "Renewal timelines", "Priority-based reminders"],
  },
  {
    src: "/app-screenshots/screen-05.png",
    alt: "Doku app screenshot 5",
    title: "Private by design architecture",
    description:
      "Security is built into every flow with encrypted storage and scoped access controls.",
    bullets: ["Encrypted storage", "Controlled sharing", "Trust-first infrastructure"],
  },
  {
    src: "/app-screenshots/screen-06.png",
    alt: "Doku app screenshot 6",
    title: "Document history at a glance",
    description:
      "See updates, uploads, and edits instantly so your records are always audit-ready.",
    bullets: ["Activity visibility", "Version confidence", "Clear ownership"],
  },
  {
    src: "/app-screenshots/screen-07.png",
    alt: "Doku app screenshot 7",
    title: "Intelligent reminders and nudges",
    description:
      "Doku surfaces next best actions exactly when they matter for your daily workflow.",
    bullets: ["Smart prompts", "Action recommendations", "Proactive workflows"],
  },
  {
    src: "/app-screenshots/screen-08.png",
    alt: "Doku app screenshot 8",
    title: "Clean sharing for real-life collaboration",
    description:
      "Share the right document quickly with family, finance teams, or advisors when needed.",
    bullets: ["Granular access", "Share-ready cards", "Collaboration without chaos"],
  },
  {
    src: "/app-screenshots/screen-09.png",
    alt: "Doku app screenshot 9",
    title: "Designed to feel instant on mobile",
    description:
      "Smooth transitions, high readability, and performance-tuned rendering on every device.",
    bullets: ["Low-latency experience", "Readable dark UI", "Optimized touch interactions"],
  },
  {
    src: "/app-screenshots/screen-10.png",
    alt: "Doku app screenshot 10",
    title: "From storage to decision intelligence",
    description:
      "Doku turns static files into insights so your documents actively work for you.",
    bullets: ["Insight-driven UX", "Contextual understanding", "Future-ready personal knowledge"],
  },
];

export function ScreenshotStrip() {
  const [current, setCurrent] = useState(0);
  const active = screens[current];

  const goTo = (index: number) => setCurrent(index);
  const goPrev = () => setCurrent((prev) => (prev - 1 + screens.length) % screens.length);
  const goNext = () => setCurrent((prev) => (prev + 1) % screens.length);

  return (
    <div className="grid items-center gap-6 lg:grid-cols-[0.75fr_1.25fr]">
      <div className="order-2 space-y-3 lg:order-1 lg:max-w-sm">
        <div className="relative mx-auto overflow-hidden rounded-3xl border border-border bg-card p-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.src}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.25}
              onDragEnd={(_, info) => {
                if (info.offset.x > 60) {
                  goPrev();
                } else if (info.offset.x < -60) {
                  goNext();
                }
              }}
              className="touch-pan-y"
            >
              <Image
                src={active.src}
                alt={active.alt}
                width={900}
                height={1900}
                className="mx-auto aspect-[9/18] w-full max-w-[280px] rounded-2xl border border-border object-cover sm:max-w-[300px]"
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={goPrev}
            className="rounded-full border border-border bg-card px-4 py-2 text-sm text-zinc-200 transition hover:border-zinc-500"
          >
            Prev
          </button>
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {screens.map((screen, index) => (
              <button
                key={screen.src}
                onClick={() => goTo(index)}
                className={`h-1.5 rounded-full transition-all ${
                  current === index ? "w-6 bg-sky-400" : "w-3 bg-zinc-700 hover:bg-zinc-500"
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={goNext}
            className="rounded-full border border-border bg-card px-4 py-2 text-sm text-zinc-200 transition hover:border-zinc-500"
          >
            Next
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.title}
          className="order-1 rounded-3xl border border-border bg-card p-6 sm:p-8 lg:order-2"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <p className="mb-3 inline-flex rounded-full border border-sky-400/30 bg-sky-500/15 px-3 py-1 text-xs text-sky-200">
            Screen {current + 1} / {screens.length}
          </p>
          <h3 className="text-2xl font-semibold text-white sm:text-3xl">{active.title}</h3>
          <p className="mt-3 text-zinc-300">{active.description}</p>
          <div className="mt-5 grid gap-2">
            {active.bullets.map((bullet) => (
              <p key={bullet} className="rounded-lg border border-border bg-black/20 px-3 py-2 text-sm text-zinc-300">
                {bullet}
              </p>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
