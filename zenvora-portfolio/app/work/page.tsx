import { ProjectsGrid } from "@/components/work/projects-grid";

export default function WorkPage() {
  return (
    <>
      <section className="py-24 text-center">
        <div className="container mx-auto px-6">

          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2">

            <span className="text-base font-medium text-emerald-500">
              Our Work
            </span>

          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Projects That Define Excellence
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Explore a collection of projects showcasing innovation,
            technical expertise, and a commitment to delivering
            impactful digital experiences across diverse industries.
          </p>

        </div>
      </section>

      {/* Projects Grid */}
      <ProjectsGrid />
    </>
  );
}