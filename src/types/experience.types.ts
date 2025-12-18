// types/experience.types.ts

export interface Experience {
  company: string;
  roles: string[]; // Multiple roles buat yang rotating
  period: string;
  description?: string;
  highlights?: string[]; // Buat list achievements (commented out di code lu)
  isRotating?: boolean; // Flag apakah role-nya rotating atau static
}