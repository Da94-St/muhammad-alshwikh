import { Chip } from '../ui/Chip';
import type { ProjectStatus } from '../../data/types';
import { formatStatus } from '../../lib/format';

const COLORS: Record<ProjectStatus, string> = {
  live: '#7ee787',
  wip: '#ffd466',
  archived: '#8b949e',
};

export function StatusChip({ status }: { status: ProjectStatus }) {
  return (
    <Chip color={COLORS[status]} dot>
      {formatStatus(status)}
    </Chip>
  );
}