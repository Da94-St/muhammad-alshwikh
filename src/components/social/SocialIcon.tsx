import type { CSSProperties } from 'react';
import type { Social } from '../../data/socials';

interface SocialIconProps {
  social: Social;
  size?: number;
}

export function SocialIcon({ social, size = 44 }: SocialIconProps) {
  const { name, href, color, Icon } = social;
  const style = {
    '--soc-bg': color,
    width: `${size}px`,
    height: `${size}px`,
  } as CSSProperties;
  const external = !href.startsWith('mailto:') && !href.startsWith('tel:');

  return (
    <a
      href={href}
      className="social-3d"
      style={style}
      aria-label={name}
      title={name}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <Icon />
    </a>
  );
}