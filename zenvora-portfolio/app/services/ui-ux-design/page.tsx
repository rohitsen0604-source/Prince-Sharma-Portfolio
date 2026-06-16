import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function UiUxDesignPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">

          <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2">

            <span className="text-sm font-medium text-emerald-500">
              UI/UX Design
            </span>

          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Designing Experiences
            <br />
            That Users Love
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            We craft intuitive and visually engaging digital experiences
            that delight users, strengthen brands, and drive meaningful
            business outcomes.
          </p>

        </div>
      </section>

      {/* Overview */}
      <section className="pb-24">
        <div className="container mx-auto px-6">

          <div className="mx-auto max-w-4xl">

            <h2 className="text-3xl font-bold">
              User-Centered Design That Creates Impact
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground">

              <p>
                Exceptional products are built on exceptional user
                experiences. In an increasingly competitive digital
                landscape, businesses must go beyond functionality and
                create interactions that are intuitive, engaging, and
                memorable. At Zenvora Technologies, our UI/UX design
                approach focuses on understanding user needs and aligning
                them with business objectives to create meaningful digital
                experiences.
              </p>

              <p>
                Our design process begins with research and discovery.
                We analyze user behavior, identify pain points, and
                uncover opportunities that can improve the overall
                experience. Through wireframing, prototyping, and
                iterative design practices, we ensure that every element
                contributes to usability, accessibility, and clarity.
              </p>

              <p>
                Great design is not just about aesthetics—it is about
                solving problems effectively. By combining visual
                excellence with strategic thinking, we create interfaces
                that simplify interactions, increase engagement, and
                encourage long-term user satisfaction. Whether you are
                launching a new product or refining an existing platform,
                our team delivers solutions tailored to your audience.
              </p>

              <p>
                From mobile applications and websites to enterprise
                platforms and SaaS products, we help businesses create
                experiences that strengthen trust, reinforce brand
                identity, and contribute to measurable success. Our
                mission is to design products that people genuinely
                enjoy using while supporting sustainable business growth.
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
              Comprehensive design services that combine creativity,
              strategy, and usability.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">

            {[
              "User Research & Analysis",
              "Wireframing & Prototyping",
              "Website & Mobile App Design",
              "Design Systems & Component Libraries",
              "Usability Testing & Optimization",
              "Product Experience Enhancement",
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
                "User-first design philosophy",
                "Research-driven decision making",
                "Modern and accessible interfaces",
                "Consistent cross-platform experiences",
                "Collaborative design process",
                "Focus on measurable outcomes",
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
              Ready to Elevate Your User Experience?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Let's work together to design intuitive, engaging, and
              impactful digital experiences that your users will love.
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