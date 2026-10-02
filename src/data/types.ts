export type ProjectStatus = 'live' | 'wip' | 'archived';

export type ProjectCategory =
  | 'fullstack'
  | 'ai-ml'
  | 'data-analysis'
  | 'cybersecurity'
  | 'experiment';

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  year: number;
  status: ProjectStatus;
  category: ProjectCategory;
  tags: string[];
  stack: string[];
  thumbnail: string;
  screenshots?: string[];
  liveUrl?: string;
  repoUrl?: string;
  liveEmbed?: boolean;
  embedUrl?: string;
  featured?: boolean;
  metrics?: Record<string, string>;
  accent?: string;
  dynamicMedia?: boolean;
}

export interface TimelineEntry {
  company: string;
  role: string;
  start: string;
  end: string | 'present';
  summary?: string;
}

export interface Language {
  name: string;
  level: string;
  fluency: 0 | 1 | 2 | 3 | 4 | 5;
}

export interface Profile {
  name: string;
  nickname: string;
  handle: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  links: { linkedin: string; telegram: string; github?: string; whatsapp?: string };
  bio: string;
  resumePath: string;
  languages: Language[];
  availability: 'open' | 'freelance' | 'closed';
  timeline: TimelineEntry[];
}