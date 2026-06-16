import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function WebsiteDevelopmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">

          <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2">

            <span className="text-sm font-medium text-emerald-500">
              Website Development
            </span>

          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Transforming Ideas Into
            <br />
            Exceptional Digital Experiences
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            We build high-performing websites that combine stunning
            design, modern technology, and strategic thinking to help
            businesses strengthen their online presence and achieve
            measurable growth.
          </p>

        </div>
      </section>

      {/* Overview Section */}
      <section className="pb-24">
        <div className="container mx-auto px-6">

          <div className="mx-auto max-w-4xl">

            <h2 className="text-3xl font-bold">
              Professional Website Development Services
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground">

              <p>
                In today's competitive digital landscape, a website
                serves as much more than an online brochure. It is the
                foundation of your brand identity, a powerful marketing
                tool, and often the first interaction potential
                customers have with your business. At Zenvora
                Technologies, we specialize in developing websites that
                not only look exceptional but also deliver outstanding
                performance and measurable business outcomes.
              </p>

              <p>
                Our approach combines strategic planning, innovative
                design, and modern development practices to create
                websites that are responsive, scalable, and optimized
                for user engagement. Whether you require a corporate
                website, a service-based platform, a startup landing
                page, or a custom business solution, we tailor every
                project to align with your objectives and industry
                requirements.
              </p>

              <p>
                We focus on delivering intuitive user experiences,
                lightning-fast performance, and search-engine-friendly
                architecture that supports long-term growth. By
                leveraging the latest technologies and industry best
                practices, we ensure your website remains secure,
                adaptable, and prepared for future expansion.
              </p>

              <p>
                From concept to launch, our team works closely with you
                throughout every stage of the development journey,
                ensuring transparency, collaboration, and a final
                product that truly represents your vision. Our goal is
                simple: to help businesses establish a meaningful
                digital presence that inspires confidence and drives
                results.
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
              Comprehensive website solutions tailored to meet diverse
              business requirements.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">

            {[
              "Corporate Website Development",
              "Landing Pages & Marketing Websites",
              "Custom Web Applications",
              "Content Management Solutions",
              "Performance Optimization",
              "Website Maintenance & Support",
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
                "Client-focused development approach",
                "Scalable and future-ready solutions",
                "Responsive design across all devices",
                "Performance-driven architecture",
                "Transparent communication",
                "Ongoing support and maintenance",
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
              Ready to Build Your Next Website?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Let's collaborate to create a website that reflects your
              brand, engages your audience, and accelerates your
              business growth.
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