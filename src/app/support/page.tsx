"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "How do I create an account?",
    answer:
      "Just enter your email on the login screen and we’ll send you a secure link. Click that link in your email, and you’ll be instantly signed in without needing a password."
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "Subscriptions are managed through your Apple ID. Open the Settings app → tap your name → Subscriptions, and select GhostBill to cancel."
  },
  {
    question: "Can I switch between monthly and yearly plans?",
    answer:
      "Yes, you can upgrade or downgrade your subscription at any time in your Apple ID settings. Your plan will update at the next billing cycle."
  },
  {
    question: "Why am I not receiving verification emails?",
    answer:
      "Please check your spam or promotions folder. If the email isn’t there, add our address to your safe sender list and try again."
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach us directly at calebchiang1002@gmail.com. We usually respond within 1–2 business days."
  }
];

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="relative flex flex-col items-center justify-start min-h-screen px-6 py-16 text-center bg-zinc-900 overflow-hidden">
      <div className="w-full max-w-3xl mx-auto relative z-10 space-y-6">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight text-zinc-100">
          Support
        </h1>

        <p className="text-lg sm:text-xl text-zinc-300">
          Need help with GhostBill? We’re here to assist you.
        </p>

        <div className="mt-8 space-y-4">
          <p className="text-zinc-400">
            Contact us at{" "}
            <a
              href="mailto:calebchiang1002@gmail.com"
              className="text-indigo-400 hover:underline"
            >
              calebchiang1002@gmail.com
            </a>
          </p>

          <ul className="space-y-2 text-zinc-400">
            <li>
              🔒{" "}
              <Link
                href="https://www.ghostbill.com/privacy"
                className="text-indigo-400 hover:underline"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              📄{" "}
              <Link
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                className="text-indigo-400 hover:underline"
              >
                Terms of Use (Apple EULA)
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-12 text-left">
          <h2 className="text-3xl font-bold text-zinc-100 mb-6 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-zinc-800 rounded-xl shadow-md w-full hover:bg-zinc-700 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-4 flex justify-between items-start text-zinc-200"
                >
                  <span className="font-medium">{faq.question}</span>
                  <span className="text-indigo-400 ml-4 w-4 text-right">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-4 text-zinc-400">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
