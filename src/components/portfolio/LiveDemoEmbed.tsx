interface LiveDemoEmbedProps {
  url: string;
  title: string;
}

export function LiveDemoEmbed({ url, title }: LiveDemoEmbedProps) {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-[var(--color-line)]">
      <iframe
        src={url}
        title={title}
        loading="lazy"
        className="block h-150 w-full bg-[var(--color-bg-2)]"
      />
    </div>
  );
}