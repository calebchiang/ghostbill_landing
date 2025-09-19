import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 py-16 text-center">
      <div className="max-w-4xl">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight">
          Take Control of Your Spending
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-zinc-600">
          No more guessing. Begin your journey towards stress-free finance.
        </p>
      </div>

      <div className="mt-12 flex justify-center space-x-0">
        <Image
          src="/mockup_1.png"
          alt="GhostBill app screenshot 1"
          width={500}
          height={560}
          className="rounded-xl drop-shadow-2xl"
          priority
        />
      </div>
    </section>
  );
}
