"use client";

import { motion } from "framer-motion";

export function GrowthHero() {
  return (
    <section className="py-28">
      <div className="container mx-auto px-6 text-center">

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400"
        >
          Growth & Future
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-6 text-5xl font-bold tracking-tight md:text-6xl"
        >
          Building Tomorrow Through
          Innovation & Excellence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground"
        >
          At Zenvora Technologies, growth is driven by innovation,
          strategic partnerships, and a commitment to delivering
          transformative solutions that create lasting value.
        </motion.p>

      </div>
    </section>
  );
}