import { Link } from 'react-router-dom';
import { GlassCard } from '../glass/GlassCard';
import { StatusChip } from './StatusChip';
import { routes } from '../../lib/routes';
import type { Project } from '../../data/types';

function initials(title: string): string {
  const words = title.trim().split(/\s+/).slice(0, 2);
  return words.map((w) => w[0]?.toUpperCase() ?? '').join('');
}

export function ProjectCard({ project }: { project: Project }) {
  const accent = project.accent ?? '#8b949e';
  const hasThumb = Boolean(project.thumbnail);

  return (
    <Link
      to={routes.projectDetail(project.slug)}
      className="block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
    >
      <GlassCard className="flex h-full flex-col">
        <div
          className="relative mb-5 aspect-[16/10] overflow-hidden rounded-md border border-[var(--color-line)]"
          style={{
            background: `linear-gradient(135deg, color-mix(in oklab, ${accent} 28%, #ffffff), color-mix(in oklab, ${accent} 12%, #ffffff))`,
          }}
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center font-mono text-6xl font-bold tracking-tight"
            style={{ color: `color-mix(in oklab, ${accent} 60%, #2b2b2b)` }}
          >
            {initials(project.title)}
          </span>

          {hasThumb && (
            <img
              src={project.thumbnail}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.opacity = '0';
              }}
            />
          )}
        </div>

        <div className="mb-3 flex items-center justify-between gap-3">
          <StatusChip status={project.status} />
          <span className="font-mono text-sm text-[var(--color-dim)]">
            {project.year}
          </span>
        </div>

        <h3 className="project-card__title mb-2 font-bold tracking-tight text-[var(--color-ink)]">
          {project.title}
        </h3>
        <p className="project-card__tagline line-clamp-2 text-[var(--color-dim)]">
          {project.tagline}
        </p>

        {project.stack.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((s) => (
              <li
                key={s}
                className="rounded border border-[var(--color-line)] px-2 py-0.5 font-mono text-xs uppercase tracking-wider text-[var(--color-dim)]"
              >
                {s}
              </li>
            ))}
          </ul>
        )}
      </GlassCard>
    </Link>
  );
}