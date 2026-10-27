import type { APIRoute } from 'astro';
import { site } from '../site';

export const GET: APIRoute = () => {
  const sitemap = new URL('/sitemap.xml', site.url).href;
  const body = `User-agent: *
Allow: /

Sitemap: ${sitemap}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
