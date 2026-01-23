import sanitizeHtml from "sanitize-html";

export type WpRendered = { rendered: string };

export type WpPost = {
  id: number;
  slug: string;
  date: string;
  title: WpRendered;
  excerpt: WpRendered;
  content: WpRendered;
  link: string;
};

type FetchOptions = {
  revalidateSeconds?: number;
};

function getWpBaseUrl(): string | null {
  const raw = process.env.WORDPRESS_BASE_URL?.trim();
  if (!raw) return null;
  return raw.replace(/\/$/, "");
}

function getAuthHeader(): string | undefined {
  const user = process.env.WORDPRESS_BASIC_AUTH_USER;
  const pass = process.env.WORDPRESS_BASIC_AUTH_PASS;
  if (!user || !pass) return undefined;

  const token = Buffer.from(`${user}:${pass}`).toString("base64");
  return `Basic ${token}`;
}

async function wpFetch<T>(path: string, options: FetchOptions = {}): Promise<T> {
  const baseUrl = getWpBaseUrl();
  if (!baseUrl) {
    throw new Error(
      "WORDPRESS_BASE_URL is not set. Add it to .env.local (see .env.example).",
    );
  }

  const auth = getAuthHeader();

  const res = await fetch(`${baseUrl}${path}`, {
    headers: {
      ...(auth ? { Authorization: auth } : {}),
    },
    next: {
      revalidate: options.revalidateSeconds ?? 60,
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(
      `WordPress fetch failed: ${res.status} ${res.statusText} (${path}) ${text}`,
    );
  }

  return (await res.json()) as T;
}

export function sanitizeWpHtml(html: string): string {
  // Allow a few more tags/attributes commonly produced by Elementor and other builders.
  // Keep this conservative; expand only as needed for specific widgets.
  return sanitizeHtml(html, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      "img",
      "figure",
      "figcaption",
      "iframe",
      "video",
      "source",
      "picture",
      "svg",
      "path",
    ]),
    allowedAttributes: {
      "*": ["class", "id", "style", "role", "aria-label", "aria-hidden", "data-*"],
      a: ["href", "name", "target", "rel", "title"],
      img: ["src", "alt", "title", "width", "height", "loading", "decoding", "srcset", "sizes"],
      iframe: ["src", "width", "height", "frameborder", "allow", "allowfullscreen", "loading", "title"],
      video: ["src", "width", "height", "controls", "preload", "poster"],
      source: ["src", "type", "media"],
      figure: ["class"],
      figcaption: ["class"],
      div: ["class"],
    },
    allowedSchemes: ["http", "https", "mailto"],
    transformTags: {
      a: (tagName, attribs) => {
        const href = attribs.href || "";
        const isExternal = /^https?:\/\//i.test(href);
        return {
          tagName,
          attribs: {
            ...attribs,
            ...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {}),
          },
        };
      },
    },
  });
}

export async function getLatestPosts(params?: {
  perPage?: number;
  revalidateSeconds?: number;
}): Promise<WpPost[]> {
  const perPage = params?.perPage ?? 6;
  // Optionally filter posts to a specific WordPress category (useful to separate Bakamo USA content)
  const categoryFilter = process.env.WORDPRESS_POST_CATEGORY_ID ? `&categories=${process.env.WORDPRESS_POST_CATEGORY_ID}` : "";

  try {
    const results = await wpFetch<WpPost[]>(
      `/wp-json/wp/v2/posts?per_page=${perPage}${categoryFilter}&_fields=id,slug,date,title,excerpt,content,link`,
      { revalidateSeconds: params?.revalidateSeconds },
    );

    // Some WP instances (private posts / permission plugins) may return empty
    // placeholder objects. Filter out any items that don't include a usable title
    // or id so the frontend can correctly fall back to pages when no public
    // posts are available.
    return results.filter((p) => Boolean(p && (p as any).id && p.title && p.title.rendered));
  } catch (e) {
    // Network error or WP down; return empty list so build doesn't fail.
    console.error("getLatestPosts: WP fetch failed", e);
    return [];
  }
}

export async function getPostBySlug(
  slug: string,
  params?: { revalidateSeconds?: number },
): Promise<WpPost | null> {
  try {
    const results = await wpFetch<WpPost[]>(
      `/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_fields=id,slug,date,title,excerpt,content,link,featured_media`,
      { revalidateSeconds: params?.revalidateSeconds },
    );

    if (results[0]) return results[0];
  } catch (e) {
    console.error("getPostBySlug: WP fetch failed", e);
    // continue to try pages as fallback
  }

  // Fallback: some sites (especially Elementor-based ones) use Pages for content.
  try {
    const pageResults = await getPageBySlug(slug, params);
    return pageResults;
  } catch (e) {
    console.error("getPostBySlug: Page fallback failed", e);
    return null;
  }
}

export async function getLatestPages(params?: {
  perPage?: number;
  revalidateSeconds?: number;
}): Promise<WpPost[]> {
  const perPage = params?.perPage ?? 6;
  try {
    return await wpFetch<WpPost[]>(
      `/wp-json/wp/v2/pages?per_page=${perPage}&_fields=id,slug,date,title,excerpt,content,link,featured_media`,
      { revalidateSeconds: params?.revalidateSeconds },
    );
  } catch (e) {
    console.error("getLatestPages: WP fetch failed", e);
    return [];
  }
}

export async function getPageBySlug(
  slug: string,
  params?: { revalidateSeconds?: number },
): Promise<WpPost | null> {
  const results = await wpFetch<WpPost[]>(
    `/wp-json/wp/v2/pages?slug=${encodeURIComponent(slug)}&_fields=id,slug,date,title,excerpt,content,link,featured_media`,
    { revalidateSeconds: params?.revalidateSeconds },
  );

  return results[0] ?? null;
}

export type WpMedia = {
  id: number;
  source_url: string;
  media_details?: any;
};

export async function getMedia(id: number): Promise<WpMedia> {
  return wpFetch<WpMedia>(`/wp-json/wp/v2/media/${id}`);
}

export async function getFeaturedImageUrl(post: WpPost): Promise<string | null> {
  // featured_media is sometimes present on posts/pages; fetch its media record.
  // Use `any` here because the API may include `featured_media` even if our type is minimal.
  const fid = (post as any).featured_media as number | undefined;
  if (!fid) return null;

  try {
    const media = await getMedia(fid);
    return media.source_url ?? null;
  } catch (e) {
    return null;
  }
}

export function isWpConfigured(): boolean {
  return Boolean(getWpBaseUrl());
}
