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
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { icon: <VscAccount size={18} />, label: 'About', onClick: () => window.scrollTo({ top: document.getElementById("about")?.offsetTop || 0, behavior: 'smooth' }) },
    { icon: <VscArchive size={18} />, label: 'Projects', onClick: () => window.scrollTo({ top: document.getElementById("projects")?.offsetTop || 0, behavior: 'smooth' }) },
    { icon: <MdWorkOutline size={18} />, label: 'Experience', onClick: () => window.scrollTo({ top: document.getElementById("experience")?.offsetTop || 0, behavior: 'smooth' }) },
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