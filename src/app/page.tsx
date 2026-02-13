"use client";

import { motion, useScroll, useSpring } from "motion/react";
import Dock from "../components/Shared/Dock/Dock";
import { VscAccount, VscArchive, VscHome } from "react-icons/vsc";
import FadeContent from "../components/Animations/FadeContent/FadeContent";
import { MdWorkOutline } from "react-icons/md";
import { 
  HeroSection, 
  AboutSection, 
  ProjectsSection, 
  ExperienceSection, 
  FooterSection
} from '@/sections';
import { useLenis } from "@/hooks/useLenis";
const { scrollTo } = useLenis();

export default function Home() {
  return (
    <>
      <Content />
    </>
  );
}

function Content() {
  
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
  })

  const items = [
  { 
    icon: <VscHome size={18} />, 
    label: 'Home', 
    onClick: () => scrollTo(0) 
  },
  { 
    icon: <VscAccount size={18} />, 
    label: 'About', 
    onClick: () => scrollTo('#about') 
  },
  { 
    icon: <VscArchive size={18} />, 
    label: 'Projects', 
    onClick: () => scrollTo('#projects') 
  },
  { 
    icon: <MdWorkOutline size={18} />, 
    label: 'Experience', 
    onClick: () => scrollTo('#experience') 
  },
];
  
  return (
    <>
      {/* Navbar */}
      <div className="fixed text-white bottom-10 left-0 z-50 w-full">
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
          <Dock 
            items={items}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
          />
        </FadeContent>
      </div>
      {/* Home */}
      <HeroSection />
      
      {/* Scroll Indicator */}
      <motion.div
        id="scroll-indicator"
        style={{
            scaleX,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: 10,
            originX: 0,
            backgroundColor: "#ff7b00ff",
            zIndex: 1,
        }}
      />

      {/* About */}
      <AboutSection />

      {/* Projects */}
      <ProjectsSection isDesktop={false} />
      {/* Experience */}
      <ExperienceSection isDesktop={false} />
      {/* Footer */}
      <FooterSection />
    </>
  );
}