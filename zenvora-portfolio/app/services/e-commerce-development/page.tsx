import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function EcommerceDevelopmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">

          <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2">

            <span className="text-sm font-medium text-emerald-500">
              E-Commerce Development
            </span>

          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            E-Commerce Solutions
            <br />
            Built to Drive Growth
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            We develop powerful e-commerce platforms that deliver
            exceptional shopping experiences, streamline operations,
            and help businesses scale confidently in the digital
            marketplace.
          </p>

        </div>
      </section>

      {/* Overview */}
      <section className="pb-24">
        <div className="container mx-auto px-6">

          <div className="mx-auto max-w-4xl">

            <h2 className="text-3xl font-bold">
              E-Commerce Experiences Designed for Success
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground">

              <p>
                The e-commerce landscape continues to evolve rapidly,
                creating new opportunities for businesses to expand
                their reach and strengthen customer relationships.
                At Zenvora Technologies, we build scalable e-commerce
                solutions designed to deliver seamless experiences
                across every stage of the customer journey.
              </p>

              <p>
                Whether you are launching a new online store or
                enhancing an existing platform, our team focuses on
                creating intuitive, secure, and performance-driven
                solutions tailored to your unique business goals.
                From product discovery to checkout optimization, every
                aspect of the shopping experience is carefully designed
                to maximize engagement and conversions.
              </p>

              <p>
                We understand that successful e-commerce platforms
                require more than attractive interfaces. They demand
                efficient inventory management, secure payment
                processing, reliable integrations, and the flexibility
                to adapt as customer expectations change. Our solutions
                are built with scalability in mind, ensuring your
                business can grow without technological limitations.
              </p>

              <p>
                Through strategic planning, user-centered design, and
                modern development practices, we help organizations
                establish a competitive advantage in the digital
                marketplace while creating experiences that inspire
                trust and customer loyalty.
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
              Comprehensive e-commerce solutions designed to support
              sustainable business growth.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">

            {[
              "Custom E-Commerce Store Development",
              "Multi-Vendor Marketplace Solutions",
              "Payment Gateway Integration",
              "Inventory & Order Management",
              "Shipping & Logistics Integration",
              "E-Commerce Maintenance & Support",
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
                "Customer-centric shopping experiences",
                "Scalable architecture for future growth",
                "Secure and reliable payment integrations",
                "Optimized performance and conversions",
                "Transparent communication throughout the project",
                "Dedicated post-launch support",
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
              Ready to Launch Your Online Store?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Let's create an e-commerce experience that strengthens
              your brand, delights customers, and accelerates business
              growth.
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