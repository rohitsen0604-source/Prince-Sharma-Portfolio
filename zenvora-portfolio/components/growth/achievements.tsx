"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Network,
  Handshake,
  Users,
  Trophy,
} from "lucide-react";

const achievements = [
  {
    title: "Successful Project Deliveries",
    description:
      "Delivering technology solutions aligned with client objectives.",
    icon: CheckCircle2,
  },
  {
    title: "Growing Professional Network",
    description:
      "Expanding our ecosystem of developers, designers, and specialists.",
    icon: Network,
  },
  {
    title: "Industry Collaborations",
    description:
      "Building strategic relationships that drive mutual growth.",
    icon: Handshake,
  },
  {
    title: "Expansion into Workforce Solutions",
    description:
      "Strengthening recruitment and staffing capabilities.",
    icon: Users,
  },
  {
    title: "Commitment to Client Success",
    description:
      "Focusing on quality, reliability, and long-term partnerships.",
    icon: Trophy,
  },
];

export function Achievements() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            Growth & Achievements
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Progress Through Purpose
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Our journey has been defined by continuous learning,
            meaningful partnerships, and a commitment to delivering value.
          </p>

        </div>

        <div className="mt-16 space-y-6">

          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="flex flex-col gap-6 rounded-3xl border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg md:flex-row md:items-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10">
                  <Icon className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}