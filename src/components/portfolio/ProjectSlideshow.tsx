import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlassButton } from '../glass/GlassButton';
import { Chip } from '../ui/Chip';
import { StatusChip } from './StatusChip';
import { routes } from '../../lib/routes';
import { formatCategory } from '../../lib/format';
import type { Project } from '../../data/types';

function initials(title: string): string {
  return title
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');
}

interface ProjectSlideshowProps {
  projects: Project[];
}

export function ProjectSlideshow({ projects }: ProjectSlideshowProps) {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  if (projects.length === 0) return null;

  const current = projects[index];
  const accent = current.accent ?? '#a83232';
  const hasThumb = Boolean(current.thumbnail);
  const hasLive =
    Boolean(current.liveUrl) && current.liveUrl !== 'FILL_ME_IN';

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () =>
    setIndex((i) => Math.min(projects.length - 1, i + 1));

  return (
    <div className="ps-wrap">
      <article className="ps-slide">
        <button
          type="button"
          onClick={() => navigate(routes.projectDetail(current.slug))}
          className="ps-media cursor-pointer"
          style={{
            background: `linear-gradient(135deg, color-mix(in oklab, ${accent} 34%, #ffffff), color-mix(in oklab, ${accent} 14%, #ffffff))`,
          }}
          aria-label={`Open ${current.title}`}
        >
          <span
            aria-hidden="true"
            className="ps-media__initials"
            style={{ color: `color-mix(in oklab, ${accent} 62%, #2b2b2b)` }}
          >
            {initials(current.title)}
          </span>
          {hasThumb && (
            <img
              src={current.thumbnail}
              alt=""
              loading="lazy"
              className="ps-media__img"
              onError={(e) => {
                e.currentTarget.style.opacity = '0';
              }}
            />
          )}
        </button>

        <div className="ps-body">
          <div className="flex items-center gap-3">
            <StatusChip status={current.status} />
            <span className="ps-eyebrow">
              {formatCategory(current.category)} · {current.year}
            </span>
          </div>

          <h3 className="ps-title">{current.title}</h3>
          <p className="ps-tagline">{current.tagline}</p>

          {current.stack.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {current.stack.slice(0, 4).map((s) => (
                <li key={s}>
                  <Chip>{s}</Chip>
                </li>
              ))}
            </ul>
          )}

          <div className="ps-actions">
            <GlassButton
              tone="crimson"
              onClick={() => navigate(routes.projectDetail(current.slug))}
            >
              View case study
            </GlassButton>
            {hasLive && current.liveUrl && (
              <GlassButton
                onClick={() =>
                  window.open(current.liveUrl, '_blank', 'noopener,noreferrer')
                }
              >
                Live demo ↗
              </GlassButton>
            )}
          </div>
        </div>
      </article>

      <div className="ps-controls">
        <button
          type="button"
          className="ps-arrow"
          onClick={prev}
          disabled={index === 0}
          aria-label="Previous project"
        >
          ‹
        </button>
        <div className="ps-dots" role="tablist" aria-label="Projects">
          {projects.map((p, i) => (
            <button
              key={p.slug}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show ${p.title}`}
              className={i === index ? 'ps-dot ps-dot--active' : 'ps-dot'}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <button
          type="button"
          className="ps-arrow"
          onClick={next}
          disabled={index === projects.length - 1}
          aria-label="Next project"
        >
          ›
        </button>
      </div>
    </div>
  );
}