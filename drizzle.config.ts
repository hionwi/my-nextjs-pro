import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

export default defineConfig({
  out: "./server/drizzle",
  schema: "./server/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});