import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between bg-background">
      <div className="flex items-center space-x-3">
        <Image
          src="/logo.png"
          alt="GhostBill Logo"
          width={40}
          height={40}
          className="rounded-xl"
        />
        <span className="text-xl font-bold">GhostBill</span>
      </div>

      <div>
        <Link
          href="#"
          className="px-5 py-2 rounded-full bg-black text-white font-medium hover:opacity-90 transition"
        >
          Download
        </Link>
      </div>
    </nav>
  );
}
