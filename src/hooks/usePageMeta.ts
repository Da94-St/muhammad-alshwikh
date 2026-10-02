import { useEffect } from 'react';
import { applyMeta, type MetaInput } from '../lib/seo';

export function usePageMeta(input: MetaInput) {
  const { title, description, url, image } = input;
  useEffect(() => {
    applyMeta({ title, description, url, image });
  }, [title, description, url, image]);
}