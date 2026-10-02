import { ProjectCard } from './ProjectCard';
import type { Project } from '../../data/types';

interface ProjectGridProps {
  projects: Project[];
  className?: string;
}

export function ProjectGrid({ projects, className }: ProjectGridProps) {
  const classes = [
    'grid gap-6 md:grid-cols-2 lg:grid-cols-3',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {projects.map((p) => (
        <ProjectCard key={p.slug} project={p} />
      ))}
    </div>
  );
}