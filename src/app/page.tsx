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

  const isDesktop = useMediaQuery({ minWidth: 768 });

  // const { data: profiles }: any = await getProfiles();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://ptnfzunarioxzuzspnpm.supabase.co/functions/v1/tech-join`,
        // {
        //   headers: {
        //     apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0bmZ6dW5hcmlveHp1enNwbnBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYzMDg1MTQsImV4cCI6MjA3MTg4NDUxNH0.QtFLcchyKDXMkE2TFBBvWTlBsvS3GjHPw0GOI-E4_Z8",
        //     Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0bmZ6dW5hcmlveHp1enNwbnBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYzMDg1MTQsImV4cCI6MjA3MTg4NDUxNH0.QtFLcchyKDXMkE2TFBBvWTlBsvS3GjHPw0GOI-E4_Z8"}`,
        //   },
        // }
      );

      const data = await res.json();
      console.log(data);
      console.log()
    };
    fetchData();
  }, []);


  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { icon: <VscAccount size={18} />, label: 'About', onClick: () => window.scrollTo({ top: document.getElementById("about")?.offsetTop || 0, behavior: 'smooth' }) },
    { icon: <VscArchive size={18} />, label: 'Projects', onClick: () => window.scrollTo({ top: document.getElementById("projects")?.offsetTop || 0, behavior: 'smooth' }) },
    { icon: <MdWorkOutline size={18} />, label: 'Experience', onClick: () => window.scrollTo({ top: document.getElementById("experience")?.offsetTop || 0, behavior: 'smooth' }) },
  ];

  const images = [
    { id: 1, img: "/images/projects/turelth/6-turelth.png" },
    { id: 2, img: "/images/projects/turelth/5-turelth.png" },
    { id: 3, img: "/images/projects/turelth/4-turelth.png" },
    { id: 4, img: "/images/projects/turelth/3-turelth.png" },
    { id: 5, img: "/images/projects/turelth/2-turelth.png" },
    { id: 6, img: "/images/projects/turelth/1-turelth.png" },
  ];

  const images2 = [
    { id: 1, img: "/images/projects/jenos/4-jenos.png" },
    { id: 2, img: "/images/projects/jenos/3-jenos.png" },
    { id: 3, img: "/images/projects/jenos/2-jenos.png" },
    { id: 4, img: "/images/projects/jenos/1-jenos.png" },
  ];

  const images3 = [
    { id: 1, img: "/images/projects/movie/6-movie.png" },
    { id: 2, img: "/images/projects/movie/5-movie.png" },
    { id: 3, img: "/images/projects/movie/4-movie.png" },
    { id: 4, img: "/images/projects/movie/3-movie.png" },
    { id: 5, img: "/images/projects/movie/2-movie.png" },
    { id: 6, img: "/images/projects/movie/1-movie.png" },
  ];

  const images4 = [
    { id: 1, img: "/images/projects/sisappra/16-satpol.jpeg" },
    { id: 2, img: "/images/projects/sisappra/15-satpol.jpeg" },
    { id: 3, img: "/images/projects/sisappra/14-satpol.jpeg" },
    { id: 4, img: "/images/projects/sisappra/13-satpol.jpeg" },
    { id: 5, img: "/images/projects/sisappra/12-satpol.jpeg" },
    { id: 6, img: "/images/projects/sisappra/11-satpol.jpeg" },
    { id: 7, img: "/images/projects/sisappra/10-satpol.jpeg" },
    { id: 8, img: "/images/projects/sisappra/9-satpol.jpeg" },
    { id: 9, img: "/images/projects/sisappra/8-satpol.jpeg" },
    { id: 10, img: "/images/projects/sisappra/7-satpol.jpeg" },
    { id: 11, img: "/images/projects/sisappra/6-satpol.jpeg" },
    { id: 12, img: "/images/projects/sisappra/5-satpol.jpeg" },
    { id: 13, img: "/images/projects/sisappra/4-satpol.jpeg" },
    { id: 14, img: "/images/projects/sisappra/3-satpol.jpeg" },
    { id: 15, img: "/images/projects/sisappra/2-satpol.jpeg" },
    { id: 16, img: "/images/projects/sisappra/18-satpol.jpeg" },
    { id: 17, img: "/images/projects/sisappra/17-satpol.jpeg" },
    { id: 18, img: "/images/projects/sisappra/1-satpol.jpeg" },
  ];

  const images5 = [
    { id: 1, img: "/images/projects/smartring/5-rings.png" },
    { id: 2, img: "/images/projects/smartring/4-rings.png" },
    { id: 3, img: "/images/projects/smartring/3-rings.png" },
    { id: 4, img: "/images/projects/smartring/2-rings.png" },
    { id: 5, img: "/images/projects/smartring/1-rings.png" },
  ];

  const images6 = [
    { id: 1, img: "/images/projects/compro/13-compro.png" },
    { id: 2, img: "/images/projects/compro/12-compro.png" },
    { id: 3, img: "/images/projects/compro/11-compro.png" },
    { id: 4, img: "/images/projects/compro/10-compro.png" },
    { id: 5, img: "/images/projects/compro/9-compro.png" },
    { id: 6, img: "/images/projects/compro/8-compro.png" },
    { id: 7, img: "/images/projects/compro/7-compro.png" },
    { id: 8, img: "/images/projects/compro/6-compro.png" },
    { id: 9, img: "/images/projects/compro/5-compro.png" },
    { id: 10, img: "/images/projects/compro/4-compro.png" },
    { id: 11, img: "/images/projects/compro/3-compro.png" },
    { id: 12, img: "/images/projects/compro/2-compro.png" },
    { id: 13, img: "/images/projects/compro/1-compro.png" },
  ];
  
  return (
    <>
      {/* Navbar */}
      <div className="fixed bottom-10 left-0 z-50 w-full">
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