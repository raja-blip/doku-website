"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useState, type TouchEvent } from "react";

type ProTip = {
  id: string;
  title: string;
  description: string;
  videoSrc: string;
};

const tips: ProTip[] = [
  {
    id: "whatsapp-quick-park",
    title: "Stop the Gallery Clutter (WhatsApp Quick-Park)",
    description:
      "When a document hits your WhatsApp, don't just \"Save to Photos.\" Use the Share Sheet to send it directly to Doku.",
    videoSrc: "/pro-tips/tip1.mp4",
  },
  {
    id: "both-sides-rule",
    title: "Complete Identity, One Entry (Both-Sides Rule)",
    description:
      "Most IDs hide the address on the back. Upload both sides as one entry so you're never scrambling for proof of residence.",
    videoSrc: "/pro-tips/tip2.mp4",
  },
  {
    id: "entity-groups",
    title: "Your Assets, Organized (Entity Groups)",
    description:
      "Your life isn't one big folder. Group records by the assets they belong to, like cars or property, for instant retrieval.",
    videoSrc: "/pro-tips/tip3.mp4",
  },
  {
    id: "swipe-secret",
    title: "The Swipe Secret (Navigation Tip)",
    description:
      "Don't miss a thing. Most entity rows are swipe-able. Just flick right on a document row to see the full category history.",
    videoSrc: "/pro-tips/tip4.mp4",
  },
  {
    id: "deadline-discipline",
    title: "Turn Paper into Alerts (Deadline Discipline)",
    description:
      "Add an expiry date to your DL or Passport the moment you upload. Doku transforms static files into proactive notifications.",
    videoSrc: "/pro-tips/tip5.mp4",
  },
  {
    id: "quick-correction",
    title: "Precision isn't Permanent (Quick Correction)",
    description: "Precision isn't permanent. Fix a date error with a long press without having to re-upload the entire document.",
    videoSrc: "/pro-tips/tip6.mp4",
  },
  {
    id: "staff-vault",
    title: "The Household Staff Vault (Security Hack)",
    description:
      "Keep your home secure. Store Aadhaar and verification records for your driver or domestic help in their own dedicated entities.",
    videoSrc: "/pro-tips/tip7.mp4",
  },
  {
    id: "medical-timeline",
    title: "Add a Medical Record",
    description: "Add a medical record and upload all relevant documents to let Doku merge into one PDF for you.",
    videoSrc: "/pro-tips/tip8.mp4",
  },
  {
    id: "smart-bundle-mix",
    title: "The Smart Bundle Mix (Share Logic)",
    description:
      "Sharing isn't all-or-nothing. Use \"Smart Bundle\" to gather files, then custom-pick exactly what stays in the final package.",
    videoSrc: "/pro-tips/tip9.mp4",
  },
  {
    id: "backup-choice",
    title: "The Backup Choice (Data Portability)",
    description:
      "Use .qv files for a perfect encrypted restore into Doku, or export a Zip via \"Share\" for a standard archive you can open anywhere.",
    videoSrc: "/pro-tips/tip10.mp4",
  },
];

export function PlaybookTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const current = tips[activeIndex];

  const go = useCallback((dir: -1 | 1) => {
    setActiveIndex((prev) => (prev + dir + tips.length) % tips.length);
  }, []);

  const handleTouchStart = useCallback((event: TouchEvent<HTMLElement>) => {
    setTouchStartX(event.changedTouches[0]?.clientX ?? null);
  }, []);

  const handleTouchEnd = useCallback(
    (event: TouchEvent<HTMLElement>) => {
      if (touchStartX === null) return;
      const endX = event.changedTouches[0]?.clientX;
      if (typeof endX !== "number") return;

      const deltaX = endX - touchStartX;
      const minSwipeDistance = 40;

      if (deltaX > minSwipeDistance) {
        go(-1);
      } else if (deltaX < -minSwipeDistance) {
        go(1);
      }

      setTouchStartX(null);
    },
    [go, touchStartX],
  );

  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-3 sm:p-6">
      <div className="mb-3 flex items-center justify-between gap-3 sm:mb-4">
        <h3 className="text-lg font-semibold text-white sm:text-2xl">Doku Pro-Tips</h3>
        <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">
          Tip {activeIndex + 1} of {tips.length}
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.article
          key={current.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="grid gap-3 rounded-2xl border border-zinc-800 bg-black p-2.5 sm:p-4 lg:grid-cols-[0.95fr_1.05fr] lg:gap-6"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <h4 className="order-1 text-center text-base font-semibold leading-tight text-white sm:text-xl lg:hidden">
            {current.title}
          </h4>

          <div className="order-1 lg:order-1">
            <div className="mx-auto w-full max-w-[190px] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 sm:max-w-[220px] lg:max-w-[260px]">
              <video
                key={current.videoSrc}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                controls={false}
                className="h-auto w-full rounded-lg"
              >
                <source src={current.videoSrc} type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="order-2 flex flex-col gap-2 text-center lg:order-2 lg:gap-3 lg:text-left">
            <h4 className="hidden text-lg font-semibold leading-tight text-white sm:text-xl lg:block">{current.title}</h4>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-3 sm:p-4">
              <p className="text-xs leading-relaxed text-zinc-400 sm:text-sm">{current.description}</p>
            </div>

            <div className="flex items-center justify-center gap-2 lg:justify-start">
              <button
                type="button"
                aria-label="Previous tip"
                onClick={() => go(-1)}
                className="rounded-full border border-zinc-800 bg-zinc-950 p-2 text-zinc-300 transition hover:border-zinc-600 hover:text-white"
              >
                <ChevronLeft className="size-4" aria-hidden />
              </button>
              <button
                type="button"
                aria-label="Next tip"
                onClick={() => go(1)}
                className="rounded-full border border-zinc-800 bg-zinc-950 p-2 text-zinc-300 transition hover:border-zinc-600 hover:text-white"
              >
                <ChevronRight className="size-4" aria-hidden />
              </button>
            </div>
          </div>
        </motion.article>
      </AnimatePresence>

      <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 sm:mt-4">
        {tips.map((tip, idx) => (
          <button
            key={tip.id}
            type="button"
            onClick={() => setActiveIndex(idx)}
            aria-label={`Go to pro-tip ${idx + 1}`}
            aria-current={idx === activeIndex ? "true" : undefined}
            className={`h-1.5 rounded-full transition-all ${idx === activeIndex ? "w-6 bg-white" : "w-3 bg-zinc-700 hover:bg-zinc-500"}`}
          />
        ))}
      </div>
    </section>
  );
}
