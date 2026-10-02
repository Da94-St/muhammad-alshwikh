export interface MetaInput {
  title: string;
  description?: string;
  url?: string;
  image?: string;
}

const SITE_NAME = 'Muhammad Alshwikh';
const DEFAULT_DESCRIPTION =
  "Data, analytics, and cybersecurity. Freelance. Here's what I build.";
const DEFAULT_IMAGE = '/phoenix.png';
const SITE_URL = 'https://muhammad-alshwikh.vercel.app';

function setMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

export function applyMeta(input: MetaInput) {
  const title =
    input.title === SITE_NAME ? SITE_NAME : `${input.title} — ${SITE_NAME}`;
  const description = input.description ?? DEFAULT_DESCRIPTION;
  const url = input.url ?? SITE_URL;
  const image = input.image ?? DEFAULT_IMAGE;

  document.title = title;
  setMeta('name', 'description', description);
  setMeta('property', 'og:title', title);
  setMeta('property', 'og:description', description);
  setMeta('property', 'og:url', url);
  setMeta('property', 'og:image', image);
  setMeta('property', 'og:type', 'website');
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', title);
  setMeta('name', 'twitter:description', description);
  setMeta('name', 'twitter:image', image);
}