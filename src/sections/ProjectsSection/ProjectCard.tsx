// components/ProjectCard/index.tsx

import { BiSolidRightArrowAlt } from "react-icons/bi";
import type { Project } from "@/types/project.types";
import SpotlightCard from "@/components/Shared/SpotlightCard/SpotlightCard";
import Stack from "@/components/Shared/Stack/Stack";

interface ProjectCardProps {
  project: Project;
  isDesktop: boolean;
}

export default function ProjectCard({ project, isDesktop }: ProjectCardProps) {
  const { title, description, images, technologies, status, link, layout } = project;

  // Render status text based on type
  const renderStatus = () => {
    switch (status.type) {
      case "released":
        return (
          <div className="col-span-4 flex-row text-md italic font-medium">
            Released On <span className="not-italic font-semibold">({status.date})</span>
          </div>
        );
      case "completed":
        return (
          <div className="col-span-4 flex-row text-md italic font-medium">
            Completed on <span className="not-italic font-semibold">({status.date})</span>
          </div>
        );
      case "contributed":
        return (
          <div className="col-span-2 md:col-span-4 flex-row text-md italic font-medium">
            Contributed until <span className="not-italic font-semibold">({status.date})</span>
          </div>
        );
      case "finished":
        return (
          <div className="col-span-2 flex-row text-md italic font-medium">
            Finished on <span className="not-italic font-semibold">({status.date})</span>
          </div>
        );
      case "in-progress":
        return (
          <div className="col-span-4 flex-row text-md italic font-bold">
            Still On Progress
          </div>
        );
    }
  };

  // Layout configuration based on project type
  const isWeb = layout === "web";
  const containerClass = isWeb ? "flex-col md:flex-row flex-col-reverse" : "flex-col md:flex-row";
  const gridCols = isWeb ? "grid-cols-2" : "grid-cols-4";
  const techColSpan = isWeb ? "" : "col-span-2";

  return (
    <SpotlightCard className="mx-5 md:mx-0" spotlightColor="rgba(255, 174, 0, 0.2)">
      <div className={`container flex ${containerClass}`}>
        {/* Content Section */}
        <div className={isWeb ? "flex-auto md:pl-20" : ""}>
          <div className="flex gap-2">
            <h2 className={`${isWeb ? 'text-3xl md:text-5xl' : 'text-4xl md:text-5xl'} font-bold`}>
              {title}
            </h2>
          </div>
          <p className={`${isWeb ? 'md:w-xl text-justify' : 'w-auto md:w-md'} py-2`}>
            {description}
          </p>

          {/* Technologies Grid */}
          <div className={`grid ${gridCols} gap-2`}>
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  className={`${techColSpan} inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold`}
                >
                  <Icon />
                  {tech.label}
                </div>
              );
            })}

            {/* Link Button if exists */}
            {link && (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${isWeb ? 'col-span-2 md:col-span-4' : 'col-span-4'} inline-flex justify-between items-center gap-2 bg-gradient-to-r from-orange-500/10 via-orange-400/10 to-orange-500/10 hover:from-orange-600 hover:via-orange-500 hover:to-orange-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold`}
              >
                <link.icon />
                {link.label}
                <BiSolidRightArrowAlt />
              </a>
            )}

            {/* Status */}
            {renderStatus()}
          </div>
        </div>

        {/* Image Stack Section */}
        <div className={`flex items-center justify-center ${isWeb ? 'flex-auto py-10 md:py-5' : 'pt-6 md:pt-0'}`}>
          <Stack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={false}
            cardsData={images}
            cardDimensions={
              isWeb
                ? isDesktop
                  ? { width: 800, height: 300 }
                  : { width: 270, height: 200 }
                : isDesktop
                ? { width: 300, height: 300 }
                : { width: 200, height: 300 }
            }
          />
        </div>
      </div>
    </SpotlightCard>
  );
}