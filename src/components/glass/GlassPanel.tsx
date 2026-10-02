import type { ReactNode } from 'react';

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'hi';
  as?: 'div' | 'section' | 'aside' | 'article';
}

export function GlassPanel({
  children,
  className,
  variant = 'default',
  as: Tag = 'div',
}: GlassPanelProps) {
  const classes = [
    'glass-panel',
    variant === 'hi' ? 'glass-panel--hi' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return <Tag className={classes}>{children}</Tag>;
}