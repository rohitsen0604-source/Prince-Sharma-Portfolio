"use client";

import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  BriefcaseBusiness,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Recruitment Solutions",
    description:
      "Connecting organizations with qualified professionals to build exceptional teams.",
    icon: Users,
  },
  {
    title: "Internship Programs",
    description:
      "Bridging the gap between academia and industry through practical learning opportunities.",
    icon: GraduationCap,
  },
  {
    title: "HR Consulting",
    description:
      "Providing strategic HR guidance to improve workforce effectiveness.",
    icon: BriefcaseBusiness,
  },
];

export function BusinessServices() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            Business Services
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            Empowering People & Organizations
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            We support businesses through workforce solutions
            that foster growth and operational excellence.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-3xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10">
                  <Icon className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
                </div>

                <h3 className="text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {service.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  Learn More

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}