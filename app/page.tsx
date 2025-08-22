"use client";

import Image from "next/image";
import SplitText from "./components/SplitText/SplitText";
import DarkVeil from "./components/Backgrounds/DarkVeil/DarkVeil";
import AnimatedContent from "./components/Animations/AnimatedContent/AnimatedContent";
import ScrollReveal from "./components/TextAnimations/ScrollReveal/ScrollReveal";
import { RefObject, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import FluidGlass from "./components/Components/FluidGlass/FluidGlass";
import dynamic from "next/dynamic";
import GooeyNav from "./components/Components/GooeyNav/GooeyNav";
import Dock from "./components/Components/Dock/Dock";
import { VscAccount, VscArchive, VscHome, VscSettingsGear } from "react-icons/vsc";
import StarBorder from "./components/Animations/StarBorder/StarBorder";
import TiltedCard from "./components/Components/TiltedCard/TiltedCard";
import FadeContent from "./components/Animations/FadeContent/FadeContent";
import ScrollStack, { ScrollStackItem } from "./components/Components/ScrollStack/ScrollStack";
import SpotlightCard from "./components/Components/SpotlightCard/SpotlightCard";
import RotatingText from "./components/TextAnimations/RotatingText/RotatingText";
// import { Badge } from "lucide-react";
// import { Badge, Button } from "@material-tailwind/react";
import Stack from "./components/Components/Stack/Stack";
import { FaCss3, FaDartLang, FaFlutter, FaHtml5, FaInstagram, FaLaravel, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import { SiAlwaysdata, SiAxios, SiBootstrap, SiCodeigniter, SiCss3, SiDart, SiFlutter, SiGithub, SiGitlab, SiHtml5, SiJavascript, SiLaravel, SiLeaflet, SiLinkedin, SiMantine, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiRedux, SiTailwindcss, SiThemoviedatabase, SiTypescript } from "react-icons/si";
import { TbCloudDataConnection } from "react-icons/tb";
import { BiLogoAndroid, BiLogoPlayStore, BiLogoPostgresql, BiLogoTypescript, BiLogoVisualStudio, BiRightArrow, BiSolidFilePdf, BiSolidRightArrowAlt } from "react-icons/bi";
import { MdDashboardCustomize, MdWork, MdWorkOutline } from "react-icons/md";
import { FaBluetooth, FaMapMarkerAlt, FaReact } from "react-icons/fa";
import { RiFileExcel2Fill, RiNextjsFill } from "react-icons/ri";
import { IoIosLink } from "react-icons/io";
import TextPressure from "./components/TextAnimations/TextPressure/TextPressure";
import ScrollFloat from "./components/TextAnimations/ScrollFloat/ScrollFloat";
import ScrollVelocity from "./components/TextAnimations/ScrollVelocity/ScrollVelocity";
import TextTrail from "./components/TextAnimations/TextTrail/TextTrail";
import WorkExperience from "./components/Custom/WorkExperience";
import { Experience } from "./types/experience";
import Stepper, { Step } from "./components/Components/Stepper/Stepper";
import AnimatedList from "./components/Components/AnimatedList/AnimatedList";
import FadeAnimation from "./components/Custom/FadeAnimation/FadeAnimation";
import ChromaGrid from "./components/Components/ChromaGrid/ChromaGrid";
import LogoLoop from "./components/Animations/LogoLoop/LogoLoop";
import { poppins } from "./fonts";
import LiquidChrome from "./components/Backgrounds/LiquidChrome/LiquidChrome";
import Particles from "./components/Backgrounds/Particles/Particles";
// import GlassSurface from "./components/Components/GlassSurface/GlassSurface";
const GlassSurface = dynamic(() => import('./components/Components/GlassSurface/GlassSurface'), { ssr: false });

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

  const handleOpenPdf = () => {
    // ganti "/resume.pdf" dengan path atau URL PDF kamu
    window.open("/Portfolio.pdf", "_blank");
  };

  const [hovered, IsHovered] = useState(false);

  // const items = [
  //   { label: "Home", href: "#" },
  //   { label: "About", href: "#" },
  //   { label: "Contact", href: "#" },
  // ];

  const techLogos = [
    { node: <SiHtml5 />, title: "HTML5", href: "https://www.w3schools.com/html/html_intro.asp" },
    { node: <SiCss3 />, title: "CSS", href: "https://www.w3schools.com/css/css_intro.asp" },
    { node: <SiJavascript />, title: "Javascript", href: "https://www.w3schools.com/js/js_intro.asp" },
    { node: <SiCodeigniter />, title: "CI", href: "https://codeigniter.com" },
    { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com" },
    { node: <SiBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiFlutter />, title: "Flutter", href: "https://flutter.dev" },
    { node: <SiDart />, title: "Dart", href: "https://dart.dev" },
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiGithub />, title: "Github", href: "http://github.com" },
    { node: <SiGitlab />, title: "Gitlab", href: "http://gitlab.com" },
    { node: <SiNodedotjs />, title: "NodeJS", href: "https://nodejs.org/en" },
    { node: <BiLogoVisualStudio />, title: "VSCode", href: "https://code.visualstudio.com" },
    { node: <BiLogoPostgresql />, title: "Postgresql", href: "https://www.postgresql.org" },
    { node: <BiLogoAndroid />, title: "Android", href: "https://www.android.com/intl/id_id/" },
  ];

  const itemz = [
      {
        image: "https://i.pravatar.cc/300?img=1",
        title: "Sarah Johnson",
        subtitle: "Frontend Developer",
        handle: "@sarahjohnson",
        borderColor: "#3B82F6",
        gradient: "linear-gradient(145deg, #3B82F6, #000)",
        url: "https://github.com/sarahjohnson"
      },
      {
        image: "https://i.pravatar.cc/300?img=2",
        title: "Mike Chen",
        subtitle: "Backend Engineer",
        handle: "@mikechen",
        borderColor: "#10B981",
        gradient: "linear-gradient(180deg, #10B981, #000)",
        url: "https://linkedin.com/in/mikechen"
      }
    ];

  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { icon: <VscAccount size={18} />, label: 'About', onClick: () => window.scrollTo({ top: document.getElementById("about")?.offsetTop || 0, behavior: 'smooth' }) },
    { icon: <VscArchive size={18} />, label: 'Projects', onClick: () => window.scrollTo({ top: document.getElementById("projects")?.offsetTop || 0, behavior: 'smooth' }) },
    { icon: <MdWorkOutline size={18} />, label: 'Experience', onClick: () => window.scrollTo({ top: document.getElementById("experience")?.offsetTop || 0, behavior: 'smooth' }) },
  ];

  const images = [
    { id: 1, img: "/6-turelth.png" },
    { id: 2, img: "/5-turelth.png" },
    { id: 3, img: "/4-turelth.png" },
    { id: 4, img: "/3-turelth.png" },
    { id: 5, img: "/2-turelth.png" },
    { id: 6, img: "/1-turelth.png" },
  ];
  const images2 = [
    { id: 1, img: "/4-jenos.png" },
    { id: 2, img: "/3-jenos.png" },
    { id: 3, img: "/2-jenos.png" },
    { id: 4, img: "/1-jenos.png" },
  ];
  const images3 = [
    { id: 1, img: "/6-movie.png" },
    { id: 2, img: "/5-movie.png" },
    { id: 3, img: "/4-movie.png" },
    { id: 4, img: "/3-movie.png" },
    { id: 5, img: "/2-movie.png" },
    { id: 6, img: "/1-movie.png" },
  ];
  const images4 = [
    { id: 1, img: "/16-satpol.jpeg" },
    { id: 2, img: "/15-satpol.jpeg" },
    { id: 3, img: "/14-satpol.jpeg" },
    { id: 4, img: "/13-satpol.jpeg" },
    { id: 5, img: "/12-satpol.jpeg" },
    { id: 6, img: "/11-satpol.jpeg" },
    { id: 7, img: "/10-satpol.jpeg" },
    { id: 8, img: "/9-satpol.jpeg" },
    { id: 9, img: "/8-satpol.jpeg" },
    { id: 10, img: "/7-satpol.jpeg" },
    { id: 11, img: "/6-satpol.jpeg" },
    { id: 12, img: "/5-satpol.jpeg" },
    { id: 13, img: "/4-satpol.jpeg" },
    { id: 14, img: "/3-satpol.jpeg" },
    { id: 15, img: "/2-satpol.jpeg" },
    { id: 16, img: "/18-satpol.jpeg" },
    { id: 17, img: "/17-satpol.jpeg" },
    { id: 18, img: "/1-satpol.jpeg" },
  ];

  const images5 = [
    { id: 1, img: "/5-rings.png" },
    { id: 2, img: "/4-rings.png" },
    { id: 3, img: "/3-rings.png" },
    { id: 4, img: "/2-rings.png" },
    { id: 5, img: "/1-rings.png" },
  ];

  const images6 = [
    { id: 1, img: "/13-compro.png" },
    { id: 2, img: "/12-compro.png" },
    { id: 3, img: "/11-compro.png" },
    { id: 4, img: "/10-compro.png" },
    { id: 5, img: "/9-compro.png" },
    { id: 6, img: "/8-compro.png" },
    { id: 7, img: "/7-compro.png" },
    { id: 8, img: "/6-compro.png" },
    { id: 9, img: "/5-compro.png" },
    { id: 10, img: "/4-compro.png" },
    { id: 11, img: "/3-compro.png" },
    { id: 12, img: "/2-compro.png" },
    { id: 13, img: "/1-compro.png" },
  ];

  const experiences: Experience[] = [
    {
      date: 'Oct 2023 - Present',
      role: 'Flutter Developer',
      company: 'PT Hydant Inovasi Semesta',
      description: 'Build application Jenos\nBuild Content Management System for Company Profile PT Hydant Inovasi Semesta',
      skills: ['Flutter'],
    },
    {
      date: 'Sep 2022 - May 2025',
      role: 'Frontend Developer',
      company: 'PT Tristar Suryaya Gemilang',
      description: 'Rebuild Loan Management System Bank BJB KPR\nBuild Sistem Informasi Satuan Polisi Pamong Praja DKI Jakarta (SISAPPRA)',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
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
      <div className="h-screen mx-auto w-full flex">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <DarkVeil hueShift={212}/>
        </div>
          {/* Content */}
        <div className="relative container flex flex-row items-center justify-between w-full mx-auto">
          {/* Introductions */}
          <div className="relative z-10 flex flex-col items-start justify-center h-full">
            <SplitText
              text="Hallo👋🏽"
              className="text-4xl py-1 text-white text-center"
            />
            <div>
              <SplitText
                text="I'm "
                className="text-7xl font-bold text-white text-center"
              />
              <span> </span>
              <SplitText
                text="Sena Ramadhan"
                className="mx-2 text-7xl font-bold text-orange-400 text-center"
              />
            </div>
            <div className="flex flex-row gap-4">
              <SplitText
                text="a "
                className="text-7xl font-bold text-white text-center"
              />
              <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                  <RotatingText
                    texts={['Frontend Developer', 'Mobile Developer']}
                    mainClassName="text-7xl font-bold text-white text-center"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
              </FadeContent>
            </div>
            <div className="max-w-2xl">
              <SplitText
                text="dedicated to building intuitive interfaces & eager to learn new technologies for growth."
                className="py-2 text-3xl text-white/90 text-center font-light"
                textAlign="justify"
                delay={20}
              />
            </div>
            <div className=" w-full mt-4">
              {/* <Button className="bg-orange-400 px-5 py-5 text-lg text-white hover:bg-orange-500">
                🚀 Explore My Works
              </Button> */}
              {/* <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                  <StarBorder
                    color="orange"
                    speed="5s"
                  >
                    🚀 Explore My Works
                  </StarBorder>
              </FadeContent> */}
              <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
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
            <div className="relative z-0 w-112 h-112 rounded-full flex items-center justify-center">
            <div className="relative z-0 w-90 h-90 rounded-full bg-white flex items-center justify-center">
            </div>
              <div className="absolute inset-0 overflow-hidden rounded-full my-[-40] w-90 h-full m-auto">
                <Image
                  src="/sena-crop.png"
                  alt="Profile Picture"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            {/* <TiltedCard 
              imageSrc={"/sena-white.png"}
              containerHeight="500px"
              imageHeight="500px"
              imageWidth="500px" 
            /> */}
          </AnimatedContent>
          {/* <ProfileCard
            name="Sena Ramadhan"
            title="Frontend Developer"
            handle="nzsr_"
            innerGradient="linear-gradient(145deg, #FF7A188c 0%, #FFB34744 100%);"
            avatarUrl={"/sena-crop.png"}
            showUserInfo={false}
          /> */}
        </div>
      </div>
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
      <div className="relative flex flex-col w-full h-screen overflow-hidden" id="about">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        {/* Konten di atas background */}
        <div className="container mx-auto relative z-10">
          <p className="text-5xl/15 font-extralight py-20 px-50 tracking-wide text-white">
            For me, development is a continuous journey of learning by doing. 
            I thrive on solving problems, experimenting with ideas, and 
            transforming challenges into meaningful digital solutions.
          </p>
          <hr className="border-gray-600 mx-30" />
          <div className="flex px-50 py-10">
            <div className="flex-1 flex-row">
              <h1 className="font-medium text-5xl ">Hi, I'm Sena.</h1>
              <div className="flex flex-col pt-50 gap-5">
                <div className="flex flex-col">
                  <h1 className="text-5xl font-bold text-orange-400">2+</h1>
                  <h5>Years of Experience</h5>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-5xl font-bold text-orange-400">6+</h1>
                  <h5>Completed Projects</h5>
                </div>
              </div>
            </div>
            <div className="flex-1 text-gray-400">
              <p className="pb-5">
              I'm a frontend developer who loves turning ideas into real digital experiences. On the web, I enjoy building interfaces that are clean, responsive, and easy to use, while on mobile I use Flutter to create apps that feel smooth and work seamlessly across devices.
              </p>
              <p className="pb-5">
              I believe the best way to grow is by learning through doing—solving problems, experimenting with new ideas, and constantly improving with every project. For me, coding isn’t just about writing functions, it’s about creating something meaningful that people can actually enjoy and benefit from.
              </p>
              <a href="/" onClick={handleOpenPdf} target="_blank" className="inline-flex justify-between items-center gap-2 bg-gradient-to-r from-orange-500/10 via-orange-400/10 to-orange-500/10 from-orange-600 via-orange-500 to-orange-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                  <BiSolidFilePdf />
                  See my CV
                  <BiSolidRightArrowAlt />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="flex w-full" id="projects">
        <div className="container mx-auto">
          {/* <h1 className="text-6xl font-bold py-10"> */}
          <div className="flex items-center gap-3 text-lg text-center text-medium p-4">
            <span className="inline-block animate-spin-slow text-4xl text-gray-400">✦</span>
            SELECTED PROJECTS
          </div>
          {/* </h1> */}  
          <FadeAnimation>
            <div className="grid grid-cols-2 gap-4">
              <SpotlightCard className="custom-spotlight-card"  spotlightColor="rgba(255, 174, 0, 0.2)">
                <div className="container flex flex-row">
                  <div className="">
                    <div className="flex gap-2">
                      <h2 className="text-5xl font-bold ">Turelth</h2>
                      {/* <img src="" alt="" /> */}
                    </div>
                    <p className="w-sm py-2 text-justify">
                      {/* Turelth is a mobile application designed to track daily sensor data input and cleanliness updates from field operators. The data is sent directly to monitoring staff on the server, enabling them to verify input completion sensor, observe cleanliness progress, and detect any missed submissions in real time.  */}
                      Mobile app for monitoring daily sensor data input and cleanliness progress from field operators.
                    </p>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="col-span-2 inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                        <FaFlutter />
                        Flutter
                      </div>
                      <div className="col-span-2 inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                        <FaDartLang /> 
                        Dart
                      </div>
                      {/* <a>
                        <div className="row-span-2 inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                          <BiLogoPlayStore />
                          Playstore
                        </div>
                      </a> */}
                      <div className="col-span-2 inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                        <SiAlwaysdata />
                        REST API Integration
                      </div>
                      <div className="col-span-2 inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                        <FaMapMarkerAlt />
                        GPS & Location
                      </div>
                      <a href="https://play.google.com/store/apps/details?id=com.mobile_telemetering&hl=en" target="_blank" className="col-span-4 inline-flex justify-between items-center gap-2 bg-gradient-to-r from-orange-500/10 via-orange-400/10 to-orange-500/10 hover:from-orange-600 hover:via-orange-500 hover:to-orange-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                          <BiLogoPlayStore />
                          Published On Playstore
                          <BiSolidRightArrowAlt />
                      </a>
                      <div className="col-span-4 flex-row text-md italic font-medium">
                        Released On <span className="not-italic font-semibold">(Mar 2024)</span>
                      </div>
                    </div>
                  </div>
                  {/* result image */}
                  <div className="flex">
                    <Stack
                      randomRotation={true}
                      sensitivity={180}
                      sendToBackOnClick={false}
                      cardsData={images}
                    />
                  </div>
                </div>
              </SpotlightCard>
              <SpotlightCard className="custom-spotlight-card"  spotlightColor="rgba(255, 174, 0, 0.2)">
                <div className="container flex flex-row">
                  <div className="">
                    <div>
                      <h2 className="text-5xl font-bold">Jenos</h2>
                      {/* <img src="" alt="" /> */}
                    </div>
                    <p className="w-sm py-2 text-justify">
                      {/* Jenos is a mobile application for engineers to record attendance and input daily work activities. The data is sent to monitoring staff, who can view progress and performance through interactive job graphs, making it easier to track and analyze field operations.  */}
                      Mobile app for engineer attendance, work activity logging, and progress visualization through graphs.
                    </p>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="col-span-2 inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                        <FaFlutter />
                        Flutter
                      </div>
                      <div className="col-span-2 inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                        <FaDartLang /> 
                        Dart
                      </div>
                      {/* <a>
                        <div className="row-span-2 inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                          <BiLogoPlayStore />
                          Playstore
                        </div>
                      </a> */}
                      <div className="col-span-2 inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                        <TbCloudDataConnection />
                        Data Visualization
                      </div>
                      <div className="col-span-2 inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                        <MdDashboardCustomize />
                        Custom UI & Animation
                      </div>
                      <a href="https://play.google.com/store/apps/details?id=com.jenos&hl=id" target="_blank" className="col-span-4 inline-flex justify-between items-center gap-2 bg-gradient-to-r from-orange-500/10 via-orange-400/10 to-orange-500/10 hover:from-orange-600 hover:via-orange-500 hover:to-orange-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                          <BiLogoPlayStore />
                          Published On Playstore
                          <BiSolidRightArrowAlt />
                      </a>
                      <div className="col-span-4 flex-row text-md italic font-medium">
                        Released On <span className="not-italic font-semibold">(Aug 2024)</span>
                      </div>
                    </div>
                  </div>
                  {/* result image */}
                  <div className="flex">
                    <Stack
                      randomRotation={true}
                      sensitivity={180}
                      sendToBackOnClick={false}
                      cardsData={images2}
                    />
                  </div>
                </div>
              </SpotlightCard>
              <SpotlightCard className="custom-spotlight-card"  spotlightColor="rgba(255, 174, 0, 0.2)">
                <div className="container flex flex-row">
                  <div className="">
                    <div>
                      <h2 className="text-5xl font-bold">Movie Apps</h2>
                      {/* <img src="" alt="" /> */}
                    </div>
                    <p className="w-sm py-2 text-justify">
                      {/* Jenos is a mobile application for engineers to record attendance and input daily work activities. The data is sent to monitoring staff, who can view progress and performance through interactive job graphs, making it easier to track and analyze field operations.  */}
                      A mobile app for browsing movies, viewing details, and watching trailers using TMDb API.
                    </p>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="col-span-2 inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                        <FaFlutter />
                        Flutter
                      </div>
                      <div className="col-span-2 inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                        <FaDartLang /> 
                        Dart
                      </div>
                      {/* <a>
                        <div className="row-span-2 inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                          <BiLogoPlayStore />
                          Playstore
                        </div>
                      </a> */}
                      <div className="col-span-2 inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                        <FaYoutube />
                        Youtube Player
                      </div>
                      <div className="col-span-2 inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                        <MdDashboardCustomize />
                        Custom UI
                      </div>
                      <div className="col-span-4 inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                        <SiThemoviedatabase />
                        TMDb API Integration
                      </div>
                      <div className="col-span-4 flex-row text-md italic font-medium">
                        Completed on <span className="not-italic font-semibold">(Mar 2025)</span>
                      </div>
                    </div>
                  </div>
                  {/* result image */}
                  <div className="flex">
                    <Stack
                      randomRotation={true}
                      sensitivity={180}
                      sendToBackOnClick={false}
                      cardsData={images3}
                    />
                  </div>
                </div>
              </SpotlightCard>
              <SpotlightCard className="custom-spotlight-card"  spotlightColor="rgba(255, 174, 0, 0.2)">
                <div className="container flex flex-row">
                  <div className="">
                    <div>
                      <h2 className="text-5xl font-bold">Smart Ring Apps</h2>
                      {/* <img src="" alt="" /> */}
                    </div>
                    <p className="w-sm py-2 text-justify">
                      {/* Jenos is a mobile application for engineers to record attendance and input daily work activities. The data is sent to monitoring staff, who can view progress and performance through interactive job graphs, making it easier to track and analyze field operations.  */}
                      A mobile application designed to connect with a smart ring device, displaying real-time heart rate sensor data in interactive graphics. The app will also include additional health and activity tracking features to enhance user wellness insights. Currently under active development.
                    </p>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="col-span-2 inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                        <FaFlutter />
                        Flutter
                      </div>
                      <div className="col-span-2 inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                        <FaDartLang /> 
                        Dart
                      </div>
                      {/* <a>
                        <div className="row-span-2 inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                          <BiLogoPlayStore />
                          Playstore
                        </div>
                      </a> */}
                      <div className="col-span-2 inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                        <FaBluetooth />
                        Bluetooth
                      </div>
                      <div className="col-span-2 inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                        <MdDashboardCustomize />
                        Custom UI
                      </div>
                      <div className="col-span-4 flex-row text-md italic font-bold">
                        Still On Progress
                      </div>
                    </div>
                  </div>
                  {/* result image */}
                  <div className="flex">
                    <Stack
                      randomRotation={true}
                      sensitivity={180}
                      sendToBackOnClick={false}
                      cardsData={images5}
                    />
                  </div>
                </div>
              </SpotlightCard>
            </div>
            <div className="grid gap-4 py-4">
              <SpotlightCard className="custom-spotlight-card"  spotlightColor="rgba(255, 174, 0, 0.2)">
                <div className="container flex flex-row">
                  {/* result image */}
                  <div className="flex-auto">
                    <Stack
                      randomRotation={true}
                      sensitivity={180}
                      sendToBackOnClick={false}
                      cardsData={images4}
                      cardDimensions={{ width: 800, height: 350 }}
                    />
                  </div>
                  <div className="flex-auto pl-20">
                    <div className="flex">
                      <h2 className="text-5xl font-bold ">SISAPPRA</h2>
                      {/* <img src="" alt="" /> */}
                    </div>
                    <p className="w-xl py-2 text-justify">
                      {/* Turelth is a mobile application designed to track daily sensor data input and cleanliness updates from field operators. The data is sent directly to monitoring staff on the server, enabling them to verify input completion sensor, observe cleanliness progress, and detect any missed submissions in real time.  */}
                      A web-based information system for Satpol PP DKI Jakarta. Contributed to the personnel module with employee data management, maps, field officer login UI, reporting, data management, and master data modules, including responsive mobile design.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                        <FaReact />
                        React
                      </div>
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                        <RiNextjsFill />
                        NextJS
                      </div>
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                        <BiLogoTypescript />
                        Typescript
                      </div>
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                        <SiRedux />
                        Redux
                      </div>
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                        <SiMantine />
                        Mantine
                      </div>
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                        <SiLeaflet />
                        Leaflet
                      </div>
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                        <SiAxios />
                        Axios
                      </div>
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                        <RiFileExcel2Fill />
                        ExcelJS
                      </div>
                      <a href="https://sisappra-satpolpp.jakarta.go.id/authentication/signin" target="_blank" className="col-span-4 inline-flex justify-between items-center gap-2 bg-gradient-to-r from-orange-500/10 via-orange-400/10 to-orange-500/10 hover:from-orange-600 hover:via-orange-500 hover:to-orange-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                          <IoIosLink />
                          Check the websites
                          <BiSolidRightArrowAlt />
                      </a>
                      <div className="col-span-4 flex-row text-md italic font-medium">
                        Contributed until <span className="not-italic font-semibold">(Des 2024)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
              <SpotlightCard className="custom-spotlight-card"  spotlightColor="rgba(255, 174, 0, 0.2)">
                <div className="container flex flex-row">
                  {/* result image */}
                  <div className="flex-auto">
                    <Stack
                      randomRotation={true}
                      sensitivity={180}
                      sendToBackOnClick={false}
                      cardsData={images6}
                      cardDimensions={{ width: 800, height: 350 }}
                    />
                  </div>
                  <div className="flex-auto pl-20">
                    <div className="flex">
                      <h2 className="text-5xl font-bold ">Company Profile</h2>
                      {/* <img src="" alt="" /> */}
                    </div>
                    <p className="w-xl py-2 text-justify">
                      {/* Turelth is a mobile application designed to track daily sensor data input and cleanliness updates from field operators. The data is sent directly to monitoring staff on the server, enabling them to verify input completion sensor, observe cleanliness progress, and detect any missed submissions in real time.  */}
                      A web-based company profile content management system for PT. Hydant Inovasi Semesta. Contributed to the development of dynamic content modules, service management, gallery, client, and responsive mobile-friendly UI/UX design, enabling easy updates through an admin CMS panel.
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                        <FaHtml5 />
                        HTML
                      </div>
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                        <FaCss3 />
                        CSS
                      </div>
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                        <SiJavascript />
                        Javascript
                      </div>
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                        <FaLaravel />
                        Laravel
                      </div>
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                        <SiBootstrap />
                        Bootstrap
                      </div>
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-500/10 via-gray-400/10 to-gray-500/10 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                        <SiPostgresql />
                        Postgres
                      </div>
                      <a href="https://hyd-ant.id" target="_blank" className="col-span-3 inline-flex justify-between items-center gap-2 bg-gradient-to-r from-orange-500/10 via-orange-400/10 to-orange-500/10 hover:from-orange-600 hover:via-orange-500 hover:to-orange-600 py-2 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 font-bold">
                          <IoIosLink />
                          Check the websites
                          <BiSolidRightArrowAlt />
                      </a>
                      <div className="col-span-3 flex-row text-md italic font-medium">
                        Finished on <span className="not-italic font-semibold">(Jun 2025)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </FadeAnimation>
        </div>
      </div>
      {/* Experience */}
      <div className="flex flex-col w-full h-screen" id="experience">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 text-lg text-center text-medium p-4">
            <span className="inline-block animate-spin-slow text-4xl text-gray-400">✦</span>
            MY EXPERIENCE
          </div>
          {/* <WorkExperience experiences={experiences} /> */}
          <div className="flex rounded-lg p-8">
            <div>
              <h2 className="text-xl text-gray-400 py-3">Freelance</h2>
              <RotatingText
                texts={['Web Developer', 'UI/UX Design']}
                mainClassName="text-6xl font-bold text-white text-center"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={5000}
              />
              <div className="text-xl text-gray-400 py-3">Jul 2023 - Present</div>
              {/* <ul className="list-disc px-4">
                <li>Rebuild Loan Management System Bank BJB KPR</li>
                <li>Build Sistem Informasi Satuan Polisi Pamong Praja DKI Jakarta (SISAPPRA)</li>
              </ul> */}
            </div>
          </div>
          <hr className="border-gray-600 mx-8"/>
          <div className="flex rounded-lg p-8">
            <div>
              <h2 className="text-xl text-gray-400 py-3">PT Hydant Inovasi Semesta</h2>
              <RotatingText
                texts={['Frontend Developer', 'Flutter Developer']}
                mainClassName="text-6xl font-bold text-white text-center"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={5000}
              />
              <div className="text-xl text-gray-400 py-3">Oct 2023 - Present</div>
              {/* <ul className="list-disc px-4">
                <li>Rebuild Loan Management System Bank BJB KPR</li>
                <li>Build Sistem Informasi Satuan Polisi Pamong Praja DKI Jakarta (SISAPPRA)</li>
              </ul> */}
            </div>
          </div>

          <hr className="border-gray-600 mx-8"/>
          <div className="flex rounded-lg p-8">
            <div>
              <h2 className="text-xl text-gray-400 py-3">PT Tristar Surya Gemilang</h2>
              <h1 className="text-6xl font-bold">Frontend Developer</h1>
              <div className="text-xl text-gray-400 py-3">Sep 2022 - May 2025</div>
              {/* <ul className="list-disc px-4">
                <li>Rebuild Loan Management System Bank BJB KPR</li>
                <li>Build Sistem Informasi Satuan Polisi Pamong Praja DKI Jakarta (SISAPPRA)</li>
              </ul> */}
            </div>
          </div>

          <hr className="border-gray-600 mx-8 pb-10"/>
          {/* <div className="flex">
            <div className="">
              
            </div>
            <div>
              <h1 className="text-2xl font-bold">PT Hydant Inovasi Semesta</h1>
              <h2>Flutter Developer</h2>
              <div>Oct 2023 - Present</div>
              <ul>
                <li>Build application Jenos</li>
                <li>Build application Turelth</li>
                <li>Build company profile websites</li>
              </ul>
            </div>
          </div> */}
          
          {/* <div className="py-60">
            <TextPressure
              text="Coming Soon!"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={36}
            />
          </div> */}
        </div>
        <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            ariaLabel="Technology partners"
          />
        </div>
      </div>
      {/* Footer */}
      <footer className="w-full pb-40 bg-black text-white flex flex-col items-center gap-6">
        {/* CTA */}
        <h2 className="text-lg text-center font-light">Let’s Connect!</h2>

        {/* Social Links */}
        <div className="flex gap-6 text-3xl">
          <a
            href="https://www.linkedin.com/in/sena-ramadhan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/6281321796318"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/nzsr_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          Design & built by Sena Ramadhan.
        </p>
      </footer>
      {/* About */}
        {/* <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={0}
          blurStrength={3}
        >
            Projects
        </ScrollReveal> */}
        {/* <ScrollStack >
          <ScrollStackItem>
            <h2>Card 1</h2>
            <p>This is the first card in the stack</p>
          </ScrollStackItem>
          <ScrollStackItem>
            <h2>Card 2</h2>
            <p>This is the second card in the stack</p>
          </ScrollStackItem>
          <ScrollStackItem>
            <h2>Card 3</h2>
            <p>This is the third card in the stack</p>
          </ScrollStackItem>
        </ScrollStack> */}
    </>
  );
}