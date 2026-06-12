"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Cpu,
  Users,
  Globe,
  Building2,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Briefcase,
} from "lucide-react";

const opportunities = [
  {
    title: "Growing Startup Ecosystem",
    icon: Rocket,
  },
  {
    title: "Rising Demand for Digital Services",
    icon: Globe,
  },
  {
    title: "Expansion of AI-Based Solutions",
    icon: Cpu,
  },
  {
    title: "Increasing Need for Skilled Workforce",
    icon: Users,
  },
];

const clients = [
  {
    title: "Startups",
    icon: Rocket,
  },
  {
    title: "SMEs",
    icon: Building2,
  },
  {
    title: "Educational Institutions",
    icon: GraduationCap,
  },
  {
    title: "Healthcare Businesses",
    icon: HeartPulse,
  },
  {
    title: "E-Commerce Companies",
    icon: ShoppingBag,
  },
  {
    title: "Enterprises",
    icon: Briefcase,
  },
];

export function MarketOpportunity() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            Market Opportunity
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Positioned for a Growing Digital Economy
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            The demand for technology solutions and workforce
            transformation continues to accelerate across industries.
          </p>
        </div>

        {/* Opportunities */}
        <div className="mt-16">
          <h3 className="mb-8 text-2xl font-semibold">
            Key Opportunities
          </h3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {opportunities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="rounded-2xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  <Icon className="mb-6 h-8 w-8 text-emerald-600 dark:text-emerald-400" />

                  <h4 className="text-lg font-semibold">
                    {item.title}
                  </h4>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Target Clients */}
        <div className="mt-24">
          <h3 className="mb-8 text-2xl font-semibold">
            Industries We Serve
          </h3>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
            {clients.map((client, index) => {
              const Icon = client.icon;

              return (
                <motion.div
                  key={client.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="rounded-2xl border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <Icon className="mx-auto mb-4 h-8 w-8 text-emerald-600 dark:text-emerald-400" />

                  <p className="text-sm font-medium">
                    {client.title}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}