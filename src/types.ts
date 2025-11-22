export interface Project {
  id: number;
  title: string;
  role: string;
  description: string;
  techStack: string[];
  images: string[]; // Changed from single string to array
  demoUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  name: string;
  category: 'backend' | 'frontend' | 'database' | 'tools';
  icon: string;
  level: number;
}

export interface Profile {
  name: string;
  title: string;
  about: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
}