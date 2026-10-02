import type { TimelineEntry } from '../../data/types';
import { formatDateRange } from '../../lib/format';

interface TimelineProps {
  entries: TimelineEntry[];
}

export function Timeline({ entries }: TimelineProps) {
  if (entries.length === 0) return null;
  return (
    <ol className="relative space-y-6 border-l border-[var(--color-line-hi)] pl-6">
      {entries.map((e) => (
        <li key={`${e.company}-${e.start}`} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border border-[var(--color-line-hi)] bg-[var(--color-bg)]"
          />
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-dim)]">
            {e.start === 'Project' ? 'Project-based engagement' : formatDateRange(e.start, e.end)}
          </p>
          <h3 className="mt-1 text-lg font-semibold tracking-tight text-[var(--color-ink)]">
            {e.role}
          </h3>
          <p className="text-[var(--color-dim)]">{e.company}</p>
          {e.summary && (
            <p className="mt-1 text-sm text-[var(--color-dim)]">{e.summary}</p>
          )}
        </li>
      ))}
    </ol>
  );
}