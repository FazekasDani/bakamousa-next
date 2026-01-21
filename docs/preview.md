# Preview Mode

This project supports Next.js Preview Mode so you can view drafts and preview content before publishing.

## Setup
1. In the project `.env.local`, set:
   - `WORDPRESS_BASE_URL` — e.g., `https://bakamousa.com`
   - Optionally: `WORDPRESS_BASIC_AUTH_USER` and `WORDPRESS_BASIC_AUTH_PASS` (use a WP Application Password) if you want to preview drafts or private posts/pages.
   - `WP_PREVIEW_SECRET` — set a long, unguessable secret string.

2. Start your Next.js app locally (`npm run dev`) or deploy it and set environment variables in your host (Vercel, etc.).

## Using Preview
- To enable preview for a given post or page slug, open in the browser:
  `https://<your-next-site>/api/preview?secret=<WP_PREVIEW_SECRET>&slug=<your-slug>`

- If configured correctly, this route will:
  - validate the `secret` and check WordPress for a post/page with the slug
  - enable Next.js Preview Mode (sets the preview cookie)
  - redirect you to `/blog/<slug>` (so the app can show the draft content)

- To exit preview mode, open:
  `https://<your-next-site>/api/exit-preview`

## Notes
- Make sure `WORDPRESS_BASE_URL` points to your WordPress site (no trailing slash).
- If the WordPress endpoint requires authentication to see drafts, create an **Application Password** for a WP user and set `WORDPRESS_BASIC_AUTH_USER` and `WORDPRESS_BASIC_AUTH_PASS` in your environment. The preview API route will use these creds when calling the WP REST API.
- Keep `WP_PREVIEW_SECRET` secret and change it if it is exposed.
