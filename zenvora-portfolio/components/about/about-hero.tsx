"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="py-28">
      <div className="container mx-auto px-6 text-center">

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400"
        >
          About Zenvora
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-6 text-5xl font-bold tracking-tight md:text-6xl"
        >
          Empowering Businesses Through
          Technology & Innovation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground"
        >
          Zenvora Technologies delivers innovative digital
          solutions that help organizations adapt, grow,
          and succeed in an increasingly connected world.
        </motion.p>

      </div>
    </section>
  );
}