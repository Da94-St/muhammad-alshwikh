import type { ButtonHTMLAttributes } from 'react';

interface FeaturedFrameProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  hoverLabel?: string;
  focusLabel: string;
  className?: string;
}

/**
 * Reference 3 — the signature bounding-box CTA.
 * Render at most once per viewport. Never next to itself.
 */
export function FeaturedFrame({
  label,
  hoverLabel,
  focusLabel,
  className,
  type = 'button',
  ...rest
}: FeaturedFrameProps) {
  const second = hoverLabel ?? label;
  return (
    <span className={['ff-wrap', className].filter(Boolean).join(' ')}>
      <button
        type={type}
        className="ff-btn"
        data-focus-label={focusLabel}
        {...rest}
      >
        <span className="ff-frame" aria-hidden="true">
          <span className="ff-point ff-point--tl" />
          <span className="ff-point ff-point--tr" />
          <span className="ff-point ff-point--bl" />
          <span className="ff-point ff-point--br" />
        </span>
        <span className="ff-txt-box">
          <span className="ff-txt">{label}</span>
          <span className="ff-txt" aria-hidden="true">
            {second}
          </span>
        </span>
      </button>
    </span>
  );
}