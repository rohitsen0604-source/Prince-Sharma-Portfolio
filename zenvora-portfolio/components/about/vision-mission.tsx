"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

const values = [
  {
    title: "Our Vision",
    description:
      "To become a trusted global technology partner for businesses of all sizes.",
    icon: Eye,
  },
  {
    title: "Our Mission",
    description:
      "To deliver innovative, affordable, and scalable digital solutions while creating employment and growth opportunities.",
    icon: Target,
  },
];

export function VisionMission() {
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
            Vision & Mission
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            The Principles That Guide Us
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Our vision shapes where we aspire to be, while our mission
            defines how we create meaningful impact every day.
          </p>

        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-3xl border bg-card p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10">
                  <Icon className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                </div>

                <h3 className="text-3xl font-bold">
                  {value.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  {value.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}