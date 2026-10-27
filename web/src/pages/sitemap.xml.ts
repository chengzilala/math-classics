import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../site';

export const GET: APIRoute = async () => {
  if (new URL(site.url).hostname === 'example.com') {
    console.warn('[SEO] src/site.ts 里的 site.url 还是占位域名 example.com，上线前请改成真实域名。');
  }

  const propositions = await getCollection('propositions');
  const paths = [
    '/',
    ...propositions.map((entry) => `/propositions/${entry.data.id}/`),
  ];

  const urls = paths
    .map((path) => `  <url><loc>${new URL(path, site.url).href}</loc></url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
