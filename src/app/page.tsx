"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import dynamic from "next/dynamic";
import Dock from "../components/Shared/Dock/Dock";
import { VscAccount, VscArchive, VscHome } from "react-icons/vsc";
import FadeContent from "../components/Animations/FadeContent/FadeContent";
import SpotlightCard from "../components/Shared/SpotlightCard/SpotlightCard";
import RotatingText from "../components/Animations/TextAnimations/RotatingText/RotatingText";
// import { Badge } from "lucide-react";
// import { Badge, Button } from "@material-tailwind/react";
import Stack from "../components/Shared/Stack/Stack";
import { FaCss3, FaDartLang, FaFigma, FaFlutter, FaHtml5, FaInstagram, FaLaravel, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import { SiAlwaysdata, SiAxios, SiBootstrap, SiCodeigniter, SiCss3, SiDart, SiFlutter, SiGithub, SiGitlab, SiHtml5, SiJavascript, SiLaravel, SiLeaflet, SiMantine, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiRedux, SiTailwindcss, SiThemoviedatabase, SiTypescript } from "react-icons/si";
import { TbCloudDataConnection } from "react-icons/tb";
import { BiLogoAndroid, BiLogoPlayStore, BiLogoPostgresql, BiLogoTypescript, BiLogoVisualStudio, BiSolidRightArrowAlt } from "react-icons/bi";
import { MdDashboardCustomize, MdWorkOutline } from "react-icons/md";
import { FaBluetooth, FaMapMarkerAlt, FaReact } from "react-icons/fa";
import { RiFileExcel2Fill, RiNextjsFill } from "react-icons/ri";
import { IoIosLink } from "react-icons/io";
import FadeAnimation from "../components/Custom/FadeAnimation/FadeAnimation";
import LogoLoop from "../components/Animations/LogoLoop/LogoLoop";
import { useMediaQuery } from "react-responsive";
import supabase from "../integrations/client";
import getProfiles from "../services/fetchdata";
import TextCursor from "../components/Animations/TextAnimations/TextCursor/TextCursor";
import DecryptedText from "../components/Animations/TextAnimations/DecryptedText/DecryptedText";
import { 
  HeroSection, 
  AboutSection, 
  ProjectsSection, 
  ExperienceSection, 
  FooterSection
} from '@/sections';

// import GlassSurface from "./components/Components/GlassSurface/GlassSurface";
const GlassSurface = dynamic(() => import('../components/Shared/GlassSurface/GlassSurface'), { ssr: false });

const StackNoSSR = dynamic(() => import("../components/Shared/Stack/Stack"), { ssr: false });

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