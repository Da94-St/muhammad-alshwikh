import { useMemo, useState } from 'react';
import { usePageMeta } from '../hooks/usePageMeta';
import { Section } from '../components/layout/Section';
import { ProjectGrid } from '../components/portfolio/ProjectGrid';
import { ProjectFilters } from '../components/portfolio/ProjectFilters';
import { projects } from '../data/projects';
import type { ProjectCategory, ProjectStatus } from '../data/types';

export default function Projects() {
  usePageMeta({
    title: 'Projects',
    description: 'Selected work in data, analytics, cybersecurity, and AI.',
  });

  const [category, setCategory] = useState<ProjectCategory | 'all'>('all');
  const [status, setStatus] = useState<ProjectStatus | 'all'>('all');

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (category !== 'all' && p.category !== category) return false;
      if (status !== 'all' && p.status !== status) return false;
      return true;
    });
  }, [category, status]);

  return (
    <Section eyebrow="Projects" title="Everything I've built and shipped">
      <div className="mb-10">
        <ProjectFilters
          category={category}
          status={status}
          onCategoryChange={setCategory}
          onStatusChange={setStatus}
        />
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-sm text-[var(--color-dim)]">
          No projects match those filters.
        </p>
      ) : (
        <ProjectGrid projects={filtered} />
      )}

      <p className="mt-10 font-mono text-xs text-[var(--color-dim)]">
        {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
      </p>
    </Section>
  );
}