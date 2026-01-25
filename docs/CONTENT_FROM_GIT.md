# Content from Git — Migration & Implementation Guide

Overview
--------
This document describes how to pivot the site from WordPress-sourced content to content authored and stored in Git. It covers file layout, frontmatter schema, preview/draft workflow, image handling, sync options, environment variables, and step-by-step migration instructions.

Content format
--------------
- Use Markdown (GFM) files with YAML frontmatter.
- Frontmatter fields (recommended):
  - `title`: string
  - `slug`: string (optional, defaults to filename)
  - `date`: ISO 8601 datetime
  - `author`: string
  - `tags`: array
  - `category`: string
  - `featuredImage`: string (path or URL)
  - `summary`: string
  - `draft`: boolean (true for drafts)

Folder layout
-------------
- `content/posts/` — blog posts as `YYYY-MM-DD-slug.md` or `slug.md`.
- `content/pages/` — top-level marketing pages as `slug.md`.
- `public/media/` — images and static assets (optional).

Example post frontmatter
------------------------
```
---
title: "Example Post"
slug: "example-post"
date: "2026-01-25T10:00:00Z"
author: "Author Name"
tags: ["news","product"]
category: "Bakamo USA"
featuredImage: "/media/example.jpg"
summary: "A short summary for listings and social cards."
draft: false
---

Post body in Markdown follows here.
```

Image/media handling
--------------------
- Preferred: store images under `public/media/` and reference them with absolute paths (e.g. `/media/img.jpg`). This keeps assets in the repo and served by Vercel.
- Alternatively, host images externally (CDN) and use absolute URLs.

Preview & drafts
----------------
- Use a `draft: true` frontmatter flag to mark drafts.
- Implement Next.js preview mode using an environment `GIT_PREVIEW_SECRET` (or reuse `WP_PREVIEW_SECRET` if preferred).
- In preview mode, show drafts; in production build without preview, ignore files where `draft: true`.

Loading strategies
------------------
- Build-time (recommended): read local `content/` files during `next build` using a `src/lib/content.ts` helper and statically generate pages.
- Remote Git (optional): fetch raw files from a GitHub repo (using raw.githubusercontent.com or GitHub API) and cache them in the project or Vercel KV. Use a small sync script or GitHub Action to copy files into the repo on change.

Sync options
------------
- Manual: editors edit files in the repo, push, Vercel auto-deploys.
- GitHub Actions: respond to changes in a separate content repo and push updates to this repo or call the Vercel deploy hook.
- Pull-based: `scripts/sync_content_from_git.sh` can fetch raw files from a remote repo and write them into `content/` for local builds.

Environment variables
---------------------
- `NEXT_PUBLIC_SITE_URL` — unchanged.
- `CONTENT_SOURCE=git` — optional flag to toggle code-paths.
- `GIT_CONTENT_REPO` — remote repo (optional) used by sync script.
- `GIT_BRANCH` — branch to pull from (default `main`).
- `GIT_PREVIEW_SECRET` — preview secret for drafts.

Migration steps
---------------
1. Create `content/posts/` and `content/pages/` in the repo.
2. Export selected WP posts as Markdown (manual copy or using a WP exporter plugin). For each post, add the required frontmatter fields and move images to `public/media/` or update image URLs.
3. Add a content loader `src/lib/content.ts` with functions: `getAllPosts()`, `getPostBySlug(slug)`, `getAllPages()`.
4. Update `/src/app/blog/page.tsx` and `/src/app/blog/[slug]/page.tsx` to use the new loader. Respect `draft` + preview mode.
5. Add a `scripts/sync_content_from_git.sh` or a GitHub Action if you want automated sync from another repo.
6. Test locally: run `npm run dev`, verify posts and preview flow. Then push to remote and verify Vercel deploy.

Commands (examples)
-------------------
Local dev:
```bash
npm ci
npm run dev
```
Build & preview test:
```bash
npm run build
GIT_PREVIEW_SECRET=yoursecret npm start
```

Optional: simple sync script (example)
```bash
#!/usr/bin/env bash
# sync_content_from_git.sh
set -e
REPO_RAW_BASE="https://raw.githubusercontent.com/owner/repo/main/content"
mkdir -p content
curl -s $REPO_RAW_BASE/posts/example-post.md -o content/posts/example-post.md
```

Next steps
----------
- I can scaffold `src/lib/content.ts`, add 2 sample posts under `content/`, and wire the blog pages to the new loader. Would you like me to scaffold those now?

Document history
----------------
- Created 2026-01-25 — migration guide for Git-sourced content.
