import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { projects } from '../src/data/projects.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const BASE = 'https://muhammad-alshwikh.vercel.app';

const STATIC_ROUTES = ['/', '/projects', '/about', '/contact'];

function urlEntry(loc: string, priority: string): string {
  return `  <url>\n    <loc>${BASE}${loc}</loc>\n    <priority>${priority}</priority>\n  </url>`;
}

const entries = [
  ...STATIC_ROUTES.map((r) => urlEntry(r, r === '/' ? '1.0' : '0.9')),
  ...projects.map((p) => urlEntry(`/projects/${p.slug}`, '0.7')),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`;

writeFileSync(join(ROOT, 'public', 'sitemap.xml'), xml, 'utf8');
console.log(`Wrote public/sitemap.xml with ${entries.length} entries.`);