// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://fridaymasala.com', // Replace with your actual domain
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});