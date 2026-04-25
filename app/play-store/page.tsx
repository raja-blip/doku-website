import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Play | Coming Soon",
  description: "doku on Google Play is currently in closed testing.",
};

export default function PlayStoreComingSoonPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <section className="rounded-2xl border border-border bg-card p-6 sm:p-10">
        <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">Google Play</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Coming Soon</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
          doku is currently under closed testing on Android. The public Google Play listing will be available soon.
        </p>
        <p className="mt-6 text-sm text-zinc-400">
          Need early access? Reach out at{" "}
          <a className="text-sky-300 underline-offset-2 hover:underline" href="mailto:dev.listolabs@gmail.com">
            dev.listolabs@gmail.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}
