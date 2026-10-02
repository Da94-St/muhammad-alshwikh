export function formatYear(year: number): string {
  return String(year);
}

export function formatDateRange(start: string, end: string | 'present'): string {
  const endLabel = end === 'present' ? 'Present' : end;
  return `${start} — ${endLabel}`;
}

export function formatStatus(status: 'live' | 'wip' | 'archived'): string {
  if (status === 'wip') return 'In progress';
  return status.charAt(0).toUpperCase() + status.slice(1);
}

export function formatCategory(category: string): string {
  return category
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}