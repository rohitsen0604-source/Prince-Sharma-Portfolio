import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function AiSolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">

          <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2">

            <span className="text-sm font-medium text-emerald-500">
              AI Solutions
            </span>

          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Intelligent Solutions
            <br />
            Built for the Future
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            We leverage the power of artificial intelligence to help
            businesses automate processes, uncover valuable insights,
            and create innovative experiences that drive efficiency and
            sustainable growth.
          </p>

        </div>
      </section>

      {/* Overview */}
      <section className="pb-24">
        <div className="container mx-auto px-6">

          <div className="mx-auto max-w-4xl">

            <h2 className="text-3xl font-bold">
              Transforming Businesses Through AI
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground">

              <p>
                Artificial intelligence is reshaping industries by
                enabling organizations to work smarter, make informed
                decisions, and deliver enhanced customer experiences.
                At Zenvora Technologies, we develop AI-driven solutions
                that empower businesses to unlock new opportunities and
                gain a competitive advantage in an increasingly digital
                world.
              </p>

              <p>
                Our approach focuses on identifying practical use cases
                where AI can create measurable business value. From
                automating repetitive tasks to improving operational
                efficiency and enhancing customer interactions, we help
                organizations integrate intelligent technologies into
                their existing workflows seamlessly.
              </p>

              <p>
                We understand that every business has unique objectives
                and challenges. That's why our AI solutions are tailored
                to align with your goals, ensuring scalability,
                reliability, and long-term impact. Whether you are
                exploring AI for the first time or looking to expand
                existing initiatives, our team provides strategic
                guidance and technical expertise throughout the journey.
              </p>

              <p>
                By combining innovation with a deep understanding of
                business requirements, we build solutions that improve
                productivity, enhance decision-making, and support
                sustainable growth. Our mission is to make artificial
                intelligence accessible, practical, and transformative
                for organizations of all sizes.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* What We Offer */}
      <section className="pb-24">
        <div className="container mx-auto px-6">

          <div className="text-center">

            <h2 className="text-3xl font-bold">
              What We Offer
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Innovative AI solutions designed to optimize operations
              and unlock new possibilities for growth.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">

            {[
              "AI-Powered Chatbots & Virtual Assistants",
              "Business Process Automation",
              "Predictive Analytics Solutions",
              "Recommendation Systems",
              "Custom AI Integrations",
              "AI Strategy & Consulting",
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

      {/* Why Choose Us */}
      <section className="pb-24">
        <div className="container mx-auto px-6">

          <div className="rounded-3xl border bg-card p-12">

            <h2 className="text-3xl font-bold">
              Why Choose Zenvora?
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-2">

              {[
                "Business-focused AI implementation",
                "Scalable and future-ready solutions",
                "Practical applications with measurable impact",
                "Secure and responsible AI practices",
                "Collaborative development approach",
                "Continuous optimization and support",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border p-6"
                >
                  <p className="font-medium">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24">
        <div className="container mx-auto px-6">

          <div className="rounded-3xl border bg-card px-8 py-16 text-center">

            <h2 className="text-3xl font-bold">
              Ready to Explore AI Opportunities?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Let's discover how artificial intelligence can help your
              business innovate faster, operate more efficiently, and
              create meaningful value for your customers.
            </p>

            <div className="mt-10">

              <Link href="/contact">

                <Button size="lg">
                  Start Your Project
                </Button>

              </Link>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}