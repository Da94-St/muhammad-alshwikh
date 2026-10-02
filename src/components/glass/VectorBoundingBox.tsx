import type { ReactNode } from 'react';

interface VectorBoundingBoxProps {
  label: string;
  hoverLabel: ReactNode;
  hint1?: string;
  hint2?: string;
  focusLabel?: string;
  size?: 'default' | 'large';
  onClick?: () => void;
  className?: string;
}

export function VectorBoundingBox({
  label,
  hoverLabel,
  hint1,
  hint2,
  focusLabel = 'Press Enter',
  size = 'default',
  onClick,
  className,
}: VectorBoundingBoxProps) {
  const wrapClasses = [
    'vbb-wrapper',
    size === 'large' ? 'vbb-wrapper--large' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapClasses}>
      <button
        type="button"
        className="vbb-btn"
        data-focus-label={focusLabel}
        onClick={onClick}
        aria-label={label}
      >
        <span className="vbb-frame" aria-hidden="true">
          <span className="vbb-point vbb-point--tl" />
          <span className="vbb-point vbb-point--tr" />
          <span className="vbb-point vbb-point--bl" />
          <span className="vbb-point vbb-point--br" />
        </span>
        <span className="vbb-txt-box">
          <span className="vbb-txt">{label}</span>
          <span className="vbb-txt" aria-hidden="true">
            {hoverLabel}
          </span>
        </span>
      </button>
      {hint1 && <div className="vbb-hint vbb-hint--1">{hint1}</div>}
      {hint2 && <div className="vbb-hint vbb-hint--2">{hint2}</div>}
    </div>
  );
}