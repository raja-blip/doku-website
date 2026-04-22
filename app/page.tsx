import { CursorGlow } from "@/components/cursor-glow";
import { DokuComparison } from "@/components/doku-comparison";
import { FaqSection } from "@/components/faq";
import { HeroMockup } from "@/components/hero-mockup";
import { Reveal } from "@/components/reveal";
import { ScreenshotStrip } from "@/components/screenshot-strip";
import { VideoShowcase } from "@/components/video-showcase";

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Doku",
  applicationCategory: "ProductivityApplication",
  operatingSystem: "iOS, Android, Web",
  description:
    "Doku is an AI-powered personal document manager that turns scattered files into searchable, actionable intelligence.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
};

export default function Home() {
  return (
    <CursorGlow>
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-5 py-12 sm:px-8 sm:py-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />

        <Reveal className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-border bg-card px-3 py-1 text-xs text-muted">
              Doku by Listo Labs
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Your life isn&apos;t a file system.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              DigiLocker is a vault. Google Drive is a cemetery.{" "}
              <span className="text-gradient font-medium">
                Doku is your personal brain for the documents that matter.
              </span>
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full border border-sky-400/30 bg-sky-500/20 px-5 py-2 text-sm text-sky-100 transition hover:bg-sky-500/30">
                Get Early Access
              </button>
              <button className="rounded-full border border-border bg-card px-5 py-2 text-sm text-zinc-200 transition hover:border-zinc-500">
                Watch Product Demo
              </button>
            </div>
          </div>
          <HeroMockup />
        </Reveal>

        <Reveal className="space-y-3" delay={0.03}>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Product snapshots</h2>
          <p className="text-sm text-zinc-400">
            Drop your real app images in <code className="font-mono">public/app-screenshots</code>
            {" "}as <code className="font-mono">screen-01.png</code>,{" "}
            <code className="font-mono">screen-02.png</code>,{" "}
            <code className="font-mono">screen-03.png</code> ...{" "}
            <code className="font-mono">screen-10.png</code>.
          </p>
          <ScreenshotStrip />
        </Reveal>

        <Reveal className="space-y-3" delay={0.04}>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">See Doku in motion</h2>
          <p className="text-sm text-zinc-400">
            Add feature videos in <code className="font-mono">public/feature-videos</code> as{" "}
            <code className="font-mono">video-01.mov</code>,{" "}
            <code className="font-mono">video-02.mov</code>,{" "}
            <code className="font-mono">video-03.mov</code>. Optimized{" "}
            <code className="font-mono">.mp4</code> versions are auto-preferred when present.
          </p>
          <VideoShowcase />
        </Reveal>

        <Reveal className="space-y-6" delay={0.05}>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">From manual chaos to precision</h2>
            <p className="text-zinc-400">
              Compare how raw file clutter transforms into clean, semantically labeled clarity.
            </p>
          </div>
          <DokuComparison />
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-4">
              <p className="mb-3 text-sm text-zinc-300">Manual</p>
              <div className="flex flex-wrap gap-2 text-xs text-zinc-400">
                <span className="rounded-md border border-border bg-black/20 px-2 py-1">
                  tax_return_2023_v2_final_v3.pdf
                </span>
                <span className="rounded-md border border-border bg-black/20 px-2 py-1">
                  WhatsApp Image 2024-01-15.jpeg
                </span>
                <span className="rounded-md border border-border bg-black/20 px-2 py-1">
                  car_insurance_new_FINAL(1).pdf
                </span>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <p className="mb-3 text-sm text-zinc-300">The Doku Way</p>
              <div className="flex flex-wrap gap-2 text-xs text-blue-100">
                <span className="rounded-full border border-blue-500/40 bg-blue-600/20 px-3 py-1">
                  Income Tax | 2023
                </span>
                <span className="rounded-full border border-blue-500/40 bg-blue-600/20 px-3 py-1">
                  Vehicle RC
                </span>
                <span className="rounded-full border border-blue-500/40 bg-blue-600/20 px-3 py-1">
                  Car Insurance | Active
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="space-y-6" delay={0.1}>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Core intelligence, built for real life</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="mb-2 text-sm text-accent">Expiry Intelligence</p>
              <h3 className="mb-3 text-xl font-medium text-white">Never miss a critical renewal</h3>
              <p className="text-zinc-400">Passport alert: 180 days to expiry. Act before urgency takes over.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="mb-2 text-sm text-accent">OCR Semantic Search</p>
              <h3 className="mb-3 text-xl font-medium text-white">Find exact pages, not just files</h3>
              <p className="font-mono text-sm text-zinc-300">
                Query: &quot;car insurance&quot; -&gt; PDF page 7 surfaced instantly.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5 md:col-span-2">
              <p className="mb-2 text-sm text-accent">Private by Design</p>
              <h3 className="mb-3 text-xl font-medium text-white">Security architecture you can trust</h3>
              <div className="grid gap-2 text-sm text-zinc-300 sm:grid-cols-3">
                <span className="rounded-lg border border-border bg-black/20 p-3">Device Key Generation</span>
                <span className="rounded-lg border border-border bg-black/20 p-3">AES-256 Encryption Layer</span>
                <span className="rounded-lg border border-border bg-black/20 p-3">Scoped Access Controls</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="space-y-4 pb-8" delay={0.15}>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Questions worth asking</h2>
          <div className="rounded-2xl border border-border bg-card px-5">
            <FaqSection />
          </div>
        </Reveal>
      </main>
    </CursorGlow>
  );
}
