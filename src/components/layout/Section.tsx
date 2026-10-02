import type { ReactNode } from 'react';
import { Container } from './Container';

interface SectionProps {
  children: ReactNode;
  title?: string;
  eyebrow?: string;
  id?: string;
  className?: string;
  size?: 'narrow' | 'default' | 'wide';
  containerClassName?: string;
}

export function Section({
  children,
  title,
  eyebrow,
  id, 
  className,
  size = 'default',
  containerClassName,
}: SectionProps) {
  const classes = ['py-12 md:py-16', className].filter(Boolean).join(' ');
  return (
    <section id={id} className={classes}>
      <Container size={size} className={containerClassName}>
        {(eyebrow || title) && (
          <header className="mb-6 md:mb-8">
            {eyebrow && (
              <p className="mb-2 font-mono text-lg uppercase tracking-widest text-[var(--color-dim)]">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-ink)]">
                {title}
              </h2>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}