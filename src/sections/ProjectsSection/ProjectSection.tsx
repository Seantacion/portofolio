// sections/ProjectsSection/index.tsx

import FadeAnimation from "@/components/Custom/FadeAnimation/FadeAnimation";
import { PROJECTS } from "@/constants/projects";
import ProjectCard from "./ProjectCard";

interface ProjectsSectionProps {
  isDesktop: boolean;
}

export default function ProjectsSection({ isDesktop }: ProjectsSectionProps) {
  // Separate mobile and web projects
  const mobileProjects = PROJECTS.filter((project) => project.layout === "mobile");
  const webProjects = PROJECTS.filter((project) => project.layout === "web");

  return (
    <div className="flex w-full" id="projects">
      <div className="container mx-auto">
        {/* Title */}
        <div className="flex items-center gap-3 text-lg text-center text-medium p-4">
          <span className="inline-block animate-spin-slow text-4xl text-gray-400">✦</span>
          SELECTED PROJECTS
        </div>

        <FadeAnimation>
          {/* Mobile Projects Grid */}
          <div className="grid grid-cols gap-4 xl:grid-cols-2 px-4">
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isDesktop={isDesktop}
              />
            ))}
          </div>
        </FadeAnimation>
      </div>
    </div>
  );
}