"use client";

import { motion } from "framer-motion";
import {
  IndianRupee,
  Clock3,
  Headphones,
  Settings2,
  Users,
  Briefcase,
  Handshake,
} from "lucide-react";

const reasons = [
  {
    title: "Affordable Pricing",
    description:
      "Delivering high-quality solutions with cost-effective engagement models.",
    icon: IndianRupee,
  },
  {
    title: "Fast Project Delivery",
    description:
      "Efficient processes and agile execution ensure timely delivery.",
    icon: Clock3,
  },
  {
    title: "Dedicated Support",
    description:
      "Providing continuous assistance throughout your business journey.",
    icon: Headphones,
  },
  {
    title: "Customized Solutions",
    description:
      "Tailoring every solution to meet unique business requirements.",
    icon: Settings2,
  },
  {
    title: "Skilled Technical Team",
    description:
      "Experienced professionals committed to quality and innovation.",
    icon: Users,
  },
  {
    title: "Technology + Recruitment",
    description:
      "Offering both digital transformation and workforce solutions under one roof.",
    icon: Briefcase,
  },
  {
    title: "Long-Term Partnerships",
    description:
      "Building trusted relationships focused on sustainable growth.",
    icon: Handshake,
  },
];
export function WhyChooseUs() {
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
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            The Zenvora Advantage
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            We combine innovation, expertise, and commitment to deliver
            solutions that create measurable business impact.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
                  <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>

                <h3 className="text-lg font-semibold">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
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