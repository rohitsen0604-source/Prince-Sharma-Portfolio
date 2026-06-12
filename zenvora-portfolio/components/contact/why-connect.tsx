"use client";

import { motion } from "framer-motion";
import {
  Clock3,
  Handshake,
  Headphones,
  Lightbulb,
} from "lucide-react";

const reasons = [
  {
    title: "Fast Response",
    description:
      "Our team ensures timely communication and prompt assistance.",
    icon: Clock3,
  },
  {
    title: "Long-Term Partnership",
    description:
      "We focus on building relationships based on trust and collaboration.",
    icon: Handshake,
  },
  {
    title: "Dedicated Support",
    description:
      "Receive guidance and support throughout your journey with us.",
    icon: Headphones,
  },
  {
    title: "Innovative Solutions",
    description:
      "We combine technology and creativity to solve real business challenges.",
    icon: Lightbulb,
  },
];

export function WhyConnect() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            Why Connect With Us
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            More Than a Service Provider
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            At Zenvora Technologies, we strive to become
            a trusted partner committed to your success.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-3xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10">
                  <Icon className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
                </div>

                <h3 className="text-2xl font-semibold">
                  {reason.title}
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {reason.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}