"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border bg-card px-8 py-16 text-center shadow-sm md:px-16"
        >
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            Ready to Collaborate?
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Let's Build Something Meaningful Together
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Whether you're seeking innovative technology solutions,
            recruitment expertise, or strategic partnerships,
            Zenvora Technologies is here to support your journey.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

  <a href="tel:+919755125038">
    <Button size="lg">
      Call Us
    </Button>
  </a>

  <a
    href="https://wa.me/919755125038"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="outline" size="lg">
      Chat on WhatsApp
    </Button>
  </a>

</div>


        </motion.div>

      </div>
    </section>
  );
}