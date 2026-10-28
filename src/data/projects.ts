import type { Project } from './types';

export const projects: Project[] = [
  {
    slug: 'artec',
    title: 'Artec',
    tagline: 'Premium gift shop and crafting platform.',
    description:
      'A full-stack, Arabic-first e-commerce platform for a custom gift shop. ' +
      'Features dynamic product management with Neon PostgreSQL, Google Drive ' +
      'media integration, live gold/currency market pricing, and a custom ' +
      'WhatsApp checkout flow.',
    year: 2024, // Changed to 2024 so it shows up in recent projects
    status: 'live',
    category: 'fullstack',
    tags: ['E-commerce', 'RTL', 'Full-Stack'],
    stack: ['React', 'TypeScript', 'Tailwind', 'Vercel', 'Neon'],
    thumbnail: '/projects/artec.png',
    liveUrl: 'https://artec-k.vercel.app/',
    repoUrl: 'https://github.com/Da94-St/artec',
    featured: true,
    metrics: {
      Database: 'Neon PostgreSQL',
      Media: 'Google Drive API',
    },
    accent: '#d4af37',
  },
  {
    slug: 'voltique',
    title: 'Voltique',
    tagline: 'Simple e-commerce with embedded Bolt AI frames.',
    description:
      'A streamlined e-commerce experience integrating Bolt AI frames to ' +
      'provide dynamic, interactive product visualization. Designed with a ' +
      'focus on clean UI and seamless shopping flow.',
    year: 2024,
    status: 'live',
    category: 'fullstack',
    tags: ['E-commerce', 'AI', 'UI/UX'],
    stack: ['React', 'Tailwind', 'Bolt AI'],
    thumbnail: '/projects/voltique.png',
    liveUrl: 'https://voltique-bay.vercel.app/',
    repoUrl: 'https://github.com/Da94-St/voltique',
    dynamicMedia: true,
    metrics: {
      Frames: 'Bolt AI',
      Style: 'Minimalist',
    },
    accent: '#000000',
  },
  {
    slug: 'nova-tech',
    title: 'Nova Tech',
    tagline: 'AI-powered news blog with immersive 3D glassmorphism.',
    description:
      'A cutting-edge news portal featuring AI-generated blog content. The UI ' +
      'boasts neat glassmorphism styles, stunning 3D animation effects, and an ' +
      'awesome overlay system for a deeply engaging reading experience.',
    year: 2024,
    status: 'live', // FIXED: Changed from 'wip' to 'live' so the link works
    category: 'experiment',
    tags: ['AI', '3D Animation', 'Glassmorphism'],
    stack: ['React', 'Three.js', 'Tailwind', 'AI'],
    thumbnail: '/projects/nova-tech.png',
    liveUrl: 'https://nova-tech-da.vercel.app', 
    repoUrl: 'https://github.com/Da94-St/nova-tech',
    metrics: {
      Content: 'AI Generated',
      Design: '3D Glass',
    },
    accent: '#00e5ff',
  },
  {
    slug: 'distrovisor',
    title: 'DistroVisor',
    tagline: 'A field guide to Linux distributions for penetration testers.',
    description:
      'VISOR is a hands-on reference for cybersecurity and offensive security ' +
      'work. Compare 18 Linux distributions pre-configured for penetration ' +
      'testing — Kali, Parrot, BlackArch, and more. Explore bundled toolkits ' +
      'grouped by phase: reconnaissance, exploitation, post-exploitation, and ' +
      'forensics. Follow curated learning tracks mapped to OSCP, CEH, and ' +
      'practical certification paths.',
    year: 2024,
    status: 'live',
    category: 'cybersecurity',
    tags: ['Pentest', 'Linux', 'Security'],
    stack: ['TypeScript', 'React', 'Vite', 'Tailwind'],
    thumbnail: '/projects/distrovisor.png',
    liveUrl: 'https://distro-visor.vercel.app/',
    repoUrl: 'https://github.com/Da94-St/DistroVisor',
    featured: false, 
    metrics: {
      Distributions: '18',
      Toolkits: '6',
      'Learning tracks': '4',
    },
    accent: '#a83232',
  },
  {
    slug: 'phoenix-classifier',
    title: 'Phoenix Classifier',
    tagline: 'Real-time text classification at the edge.',
    description:
      'A fine-tuned transformer served through a lightweight FastAPI ' +
      'inference layer. Runs on a single CPU core, under 15ms per request.',
    year: 2023,
    status: 'live',
    category: 'ai-ml',
    tags: ['NLP', 'Edge', 'Inference'],
    stack: ['Python', 'PyTorch', 'FastAPI', 'Docker'],
    thumbnail: '/projects/phoenix-classifier.png',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/DanteV91',
    dynamicMedia: true,
    metrics: {
      Accuracy: '94.2%',
      Latency: '12 ms',
    },
    accent: '#3b7fd4',
  },
  {
    slug: 'ledger-lite',
    title: 'Ledger Lite',
    tagline: 'A plain-text accounting tool for freelancers.',
    description:
      'Double-entry bookkeeping in a single SQLite file. Imports bank ' +
      'CSV exports, categorizes by rule, and generates a tax-ready summary.',
    year: 2023,
    status: 'wip',
    category: 'data-analysis',
    tags: ['Accounting', 'SQLite', 'CLI'],
    stack: ['TypeScript', 'Node.js', 'Drizzle', 'SQLite'],
    thumbnail: '/projects/ledger-lite.png',
    repoUrl: 'https://github.com/DanteV91',
    metrics: {
      'CSV formats supported': '7',
    },
    accent: '#b8860b',
  },
  {
    slug: 'market-pulse',
    title: 'Market Pulse',
    tagline: 'Daily sector rotation dashboard.',
    description:
      'A dashboard tracking capital flows across eleven market sectors ' +
      'using public data. Retired in 2023 when the underlying feed was ' +
      'discontinued.',
    year: 2022,
    status: 'archived',
    category: 'data-analysis',
    tags: ['Markets', 'ETL', 'Visualization'],
    stack: ['Python', 'pandas', 'DuckDB', 'Plotly'],
    thumbnail: '/projects/market-pulse.png',
    metrics: {
      'Sectors tracked': '11',
    },
    accent: '#7a7570',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProject(): Project | undefined {
  return projects.find((p) => p.featured);
}

export function getRecentProjects(count = 3): Project[] {
  return [...projects].sort((a, b) => b.year - a.year).slice(0, count);
}

export function getAdjacentProjects(slug: string): {
  prev?: Project;
  next?: Project;
} {
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx < 0) return {};
  return {
    prev: idx > 0 ? projects[idx - 1] : undefined,
    next: idx < projects.length - 1 ? projects[idx + 1] : undefined,
  };
}