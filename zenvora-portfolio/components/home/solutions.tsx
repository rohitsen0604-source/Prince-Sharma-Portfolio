"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Cog,
  Code2,
  Users,
  HeartHandshake,
  TrendingUp,
} from "lucide-react";

const solutions = [
  {
    title: "Build Strong Online Presence",
    description:
      "Develop modern websites and digital experiences that strengthen your brand.",
    icon: Globe,
  },
  {
    title: "Automate Operations",
    description:
      "Streamline business processes through smart software solutions.",
    icon: Cog,
  },
  {
    title: "Develop Scalable Products",
    description:
      "Create reliable applications designed to grow with your business.",
    icon: Code2,
  },
  {
    title: "Hire Qualified Professionals",
    description:
      "Connect with skilled talent through our recruitment services.",
    icon: Users,
  },
  {
    title: "Improve Customer Experience",
    description:
      "Deliver intuitive and engaging experiences across digital platforms.",
    icon: HeartHandshake,
  },
  {
    title: "Accelerate Business Growth",
    description:
      "Leverage technology and innovation to achieve long-term success.",
    icon: TrendingUp,
  },
];

export function Solutions() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            Our Solutions
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Helping Businesses Overcome Modern Challenges
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            We provide end-to-end technology solutions that empower
            organizations to innovate, adapt, and grow in an evolving
            digital landscape.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-2xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/10">
                  <Icon className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
                </div>

                <h3 className="text-xl font-semibold">
                  {solution.title}
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {solution.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}