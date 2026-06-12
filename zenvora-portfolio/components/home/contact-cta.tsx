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
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border bg-card px-8 py-16 text-center shadow-sm md:px-16"
        >
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            Let's Connect
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Let's Build The Future Together
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Whether you're looking for technology solutions,
            recruitment support, or strategic partnerships,
            Zenvora Technologies is ready to help you achieve
            your business goals.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button size="lg" className="gap-2">
                Get In Touch
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>

            <Link href="/services">
              <Button variant="outline" size="lg">
                Explore Services
              </Button>
            </Link>
          </div>

          <div className="mt-12 border-t pt-8">
            <p className="font-medium">
              Prince Sharma
            </p>

            <p className="mt-2 text-muted-foreground">
              Founder & Director
            </p>

            <div className="mt-4 flex flex-col items-center gap-2 text-sm text-muted-foreground md:flex-row md:justify-center md:gap-8">
              <span>📞 +91 9755125038</span>
              <span>✉️ ps2855074@gmail.com</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}