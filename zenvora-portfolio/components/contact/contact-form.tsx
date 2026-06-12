"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  category: string;
  message: string;
};

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    setSubmitted(true);
    reset();

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  } catch (error) {
    alert(
      "Something went wrong. Please try again."
    );
  }
};
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">

        <div className="mx-auto max-w-4xl rounded-3xl border bg-card p-10 shadow-sm">

          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold">
              Send Us a Message
            </h2>

            <p className="mt-4 text-muted-foreground">
              Tell us how we can help and our team will get back to you.
            </p>
          </div>

          {submitted && (
            <div className="mb-8 rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-green-700 dark:text-green-400">
              Thank you! Your message has been submitted successfully.
            </div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <Input
                  placeholder="Full Name *"
                  {...register("name", {
                    required: "Name is required",
                  })}
                />

                {errors.name && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <Input
                  placeholder="Email Address *"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                />

                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              <Input
                placeholder="Phone Number"
                {...register("phone")}
              />

              <Input
                placeholder="Company Name"
                {...register("company")}
              />

            </div>

            <select
              {...register("category", {
                required: "Please select a category",
              })}
              className="w-full rounded-md border bg-background px-3 py-2"
            >
              <option value="">
                Select Inquiry Category *
              </option>

              <option>
                Technology Solutions
              </option>

              <option>
                Recruitment Services
              </option>

              <option>
                Digital Marketing
              </option>

              <option>
                Partnership Opportunities
              </option>

              <option>
                General Inquiry
              </option>
            </select>

            {errors.category && (
              <p className="text-sm text-red-500">
                {errors.category.message}
              </p>
            )}

            <div>
              <Textarea
                placeholder="Your Message *"
                rows={6}
                {...register("message", {
                  required: "Message is required",
                })}
              />

              {errors.message && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting
                ? "Sending..."
                : "Send Message"}
            </Button>

          </form>

        </div>

      </div>
    </section>
  );
}