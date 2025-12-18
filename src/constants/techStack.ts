// constants/tech-logo.constants.ts

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiCodeigniter,
  SiLaravel,
  SiBootstrap,
  SiTailwindcss,
  SiFlutter,
  SiDart,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiGithub,
  SiGitlab,
  SiNodedotjs,
} from "react-icons/si";
import {
  BiLogoVisualStudio,
  BiLogoPostgresql,
  BiLogoAndroid,
} from "react-icons/bi";
import { TechLogo } from "@/types/tech.types";

export const TECH_LOGOS: TechLogo[] = [
  {
    icon: SiHtml5,
    title: "HTML5",
    href: "https://www.w3schools.com/html/html_intro.asp",
  },
  {
    icon: SiCss3,
    title: "CSS",
    href: "https://www.w3schools.com/css/css_intro.asp",
  },
  {
    icon: SiJavascript,
    title: "Javascript",
    href: "https://www.w3schools.com/js/js_intro.asp",
  },
  {
    icon: SiCodeigniter,
    title: "CI",
    href: "https://codeigniter.com",
  },
  {
    icon: SiLaravel,
    title: "Laravel",
    href: "https://laravel.com",
  },
  {
    icon: SiBootstrap,
    title: "Bootstrap",
    href: "https://getbootstrap.com",
  },
  {
    icon: SiTailwindcss,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    icon: SiFlutter,
    title: "Flutter",
    href: "https://flutter.dev",
  },
  {
    icon: SiDart,
    title: "Dart",
    href: "https://dart.dev",
  },
  {
    icon: SiReact,
    title: "React",
    href: "https://react.dev",
  },
  {
    icon: SiNextdotjs,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    icon: SiTypescript,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    icon: SiGithub,
    title: "Github",
    href: "http://github.com",
  },
  {
    icon: SiGitlab,
    title: "Gitlab",
    href: "http://gitlab.com",
  },
  {
    icon: SiNodedotjs,
    title: "NodeJS",
    href: "https://nodejs.org/en",
  },
  {
    icon: BiLogoVisualStudio,
    title: "VSCode",
    href: "https://code.visualstudio.com",
  },
  {
    icon: BiLogoPostgresql,
    title: "Postgresql",
    href: "https://www.postgresql.org",
  },
  {
    icon: BiLogoAndroid,
    title: "Android",
    href: "https://www.android.com/intl/id_id/",
  },
];