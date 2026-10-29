import type { Project } from '../../data/types';
import { StatusChip } from './StatusChip';

export function ProjectHero({ project }: { project: Project }) {
  return (
    <div className="relative overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-bg-2)] py-20 md:py-32">
      {/* Optional Background Accent */}
      <div 
        className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 opacity-20 blur-[100px] pointer-events-none"
        style={{ backgroundColor: project.accent || 'var(--color-accent)' }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center z-10">
        <div className="mb-6 flex items-center justify-center gap-4">
          <StatusChip status={project.status} />
          <span className="font-mono text-sm text-[var(--color-dim)]">{project.year}</span>
        </div>

        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-[var(--color-ink)] md:text-6xl">
          {project.title}
        </h1>
        
        <p className="mx-auto mb-8 max-w-2xl text-lg text-[var(--color-dim)] md:text-xl">
          {project.tagline}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {project.tags.map(tag => (
            <span key={tag} className="rounded-full border border-[var(--color-line)] bg-[var(--color-glass)] px-3 py-1 font-mono text-xs uppercase tracking-wider text-[var(--color-dim)]">
              {tag}
            </span>
          ))}
        </div>

        {/* 🚀 THE FIX: This is now a standard <a> tag, not an iframe or dead button */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-[var(--color-ink)] px-6 py-3 text-sm font-semibold text-[var(--color-bg)] transition-transform hover:scale-105"
            >
              Live Site ↗
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-[var(--color-line)] bg-[var(--color-glass)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)]"
            >
              Source ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}