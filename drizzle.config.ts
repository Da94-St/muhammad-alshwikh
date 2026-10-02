import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: '.env.local' });
config();

const url = process.env.DATABASE_URL ?? 'file:./local.db';
const authToken = process.env.TURSO_AUTH_TOKEN;

export default defineConfig({
  dialect: 'turso',
  schema: './src/db/schema.ts',
  out: './drizzle',
  dbCredentials: {
    url,
    ...(authToken ? { authToken } : {}),
  },
});