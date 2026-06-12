"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Users,
  Brain,
  Megaphone,
  Map,
  TrendingUp,
} from "lucide-react";

const initiatives = [
  {
    title: "Expand Operations",
    icon: Building2,
  },
  {
    title: "Increase Team Strength",
    icon: Users,
  },
  {
    title: "Develop AI Products",
    icon: Brain,
  },
  {
    title: "Enhance Marketing Efforts",
    icon: Megaphone,
  },
  {
    title: "Scale Nationwide Operations",
    icon: Map,
  },
];

const outcomes = [
  "Faster organizational growth",
  "Higher revenue generation",
  "Stronger market presence",
];

export function Investment() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            Strategic Partnerships
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Collaborating for Sustainable Growth
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Zenvora Technologies welcomes opportunities to build
            meaningful partnerships that accelerate innovation,
            expand capabilities, and create long-term value.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* Focus Areas */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border bg-card p-10 shadow-sm"
          >
            <h3 className="mb-8 text-2xl font-bold">
              Partnership Focus Areas
            </h3>

            <div className="space-y-6">
              {initiatives.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
                      <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    </div>

                    <span className="font-medium">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Outcomes */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border bg-card p-10 shadow-sm"
          >
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10">
              <TrendingUp className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
            </div>

            <h3 className="text-2xl font-bold">
              Expected Outcomes
            </h3>

            <ul className="mt-8 space-y-6">
              {outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-start gap-4"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />

                  <span className="text-muted-foreground">
                    {outcome}
                  </span>
                </li>
              ))}
            </ul>

          </motion.div>

        </div>

      </div>
    </section>
  );
}