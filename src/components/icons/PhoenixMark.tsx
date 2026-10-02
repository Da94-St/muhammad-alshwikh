interface PhoenixMarkProps {
  /** Rendered px. Numeric only. */
  size?: number;
  className?: string;
  /** Alt text. Pass '' for decorative. */
  alt?: string;
  /** Deprecated — ignored. Kept so existing call sites still typecheck. */
  variant?: 'full' | 'mark';
}

export function PhoenixMark({
  size = 32,
  className,
  alt = 'Phoenix',
}: PhoenixMarkProps) {
  return (
    <img
      src="/phoenix.png"
      alt={alt}
      width={size}
      height={size}
      className={className}
      draggable={false}
      decoding="async"
    />
  );
}