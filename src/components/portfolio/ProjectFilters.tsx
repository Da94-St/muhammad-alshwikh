import type { ProjectCategory, ProjectStatus } from '../../data/types';
import { formatCategory } from '../../lib/format';

const CATEGORIES: Array<ProjectCategory | 'all'> = [
  'all', 'fullstack', 'ai-ml', 'data-analysis', 'cybersecurity', 'experiment',
];

const STATUSES: Array<ProjectStatus | 'all'> = ['all', 'live', 'wip', 'archived'];

interface ProjectFiltersProps {
  category: ProjectCategory | 'all';
  status: ProjectStatus | 'all';
  onCategoryChange: (c: ProjectCategory | 'all') => void;
  onStatusChange: (s: ProjectStatus | 'all') => void;
}

export function ProjectFilters({
  category, status, onCategoryChange, onStatusChange,
}: ProjectFiltersProps) {
  return (
    <div className="space-y-6">
      <div>
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[var(--color-dim)]">
          Category
        </p>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => onCategoryChange(c)}
              className={category === c ? 'glass-pill glass-pill--active' : 'glass-pill'}
            >
              {c === 'all' ? 'All' : formatCategory(c)}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[var(--color-dim)]">
          Status
        </p>
        <div className="flex flex-wrap gap-2">
          {STATUSES.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => onStatusChange(s)}
              className={status === s ? 'glass-pill glass-pill--active' : 'glass-pill'}
            >
              {s === 'all' ? 'All' : s === 'wip' ? 'In progress' : s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}