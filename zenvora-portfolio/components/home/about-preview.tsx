"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function AboutPreview() {

  const expertise = [
    {
      title: "Web Development",
      description:
        "Crafting responsive and high-performing websites that strengthen your digital presence.",
    },
    {
      title: "Mobile App Development",
      description:
        "Building intuitive mobile applications that deliver seamless user experiences.",
    },
    {
      title: "AI Solutions",
      description:
        "Leveraging artificial intelligence to automate workflows and enable smarter decisions.",
    },
    {
      title: "Recruitment Services",
      description:
        "Connecting organizations with skilled professionals to build high-performing teams.",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-4 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
              About Zenvora
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Building Growth Through Technology
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Zenvora Technologies is a rapidly growing IT solutions company
              focused on delivering innovative digital solutions to startups,
              small businesses, and enterprises.
            </p>

            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              From software development and AI solutions to recruitment and
              digital marketing services, we empower organizations to embrace
              technology and accelerate business growth.
            </p>

            <div className="mt-10">
              <Link href="/about">
                <Button className="gap-2">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {expertise.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}