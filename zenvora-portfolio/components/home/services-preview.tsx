"use client";

import { motion } from "framer-motion";
import { Code2, Users, Megaphone } from "lucide-react";

const services = [
  {
    title: "Technology Services",
    description:
      "Building scalable digital solutions that drive innovation and operational excellence.",
    icon: Code2,
    items: [
      "Website Development",
      "E-Commerce Development",
      "Software Development",
      "Mobile Applications",
      "UI/UX Design",
    ],
  },
  {
    title: "Business Services",
    description:
      "Helping organizations strengthen their workforce and optimize HR processes.",
    icon: Users,
    items: [
      "Recruitment Solutions",
      "Internship Programs",
      "HR Consulting",
    ],
  },
  {
    title: "Marketing Services",
    description:
      "Creating impactful marketing strategies that enhance brand visibility and growth.",
    icon: Megaphone,
    items: [
      "SEO",
      "Social Media Marketing",
      "Performance Marketing",
      "Branding Solutions",
    ],
  },
];

export function ServicesPreview() {
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
            Our Services
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Comprehensive Solutions for Modern Businesses
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            We combine technology expertise, workforce solutions,
            and strategic marketing to help businesses thrive.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
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
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {service.description}
                </p>

                <ul className="mt-8 space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />

                      <span className="text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}