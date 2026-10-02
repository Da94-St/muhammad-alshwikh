import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface GlassIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  label: string;
  className?: string;
}

export function GlassIconButton({
  children,
  label,
  className,
  type = 'button',
  ...rest
}: GlassIconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      title={label}
      className={['glass-icon-btn', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </button>
  );
}