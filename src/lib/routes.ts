export const routes = {
  home: '/',
  projects: '/projects',
  projectDetail: (slug: string) => `/projects/${slug}`,
  about: '/about',
  contact: '/contact',
} as const;

export const navItems = [
  { label: 'Home', href: routes.home },
  { label: 'Projects', href: routes.projects },
  { label: 'About', href: routes.about },
  { label: 'Contact', href: routes.contact },
] as const;