// sections/ExperienceSection/index.tsx

import LogoLoop from "@/components/Animations/LogoLoop/LogoLoop";
import ExperienceItem from "@/components/Custom/ExperienceItem";
import { EXPERIENCES } from "@/constants/experience";
import { TECH_LOGOS } from "@/constants/techStack";

interface ExperienceSectionProps {
  isDesktop: boolean; // Pass from parent component
}

export default function ExperienceSection({ isDesktop }: ExperienceSectionProps) {
  return (
    <div className="flex flex-col w-full h-screen bg-black text-white" id="experience">
      <div className="container mx-auto">
        {/* Title */}
        <div className="flex items-center gap-3 text-lg text-center text-medium p-4">
          <span className="inline-block animate-spin-slow text-4xl text-gray-400">✦</span>
          MY EXPERIENCE
        </div>

        {/* Experience List */}
        {EXPERIENCES.map((experience, index) => (
          <div key={`${experience.company}-${index}`}>
            <ExperienceItem experience={experience} />
            {index < EXPERIENCES.length - 1 && (
              <hr className="border-gray-600 mx-8" />
            )}
          </div>
        ))}

        <hr className="border-gray-600 mx-8 pb-10" />
      </div>

      {/* Tech Logos Loop */}
      <div style={{ height: '200px', position: 'relative' }}>
        <LogoLoop
          logos={TECH_LOGOS.map(tech => ({
            node: <tech.icon />,
            title: tech.title,
            href: tech.href
          }))}
          speed={120}
          direction="left"
          logoHeight={isDesktop ? 48 : 38}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          ariaLabel="Tech"
        />
      </div>
    </div>
  );
}