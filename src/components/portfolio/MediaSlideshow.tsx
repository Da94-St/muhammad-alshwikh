import { useState } from 'react';
import type { MediaItem } from '../../hooks/useProjectMedia';

interface MediaSlideshowProps {
  images: MediaItem[];
  loading?: boolean;
}

export function MediaSlideshow({ images, loading }: MediaSlideshowProps) {
  const [index, setIndex] = useState(0);

  if (loading) {
    return (
      <div className="aspect-16/10 w-full animate-pulse rounded-lg border border-[var(--color-line)] bg-[var(--color-glass)]" />
    );
  }

  if (images.length === 0) return null;

  const current = images[index];
  const hasPrev = index > 0;
  const hasNext = index < images.length - 1;

  return (
    <figure className="w-full">
      <div className="relative aspect-16/10 w-full overflow-hidden rounded-lg border border-[var(--color-line)] bg-[var(--color-bg-2)]">
        <img
          key={current.id}
          src={current.src}
          alt={current.alt ?? ''}
          className="h-full w-full object-cover"
          loading="lazy"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={!hasPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-[var(--color-line-hi)] bg-[var(--color-bg)]/70 px-3 py-2 text-[var(--color-ink)] backdrop-blur disabled:opacity-30"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() =>
                setIndex((i) => Math.min(images.length - 1, i + 1))
              }
              disabled={!hasNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-[var(--color-line-hi)] bg-[var(--color-bg)]/70 px-3 py-2 text-[var(--color-ink)] backdrop-blur disabled:opacity-30"
            >
              ›
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex items-center justify-center gap-2">
          {images.map((img, i) => (
            <button
              key={img.id}
              type="button"
              aria-label={`Image ${i + 1}`}
              onClick={() => setIndex(i)}
              className={[
                'h-1.5 w-6 rounded-full transition-colors',
                i === index
                  ? 'bg-accent'
                  : 'bg-line-hi hover:bg-dim',
              ].join(' ')}
            />
          ))}
        </div>
      )}
    </figure>
  );
}