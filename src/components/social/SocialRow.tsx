import { socials } from '../../data/socials';
import { SocialIcon } from './SocialIcon';

interface SocialRowProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  /** Prevent wrapping — useful in the footer */
  nowrap?: boolean;
}

const SIZE_PX: Record<'sm' | 'md' | 'lg', number> = {
  sm: 36,
  md: 48,
  lg: 60,
};

const GAP_CLASS: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'gap-1',
  md: 'gap-2.5',
  lg: 'gap-3',
};

export function SocialRow({ size = 'md', className, nowrap }: SocialRowProps) {
  const px = SIZE_PX[size];
  const gap = GAP_CLASS[size];
  const classes = [
    'flex',
    'items-center',
    nowrap ? 'flex-nowrap' : 'flex-wrap',
    gap,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} role="list">
      {socials.map((s) => (
        <span role="listitem" key={s.name}>
          <SocialIcon social={s} size={px} />
        </span>
      ))}
    </div>
  );
}