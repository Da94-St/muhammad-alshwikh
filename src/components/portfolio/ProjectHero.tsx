import type { Project } from '../../data/types';
import { StatusChip } from './StatusChip';
import { GlassButton } from '../glass/GlassButton';

export function ProjectHero({ project }: { project: Project }) {
  return (
    <div className="relative overflow-hidden py-20 md:py-32">
      {/* Background Accent Glow */}
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

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {project.tags.map(tag => (
            <span key={tag} className="rounded-full border border-[var(--color-line)] bg-[var(--color-glass)] px-3 py-1 font-mono text-xs uppercase tracking-wider text-[var(--color-dim)]">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* FIXED: Wrapped in <a> tags for guaranteed external routing */}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <GlassButton className="flex items-center gap-2 pointer-events-none">
                Live Site ↗
              </GlassButton>
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <GlassButton className="flex items-center gap-2 pointer-events-none">
                Source ↗
              </GlassButton>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
