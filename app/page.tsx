import { CursorGlow } from "@/components/cursor-glow";
import { FolderFallacyCard } from "@/components/folder-fallacy-card";
import { MultiEntityEngineGraphic } from "@/components/multi-entity-engine";
import { ProductWalkthrough } from "@/components/product-walkthrough";
import { PlaybookTabs } from "@/components/playbook-tabs";
import { Reveal } from "@/components/reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BellDot, Files, Fingerprint, Users } from "lucide-react";
import Image from "next/image";

const methodIconMap = {
  users: Users,
  fingerprint: Fingerprint,
  bellDot: BellDot,
  files: Files,
} as const;

type MethodIconKey = keyof typeof methodIconMap;

const navItems = [
  { href: "#hero", label: "Hero" },
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#multi-entity", label: "Engine" },
  { href: "#deep-dive", label: "Deep Dive" },
  { href: "#playbook", label: "Playbook" },
  { href: "#trust", label: "Trust" },
];

const problemCards = [
  {
    image: "/images/problem/problem-1.png",
    title: "The Discipline Gap",
    text: "Most systems still rely on manual naming, filing, and remembering. Consistency breaks under real life.",
    imageAlt: "Illustration for the discipline gap in document management",
  },
  {
    image: "/images/problem/problem-2.png",
    title: "The Wild Goose Search",
    text: "When a loan or visa deadline appears, finding the right document becomes a stressful scavenger hunt.",
    imageAlt: "Illustration for the wild goose search when gathering paperwork",
  },
  {
    image: "/images/problem/problem-3.png",
    title: "The Silent Expiry",
    text: "Traditional document vaults stay quiet until it is too late. Renewals should not depend on memory.",
    imageAlt: "Illustration for silent expiry of important documents",
  },
] as const;

const methodCards: { iconKey: MethodIconKey; title: string; text: string; videoSrc: string }[] = [
  {
    iconKey: "users",
    title: "People & Assets",
    text: "Your life isn't one big folder. Doku maps documents to the people (Profiles) and assets (Cars, Property) they belong to.",
    videoSrc: "/feature-videos/final_people_assets.mp4",
  },
  {
    iconKey: "fingerprint",
    title: "Precision Naming",
    text: "You define the type; Doku handles the architecture. Every file is instantly indexed with a standardized, retrievable name.",
    videoSrc: "/feature-videos/final_file_name.mp4",
  },
  {
    iconKey: "bellDot",
    title: "Lifecycle Tracking",
    text: "A document is a deadline. Doku tracks expiry dates for your Passport, Insurance, and Licenses—alerting you before they become a crisis.",
    videoSrc: "/feature-videos/final_life_tracking.mp4",
  },
  {
    iconKey: "files",
    title: "Instant Collation",
    text: "Stop the scavenger hunt. One tap gathers every document needed for a visa, loan, or application across all your profiles.",
    videoSrc: "/feature-videos/final_share.mp4",
  },
];

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Doku",
  applicationCategory: "ProductivityApplication",
  operatingSystem: "iOS, Android",
  description:
    "Doku is a high-precision document vault that maps records to people and assets, with precision naming, lifecycle alerts, and instant collation.",
};

export default function Home() {
  return (
    <CursorGlow>
      <header className="sticky top-0 z-40 border-b border-border/80 bg-[#050505]/80 backdrop-blur-md">
        <nav className="mx-auto flex w-full max-w-6xl items-center gap-4 overflow-x-auto px-5 py-3 sm:gap-6 sm:px-8">
          <a
            href="#hero"
            aria-label="Doku home"
            className="shrink-0 rounded-full border border-border bg-card p-1 transition hover:border-zinc-500"
          >
            <Image
              src="/app-screenshots/icon.png"
              alt="Doku app icon"
              width={24}
              height={24}
              className="rounded-full"
            />
          </a>
          <div className="flex min-w-0 flex-1 items-center gap-x-8 overflow-x-auto">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-zinc-300 transition hover:border-zinc-500 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
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
              Doku is the high-precision document vault for people who value order over chaos.
            </p>
          </div>
          <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-5 transition hover:border-zinc-600">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full border border-zinc-700 px-2 py-1 text-[11px] text-zinc-400">
                App preview
              </span>
              <span className="text-[11px] text-zinc-500">Home</span>
            </div>
            <div className="mx-auto w-full max-w-[15rem]">
              <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2rem] border border-zinc-700 bg-zinc-950 shadow-2xl shadow-black/60 ring-1 ring-white/5">
                <Image
                  src="/app-screenshots/app-home.png"
                  alt="Doku app home screen"
                  fill
                  priority
                  sizes="(max-width: 1024px) 45vw, 240px"
                  className="object-cover object-[50%_12%]"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal id="problem" className="scroll-mt-24 space-y-6" delay={0.03}>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">The Problem</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">The Folder Fallacy</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3 md:items-stretch">
            {problemCards.map((card) => (
              <div key={card.title} className="min-h-0 md:h-full">
                <FolderFallacyCard
                  src={card.image}
                  title={card.title}
                  description={card.text}
                  imageAlt={card.imageAlt}
                />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal id="solution" className="scroll-mt-24 space-y-6" delay={0.05}>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">The Solution</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">The Doku Method</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch xl:grid-cols-4">
            {methodCards.map((card) => {
              const Icon = methodIconMap[card.iconKey];
              return (
                <article
                  key={card.title}
                  className="group flex h-full flex-row items-start gap-4 rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md transition duration-300 hover:border-sky-400/25 sm:flex-col sm:gap-4"
                >
                  <Icon
                    aria-hidden
                    strokeWidth={1}
                    className="size-8 shrink-0 text-sky-400 transition-[transform,filter] duration-200 ease-out [filter:drop-shadow(0_0_8px_rgba(56,189,248,0.4))] group-hover:scale-[1.08] group-hover:[filter:drop-shadow(0_0_16px_rgba(56,189,248,0.75))_drop-shadow(0_0_4px_rgba(56,189,248,0.5))]"
                  />
                  <div className="min-w-0 flex-1 sm:flex-none">
                    <h3 className="mb-2 text-base font-medium text-white">{card.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-400">{card.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </Reveal>

        <Reveal id="multi-entity" className="scroll-mt-24 space-y-8" delay={0.065}>
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">The Multi-Entity Engine</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Your life isn&apos;t a single stream of data.
            </h2>
            <div className="flex flex-wrap gap-2 text-xs text-zinc-500">
              <span className="rounded-full border border-sky-500/25 bg-sky-500/10 px-2.5 py-1 font-medium text-sky-200/90">
                Profiles
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-zinc-400">
                Me · Spouse · Kids · Parents
              </span>
              <span className="rounded-full border border-sky-500/25 bg-sky-500/10 px-2.5 py-1 font-medium text-sky-200/90">
                Entities
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-zinc-400">
                My car · My house · My job
              </span>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              Doku is built for your household, but filing is <span className="text-zinc-200">profile-first</span>: each
              person (you, spouse, kids, parents) keeps their own Aadhaar, passport, immunization, and school records.
              <span className="text-zinc-200"> Entities</span> are for things—your car, home, or job—and their paperwork
              stays separate. Switch context in one gesture—no relabeling, no duplicate folders.
            </p>
            <blockquote className="border-l-2 border-sky-500/45 pl-4 text-base italic leading-snug text-zinc-200">
              Looking for your daughter&apos;s immunization record? Don&apos;t search for &quot;Medical.&quot; Just tap
              her Profile.
            </blockquote>
          </div>
          <MultiEntityEngineGraphic />
        </Reveal>

        <Reveal id="deep-dive" className="scroll-mt-24 space-y-6" delay={0.08}>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">The Deep Dive</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Product walkthrough</h2>
            <p className="max-w-2xl text-sm text-zinc-400">
              Vertical phone captures for each Doku Method pillar. On large screens the clip sits beside the story; on
              phones, use the strip to jump clips or open fullscreen for a clearer view.
            </p>
          </div>
          <ProductWalkthrough
            slides={methodCards.map(({ title, text, videoSrc, iconKey }) => ({
              title,
              description: text,
              videoSrc,
              iconKey,
            }))}
          />
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
