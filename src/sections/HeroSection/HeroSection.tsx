// pages/hero.jsx
"use client";

import DarkVeil from "@/components/Backgrounds/DarkVeil/DarkVeil";
import SplitText from "@/components/Animations/SplitText/SplitText";
import FadeContent from "@/components/Animations/FadeContent/FadeContent";
import RotatingText from "@/components/Animations/TextAnimations/RotatingText/RotatingText";
import AnimatedContent from "@/components/Animations/AnimatedContent/AnimatedContent";
import Image from "next/image";

export default function HeroPage() {
  return (
    <div className="h-screen mx-auto w-full flex">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <DarkVeil hueShift={212} />
      </div>

      {/* Content */}
      <div className="justify-end pt-[100px] lg:pt-0 lg:justify-between relative container flex flex-col items-center flex-col-reverse lg:flex-row w-full mx-auto">
        {/* Introductions */}
        <div className="relative z-1 flex flex-col items-center lg:items-start justify-center lg:pl-8">
          <SplitText
            text="Hallo👋🏽"
            className="text-2xl py-1 text-white text-center lg:text-4xl"
          />
          <div>
            <SplitText
              text="I'm "
              className="text-3xl lg:text-5xl xl:text-7xl font-bold text-white text-center"
            />
            <span> </span>
            <SplitText
              text="Sena Ramadhan"
              className="text-3xl lg:text-5xl xl:text-7xl mx-2 font-bold text-orange-400 text-center"
            />
          </div>
          <div className="flex flex-row gap-4">
            <SplitText
              text="a "
              className="text-3xl lg:text-5xl xl:text-7xl font-bold text-white text-center"
            />
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <RotatingText
                texts={["Frontend Developer", "Mobile Developer"]}
                mainClassName="text-3xl lg:text-5xl xl:text-7xl font-bold text-white text-center"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 lg:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </FadeContent>
          </div>
          <div className="max-w-2xl mx-3 lg:mx-0 ">
            <SplitText
              text="dedicated to building intuitive interfaces & eager to learn new technologies for growth."
              className="text-base lg:text-2xl xl:text-3xl py-2 text-white/90 font-light text-center lg:text-start"
              delay={20}
            />
          </div>
          <div className="w-full mt-4 flex justify-center lg:justify-start">
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById("projects");
                  target?.scrollIntoView({ behavior: "smooth" });
                }}
                className="relative px-6 py-3 rounded-lg font-semibold text-white bg-black overflow-hidden group shadow-lg"
              >
                <span className="relative z-10">🚀 Explore My Works</span>
                <span className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 animate-borderShine" />
              </a>
            </FadeContent>
          </div>
        </div>

        {/* Img */}
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          duration={0.8}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.1}
          delay={0.3}
        >
          <div className="relative z-0 w-60 h-60 lg:w-112 lg:h-112 rounded-full flex items-center justify-center">
            {/* Bg white circle */}
            <div className="relative z-0 w-40 h-40 lg:w-90 lg:h-90 rounded-full bg-white flex items-center justify-center" />
            {/* Image */}
            <div className="absolute inset-0 overflow-hidden rounded-full my-[-40] w-40 lg:my-[-40] lg:w-90 h-full m-auto">'
              <Image
                src="/images/icons/sena-crop.png"
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </AnimatedContent>
      </div>
    </div>
  );
}
