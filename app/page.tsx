import { CursorGlow } from "@/components/cursor-glow";
import { PlaybookTabs } from "@/components/playbook-tabs";
import { Reveal } from "@/components/reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

const navItems = [
  { href: "#hero", label: "Hero" },
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#deep-dive", label: "Deep Dive" },
  { href: "#playbook", label: "Playbook" },
  { href: "#trust", label: "Trust" },
];

const problemCards = [
  {
    title: "The Discipline Gap",
    text: "Most systems still rely on manual naming, filing, and remembering. Consistency breaks under real life.",
  },
  {
    title: "The Wild Goose Search",
    text: "When a loan or visa deadline appears, finding the right document becomes a stressful scavenger hunt.",
  },
  {
    title: "The Silent Expiry",
    text: "Traditional document vaults stay quiet until it is too late. Renewals should not depend on memory.",
  },
];

const methodCards = [
  {
    title: "Systematic Cataloging",
    text: "You provide the document. Doku keeps a clean, retrievable index without manual folder gymnastics.",
  },
  {
    title: "Active Management",
    text: "Get clear expiry reminders for critical records like passports and insurance before urgency kicks in.",
  },
  {
    title: "Zero-AI Privacy",
    text: "100% on-device flow with no cloud reading and no OCR leakage to third-party servers.",
  },
  {
    title: "Instant Collation",
    text: "Collect everything needed for a visa, loan, or application in one deliberate tap.",
  },
];

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Doku",
  applicationCategory: "ProductivityApplication",
  operatingSystem: "iOS, Android",
  description:
    "Doku is a high-precision personal document cataloging system built to keep records organized, actionable, and private.",
};

export default function Home() {
  return (
    <CursorGlow>
      <header className="sticky top-0 z-40 border-b border-border/80 bg-[#050505]/80 backdrop-blur-md">
        <nav className="mx-auto flex w-full max-w-6xl items-center gap-2 overflow-x-auto px-5 py-3 sm:px-8">
          <a
            href="#hero"
            aria-label="Doku home"
            className="mr-2 shrink-0 rounded-full border border-border bg-card p-1 transition hover:border-zinc-500"
          >
            <Image
              src="/app-screenshots/icon.png"
              alt="Doku app icon"
              width={24}
              height={24}
              className="rounded-full"
            />
          </a>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-zinc-300 transition hover:border-zinc-500 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-5 py-12 sm:px-8 sm:py-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />

        <Reveal
          id="hero"
          className="scroll-mt-24 grid items-center gap-8 rounded-3xl border border-border bg-card/80 p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-border bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.18em] text-zinc-400">
              Doku by Listolabs
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Where is it? shouldn&apos;t be the start of your paperwork.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              Doku is the high-precision cataloging system for people who value order over chaos.
            </p>
          </div>
          <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-5 transition hover:border-zinc-600">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full border border-zinc-700 px-2 py-1 text-[11px] text-zinc-400">
                App Mockup Placeholder
              </span>
              <span className="text-[11px] text-zinc-500">390 x 844</span>
            </div>
            <div className="mx-auto h-[24rem] max-w-[14rem] rounded-[2rem] border border-zinc-700 bg-zinc-950 p-3 shadow-2xl shadow-black/60">
              <div className="h-full rounded-[1.5rem] border border-dashed border-zinc-700 bg-black/70" />
            </div>
          </div>
        </Reveal>

        <Reveal id="problem" className="scroll-mt-24 space-y-6" delay={0.03}>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">The Problem</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">The Folder Fallacy</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {problemCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-border bg-card p-5 transition duration-300 hover:-translate-y-0.5 hover:border-zinc-600"
              >
                <h3 className="mb-3 text-lg font-medium text-white">{card.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{card.text}</p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal id="solution" className="scroll-mt-24 space-y-6" delay={0.05}>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">The Solution</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">The Doku Method</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {methodCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-border bg-card p-5 transition duration-300 hover:border-zinc-600"
              >
                <h3 className="mb-2 text-base font-medium text-white">{card.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{card.text}</p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal id="deep-dive" className="scroll-mt-24 space-y-6" delay={0.08}>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">The Deep Dive</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Product walkthrough placeholders</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-4">
              <p className="mb-3 text-sm text-zinc-400">Video Placeholder</p>
              <div className="aspect-video rounded-xl border border-dashed border-zinc-700 bg-black/40" />
            </div>
            <div className="rounded-2xl border border-border bg-card p-4">
              <p className="mb-3 text-sm text-zinc-400">Screenshot Placeholder Strip</p>
              <div className="grid gap-2 sm:grid-cols-3">
                <div className="aspect-[4/3] rounded-lg border border-dashed border-zinc-700 bg-black/40" />
                <div className="aspect-[4/3] rounded-lg border border-dashed border-zinc-700 bg-black/40" />
                <div className="aspect-[4/3] rounded-lg border border-dashed border-zinc-700 bg-black/40" />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal id="playbook" className="scroll-mt-24 space-y-6" delay={0.1}>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">The Playbook</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">How to use Doku effectively</h2>
          </div>
          <PlaybookTabs />
        </Reveal>

        <Reveal id="trust" className="scroll-mt-24 space-y-6" delay={0.12}>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">The Trust Layer</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Questions worth asking</h2>
          </div>
          <div className="rounded-2xl border border-border bg-card px-5">
            <Accordion type="single" collapsible>
              <AccordionItem value="digi-locker">
                <AccordionTrigger>Why not DigiLocker?</AccordionTrigger>
                <AccordionContent>
                  DigiLocker is a vault. Doku is a dashboard: it helps classify, track, and prepare your documents
                  for action, not just storage.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="drive">
                <AccordionTrigger>Better than Drive?</AccordionTrigger>
                <AccordionContent>
                  Drive is excellent generic storage, but it can become a graveyard. Doku acts like a command center
                  built specifically for paperwork workflows.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="safe">
                <AccordionTrigger>Is it safe?</AccordionTrigger>
                <AccordionContent>
                  Doku follows an on-device encrypted model where sensitive records remain under your control, without
                  server-side document access.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Reveal>

        <footer className="rounded-2xl border border-border bg-card p-6">
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
              <a href="#" className="rounded-md border border-transparent px-2 py-1 transition hover:border-border hover:text-zinc-200">
                Privacy Policy
              </a>
              <a href="#" className="rounded-md border border-transparent px-2 py-1 transition hover:border-border hover:text-zinc-200">
                Terms
              </a>
              <a href="#" className="rounded-md border border-transparent px-2 py-1 transition hover:border-border hover:text-zinc-200">
                Support
              </a>
              <a href="#" className="rounded-md border border-transparent px-2 py-1 transition hover:border-border hover:text-zinc-200">
                Contact
              </a>
            </div>
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <p className="flex items-center gap-2 text-sm text-zinc-400">
                <Image
                  src="/app-screenshots/icon.png"
                  alt="Doku icon"
                  width={18}
                  height={18}
                  className="rounded-full"
                />
                Built by Listolabs
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  aria-label="App Store"
                  className="group flex min-w-40 items-center gap-3 rounded-xl border border-border bg-black/30 px-4 py-2 transition hover:border-zinc-500"
                >
                  <span className="inline-flex size-8 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-300">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
                      <path d="M16.36 12.42c.02 2.02 1.77 2.7 1.79 2.71-.01.05-.28.95-.94 1.87-.56.79-1.15 1.58-2.07 1.6-.9.02-1.19-.53-2.23-.53-1.04 0-1.36.52-2.2.55-.88.03-1.56-.88-2.12-1.67-1.14-1.62-2-4.56-.84-6.58.58-1 1.62-1.64 2.74-1.66.86-.02 1.67.58 2.2.58.53 0 1.53-.72 2.58-.62.44.02 1.66.18 2.45 1.33-.06.04-1.46.86-1.36 2.42ZM14.65 6.17c.47-.57.8-1.35.71-2.14-.68.03-1.49.45-1.98 1.02-.44.5-.83 1.31-.73 2.08.76.06 1.53-.38 2-.96Z" />
                    </svg>
                  </span>
                  <span className="leading-tight">
                    <span className="block text-[10px] uppercase tracking-[0.12em] text-zinc-500">
                      Download on the
                    </span>
                    <span className="block text-sm font-medium text-zinc-200 group-hover:text-white">App Store</span>
                  </span>
                </a>
                <a
                  href="#"
                  aria-label="Play Store"
                  className="group flex min-w-40 items-center gap-3 rounded-xl border border-border bg-black/30 px-4 py-2 transition hover:border-zinc-500"
                >
                  <span className="inline-flex size-8 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-300">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
                      <path d="M4.65 3.38a1.18 1.18 0 0 0-.65 1.05v15.14c0 .44.23.83.59 1.05L13.1 12 4.65 3.38Zm9.37 7.86 2.69-2.67-9.9-5.43 7.2 8.1Zm3.66-1.93-2.9 2.88 2.91 2.91 2.82-1.55c1-.55 1.01-1.98.01-2.53l-2.84-1.71Zm-3.65 3.44-7.16 8.08 9.83-5.41-2.67-2.67Z" />
                    </svg>
                  </span>
                  <span className="leading-tight">
                    <span className="block text-[10px] uppercase tracking-[0.12em] text-zinc-500">Get it on</span>
                    <span className="block text-sm font-medium text-zinc-200 group-hover:text-white">Google Play</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-xs text-zinc-600">Add final links before launch.</span>
            </div>
          </div>
        </footer>
      </main>
    </CursorGlow>
  );
}
