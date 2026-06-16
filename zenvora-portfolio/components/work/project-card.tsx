import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  logo: string;
  projectUrl: string;
};

export function ProjectCard({
  title,
  category,
  description,
  logo,
  projectUrl,
}: ProjectCardProps) {
  return (
    <div className="group flex h-full flex-col rounded-3xl border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Logo */}
      <Image
        src={logo}
        alt={`${title} logo`}
        width={50}
        height={50}
        className="object-contain"
      />

      {/* Category */}
      <p className="mt-6 text-sm font-medium text-primary">
        {category}
      </p>

      {/* Title */}
      <h3 className="mt-3 text-2xl font-bold transition-colors group-hover:text-primary">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 flex-grow leading-relaxed text-muted-foreground">
        {description}
      </p>

      {/* View Project Button */}
      {projectUrl !== "#" && (
        <div className="mt-8">

          <Link
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="group/button">

              View Live Site

              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1 group-hover/button:-translate-y-1" />

            </Button>

          </Link>

        </div>
      )}

    </div>
  );
}