// pages/about.jsx

import { BiSolidFilePdf, BiSolidRightArrowAlt } from "react-icons/bi";
import Particles from "@/components/Backgrounds/Particles/Particles";
import ScrollReveal from "@/components/Animations/TextAnimations/ScrollReveal/ScrollReveal";
import ShinyText from "@/components/Animations/TextAnimations/ShinyText/ShinyText";
import TextType from "@/components/Animations/TextAnimations/TextType/TextType";

export default function AboutPage() {
    const handleOpenPdf = () => {
        window.open("/Portfolio.pdf", "_blank");
    };

  return (
    <div className="relative flex flex-col w-full overflow-hidden min-h-screen bg-black" id="about">
      {/* Background */}
      <div className="absolute inset-0 z-10">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Konten */}
      <div className="container mx-auto relative z-10">
        {/* Intro Text */}
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          containerClassName="px-10 py-10 md:px-20 md:py-20"
          textClassName="text-lg text-center md:text-start md:text-5xl/15 font-extralight text-white"
        >
          For me, development is a continuous journey of learning by doing. 
          I thrive on solving problems, experimenting with ideas, and 
          transforming challenges into meaningful digital solutions.
        </ScrollReveal>

        {/* Divider */}
        <hr className="border-gray-600 mx-10 md:mx-[30]" />

        {/* Content */}
        <div className="flex flex-col items-center md:items-start md:flex-row px-5 md:px-20 py-10 gap-10">
          {/* Left Side */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <TextType
              text={["Hi, I'm Sena.", "Welcome to my porto!"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="font-medium text-2xl md:text-5xl"
            />

            <div className="flex flex-row md:flex-col py-5 md:pt-50 gap-5">
              <div className="flex flex-col items-center md:items-start">
                <h1 className="text-5xl font-bold text-orange-400">2+</h1>
                <h5 className="text-white">Years of Experience</h5>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <h1 className="text-5xl font-bold text-orange-400">6+</h1>
                <h5 className="text-white">Completed Projects</h5>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1">
            <ShinyText
              text="I'm a frontend developer who loves turning ideas into real digital experiences. On the web, I enjoy building interfaces that are clean, responsive, and easy to use, while on mobile I use Flutter to create apps that feel smooth and work seamlessly across devices."
              disabled={false}
              speed={3}
              className="pb-5 text-center md:text-start text-sm md:text-base text-white"
            />
            <ShinyText
              text="I believe the best way to grow is by learning through doing—solving problems, experimenting with new ideas, and constantly improving with every project. For me, coding isn’t just about writing functions, it’s about creating something meaningful that people can actually enjoy and benefit from."
              disabled={false}
              speed={3}
              className="pb-5 text-center md:text-start text-sm md:text-base text-white"
            />

            <div className="flex justify-center md:justify-start">
              <a
                href="/"
                onClick={handleOpenPdf}
                target="_blank"
                className="inline-flex justify-between items-center gap-2 
                           bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600
                           py-2 px-4 rounded-lg text-white 
                           transition-all duration-300 transform hover:scale-105 font-bold"
              >
                <BiSolidFilePdf />
                See my CV
                <BiSolidRightArrowAlt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
