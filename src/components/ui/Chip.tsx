import type { CSSProperties, ReactNode } from 'react';

interface ChipProps {
  children: ReactNode;
  color?: string;
  dot?: boolean;
  className?: string;
}

export function Chip({ children, color, dot = false, className }: ChipProps) {
  const style = color ? ({ '--chip-color': color } as CSSProperties) : undefined;
  return (
    <span
      className={['chip', className].filter(Boolean).join(' ')}
      style={style}
    >
      {dot && <span className="chip__dot" aria-hidden="true" />}
      {children}
    </span>
  );
}