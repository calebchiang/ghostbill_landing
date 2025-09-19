import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service – GhostBill",
  description:
    "The terms and conditions for using the GhostBill app and website.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen px-6 py-16 flex items-start justify-center">
      <article className="w-full max-w-3xl space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Terms of Service
          </h1>
          <p className="text-sm text-zinc-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </header>

        <p>
          Welcome to GhostBill. By downloading, accessing, or using our mobile
          application or website (collectively, the “Service”), you agree to
          these Terms of Service (“Terms”). If you do not agree, you may not use
          the Service.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Eligibility</h2>
          <p>
            You must be at least 13 years old to use GhostBill. If you are under
            the age of majority in your jurisdiction, you must have your parent
            or guardian’s permission to use the Service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">License to Use</h2>
          <p>
            We grant you a limited, non-exclusive, non-transferable,
            revocable license to use GhostBill for personal, non-commercial
            purposes in accordance with these Terms. You may not copy, modify,
            distribute, sell, or lease any part of the Service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">User Responsibilities</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>You are responsible for the accuracy of data you enter.</li>
            <li>
              You agree not to use the Service for unlawful, fraudulent, or
              abusive purposes.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account credentials.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Privacy</h2>
          <p>
            Your use of the Service is also governed by our{" "}
            <a
              href="/privacy"
              className="underline underline-offset-4 text-indigo-600"
            >
              Privacy Policy
            </a>
            , which describes how we collect, use, and protect your
            information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Intellectual Property</h2>
          <p>
            All rights, title, and interest in and to GhostBill, including all
            software, trademarks, logos, and content, remain the exclusive
            property of GhostBill and its licensors. You may not use our
            branding without prior written permission.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Third-Party Services</h2>
          <p>
            GhostBill may rely on third-party services (such as cloud hosting,
            authentication, or analytics). We are not responsible for the
            content, policies, or practices of those third parties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Disclaimer of Warranties</h2>
          <p>
            The Service is provided “as is” and “as available” without
            warranties of any kind, express or implied. We do not warrant that
            the Service will be uninterrupted, error-free, or secure.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, GhostBill and its
            affiliates, officers, employees, and partners shall not be liable
            for any indirect, incidental, special, consequential, or punitive
            damages arising from your use of or inability to use the Service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Termination</h2>
          <p>
            We may suspend or terminate your access to the Service at any time
            if you violate these Terms or use the Service in a way that could
            harm GhostBill or others.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of the
            Service after changes indicates acceptance of the updated Terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of your country or state of residence, without regard to
            conflict of law principles.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p>
            If you have questions about these Terms, please contact us at{" "}
            <a
              href="mailto:legal@ghostbill.app"
              className="underline underline-offset-4"
            >
              legal@ghostbill.app
            </a>
            .
          </p>
        </section>
      </article>
    </main>
  );
}
