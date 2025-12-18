// components/ExperienceItem/index.tsx
import RotatingText from "@/components/Animations/TextAnimations/RotatingText/RotatingText";
import type { Experience } from "@/types/experience.types";

interface ExperienceItemProps {
  experience: Experience;
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  const { company, roles, period, isRotating, highlights } = experience;

  return (
    <div className="flex rounded-lg p-8">
      <div>
        <h2 className="text-md md:text-xl text-gray-400 py-3">{company}</h2>
        
        {isRotating ? (
          <RotatingText
            texts={roles}
            mainClassName="text-3xl md:text-6xl font-bold text-white text-center"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={5000}
          />
        ) : (
          <h1 className="text-3xl md:text-6xl font-bold">{roles[0]}</h1>
        )}

        <div className="text-md md:text-xl text-gray-400 py-3">{period}</div>

        {highlights && highlights.length > 0 && (
          <ul className="list-disc px-4">
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}