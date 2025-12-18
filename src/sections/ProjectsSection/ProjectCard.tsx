// components/ProjectCard/index.tsx

import { useState } from "react";
import { BiSolidRightArrowAlt } from "react-icons/bi";
import type { Project } from "@/types/project.types";
import SpotlightCard from "@/components/Shared/SpotlightCard/SpotlightCard";
import Stack from "@/components/Shared/Stack/Stack";
import ImageLightbox from "@/components/Custom/ImageLightBox";

interface ProjectCardProps {
  project: Project;
  isDesktop: boolean;
}

export default function ProjectCard({ project, isDesktop }: ProjectCardProps) {
  const { title, description, images, technologies, status, link, layout } = project;
  
  // Lightbox state
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Lightbox handlers
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

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
          <div className="col-span-4 flex-row text-md italic font-medium">
            Contributed until <span className="not-italic font-semibold">({status.date})</span>
          </div>
        );
      case "finished":
        return (
          <div className="col-span-4 flex-row text-md italic font-medium">
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

  // Uniform layout for all projects
  const isWeb = layout === "web";
  const gridCols = isWeb ? "grid-cols-2" : "grid-cols-4";
  const techColSpan = isWeb ? "" : "col-span-2";

  return (
    <SpotlightCard className="mx-5 xl:mx-0" spotlightColor="rgba(255, 174, 0, 0.2)">
      <div className="container grid grid-cols-1 xl:grid-cols-12 gap-6 items-center">
        {/* Image Section */}
        <div
          className="xl:col-span-3 order-1 xl:order-2 flex justify-center cursor-pointer"
          onClick={() => openLightbox(0)}
        >
          <Stack
            randomRotation
            sensitivity={180}
            sendToBackOnClick={false}
            cardsData={images}
            cardDimensions={
              isDesktop
                ? { width: 300, height: 300 }
                : { width: 240, height: 300 }
            }
          />
        </div>

        {/* Content Section */}
        <div className="xl:col-span-7 order-2 xl:order-1">
          <h2 className="text-4xl xl:text-5xl font-bold">
            {title}
          </h2>

          <p className="py-2 max-w">
            {description}
          </p>

          {/* Technologies */}
          <div className={`grid ${gridCols} gap-2`}>
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  className={`${techColSpan} inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 hover:scale-105 font-bold`}
                >
                  <Icon />
                  {tech.label}
                </div>
              );
            })}

            {link && (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-full inline-flex justify-between items-center gap-2 bg-gradient-to-r from-orange-500/10 via-orange-400/10 to-orange-500/10 hover:from-orange-600 hover:via-orange-500 hover:to-orange-600 py-2 px-4 rounded-lg text-white transition-all duration-300 hover:scale-105 font-bold"
              >
                <link.icon />
                {link.label}
                <BiSolidRightArrowAlt />
              </a>
            )}

            {renderStatus()}
          </div>
        </div>
      </div>


      {/* Lightbox */}
      <ImageLightbox
        images={images}
        currentIndex={currentImageIndex}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        onNext={goToNext}
        onPrev={goToPrev}
      />
    </SpotlightCard>
  );
}