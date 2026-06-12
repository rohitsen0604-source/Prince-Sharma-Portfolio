"use client";

import { motion } from "framer-motion";
import {
  Globe,
  DollarSign,
  Workflow,
  UserX,
  MessageSquareOff,
  Gauge,
} from "lucide-react";

const challenges = [
  {
    title: "Limited Digital Presence",
    description:
      "Many businesses struggle to establish a strong and impactful online identity.",
    icon: Globe,
  },
  {
    title: "High Development Costs",
    description:
      "Technology investments can often become expensive and difficult to manage.",
    icon: DollarSign,
  },
  {
    title: "Inefficient Processes",
    description:
      "Manual workflows and disconnected systems slow down business operations.",
    icon: Workflow,
  },
  {
    title: "Talent Acquisition Challenges",
    description:
      "Finding and retaining skilled professionals remains a major concern.",
    icon: UserX,
  },
  {
    title: "Poor Customer Engagement",
    description:
      "Businesses often struggle to create meaningful and consistent customer experiences.",
    icon: MessageSquareOff,
  },
  {
    title: "Slow Digital Transformation",
    description:
      "Adapting to evolving technologies can be challenging without the right partner.",
    icon: Gauge,
  },
];

export function Challenges() {
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
            Business Challenges
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Challenges Modern Businesses Face
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            We understand the barriers that limit growth and
            competitiveness in today's digital landscape.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;

            return (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-2xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10">
                  <Icon className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
                </div>

                <h3 className="text-xl font-semibold">
                  {challenge.title}
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {challenge.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}