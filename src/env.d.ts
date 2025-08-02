/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly TMDB_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
} 