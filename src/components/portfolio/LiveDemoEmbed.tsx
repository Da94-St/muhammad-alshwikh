import { GlassCard } from '../glass/GlassCard';

export function LiveDemoEmbed({ url, title }: { url: string; title: string }) {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block group w-full"
    >
      <GlassCard className="relative flex h-[250px] w-full items-center justify-center overflow-hidden transition-all hover:scale-[1.01] hover:border-[var(--color-accent)] border border-[var(--color-line)]">
        <div className="text-center relative z-10">
          <h3 className="mb-2 text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
            Live site ↗
          </h3>
          <p className="font-mono text-sm text-[var(--color-dim)]">
            Click to open {title}
          </p>
        </div>
      </GlassCard>
    </a>
  );
}