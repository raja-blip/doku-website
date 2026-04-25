import { CursorGlow } from "@/components/cursor-glow";
import { FolderFallacyCard } from "@/components/folder-fallacy-card";
import { MultiEntityEngineGraphic } from "@/components/multi-entity-engine";
import { ProductWalkthrough } from "@/components/product-walkthrough";
import { WalkthroughScreens } from "@/components/walkthrough-screens";
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
  { href: "#hero", label: "Doku" },
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#deep-dive", label: "Deep Dive" },
  { href: "#playbook", label: "Playbook" },
  { href: "#trust", label: "FAQs" },
];

const heroBrandMockVariant: "refined-pill" | "brand-line" = "brand-line";

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

const walkthroughColumns = [
  {
    title: "Setup",
    description: "Create your locker and set biometric based unlocking.",
    screens: [
      {
        src: "/app-screenshots/setup/s1.png",
        tag: "Setup",
        callout: "Create Doku Locker",
        caption: "Enter a 6 digit master PIN.",
      },
      {
        src: "/app-screenshots/setup/s2.png",
        tag: "Setup",
        callout: "Biometric unlock",
        caption: "Use Face ID or fingerprint to unlock.",
      },
    ],
  },
  {
    title: "Documents",
    description: "Browse and organize records by profile, type, and entity.",
    screens: [
      {
        src: "/app-screenshots/documents/d1.png",
        tag: "Documents",
        callout: "Doku home",
        caption: "View quick access tiles and categories.",
      },
      {
        src: "/app-screenshots/documents/d2.png",
        tag: "Profiles",
        callout: "Switch profiles",
        caption: "Switch between profiles at ease to access person specific documents.",
      },
      {
        src: "/app-screenshots/documents/d3.png",
        tag: "Identity",
        callout: "Identity documents",
        caption: "Add your ID cards; store front and back, provide expiry date if applicable.",
      },
      {
        src: "/app-screenshots/documents/d4.png",
        tag: "Finance",
        callout: "Finance filing",
        caption: "Create a bank account and tax year; add relevant documents inside each.",
      },
      {
        src: "/app-screenshots/documents/d5.png",
        tag: "Vehicles",
        callout: "Vehicle records",
        caption: "Create vehicles; add RC, PUC and insurance under each, with expiry tracked.",
      },
      {
        src: "/app-screenshots/documents/d6.png",
        tag: "Professional",
        callout: "Professional docs",
        caption: "Create employer and add documents within; add your other certificates.",
      },
      {
        src: "/app-screenshots/documents/d7.png",
        tag: "Home & Life",
        callout: "Home and life records",
        caption: "Add your properties (rent or own) and documents within, plus health and other records.",
      },
      {
        src: "/app-screenshots/documents/d8.png",
        tag: "Other",
        callout: "Everything else",
        caption: "Add passes, tickets, and other miscellaneous documents.",
      },
    ],
  },
  {
    title: "Utilities",
    description: "Actions around your documents: share, alerts, support, backup, and control.",
    screens: [
      {
        src: "/app-screenshots/utilities/u1.png",
        tag: "Share",
        callout: "Smart sharing",
        caption: "Make your own bundle or use smart bundles; share as zip or individual files.",
      },
      {
        src: "/app-screenshots/utilities/u2.png",
        tag: "Alerts",
        callout: "Expiry alerts",
        caption: "Note your documents that are expiring soon or expired.",
      },
      {
        src: "/app-screenshots/utilities/u3.png",
        tag: "Help",
        callout: "Help center",
        caption: "Get answers for your FAQs.",
      },
      {
        src: "/app-screenshots/utilities/u5.png",
        tag: "Backup & Restore",
        callout: "Backup and restore",
        caption: "Create an encrypted backup, PIN protected; restore when you change phones.",
      },
      {
        src: "/app-screenshots/utilities/u4.PNG",
        tag: "Delete Locker",
        callout: "Delete locker",
        caption: "Purge all your data from Doku if you don't need them.",
      },
    ],
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
            {heroBrandMockVariant === "refined-pill" ? (
              <p className="inline-flex rounded-full border border-sky-500/25 bg-sky-500/10 px-3.5 py-1 text-xs font-medium uppercase tracking-[0.16em] text-sky-200/90">
                Doku by Listolabs
              </p>
            ) : (
              <p className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.08em] text-zinc-200">
                <span className="rounded-full border border-sky-500/40 bg-sky-500/20 px-2 py-0.5 text-[11px] uppercase text-sky-200">
                  Doku
                </span>
                <span className="uppercase text-zinc-400">by Listolabs</span>
              </p>
            )}
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Where is it? shouldn&apos;t be the start of your paperwork.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              Doku is the high-precision document vault for people who value order over chaos.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://apps.apple.com/in/app/doku-your-smart-id-locker/id6761997185"
                target="_blank"
                rel="noreferrer"
                aria-label="App Store"
                className="group flex min-w-40 items-center gap-3 rounded-xl border border-border bg-black/30 px-4 py-2 transition hover:border-zinc-500"
              >
                <span className="inline-flex size-8 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-300">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
                    <path d="M16.36 12.42c.02 2.02 1.77 2.7 1.79 2.71-.01.05-.28.95-.94 1.87-.56.79-1.15 1.58-2.07 1.6-.9.02-1.19-.53-2.23-.53-1.04 0-1.36.52-2.2.55-.88.03-1.56-.88-2.12-1.67-1.14-1.62-2-4.56-.84-6.58.58-1 1.62-1.64 2.74-1.66.86-.02 1.67.58 2.2.58.53 0 1.53-.72 2.58-.62.44.02 1.66.18 2.45 1.33-.06.04-1.46.86-1.36 2.42ZM14.65 6.17c.47-.57.8-1.35.71-2.14-.68.03-1.49.45-1.98 1.02-.44.5-.83 1.31-.73 2.08.76.06 1.53-.38 2-.96Z" />
                  </svg>
                </span>
                <span className="leading-tight">
                  <span className="block text-[10px] uppercase tracking-[0.12em] text-zinc-500">Download on the</span>
                  <span className="block text-sm font-medium text-zinc-200 group-hover:text-white">App Store</span>
                </span>
              </a>
              <a
                href="/play-store"
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
          </div>
          <ProductWalkthrough
            slides={methodCards.map(({ title, text, videoSrc, iconKey }) => ({
              title,
              description: text,
              videoSrc,
              iconKey,
            }))}
          />
          <div className="border-t border-white/10 pt-10">
            <WalkthroughScreens columns={walkthroughColumns} />
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
                <AccordionContent className="space-y-3">
                  <p>
                    DigiLocker is for government-issued compliance—i.e., fetch and store government-issued documents
                    that are largely stored as flat documents; Doku is for your entire personal ecosystem. We help you
                    curate, structure, and manage the 80% of your life—like property deeds, private contracts, and
                    family travel—that isn&apos;t sitting on a government server.
                  </p>
                  <p>
                    Documents on DigiLocker are accepted as valid proofs, but they cover only a portion of your
                    document-related needs. In addition, server-side issues are common, and DigiLocker struggles to be a
                    fail-safe vault for instant retrieval.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="drive">
                <AccordionTrigger>Better than Drive?</AccordionTrigger>
                <AccordionContent className="space-y-3">
                  <p>
                    Cloud drives are storage graveyards. They require a lot of time and discipline to meticulously
                    catalog, update, and replace documents. It depends a lot on an individual&apos;s memory. Doku is a
                    dedicated command center that turns passive files into an organized, actionable system built
                    specifically for paperwork.
                  </p>
                  <p>
                    As long as you spend some time initially to catalog your paperwork, Doku makes it very easy to
                    manage them over time with timely alerts, easy updates, and instant retrieval.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="safe">
                <AccordionTrigger>Is it safe?</AccordionTrigger>
                <AccordionContent className="space-y-3">
                  <p>
                    Absolute safety. Doku uses local AES-256 encryption. Your sensitive records stay on your device,
                    under your control, with zero server-side access to your documents.
                  </p>
                  <p>
                    If you decide to change your phone, for example, you can create an encrypted backup, store it on a
                    drive, and then restore it easily on your new device.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Reveal>

        <footer className="rounded-2xl border border-border bg-card p-6">
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
              <a
                href="/privacy-policy"
                className="rounded-md border border-transparent px-2 py-1 transition hover:border-border hover:text-zinc-200"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="rounded-md border border-transparent px-2 py-1 transition hover:border-border hover:text-zinc-200"
              >
                Terms
              </a>
              <a
                href="/support"
                className="rounded-md border border-transparent px-2 py-1 transition hover:border-border hover:text-zinc-200"
              >
                Support
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
                  href="https://apps.apple.com/in/app/doku-your-smart-id-locker/id6761997185"
                  target="_blank"
                  rel="noreferrer"
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
                  href="/play-store"
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
          </div>
        </footer>
      </main>
    </CursorGlow>
  );
}
