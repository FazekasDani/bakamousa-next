import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const CONTENT_DIR = path.join(process.cwd(), "content");
const POSTS_DIR = path.join(CONTENT_DIR, "posts");
const PAGES_DIR = path.join(CONTENT_DIR, "pages");

type RawPost = {
  slug: string;
  content: string;
  data: any;
};

export function isGitContentConfigured() {
  return fs.existsSync(CONTENT_DIR) && fs.existsSync(POSTS_DIR);
}

function readPostFile(filePath: string): RawPost {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const filename = path.basename(filePath, path.extname(filePath));
  const slug = data.slug || filename.replace(/^[0-9-]+-/, "");
  return { slug, content, data };
}

export function getAllPosts(opts?: { perPage?: number; preview?: boolean }) {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
  let posts = files
    .map((f) => readPostFile(path.join(POSTS_DIR, f)))
    .filter((p) => (opts?.preview ? true : !p.data.draft))
    .map((p) => ({
      title: p.data.title || p.slug,
      slug: p.slug,
      date: p.data.date || null,
      excerpt: p.data.summary || p.content.split("\n\n")[0],
      featuredImage: p.data.featuredImage || null,
      raw: p,
    }))
    .sort((a, b) => {
      if (!a.date) return 1;
      if (!b.date) return -1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  if (opts?.perPage) posts = posts.slice(0, opts.perPage);
  return posts;
}

export function getPostBySlug(slug: string, opts?: { preview?: boolean }) {
  if (!fs.existsSync(POSTS_DIR)) return null;
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
  for (const f of files) {
    const p = readPostFile(path.join(POSTS_DIR, f));
    if (p.slug === slug) {
      if (!opts?.preview && p.data.draft) return null;
      const html = marked(p.content);
      return {
        title: p.data.title || p.slug,
        slug: p.slug,
        date: p.data.date || null,
        content: html,
        excerpt: p.data.summary || p.content.split("\n\n")[0],
        featuredImage: p.data.featuredImage || null,
        raw: p,
      };
    }
  }
  return null;
}

export function getFeaturedImageUrl(post: any) {
  if (!post) return null;
  return post.featuredImage || null;
}
