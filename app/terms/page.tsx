import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Doku",
  description: "Terms of use for Doku by Listo Labs.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <section className="rounded-2xl border border-border bg-card p-6 sm:p-10">
        <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">Effective Date: April 10, 2026</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Terms of Use</h1>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-zinc-300 sm:text-base">
          <p>
            Welcome to Doku, a product by Listo Labs. By downloading, installing, or using Doku, you agree to these
            Terms.
          </p>

          <div>
            <h2 className="text-base font-medium text-white sm:text-lg">1) Use at Your Discretion</h2>
            <p className="mt-1">
              Doku is provided as a personal productivity and document-management tool. You choose to install and use
              the app at your own discretion and risk, and you are responsible for how you use it.
            </p>
          </div>

          <div>
            <h2 className="text-base font-medium text-white sm:text-lg">2) Account and Device Security</h2>
            <p className="mt-1">
              You are responsible for maintaining the confidentiality and security of your device credentials,
              biometric access, and any Doku master PIN or passcode. You must not share your master PIN with others.
              Any activity performed using your device or credentials is your responsibility.
            </p>
          </div>

          <div>
            <h2 className="text-base font-medium text-white sm:text-lg">3) Data Storage and Backups</h2>
            <p className="mt-1">
              Doku is designed for local-first usage. You are responsible for maintaining appropriate backups and
              safeguarding access to your own devices and cloud backup accounts (such as iCloud or Google Drive, where
              applicable).
            </p>
          </div>

          <div>
            <h2 className="text-base font-medium text-white sm:text-lg">4) No Warranty</h2>
            <p className="mt-1">
              Doku is provided on an &quot;as is&quot; and &quot;as available&quot; basis, without warranties of any
              kind, whether express or implied, including fitness for a particular purpose, merchantability, or
              non-infringement.
            </p>
          </div>

          <div>
            <h2 className="text-base font-medium text-white sm:text-lg">5) Limitation of Liability</h2>
            <p className="mt-1">
              To the maximum extent permitted by law, Listo Labs shall not be liable for any direct, indirect,
              incidental, consequential, special, or punitive damages, or for any loss of data, loss of access, or
              security breach arising from or related to your use of Doku, including but not limited to device
              compromise, credential disclosure, forgotten PIN, or third-party account issues.
            </p>
          </div>

          <div>
            <h2 className="text-base font-medium text-white sm:text-lg">6) Acceptable Use</h2>
            <p className="mt-1">
              You agree not to misuse Doku, attempt unauthorized access, interfere with app functionality, or use the
              app in violation of any applicable laws.
            </p>
          </div>

          <div>
            <h2 className="text-base font-medium text-white sm:text-lg">7) Updates and Changes</h2>
            <p className="mt-1">
              We may update these Terms from time to time. Continued use of Doku after updates means you accept the
              revised Terms.
            </p>
          </div>

          <div>
            <h2 className="text-base font-medium text-white sm:text-lg">8) Contact</h2>
            <p className="mt-1">
              For questions regarding these Terms, contact{" "}
              <a className="text-sky-300 underline-offset-2 hover:underline" href="mailto:dev.listolabs@gmail.com">
                dev.listolabs@gmail.com
              </a>
              .
            </p>
          </div>
        </div>

        <p className="mt-10 text-sm text-zinc-400">Copyright - © 2026 Listo Labs. Built in India.</p>
      </section>
    </main>
  );
}
