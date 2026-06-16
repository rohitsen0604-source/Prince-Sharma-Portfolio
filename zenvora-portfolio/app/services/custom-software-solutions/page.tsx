import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function CustomSoftwareSolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">

          <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2">

            <span className="text-sm font-medium text-emerald-500">
              Custom Software Solutions
            </span>

          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Software Built Around
            <br />
            Your Business Needs
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            We develop tailored software solutions that streamline
            operations, improve efficiency, and empower businesses to
            solve complex challenges through technology.
          </p>

        </div>
      </section>

      {/* Overview */}
      <section className="pb-24">
        <div className="container mx-auto px-6">

          <div className="mx-auto max-w-4xl">

            <h2 className="text-3xl font-bold">
              Custom Software Designed for Growth
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground">

              <p>
                Every business operates differently, which means
                off-the-shelf software often falls short when it comes
                to addressing unique operational requirements. At
                Zenvora Technologies, we specialize in building custom
                software solutions tailored to the specific goals,
                processes, and challenges of each organization we work
                with.
              </p>

              <p>
                Our approach begins with understanding your business
                objectives and identifying opportunities where
                technology can deliver measurable value. Whether you
                require internal management systems, workflow
                automation tools, enterprise applications, or customer-
                facing platforms, we design solutions that align
                perfectly with your operational needs.
              </p>

              <p>
                We focus on creating scalable, secure, and future-ready
                applications capable of evolving alongside your
                organization. By leveraging modern development
                practices and robust architectures, we ensure that your
                software remains adaptable as your business grows and
                market demands shift.
              </p>

              <p>
                From concept and planning to deployment and ongoing
                support, our team collaborates closely with you at
                every stage of the development process. The result is
                software that enhances productivity, reduces
                inefficiencies, and provides a competitive advantage in
                an increasingly digital world.
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
              End-to-end software development services designed to
              address your unique business requirements.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">

            {[
              "Business Process Automation",
              "CRM & ERP Development",
              "Enterprise Software Solutions",
              "Workflow Management Systems",
              "API Development & Integrations",
              "Legacy Software Modernization",
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
                "Solutions tailored to your exact requirements",
                "Scalable architecture designed for growth",
                "Secure and reliable development practices",
                "Seamless integration with existing systems",
                "Transparent communication throughout the project",
                "Long-term maintenance and technical support",
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

      {/* CTA */}
      <section className="pb-24">
        <div className="container mx-auto px-6">

          <div className="rounded-3xl border bg-card px-8 py-16 text-center">

            <h2 className="text-3xl font-bold">
              Ready to Build a Custom Solution?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Let's develop software that simplifies processes,
              improves efficiency, and supports your business goals
              with confidence.
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