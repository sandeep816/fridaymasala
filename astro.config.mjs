// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  }),
  site: 'https://fridaymasala.com', // Replace with your actual domain
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
  build: {
    assets: '_astro'
  },
  server: {
    port: 3000,
    host: true
  }
});