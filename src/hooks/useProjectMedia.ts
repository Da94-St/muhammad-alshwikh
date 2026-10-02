import { useEffect, useState } from 'react';
import { fetchJson } from '../lib/api';
import type { Project } from '../data/types';

export interface MediaItem {
  id: string;
  slug: string;
  kind: string;
  src: string;
  poster: string | null;
  caption: string | null;
  alt: string | null;
  sort: number;
}

export interface ProjectMediaResult {
  images: MediaItem[];
  videos: MediaItem[];
}

interface State {
  loading: boolean;
  images: MediaItem[];
  videos: MediaItem[];
}

/**
 * Fetch project media from /api/projects-media when dynamicMedia is true.
 * Falls back to project.screenshots. Never throws — on any error, returns
 * the static fallback.
 */
export function useProjectMedia(project: Project): State {
  const staticImages: MediaItem[] = (project.screenshots ?? []).map(
    (src, i) => ({
      id: `${project.slug}-static-${i}`,
      slug: project.slug,
      kind: 'image',
      src,
      poster: null,
      caption: null,
      alt: null,
      sort: i,
    }),
  );

  const [state, setState] = useState<State>({
    loading: Boolean(project.dynamicMedia),
    images: staticImages,
    videos: [],
  });

  useEffect(() => {
    if (!project.dynamicMedia) return;
    let cancelled = false;

    (async () => {
      const res = await fetchJson<ProjectMediaResult>(
        `/api/projects-media?slug=${encodeURIComponent(project.slug)}`,
      );
      if (cancelled) return;
      if (res.ok) {
        setState({
          loading: false,
          images: res.data.images.length > 0 ? res.data.images : staticImages,
          videos: res.data.videos,
        });
      } else {
        setState({ loading: false, images: staticImages, videos: [] });
      }
    })();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project.slug, project.dynamicMedia]);

  return state;
}