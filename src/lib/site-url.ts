import { headers } from "next/headers";

/**
 * Resolve the site origin from the incoming request's Host header.
 * Falls back to NEXT_PUBLIC_SITE_URL env var, then to bakamousa.com.
 *
 * Use this anywhere you need an absolute URL that must match the domain
 * the visitor is actually on (JSON-LD, OG urls, sitemap, robots, etc.).
 */
export async function getSiteUrl(): Promise<string> {
  try {
    const h = await headers();
    const host = h.get("host");
    if (host) {
      const proto = host.startsWith("localhost") ? "http" : "https";
      return `${proto}://${host}`;
    }
  } catch {
    // headers() unavailable (e.g. during static generation) — fall through
  }
  return process.env.NEXT_PUBLIC_SITE_URL || "https://bakamousa.com";
}

/**
 * Synchronous version for contexts where headers() is unavailable
 * (static metadata exports, module-level constants, etc.).
 * Returns the env var or the default.
 */
export function getSiteUrlSync(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || "https://bakamousa.com";
}
