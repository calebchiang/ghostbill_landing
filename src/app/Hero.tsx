"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 py-16 text-center bg-zinc-900 overflow-hidden">
      <div className="max-w-4xl relative z-10">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight text-zinc-100">
          Take Control of Your Spending
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-zinc-300">
          No more guessing. Begin your journey towards stress-free finance.
        </p>
      </div>

      {/* Indigo Glow (positioned behind screenshots) */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 transform">
        <div className="w-[500px] h-[300px] rounded-full bg-indigo-600/20 blur-3xl" />
      </div>

      <motion.div
        className="mt-12 flex justify-center -space-x-70 relative z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <Image
            src="/mockup_1.png"
            alt="GhostBill app screenshot 1"
            width={600}
            height={560}
            className="rounded-xl drop-shadow-2xl"
            priority
          />
        </motion.div>

        <motion.div variants={item}>
          <Image
            src="/mockup_3.png"
            alt="GhostBill app screenshot 2"
            width={600}
            height={560}
            className="rounded-xl drop-shadow-2xl"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
