"use client";

import { motion } from "framer-motion";
import { Rocket, Target, TrendingUp } from "lucide-react";

const highlights = [
  {
    title: "Growth",
    description:
      "Expanding our network of clients and delivering impactful technology solutions.",
    icon: TrendingUp,
  },
  {
    title: "Vision",
    description:
      "To become a trusted global technology partner for businesses of all sizes.",
    icon: Target,
  },
  {
    title: "Future Roadmap",
    description:
      "Launching AI-powered solutions, expanding recruitment operations, and strengthening strategic partnerships.",
    icon: Rocket,
  },
];

export function GrowthPreview() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            Growth & Vision
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Building the Future with Purpose
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Our focus extends beyond delivering projects—we aim to create
            long-term value through innovation, partnerships, and sustainable growth.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-3xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10">
                  <Icon className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
                </div>

                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}