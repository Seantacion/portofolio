// constants/projects.constants.ts

import {
  FaMapMarkerAlt,
  FaYoutube,
  FaBluetooth,
  FaReact,
  FaHtml5,
  FaCss3,
  FaLaravel,
} from "react-icons/fa";
import {
  SiAlwaysdata,
  SiThemoviedatabase,
  SiRedux,
  SiMantine,
  SiLeaflet,
  SiAxios,
  SiJavascript,
  SiBootstrap,
  SiPostgresql,
  SiWireshark,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiRedis,
  SiGooglegemini,
  SiVercel,
} from "react-icons/si";
import type { Project } from "@/types/project.types";
import {
  COMPANY_PROFILE_IMAGES,
  JENOS_IMAGES,
  MOVIE_IMAGES,
  NATHING_IMAGES,
  SISAPPRA_IMAGES,
  SMART_RING_IMAGES,
  TURELTH_IMAGES,
} from "./project.images";
import { FaDartLang, FaFlutter } from "react-icons/fa6";
import { BiLogoPlayStore, BiLogoTypescript } from "react-icons/bi";
import { TbCloudDataConnection } from "react-icons/tb";
import { MdDashboardCustomize } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { RiNextjsFill, RiFileExcel2Fill, RiFirebaseLine } from "react-icons/ri";
export const PROJECTS: Project[] = [
  {
    id: "turelth",
    title: "Turelth",
    description:
      "Mobile app for monitoring daily sensor data input and cleanliness progress from field operators.",
    layout: "mobile",
    images: TURELTH_IMAGES,
    technologies: [
      { icon: FaFlutter, label: "Flutter" },
      { icon: FaDartLang, label: "Dart" },
      { icon: SiAlwaysdata, label: "REST API Integration" },
      { icon: FaMapMarkerAlt, label: "GPS & Location" },
    ],
    status: { type: "released", date: "Mar 2024" },
    link: {
      icon: BiLogoPlayStore,
      label: "Published On Playstore",
      url: "https://play.google.com/store/apps/details?id=com.mobile_telemetering&hl=en",
    },
  },
  {
    id: "jenos",
    title: "Jenos",
    description:
      "Mobile app for engineer attendance, work activity logging, and progress visualization through graphs.",
    layout: "mobile",
    images: JENOS_IMAGES,
    technologies: [
      { icon: FaFlutter, label: "Flutter" },
      { icon: FaDartLang, label: "Dart" },
      { icon: TbCloudDataConnection, label: "Data Visualization" },
      { icon: MdDashboardCustomize, label: "Custom UI & Animation" },
    ],
    status: { type: "released", date: "Aug 2024" },
    link: {
      icon: BiLogoPlayStore,
      label: "Published On Playstore",
      url: "https://play.google.com/store/apps/details?id=com.jenos&hl=id",
    },
  },
  // {
  //   id: "movie-app",
  //   title: "Movie Apps",
  //   description:
  //     "A mobile app for browsing movies, viewing details, and watching trailers using TMDb API.",
  //   layout: "mobile",
  //   images: MOVIE_IMAGES,
  //   technologies: [
  //     { icon: FaFlutter, label: "Flutter" },
  //     { icon: FaDartLang, label: "Dart" },
  //     { icon: FaYoutube, label: "Youtube Player" },
  //     { icon: MdDashboardCustomize, label: "Custom UI" },
  //   ],
  //   status: { type: "completed", date: "Mar 2025" },
  //   link: {
  //     icon: SiThemoviedatabase,
  //     label: "TMDb API Integration",
  //     url: "https://developer.themoviedb.org/docs/getting-started",
  //   },
  // },
  {
    id: "smart-ring",
    title: "Smart Ring Apps",
    description:
      "A mobile application designed to connect with a smart ring device, displaying real-time heart rate sensor data in interactive graphics. The app will also include additional health and activity tracking features to enhance user wellness insights. Currently under active development.",
    layout: "mobile",
    images: SMART_RING_IMAGES,
    technologies: [
      { icon: FaFlutter, label: "Flutter" },
      { icon: FaDartLang, label: "Dart" },
      { icon: FaBluetooth, label: "Bluetooth" },
      { icon: SiWireshark, label: "Wireshark" },
      { icon: RiFirebaseLine, label: "Firebase" },
      { icon: MdDashboardCustomize, label: "Custom UI" },
    ],
    status: { type: "completed", date: "Jan 2026" },
  },
  {
    id: "sisappra",
    title: "SISAPPRA",
    description:
      "A web-based information system for Satpol PP DKI Jakarta. Contributed to the personnel module with employee data management, maps, field officer login UI, reporting, data management, and master data modules, including responsive mobile design.",
    layout: "mobile",
    images: SISAPPRA_IMAGES,
    technologies: [
      { icon: FaReact, label: "React" },
      { icon: RiNextjsFill, label: "NextJS" },
      { icon: BiLogoTypescript, label: "Typescript" },
      { icon: SiRedux, label: "Redux" },
      { icon: SiMantine, label: "Mantine" },
      { icon: SiLeaflet, label: "Leaflet" },
      { icon: SiAxios, label: "Axios" },
      { icon: RiFileExcel2Fill, label: "ExcelJS" },
    ],
    status: { type: "contributed", date: "Des 2024" },
    link: {
      icon: IoIosLink,
      label: "Check the websites",
      url: "https://sisappra-satpolpp.jakarta.go.id/authentication/signin",
    },
  },
  {
    id: "company-profile",
    title: "Company Profile",
    description:
      "A web-based company profile content management system for PT. Hydant Inovasi Semesta. Contributed to the development of dynamic content modules, service management, gallery, client, and responsive mobile-friendly UI/UX design, enabling easy updates through an admin CMS panel.",
    layout: "mobile",
    images: COMPANY_PROFILE_IMAGES,
    technologies: [
      { icon: FaHtml5, label: "HTML" },
      { icon: FaCss3, label: "CSS" },
      { icon: SiJavascript, label: "Javascript" },
      { icon: FaLaravel, label: "Laravel" },
      { icon: SiBootstrap, label: "Bootstrap" },
      { icon: SiPostgresql, label: "Postgres" },
    ],
    status: { type: "finished", date: "Jun 2025" },
    link: {
      icon: IoIosLink,
      label: "Check the websites",
      url: "https://hyd-ant.id",
    },
  },
  {
    id: "nathing",
    title: "Nathing",
    description:
      "A personal productivity platform built for myself, free for everyone. Features include a Pomodoro timer with task management, Fluent English teleprompter with AI-generated scripts, and a Habit Tracker with streak tracking, statistics, and a clean minimal UI.",
    layout: "mobile",
    images: NATHING_IMAGES,
    technologies: [
      { icon: SiNextdotjs, label: "Next.js" },
      { icon: SiTypescript, label: "TypeScript" },
      { icon: SiTailwindcss, label: "Tailwind CSS" },
      { icon: SiPrisma, label: "Prisma" },
      { icon: SiPostgresql, label: "PostgreSQL" },
      { icon: SiRedis, label: "Redis" },
      { icon: SiGooglegemini, label: "Gemini AI" },
      { icon: SiVercel, label: "Vercel" },
    ],
    status: { type: "finished", date: "Apr 2026" },
    link: {
      icon: IoIosLink,
      label: "Visit Nathing",
      url: "https://nathing.vercel.app", // ganti kalau domain beda
    },
  },
];
