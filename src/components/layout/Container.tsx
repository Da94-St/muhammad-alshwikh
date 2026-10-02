import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'narrow' | 'default' | 'wide';
}

export function Container({ children, className, size = 'default' }: ContainerProps) {
  // All sizes are 90vw. `size` only affects internal rhythm for narrow reading.
  const width = 'w-[90vw]';
  const classes = ['mx-auto', width, className].filter(Boolean).join(' ');
  // `size` retained for API compatibility; not used to constrain width.
  void size;
  return <div className={classes}>{children}</div>;
}