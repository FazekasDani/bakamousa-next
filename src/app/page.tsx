import Link from "next/link";
import { getLatestPosts, isWpConfigured, sanitizeWpHtml } from "@/lib/wordpress";

export default async function Home() {
  const wpOk = isWpConfigured();
  const posts = wpOk ? await getLatestPosts({ perPage: 5 }) : [];

  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <section className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm dark:border-white/15 dark:bg-zinc-950">
        <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Bakamo Web USA</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">A headless site powered by WordPress</h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-700 dark:text-zinc-300">
          This frontend pulls content from your existing WordPress instance using the WP REST API.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/blog"
            className="inline-flex h-11 items-center justify-center rounded-full bg-black px-5 text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
          >
            View Blog
          </Link>
          <a
            href="https://developer.wordpress.org/rest-api/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 px-5 text-black hover:bg-black/5 dark:border-white/15 dark:text-white dark:hover:bg-white/10"
          >
            WP REST API Docs
          </a>
        </div>

        {!wpOk ? (
          <div className="mt-6 rounded-xl border border-amber-300/40 bg-amber-50 p-4 text-amber-950 dark:border-amber-200/20 dark:bg-amber-950/30 dark:text-amber-100">
            <p className="text-sm">
              WordPress isn’t configured yet. Set <code className="font-mono">WORDPRESS_BASE_URL</code> in
              <code className="font-mono">.env.local</code> (see <code className="font-mono">.env.example</code>).
            </p>
          </div>
        ) : null}
      </section>

      <section className="mt-10">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-semibold">Latest posts</h2>
          <Link href="/blog" className="text-sm text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white">
            All posts
          </Link>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {posts.length === 0 ? (
            <div className="rounded-2xl border border-black/10 bg-white p-6 text-zinc-700 dark:border-white/15 dark:bg-zinc-950 dark:text-zinc-300">
              <p className="text-sm">No posts to show yet.</p>
            </div>
          ) : (
            posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/15 dark:bg-zinc-950"
              >
                <h3 className="text-base font-semibold" dangerouslySetInnerHTML={{ __html: sanitizeWpHtml(post.title.rendered) }} />
                <div
                  className="mt-2 line-clamp-3 text-sm text-zinc-600 dark:text-zinc-400"
                  dangerouslySetInnerHTML={{ __html: sanitizeWpHtml(post.excerpt.rendered) }}
                />
                <p className="mt-3 text-sm font-medium">Read more →</p>
              </Link>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
