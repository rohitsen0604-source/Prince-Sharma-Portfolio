import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function DigitalMarketingPage() {
  return (
    <>
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">

          <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2">
            <span className="text-sm font-medium text-emerald-500">
              Digital Marketing
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Accelerating Growth
            <br />
            Through Digital Marketing
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            We help businesses strengthen their online presence,
            engage audiences, and achieve measurable growth through
            data-driven digital marketing strategies.
          </p>

        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6">

          <div className="mx-auto max-w-4xl">

            <h2 className="text-3xl font-bold">
              Marketing Strategies Designed for Results
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground">

              <p>
                In an increasingly digital world, effective marketing
                requires more than visibility—it demands strategy,
                creativity, and continuous optimization. At Zenvora
                Technologies, we develop campaigns designed to help
                businesses attract, engage, and convert their ideal
                audiences.
              </p>

              <p>
                By combining market insights with data-driven decision
                making, we create customized strategies tailored to your
                goals and industry landscape. Our approach focuses on
                building sustainable growth through meaningful customer
                relationships and measurable outcomes.
              </p>

              <p>
                From search engine optimization to social media
                campaigns, our team works collaboratively with clients
                to maximize digital opportunities and strengthen their
                competitive advantage.
              </p>

            </div>

          </div>

        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6">

          <h2 className="text-center text-3xl font-bold">
            What We Offer
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2">

            {[
              "Search Engine Optimization (SEO)",
              "Social Media Marketing",
              "Pay-Per-Click Advertising",
              "Content Marketing",
              "Email Marketing Campaigns",
              "Performance Analytics & Reporting",
            ].map((service) => (
              <div
                key={service}
                className="rounded-3xl border bg-card p-8"
              >
                <h3 className="text-xl font-semibold">
                  {service}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6">

          <div className="rounded-3xl border bg-card px-8 py-16 text-center">

            <h2 className="text-3xl font-bold">
              Ready to Grow Your Business?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Let's build a digital marketing strategy that increases
              visibility, strengthens customer relationships, and drives
              measurable business growth.
            </p>

            <div className="mt-10">

              <Link href="/contact">

                <Button size="lg">
                  Start Your Campaign
                </Button>

              </Link>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}