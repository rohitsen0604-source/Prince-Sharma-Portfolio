import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function MobileAppDevelopmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">

          <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2">

            <span className="text-sm font-medium text-emerald-500">
              Mobile App Development
            </span>

          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Mobile Applications
            <br />
            Designed for Growth
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            We create intuitive, high-performing mobile applications
            that help businesses engage customers, streamline
            operations, and deliver exceptional digital experiences
            across iOS and Android platforms.
          </p>

        </div>
      </section>

      {/* Overview Section */}
      <section className="pb-24">
        <div className="container mx-auto px-6">

          <div className="mx-auto max-w-4xl">

            <h2 className="text-3xl font-bold">
              Mobile Experiences That Users Love
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground">

              <p>
                Mobile technology has transformed the way businesses
                connect with their audiences. Consumers increasingly
                expect fast, reliable, and intuitive experiences that
                fit seamlessly into their daily lives. At Zenvora
                Technologies, we develop mobile applications designed
                to meet these expectations while supporting long-term
                business objectives.
              </p>

              <p>
                Our team specializes in creating applications that
                combine functionality, performance, and exceptional
                user experiences. Whether you require a customer-facing
                mobile application, an internal business solution, or
                a platform designed to scale with a growing user base,
                we tailor every project to align with your goals and
                industry requirements.
              </p>

              <p>
                From strategy and user experience design to development,
                testing, and deployment, we guide clients through every
                stage of the mobile app journey. We prioritize security,
                scalability, and maintainability to ensure that your
                investment continues to deliver value as your business
                evolves.
              </p>

              <p>
                By leveraging modern frameworks and development best
                practices, we build mobile applications that perform
                consistently across devices and operating systems. Our
                mission is to help organizations deliver meaningful
                experiences that strengthen customer relationships,
                improve efficiency, and drive measurable growth.
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
              Comprehensive mobile app solutions designed to support
              innovation and business success.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">

            {[
              "iOS App Development",
              "Android App Development",
              "Cross-Platform Applications",
              "App UI/UX Design",
              "API & Backend Integration",
              "App Maintenance & Support",
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
                "User-focused mobile experiences",
                "Scalable and future-ready architecture",
                "Cross-platform development expertise",
                "Performance optimization across devices",
                "Transparent collaboration and communication",
                "Reliable post-launch support",
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
              Ready to Build Your Mobile App?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Let's transform your ideas into a powerful mobile
              application that delivers value to users and supports
              your business objectives.
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