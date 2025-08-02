/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly TMDB_API_KEY: string;
  readonly VERCEL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
} 