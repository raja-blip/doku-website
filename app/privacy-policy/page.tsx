import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Doku",
  description: "Privacy policy for the Doku app.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <section className="rounded-2xl border border-border bg-card p-6 sm:p-10">
        <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">Effective Date: April 10, 2026</p>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Privacy Policy</h1>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-zinc-300 sm:text-base">
          <p>
            Doku is designed as a local-only vault. We do not collect, store, or have any access to your documents or
            biometric data.
          </p>

          <div>
            <h2 className="text-base font-medium text-white sm:text-lg">Local Storage</h2>
            <p className="mt-1">All files are stored on your device&apos;s secure enclave.</p>
          </div>

          <div>
            <h2 className="text-base font-medium text-white sm:text-lg">Cloud</h2>
            <p className="mt-1">Backups are sent only to your personal Google Drive or iCloud account.</p>
          </div>

          <div>
            <h2 className="text-base font-medium text-white sm:text-lg">Data Security</h2>
            <p className="mt-1">
              All data remains on the user&apos;s device and is protected by the device&apos;s native biometric security
              (Face ID/Fingerprint).
            </p>
          </div>

          <div>
            <h2 className="text-base font-medium text-white sm:text-lg">Camera</h2>
            <p className="mt-1">
              The Camera permission is used solely for the purpose of scanning physical documents and IDs to save them
              locally on your device. No images are sent to the developer or any third party.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
