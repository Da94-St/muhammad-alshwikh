import { Chip } from '../ui/Chip';

interface TechStackProps {
  items: string[];
  className?: string;
}

export function TechStack({ items, className }: TechStackProps) {
  if (items.length === 0) return null;
  return (
    <ul className={['flex flex-wrap gap-2', className].filter(Boolean).join(' ')}>
      {items.map((item) => (
        <li key={item}>
          <Chip>{item}</Chip>
        </li>
      ))}
    </ul>
  );
}