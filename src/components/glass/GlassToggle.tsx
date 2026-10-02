import { useId } from 'react';
import type { CSSProperties } from 'react';

interface GlassToggleProps {
  /** Controlled value. Leave undefined for uncontrolled. */
  checked?: boolean;
  /** Initial value for uncontrolled use. */
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  /** Accessible label. Not displayed. */
  label: string;
  /**
   * Size token — sets --sz. The whole switch is 5.55× wide, 2× tall.
   * Default 40 → 222×80 px. Pass ~10 for a badge-sized variant.
   */
  size?: number;
  className?: string;
}

export function GlassToggle({
  checked,
  defaultChecked,
  onChange,
  label,
  size,
  className,
}: GlassToggleProps) {
  const id = useId();
  const controlled = checked !== undefined;
  const style = size ? ({ '--sz': `${size}px` } as CSSProperties) : undefined;

  return (
    <div
      className={['glass-toggle', className].filter(Boolean).join(' ')}
      style={style}
    >
      <input
        id={id}
        type="checkbox"
        aria-label={label}
        {...(controlled ? { checked } : { defaultChecked })}
        onChange={(e) => onChange?.(e.currentTarget.checked)}
      />
      <label htmlFor={id} className="glass-toggle__rail">
        <span className="glass-toggle__thumb" />
      </label>
      <div className="glass-toggle__lights" aria-hidden="true">
        <span className="glass-toggle__light glass-toggle__light--off" />
        <span className="glass-toggle__light glass-toggle__light--on" />
      </div>
    </div>
  );
}