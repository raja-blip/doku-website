import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | doku",
  description: "Support contact information for doku.",
};

export default function SupportPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <section className="rounded-2xl border border-border bg-card p-6 sm:p-10">
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Support</h1>
        <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">Questions? Reach out to us.</p>
        <p className="mt-6 text-sm text-zinc-200 sm:text-base">
          Email:{" "}
          <a className="text-sky-300 underline-offset-2 hover:underline" href="mailto:dev.listolabs@gmail.com">
            dev.listolabs@gmail.com
          </a>
        </p>
      </section>
    </main>
  );
}
