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
import { FaDartLang, FaFlutter, FaYoutube } from "react-icons/fa6";
import { SiAlwaysdata, SiAxios, SiLeaflet, SiMantine, SiRedux, SiThemoviedatabase } from "react-icons/si";
import { TbCloudDataConnection } from "react-icons/tb";
import { BiLogoPlayStore, BiLogoTypescript, BiRightArrow, BiSolidRightArrowAlt } from "react-icons/bi";
import { MdDashboardCustomize, MdWork, MdWorkOutline } from "react-icons/md";
import { FaBluetooth, FaMapMarkerAlt, FaReact } from "react-icons/fa";
import { RiFileExcel2Fill, RiNextjsFill } from "react-icons/ri";
import { IoIosLink } from "react-icons/io";
import TextPressure from "./components/TextAnimations/TextPressure/TextPressure";
import ScrollFloat from "./components/TextAnimations/ScrollFloat/ScrollFloat";
import ScrollVelocity from "./components/TextAnimations/ScrollVelocity/ScrollVelocity";
import TextTrail from "./components/TextAnimations/TextTrail/TextTrail";
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

  // const items = [
  //   { label: "Home", href: "#" },
  //   { label: "About", href: "#" },
  //   { label: "Contact", href: "#" },
  // ];

  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { icon: <VscArchive size={18} />, label: 'Projects', onClick: () => window.scrollTo({ top: document.getElementById("projects")?.offsetTop || 0, behavior: 'smooth' }) },
    { icon: <MdWorkOutline size={18} />, label: 'Experience', onClick: () => window.scrollTo({ top: document.getElementById("experience")?.offsetTop || 0, behavior: 'smooth' }) },
    { icon: <VscAccount size={18} />, label: 'About', onClick: () => window.scrollTo({ top: document.getElementById("about")?.offsetTop || 0, behavior: 'smooth' }) },
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
                <button
                  onClick={() => {
                    const worksElement = document.getElementById("works");
                    if (worksElement) {
                      worksElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="relative px-6 py-3 rounded-lg font-semibold text-white bg-black overflow-hidden group shadow-lg"
                >
                  <span className="relative z-10">🚀 Explore My Works</span>
                  <span className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 animate-borderShine" />
                </button>
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
      {/* Projects */}
      <div className="flex w-full" id="projects">
        <div className="container mx-auto">
          {/* <h1 className="text-6xl font-bold py-10"> */}
            <ScrollFloat
            textClassName="text-6xl font-bold"
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
            >
              Projects
            </ScrollFloat>
          {/* </h1> */}
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
          </div>
        </div>
      </div>
      {/* Experience */}
      <div className="flex w-full h-screen" id="experience">
        <div className="container mx-auto">
          <ScrollFloat
            textClassName="text-6xl font-bold"
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
          >
            Experience
          </ScrollFloat>
          <div className="py-60">
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
          </div>
        </div>
      </div>
      {/* About */}
      <div className="w-full h-screen py-10" id="about">
        <div className="container mx-auto">
          <ScrollFloat
            textClassName="text-6xl font-bold"
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
          >
            About
          </ScrollFloat>
        </div>
          <div className="py-60">
            <ScrollVelocity
              texts={['Working in progress', 'Coming Soon']} 
              velocity={100} 
              className="custom-scroll-text"
            />
            {/* <TextTrail text="Hello World" /> */}
          </div>
      </div>
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