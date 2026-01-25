import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getFeaturedImageUrl, isGitContentConfigured } from "@/lib/content";
import sanitizeHtml from "sanitize-html";
import { cookies } from 'next/headers';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  if (!isGitContentConfigured()) {
    notFound();
  }

  const { slug } = await params;
  const cookiesStore = await cookies();
  const isPreview = Boolean(cookiesStore.get?.('git-preview')?.value);
  const post = await getPostBySlug(slug, { preview: isPreview });

  if (!post) {
    notFound();
  }

  const featuredImage = getFeaturedImageUrl(post);

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/blog"
          className="text-sm text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
        >
          ← Blog
        </Link>
        {post?.raw?.data?.link ? (
          <a
            href={post.raw.data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
          >
            View on WordPress ↗
          </a>
        ) : null}
      </div>

      <article className="mt-8">
        {featuredImage ? (
          <div className="mb-6">
            <img src={featuredImage} alt="" className="w-full rounded-lg object-cover max-h-96" />
          </div>
        ) : null}

        <h1 className="text-3xl font-semibold tracking-tight">{sanitizeHtml(String(post.title))}</h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          {post.date ? new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }) : null}
        </p>

        <div className="prose prose-zinc mt-8 max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: sanitizeHtml(String(post.content)) }} />
      </article>
    </main>
  );
}
