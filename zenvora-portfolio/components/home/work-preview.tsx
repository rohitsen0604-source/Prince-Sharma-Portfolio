import Link from "next/link";

import { Button } from "@/components/ui/button";

export function WorkPreview() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="rounded-3xl border bg-card px-8 py-20 text-center shadow-sm transition-all hover:shadow-lg">

          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1">
            <span className="text-sm font-semibold uppercase tracking-wider text-emerald-500">
              Our Work
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Crafting Digital Experiences
            <br />
            That Drive Results
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            From corporate websites to scalable business platforms,
            every project reflects our commitment to innovation,
            quality, and measurable impact.
          </p>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap justify-center gap-10">

            <div>
              <h3 className="text-3xl font-bold">
                10+
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Projects Delivered
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">
                100%
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Client Focused
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">
                24/7
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Support
              </p>
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-14 flex flex-col justify-center gap-4 sm:flex-row">

            <Link href="/work">
              <Button size="lg">
                Explore Projects
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
              >
                Start a Project
              </Button>
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}