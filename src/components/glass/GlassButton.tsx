import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type GlassButtonTone = 'neutral' | 'accent' | 'crimson' | 'warm' | 'cool' | 'success' | 'warning' | 'error';

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  tone?: GlassButtonTone;
  className?: string;
}

export function GlassButton({
  children,
  tone = 'neutral',
  className,
  type = 'button',
  ...rest
}: GlassButtonProps) {
  const toneClass = tone === 'neutral' ? null : `glass-btn--${tone}`;
  const wrapClasses = ['button-wrap', className].filter(Boolean).join(' ');
  const btnClasses = ['glass-btn', toneClass].filter(Boolean).join(' ');
  return (
    <div className={wrapClasses}>
      <button type={type} className={btnClasses} {...rest}>
        <span>{children}</span>
      </button>
      <div className="button-shadow" aria-hidden="true" />
    </div>
  );
}