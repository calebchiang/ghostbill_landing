import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 bg-background px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8">
        {/* Left section: Logo + Text */}
        <div className="flex items-center sm:items-start space-x-3 text-center sm:text-left">
          <Image
            src="/logo.png"
            alt="GhostBill Logo"
            width={40}
            height={40}
            className="rounded-xl"
          />
          <div>
            <h2 className="font-bold text-lg">GhostBill</h2>
            <p className="text-sm text-zinc-600 max-w-sm">
              Take control of your spending, manage subscriptions, and never miss a bill.
            </p>
            <p className="text-xs text-zinc-500 mt-2">
              © {new Date().getFullYear()} GhostBill.
            </p>
          </div>
        </div>

        {/* Right section: Social Links + Legal */}
        <div className="text-center sm:text-right">
          <p className="font-medium text-sm mb-2">Social Links:</p>
          <div className="flex justify-center sm:justify-end space-x-3 mb-3">
            <Link
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200 transition"
            >
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 text-zinc-600"
              >
                <path d="M22 4s-.8 2.3-2 3.4c1.6 9-9.5 15.3-17 9 .6 0 2.1-.3 3-1C3 14.6 1.8 9.8 4 7c1.4-2 5.3-2.6 8-.5 1.2-2.1 5.4-3.4 8 0 .9-.2 2-.5 2-.5z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200 transition"
            >
              <span className="sr-only">GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 text-zinc-600"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.5 2 2 6.6 2 12.3c0 4.5 2.9 8.4 6.9 9.8.5.1.6-.2.6-.4v-1.6c-2.8.6-3.4-1.4-3.4-1.4-.4-1-1-1.2-1-1.2-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.5 1 3.1.8.1-.7.4-1 .7-1.2-2.2-.3-4.5-1.1-4.5-5a4 4 0 0 1 1-2.8c-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9 9 0 0 1 4.9 0c2-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6a4 4 0 0 1 1 2.8c0 3.9-2.3 4.7-4.5 5 .4.3.8.9.8 1.9v2.8c0 .2.1.5.6.4 4-1.4 6.9-5.3 6.9-9.8C22 6.6 17.5 2 12 2Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          {/* Privacy & Terms */}
          <div className="flex justify-center sm:justify-end space-x-4 text-sm">
            <Link
              href="/privacy"
              className="text-zinc-600 hover:text-zinc-900 transition"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-zinc-600 hover:text-zinc-900 transition"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
