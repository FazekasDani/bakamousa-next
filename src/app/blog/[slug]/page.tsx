import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getFeaturedImageUrl, isWpConfigured, sanitizeWpHtml } from "@/lib/wordpress";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  if (!isWpConfigured()) {
    notFound();
  }

  const { slug } = await params;
  const post = await getPostBySlug(slug, { revalidateSeconds: 60 });

  if (!post) {
    notFound();
  }

  const featuredImage = await getFeaturedImageUrl(post);

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/blog"
          className="text-sm text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
        >
          ← Blog
        </Link>
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
        >
          View on WordPress ↗
        </a>
      </div>

      <article className="mt-8">
        {featuredImage ? (
          <div className="mb-6">
            <img src={featuredImage} alt="" className="w-full rounded-lg object-cover max-h-96" />
          </div>
        ) : null}

        <h1
          className="text-3xl font-semibold tracking-tight"
          dangerouslySetInnerHTML={{ __html: sanitizeWpHtml(post.title.rendered) }}
        />
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div
          className="prose prose-zinc mt-8 max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: sanitizeWpHtml(post.content.rendered) }}
        />
      </article>
    </main>
  );
}
