import { asc, eq } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../src/db/client.js';
import { projectMedia } from '../src/db/schema.js';
import type { VercelRequest, VercelResponse } from './_types.js';

const CACHE = 'public, s-maxage=300, stale-while-revalidate=86400';

const QuerySchema = z.object({
  slug: z.string().min(1).max(120),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', CACHE);

  if (req.method && req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const parsed = QuerySchema.safeParse({ slug: req.query.slug });
  if (!parsed.success) {
    res.status(400).json({ error: 'Missing or invalid slug' });
    return;
  }

  try {
    const rows = await db
      .select()
      .from(projectMedia)
      .where(eq(projectMedia.slug, parsed.data.slug))
      .orderBy(asc(projectMedia.sort));

    const images = rows.filter((r) => r.kind === 'image');
    const videos = rows.filter((r) => r.kind === 'video');
    res.status(200).json({ images, videos });
  } catch {
    res.status(200).json({ images: [], videos: [] });
  }
}