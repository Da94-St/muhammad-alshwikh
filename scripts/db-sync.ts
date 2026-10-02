import { config } from 'dotenv';
import { eq } from 'drizzle-orm';
import { db } from '../src/db/client.js';
import {
  projects as projectsTable,
  projectMedia,
  profileMeta,
} from '../src/db/schema.js';
import { projects } from '../src/data/projects.js';
import { profile } from '../src/data/profile.js';

config({ path: '.env.local' });
config();

async function syncProjects() {
  console.log(`Syncing ${projects.length} projects…`);
  for (const p of projects) {
    await db
      .insert(projectsTable)
      .values({
        slug: p.slug,
        title: p.title,
        tagline: p.tagline,
        year: p.year,
        status: p.status,
        category: p.category,
        updatedAt: new Date(),
      })
      .onConflictDoUpdate({
        target: projectsTable.slug,
        set: {
          title: p.title,
          tagline: p.tagline,
          year: p.year,
          status: p.status,
          category: p.category,
          updatedAt: new Date(),
        },
      });
  }
}

async function syncMedia() {
  console.log('Syncing project media…');
  for (const p of projects) {
    await db.delete(projectMedia).where(eq(projectMedia.slug, p.slug));
    const shots = p.screenshots ?? [];
    for (let i = 0; i < shots.length; i += 1) {
      const src = shots[i];
      await db.insert(projectMedia).values({
        id: `${p.slug}-${i}`,
        slug: p.slug,
        kind: 'image',
        src,
        sort: i,
      });
    }
  }
}

async function syncProfile() {
  console.log('Syncing profile metadata…');
  await db
    .insert(profileMeta)
    .values({ key: 'availability', value: profile.availability })
    .onConflictDoUpdate({
      target: profileMeta.key,
      set: { value: profile.availability },
    });
}

async function main() {
  await syncProjects();
  await syncMedia();
  await syncProfile();
  console.log('Done.');
}

main().catch((err: unknown) => {
  console.error(err);
  process.exit(1);
});