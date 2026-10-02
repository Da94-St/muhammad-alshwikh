import type { JSX } from 'react';
import { LinkedInIcon } from '../components/icons/social/LinkedInIcon';
import { GitHubIcon } from '../components/icons/social/GitHubIcon';
// import { XIcon } from '../components/icons/social/XIcon';
import { TelegramIcon } from '../components/icons/social/TelegramIcon';
import { WhatsAppIcon } from '../components/icons/social/WhatsAppIcon';
import { EmailIcon } from '../components/icons/social/EmailIcon';

export interface Social {
  name: string;
  href: string;
  color: string;
  Icon: (props: { className?: string }) => JSX.Element;
}

export const socials: Social[] = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/muhammad-alshwikh-34631039a',
    color: '#0A66C2',
    Icon: LinkedInIcon,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Da94-St',
    color: '#181717',
    Icon: GitHubIcon,
  },
  // Uncomment to re-enable X.
  // {
  //   name: 'X',
  //   href: 'https://x.com/DanteV91',
  //   color: '#000000',
  //   Icon: XIcon,
  // },
  {
    name: 'Telegram',
    href: 'https://t.me/DanteV91',
    color: '#26A5E4',
    Icon: TelegramIcon,
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/905312539681',
    color: '#25D366',
    Icon: WhatsAppIcon,
  },
  {
    name: 'Email',
    href: 'mailto:grayss1994@gmail.com',
    color: '#ffffff',
    Icon: EmailIcon,
  },
];