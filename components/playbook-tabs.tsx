"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useState } from "react";

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
    videoSrc: "/feature-videos/final_share.mp4",
  },
  {
    id: "both-sides-rule",
    title: "Complete Identity, One Entry (Both-Sides Rule)",
    description:
      "Most IDs hide the address on the back. Upload both sides as one entry so you're never scrambling for proof of residence.",
    videoSrc: "/feature-videos/final_file_name.mp4",
  },
  {
    id: "entity-groups",
    title: "Your Assets, Organized (Entity Groups)",
    description:
      "Your life isn't one big folder. Group records by the assets they belong to, like cars or property, for instant retrieval.",
    videoSrc: "/feature-videos/final_people_assets.mp4",
  },
  {
    id: "deadline-discipline",
    title: "Turn Paper into Alerts (Deadline Discipline)",
    description:
      "Add an expiry date to your DL or Passport the moment you upload. Doku transforms static files into proactive notifications.",
    videoSrc: "/feature-videos/final_life_tracking.mp4",
  },
  {
    id: "tax-year-anchor",
    title: "Don't Compile Taxes in April (Tax Year Anchor)",
    description:
      "Tag investment proofs as you go. Come tax season, tap the Tax Year tag and export the whole bundle to your CA in one click.",
    videoSrc: "/feature-videos/final_share.mp4",
  },
  {
    id: "staff-vault",
    title: "The Household Staff Vault (Security Hack)",
    description:
      "Keep your home secure. Store Aadhaar and verification records for your driver or domestic help in their own dedicated entities.",
    videoSrc: "/feature-videos/final_people_assets.mp4",
  },
  {
    id: "medical-timeline",
    title: "The Medical History Timeline (Health Hack)",
    description:
      "Tag medical records to a specific person. When you're at the clinic, your family's medical history is a 5-second search away.",
    videoSrc: "/feature-videos/final_file_name.mp4",
  },
  {
    id: "quick-correction",
    title: "Precision isn't Permanent (Quick Correction)",
    description: "Precision isn't permanent. Fix a date error in two taps without having to re-upload the entire document.",
    videoSrc: "/feature-videos/final_file_name.mp4",
  },
  {
    id: "smart-bundle-mix",
    title: "The Smart Bundle Mix (Share Logic)",
    description:
      "Sharing isn't all-or-nothing. Use \"Smart Bundle\" to gather files, then custom-pick exactly what stays in the final package.",
    videoSrc: "/feature-videos/final_share.mp4",
  },
  {
    id: "swipe-secret",
    title: "The Swipe Secret (Navigation Tip)",
    description:
      "Don't miss a thing. Most entity rows are swipe-able. Just flick right on a document row to see the full category history.",
    videoSrc: "/feature-videos/final_people_assets.mp4",
  },
  {
    id: "backup-choice",
    title: "The Backup Choice (Data Portability)",
    description:
      "Use .qv files for a perfect encrypted restore into Doku, or export a Zip via \"Share\" for a standard archive you can open anywhere.",
    videoSrc: "/feature-videos/final_life_tracking.mp4",
  },
];

export function PlaybookTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = tips[activeIndex];

  const go = useCallback((dir: -1 | 1) => {
    setActiveIndex((prev) => (prev + dir + tips.length) % tips.length);
  }, []);

  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4 sm:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-xl font-semibold text-white sm:text-2xl">Doku Pro-Tips</h3>
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
          className="grid gap-4 rounded-2xl border border-zinc-800 bg-black p-3 sm:p-4 lg:grid-cols-[1.5fr_1fr] lg:gap-6"
        >
          <h4 className="order-1 text-center text-lg font-semibold leading-tight text-white sm:text-xl lg:hidden">
            {current.title}
          </h4>

          <div className="order-1 lg:order-1">
            <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
              <video key={current.videoSrc} autoPlay loop muted playsInline controls={false} className="h-auto w-full rounded-lg">
                <source src={current.videoSrc} type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="order-2 flex flex-col justify-between gap-3 text-center lg:order-2 lg:text-left">
            <h4 className="hidden text-lg font-semibold leading-tight text-white sm:text-xl lg:block">{current.title}</h4>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-sm leading-relaxed text-zinc-400">{current.description}</p>
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

      <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5">
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
