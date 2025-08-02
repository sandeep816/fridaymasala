import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  if (!site) throw new Error('site is not defined');

  const pages = [
    '',
    '/movies/popular',
    '/movies/top-rated',
    '/movies/trending',
    '/movies/now-playing',
    '/search',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map((page) => `
  <url>
    <loc>${site}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>
  `).join('')}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}; 