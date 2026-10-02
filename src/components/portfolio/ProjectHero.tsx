import { Link } from 'react-router-dom';
import { routes } from '../../lib/routes';
import { StatusChip } from './StatusChip';
import { TechStack } from './TechStack';
import { VectorBoundingBox } from '../glass/VectorBoundingBox';
import { formatCategory } from '../../lib/format';
import type { Project } from '../../data/types';

export function ProjectHero({ project }: { project: Project }) {
  const hasLive =
    Boolean(project.liveUrl) && project.liveUrl !== 'FILL_ME_IN';
  const hasRepo =
    Boolean(project.repoUrl) && project.repoUrl !== 'FILL_ME_IN';

  return (
    <header className="border-b border-[var(--color-line)]">
      <div className="mx-auto w-[90vw] max-w-[1280px] py-16 md:py-24">
        <Link to={routes.projects} className="glass-pill mb-8 inline-flex">
          ← All projects
        </Link>

        <div className="mb-5 flex flex-wrap items-center gap-3">
          <StatusChip status={project.status} />
          <span className="font-mono text-sm uppercase tracking-widest text-[var(--color-dim)]">
            {formatCategory(project.category)} · {project.year}
          </span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-[var(--color-ink)] md:text-5xl">
          {project.title}
        </h1>
        <p className="project-hero__tagline mt-5 max-w-2xl text-[var(--color-dim)]">
          {project.tagline}
        </p>

        {project.stack.length > 0 && (
          <div className="mt-8">
            <TechStack items={project.stack} />
          </div>
        )}

        {(hasLive || hasRepo) && (
          <div className="mt-12 flex flex-wrap items-center gap-8">
            {hasLive && project.liveUrl && (
              <VectorBoundingBox
                label="Live site"
                hoverLabel="Open in new tab"
                hint1="Click to open"
                focusLabel="Press Enter to open in a new tab"
                onClick={() =>
                  window.open(
                    project.liveUrl,
                    '_blank',
                    'noopener,noreferrer',
                  )
                }
              />
            )}
            {hasRepo && project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill"
              >
                Source ↗
              </a>
            )}
          </div>
        )}
      </div>
    </header>
  );
}