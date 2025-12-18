// types/project.types.ts

import { IconType } from "react-icons";

export interface ProjectImage {
  id: number;
  img: string;
}

export interface ProjectTechnology {
  icon: IconType;
  label: string;
}

export interface ProjectLink {
  icon: IconType;
  label: string;
  url: string;
}

export type ProjectStatus = 
  | { type: 'released'; date: string }
  | { type: 'completed'; date: string }
  | { type: 'contributed'; date: string }
  | { type: 'finished'; date: string }
  | { type: 'in-progress' };

export type ProjectLayout = 'mobile' | 'web';

export interface Project {
  id: string;
  title: string;
  description: string;
  layout: ProjectLayout;
  images: ProjectImage[];
  technologies: ProjectTechnology[];
  status: ProjectStatus;
  link?: ProjectLink;
}