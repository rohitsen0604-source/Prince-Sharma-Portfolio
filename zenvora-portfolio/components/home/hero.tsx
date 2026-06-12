"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Blur Effects */}
      {/* Background Blur Effects */}
<div className="absolute inset-0 -z-10 overflow-hidden">
  <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
  <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
</div>

      <div className="container mx-auto flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 rounded-full border px-4 py-1 text-sm font-medium"
        >
          Your Strategic Partner for Technology and Workforce Solutions.
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl text-5xl font-extrabold tracking-tight md:text-7xl"
        >
          Empowering Businesses Through{" "}
          <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
            Technology & Innovation
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl"
        >
          Delivering innovative digital solutions, recruitment
          services, and AI-driven transformation for startups,
          SMEs, and enterprises.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link href="/services">
            <Button size="lg" className="gap-2">
              Explore Services
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>

          <Link href="/contact">
            <Button variant="outline" size="lg">
              Book a Consultation
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {[
            "Web Development",
            "Mobile Apps",
            "AI Solutions",
            "Recruitment",
          ].map((service) => (
            <div
              key={service}
              className="rounded-xl border bg-background/50 px-6 py-4 backdrop-blur"
            >
              <p className="font-medium">{service}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}