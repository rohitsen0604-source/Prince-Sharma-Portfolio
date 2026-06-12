"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  User,
  Briefcase,
} from "lucide-react";

const contacts = [
  {
    title: "Founder & Director",
    value: "Prince Sharma",
    icon: User,
  },
  {
    title: "Designation",
    value: "Founder & Director",
    icon: Briefcase,
  },
  {
    title: "Phone",
    value: "+91 9755125038",
    icon: Phone,
  },
  {
    title: "Email",
    value: "ps2855074@gmail.com",
    icon: Mail,
  },
];

export function ContactInfo() {
  return (
    <section className="pb-24">
      <div className="container mx-auto px-6">

        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-4xl font-bold">
            Get in Touch
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            We'd love to hear about your ideas,
            business challenges, and opportunities
            for collaboration.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {contacts.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-3xl border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10">
                  <Icon className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
                </div>

                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-muted-foreground break-words">
                  {item.value}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}