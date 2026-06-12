"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Leadership() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl rounded-3xl border bg-card p-10 shadow-sm md:p-16"
        >
          <div className="mb-8 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10">
              <Quote className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
            </div>
          </div>

          <div className="text-center">
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
              Leadership & Commitment
            </span>

            <h2 className="mt-6 text-4xl font-bold md:text-5xl">
              A Message from Our Leadership
            </h2>

            <blockquote className="mx-auto mt-10 max-w-4xl text-xl leading-9 text-muted-foreground md:text-2xl">
              "At Zenvora Technologies, we believe that technology should
              empower businesses to innovate, adapt, and thrive. Our
              commitment is to deliver affordable, scalable, and impactful
              solutions while building lasting relationships founded on trust,
              quality, and shared success."
            </blockquote>

            <div className="mt-12">
              <p className="text-xl font-semibold">
                Prince Sharma
              </p>

              <p className="mt-2 text-muted-foreground">
                Founder & Director
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}