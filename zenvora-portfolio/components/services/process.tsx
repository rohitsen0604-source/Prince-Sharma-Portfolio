"use client";

import { motion } from "framer-motion";
import {
  Search,
  Lightbulb,
  Hammer,
  TrendingUp,
  Headphones,
} from "lucide-react";

const processSteps = [
  {
    title: "Discover",
    description:
      "Understanding your goals, challenges, and business requirements.",
    icon: Search,
  },
  {
    title: "Strategize",
    description:
      "Designing a tailored roadmap aligned with your objectives.",
    icon: Lightbulb,
  },
  {
    title: "Build",
    description:
      "Developing scalable solutions using industry best practices.",
    icon: Hammer,
  },
  {
    title: "Optimize",
    description:
      "Continuously improving performance and user experience.",
    icon: TrendingUp,
  },
  {
    title: "Support",
    description:
      "Providing dedicated assistance and long-term partnership.",
    icon: Headphones,
  },
];

export function Process() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            Our Process
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            How We Deliver Success
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            A structured approach that ensures quality,
            efficiency, and measurable outcomes.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-5">

          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="relative text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10">
                  <Icon className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                </div>

                <div className="mt-6 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  Step {index + 1}
                </div>

                <h3 className="mt-2 text-2xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-4 text-muted-foreground">
                  {step.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}