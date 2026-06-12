"use client";

import { motion } from "framer-motion";
import { Rocket, Globe, Award } from "lucide-react";

const roadmap = [
  {
    year: "2026",
    title: "National Expansion",
    description: [
      "Expand client base across India",
      "Launch AI-powered business solutions",
      "Increase recruitment operations",
    ],
    icon: Rocket,
  },
  {
    year: "2027",
    title: "Global Growth",
    description: [
      "International client acquisition",
      "Dedicated product development division",
      "Strategic technology partnerships",
    ],
    icon: Globe,
  },
  {
    year: "2028",
    title: "Brand Leadership",
    description: [
      "Establish Zenvora as a recognized technology brand",
      "Strengthen market presence",
      "Drive long-term innovation initiatives",
    ],
    icon: Award,
  },
];

export function Roadmap() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            Future Roadmap
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Our Strategic Vision for Growth
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            We are committed to sustainable expansion,
            continuous innovation, and building lasting value
            for our clients and partners.
          </p>

        </div>

        <div className="mt-20 space-y-10">

          {roadmap.map((phase, index) => {
            const Icon = phase.icon;

            return (
              <motion.div
                key={phase.year}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-3xl border bg-card p-10 shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start">

                  <div className="flex items-center gap-4">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10">
                      <Icon className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                        {phase.year}
                      </p>

                      <h3 className="text-2xl font-bold">
                        {phase.title}
                      </h3>
                    </div>

                  </div>

                  <div className="md:ml-auto">
                    <ul className="space-y-3 text-muted-foreground">

                      {phase.description.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />

                          <span>{item}</span>
                        </li>
                      ))}

                    </ul>
                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}