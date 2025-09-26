import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between bg-zinc-900">
      <Link href="/" className="flex items-center space-x-3">
        <Image
          src="/logo.png"
          alt="GhostBill Logo"
          width={40}
          height={40}
          className="rounded-xl"
        />
        <span className="text-xl font-bold text-zinc-100">GhostBill</span>
      </Link>

      <div className="flex items-center space-x-4">
        <Link
          href="/support"
          className="hidden sm:inline-block text-zinc-100 font-medium hover:text-zinc-300 transition"
        >
          Support
        </Link>
        <a
          href="https://apps.apple.com/app/idYOUR_APPLE_ID"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-lg bg-zinc-100 text-zinc-900 font-medium hover:bg-zinc-200 transition"
        >
          Download
        </a>
      </div>
    </nav>
  );
}
