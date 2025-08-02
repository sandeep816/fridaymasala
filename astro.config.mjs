// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  site: 'https://fridaymasala.com', // Replace with your actual domain
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});