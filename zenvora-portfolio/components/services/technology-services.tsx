"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  Code2,
  Smartphone,
  PenTool,
  Brain,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Website Development",
    description:
      "Modern, responsive websites designed to strengthen your digital presence.",
    icon: Globe,
    href: "/services/website-development",
  },
  {
    title: "E-Commerce Development",
    description:
      "Scalable online stores that deliver seamless shopping experiences.",
    icon: ShoppingCart,
    href: "/services/e-commerce-development",
  },
  {
    title: "Custom Software Solutions",
    description:
      "Tailored software built to address unique business requirements.",
    icon: Code2,
    href: "/services/custom-software-solutions",
  },
  {
    title: "Mobile App Development",
    description:
      "High-performing applications for Android and iOS platforms.",
    icon: Smartphone,
    href: "/services/mobile-app-development",
  },
  {
    title: "UI/UX Design",
    description:
      "User-centric experiences that combine aesthetics with usability.",
    icon: PenTool,
    href: "/services/ui-ux-design",
  },
  {
    title: "AI Solutions",
    description:
      "Intelligent systems that enhance efficiency and decision-making.",
    icon: Brain,
    href: "/services/ai-solutions",
  },
];

export function TechnologyServices() {
  return (
    <section className="pb-24">
      <div className="container mx-auto px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            Technology Services
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            Building Digital Experiences
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            We design and develop innovative technology solutions
            that empower businesses to adapt and thrive.
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
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10">
                  <Icon className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-7 text-muted-foreground">
                  {service.description}
                </p>

                {/* Learn More */}
                <Link
                  href={service.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                >
                  Learn More

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}