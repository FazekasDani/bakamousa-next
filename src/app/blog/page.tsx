import Link from "next/link";
import { getLatestPosts, getLatestPages, isWpConfigured, sanitizeWpHtml } from "@/lib/wordpress";

export const metadata = {
  title: "Blog | Bakamo USA",
};

export default async function BlogIndexPage() {
  const wpOk = isWpConfigured();
  let posts: any[] = [];
  if (wpOk) {
    posts = await getLatestPosts({ perPage: 12 });
    if (posts.length === 0) {
      // Fallback to pages on sites that use pages heavily (Elementor-built sites)
      posts = await getLatestPages({ perPage: 12 });
    }
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Posts fetched from WordPress.
          </p>
        </div>
        <Link
          href="/"
          className="text-sm text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
        >
          ← Home
        </Link>
      </div>

      {!wpOk ? (
        <div className="mt-6 rounded-xl border border-amber-300/40 bg-amber-50 p-4 text-amber-950 dark:border-amber-200/20 dark:bg-amber-950/30 dark:text-amber-100">
          <p className="text-sm">
            Set <code className="font-mono">WORDPRESS_BASE_URL</code> in <code className="font-mono">.env.local</code>.
          </p>
        </div>
      ) : null}

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {posts.length === 0 ? (
          <div className="rounded-2xl border border-black/10 bg-white p-6 text-zinc-700 dark:border-white/15 dark:bg-zinc-950 dark:text-zinc-300">
            <p className="text-sm">No posts found.</p>
          </div>
        ) : (
          posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/15 dark:bg-zinc-950"
            >
              <h2
                className="text-base font-semibold"
                dangerouslySetInnerHTML={{ __html: sanitizeWpHtml(post.title.rendered) }}
              />
              <div
                className="mt-2 line-clamp-3 text-sm text-zinc-600 dark:text-zinc-400"
                dangerouslySetInnerHTML={{ __html: sanitizeWpHtml(post.excerpt.rendered) }}
              />
              <p className="mt-3 text-sm font-medium">Read more →</p>
            </Link>
          ))
        )}
      </div>
    </main>
  );
}
