"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Code2,
  Users,
  Megaphone,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

const revenueStreams = [
  {
    title: "Website Development",
    description:
      "Delivering modern websites tailored to business objectives.",
    icon: Globe,
  },
  {
    title: "Mobile Applications",
    description:
      "Building scalable mobile experiences for diverse audiences.",
    icon: Smartphone,
  },
  {
    title: "Software Development",
    description:
      "Creating custom software solutions that drive efficiency.",
    icon: Code2,
  },
  {
    title: "Recruitment Services",
    description:
      "Connecting organizations with qualified professionals.",
    icon: Users,
  },
  {
    title: "Digital Marketing",
    description:
      "Enhancing visibility and accelerating business growth.",
    icon: Megaphone,
  },
  {
    title: "Internship Programs",
    description:
      "Bridging academic learning with industry experience.",
    icon: GraduationCap,
  },
  {
    title: "Annual Maintenance",
    description:
      "Providing long-term support and technology maintenance.",
    icon: ShieldCheck,
  },
];

export function BusinessModel() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            Business Model
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Building Sustainable Value
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Our diversified business model enables Zenvora
            Technologies to create lasting value for clients,
            partners, and stakeholders.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {revenueStreams.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="rounded-3xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
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