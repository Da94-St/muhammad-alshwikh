import type { VercelRequest, VercelResponse } from './_types.js';

const CACHE = 'public, s-maxage=300, stale-while-revalidate=86400';

export default function handler(_req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', CACHE);
  res.status(200).json({ ok: true });
}