import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – GhostBill",
  description:
    "How GhostBill collects, uses, and protects your information. Contact us anytime with privacy questions.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-6 py-16 flex items-start justify-center bg-zinc-900">
      <article className="w-full max-w-3xl space-y-6 text-zinc-200">
        <header className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
            Privacy Policy
          </h1>
          <p className="text-sm text-zinc-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </header>

        <p>
          GhostBill (“we”, “us”, “our”) is committed to protecting your
          privacy. This Policy explains what information we collect, how we use
          it, and the choices you have. This Policy applies to the GhostBill
          mobile app and our website.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-100">
            Information We Collect
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-medium">Account Information</span> (e.g.
              email) when you sign up or contact support.
            </li>
            <li>
              <span className="font-medium">Financial Activity You Enter</span>{" "}
              (e.g., merchants, amounts, categories, dates, notes) to enable app
              features like tracking spending and subscriptions.
            </li>
            <li>
              <span className="font-medium">Device & Usage Data</span> (e.g.,
              app version, device model, OS, basic analytics, diagnostic/crash
              data) to maintain performance and improve the app.
            </li>
            <li>
              <span className="font-medium">Images You Upload</span> (e.g.,
              receipt photos) for optional features like scanning.
            </li>
          </ul>
          <p className="text-sm text-zinc-400">
            We do not collect precise location or your phone contacts. We do not
            sell personal data.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-100">
            How We Use Your Information
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Provide and operate app features you request.</li>
            <li>Personalize the experience (e.g., charts, reminders).</li>
            <li>Improve reliability, performance, and usability.</li>
            <li>Communicate with you about updates and support.</li>
            <li>Protect against fraud, abuse, or violations of our terms.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-100">
            Sharing & Disclosures
          </h2>
          <p>
            We do not sell your personal information. We may share limited data
            with service providers who process it on our behalf and under
            contract (e.g., cloud hosting, authentication, analytics, error
            reporting). These providers may process data in other countries.
          </p>
          <p className="text-sm text-zinc-400">
            Example service providers may include our authentication/database
            provider and crash/analytics tools. They are only permitted to use
            your information to provide services to GhostBill.
          </p>
          <p>
            We may disclose information if required by law or to protect our
            rights, users, or the public.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-100">Data Retention</h2>
          <p>
            We retain personal information for as long as needed to provide the
            service and for legitimate business or legal purposes. If you delete
            your account or request deletion, we will delete or anonymize your
            personal data subject to any legal retention requirements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-100">
            Your Choices & Rights
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              You can view, edit, or delete data you’ve entered within the app.
            </li>
            <li>
              You can request access, correction, or deletion of your personal
              data by contacting us.
            </li>
            <li>
              You can opt out of non-essential communications at any time.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-100">Security</h2>
          <p>
            We use reasonable administrative, technical, and organizational
            measures to protect your information (e.g., encryption in transit,
            access controls). However, no method of transmission or storage is
            100% secure.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-100">
            Children’s Privacy
          </h2>
          <p>
            GhostBill is not directed to children under 13, and we do not
            knowingly collect personal information from children. If you believe
            a child has provided us personal information, please contact us and
            we will take appropriate action.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-100">
            International Users
          </h2>
          <p>
            Your information may be processed and stored in countries other than
            your own. By using GhostBill, you consent to the transfer of
            information to countries that may have different data-protection
            rules than your country.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-100">
            Changes to This Policy
          </h2>
          <p>
            We may update this Policy from time to time. We will post the
            updated version here and update the “Last updated” date above. If
            changes are material, we may provide additional notice in the app or
            by email.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-100">Contact Us</h2>
          <p>
            Questions or requests about this Policy? Contact us at{" "}
            <a
              href="mailto:calebchiang1002@gmail.com"
              className="underline underline-offset-4 text-indigo-400 hover:text-indigo-300"
            >
              calebchiang1002@gmail.com
            </a>
            .
          </p>
        </section>
      </article>
    </main>
  );
}
