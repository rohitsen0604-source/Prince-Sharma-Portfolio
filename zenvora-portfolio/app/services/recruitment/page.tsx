import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function RecruitmentPage() {
  return (
    <>
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">

          <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2">
            <span className="text-sm font-medium text-emerald-500">
              Recruitment Services
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Connecting Businesses
            <br />
            With Exceptional Talent
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            We help organizations identify, attract, and retain top talent
            through strategic recruitment solutions designed to support
            sustainable growth and long-term success.
          </p>

        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6">

          <div className="mx-auto max-w-4xl">

            <h2 className="text-3xl font-bold">
              Recruitment Solutions That Drive Success
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground">

              <p>
                Finding the right talent is one of the most important
                investments any organization can make. At Zenvora
                Technologies, we provide recruitment solutions designed
                to connect businesses with professionals who align with
                their culture, objectives, and long-term vision.
              </p>

              <p>
                Our recruitment process combines industry expertise,
                strategic sourcing, and thorough evaluation methods to
                identify candidates who possess the skills and mindset
                needed to thrive in today's competitive environment.
              </p>

              <p>
                Whether you are hiring for technical roles, leadership
                positions, or expanding your workforce to support growth,
                our team works closely with you to understand your unique
                requirements and deliver exceptional talent efficiently.
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
              "Permanent Staffing Solutions",
              "Technical Recruitment",
              "Leadership Hiring",
              "Candidate Screening & Assessment",
              "Workforce Planning",
              "Recruitment Consulting",
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
              Looking for the Right Talent?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Let us help you build a team that drives innovation,
              performance, and long-term business success.
            </p>

            <div className="mt-10">

              <Link href="/contact">

                <Button size="lg">
                  Get Started
                </Button>

              </Link>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}