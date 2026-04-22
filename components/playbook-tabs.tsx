"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

type PlaybookTab = {
  id: "getting-started" | "mastering-expiry" | "application-prep";
  label: string;
  title: string;
  description: string;
  bullets: string[];
};

const tabs: PlaybookTab[] = [
  {
    id: "getting-started",
    label: "Getting Started",
    title: "Build your baseline in minutes",
    description:
      "Start by organizing your highest-priority records first so every future workflow has a dependable foundation.",
    bullets: [
      "Create core categories: identity, finance, health, and travel.",
      "Upload one clean copy of each critical document.",
      "Use clear labels to make retrieval obvious under pressure.",
    ],
  },
  {
    id: "mastering-expiry",
    label: "Mastering Expiry",
    title: "Turn deadlines into planned actions",
    description:
      "Use proactive reminders to avoid last-minute renewals, penalties, and documentation panic.",
    bullets: [
      "Set reminder windows at 180, 90, and 30 days.",
      "Add renewal dependencies like photos, IDs, or forms.",
      "Review upcoming expiries weekly with one quick sweep.",
    ],
  },
  {
    id: "application-prep",
    label: "Application Prep",
    title: "Assemble complete packets quickly",
    description:
      "When applications appear, gather required paperwork in one pass with less back-and-forth.",
    bullets: [
      "Save checklist templates for visa, loan, and onboarding flows.",
      "Collate matching records into one export-ready set.",
      "Verify document validity before submitting any packet.",
    ],
  },
];

export function PlaybookTabs() {
  const [active, setActive] = useState<PlaybookTab["id"]>("getting-started");

  const currentTab = useMemo(
    () => tabs.find((tab) => tab.id === active) ?? tabs[0],
    [active],
  );

  return (
    <div className="rounded-2xl border border-border bg-card p-4 sm:p-6">
      <div className="mb-5 flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                isActive
                  ? "border-zinc-500 bg-zinc-900 text-white"
                  : "border-border bg-black/30 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <motion.div
        key={currentTab.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="rounded-xl border border-border bg-black/30 p-5"
      >
        <h3 className="mb-2 text-xl font-medium text-white">{currentTab.title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-zinc-400">{currentTab.description}</p>
        <ul className="space-y-2 text-sm text-zinc-300">
          {currentTab.bullets.map((bullet) => (
            <li key={bullet} className="rounded-lg border border-border bg-black/30 px-3 py-2">
              {bullet}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
