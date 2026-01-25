import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const secret = req.query.secret as string | undefined;
  const slug = req.query.slug as string | undefined;

  if (!secret) {
    return res.status(401).json({ message: 'Missing preview secret' });
  }

  // Support both WordPress preview secret (legacy) and GIT_PREVIEW_SECRET for Git-backed content
  if (secret === process.env.GIT_PREVIEW_SECRET) {
    if (!slug) {
      return res.status(400).json({ message: 'Missing slug query param' });
    }
    // Enable Next.js Preview Mode and mark as git preview
    res.setPreviewData({ source: 'git', slug }, { maxAge: 60 * 60 });
    // also set a simple cookie so server components can detect git preview easily
    res.setHeader('Set-Cookie', `git-preview=1; Path=/; HttpOnly; SameSite=Lax`);
    const redirectUrl = `/blog/${encodeURIComponent(slug)}`;
    res.writeHead(307, { Location: redirectUrl });
    res.end();
    return;
  }

  if (secret !== process.env.WP_PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid preview secret' });
  }

  if (!slug) {
    return res.status(400).json({ message: 'Missing slug query param' });
  }

  const base = process.env.WORDPRESS_BASE_URL?.replace(/\/$/, '');
  if (!base) {
    return res.status(500).json({ message: 'WORDPRESS_BASE_URL is not configured' });
  }

  const headers: Record<string, string> = {};
  if (process.env.WORDPRESS_BASIC_AUTH_USER && process.env.WORDPRESS_BASIC_AUTH_PASS) {
    const token = Buffer.from(`${process.env.WORDPRESS_BASIC_AUTH_USER}:${process.env.WORDPRESS_BASIC_AUTH_PASS}`).toString('base64');
    headers.Authorization = `Basic ${token}`;
  }

  // Try posts first
  const postsRes = await fetch(`${base}/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_fields=id,slug,status`, { headers });
  if (!postsRes.ok) {
    return res.status(502).json({ message: 'Failed to fetch posts from WordPress' });
  }

  const posts = await postsRes.json();
  let found = Array.isArray(posts) && posts.length > 0;

  if (!found) {
    // Try pages
    const pagesRes = await fetch(`${base}/wp-json/wp/v2/pages?slug=${encodeURIComponent(slug)}&_fields=id,slug,status`, { headers });
    if (!pagesRes.ok) {
      return res.status(502).json({ message: 'Failed to fetch pages from WordPress' });
    }
    const pages = await pagesRes.json();
    found = Array.isArray(pages) && pages.length > 0;
  }

  if (!found) {
    return res.status(404).json({ message: 'No post or page found with provided slug' });
  }

  // Enable Next.js Preview Mode and redirect to the requested page route
  res.setPreviewData({ slug }, { maxAge: 60 * 60 }); // keep preview for 1 hour
  const redirectUrl = `/blog/${encodeURIComponent(slug)}`;
  res.writeHead(307, { Location: redirectUrl });
  res.end();
}
