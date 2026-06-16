import { projects } from "@/data/projects";

import { ProjectCard } from "./project-card";

export function ProjectsGrid() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              description={project.description}
              logo={project.logo}
    
              projectUrl={project.projectUrl}
            />
          ))}

        </div>

      </div>
    </section>
  );
}