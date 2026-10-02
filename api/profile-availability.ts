import { eq } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '../src/db/client.js';
import { profileMeta } from '../src/db/schema.js';
import type { VercelRequest, VercelResponse } from './_types.js';

const CACHE = 'public, s-maxage=300, stale-while-revalidate=86400';

const StatusSchema = z.enum(['open', 'freelance', 'closed']);

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', CACHE);

  try {
    const rows = await db
      .select()
      .from(profileMeta)
      .where(eq(profileMeta.key, 'availability'));

    const raw = rows[0]?.value ?? 'freelance';
    const parsed = StatusSchema.safeParse(raw);
    const status = parsed.success ? parsed.data : 'freelance';
    res.status(200).json({ status });
  } catch {
    res.status(200).json({ status: 'freelance' });
  }
}