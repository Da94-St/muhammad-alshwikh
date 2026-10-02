import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const projects = sqliteTable('projects', {
  slug: text('slug').primaryKey(),
  title: text('title').notNull(),
  tagline: text('tagline').notNull(),
  year: integer('year').notNull(),
  status: text('status').notNull(),
  category: text('category').notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
});

export const projectMedia = sqliteTable('project_media', {
  id: text('id').primaryKey(),
  slug: text('slug').notNull(),
  kind: text('kind').notNull(),
  src: text('src').notNull(),
  poster: text('poster'),
  caption: text('caption'),
  alt: text('alt'),
  sort: integer('sort').notNull().default(0),
  width: integer('width'),
  height: integer('height'),
});

export const profileMeta = sqliteTable('profile_meta', {
  key: text('key').primaryKey(),
  value: text('value').notNull(),
});