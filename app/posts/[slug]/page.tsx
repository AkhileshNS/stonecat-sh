import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Pluggable } from "unified";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode, {
  type Options as RehypePrettyCodeOptions,
} from "rehype-pretty-code";
import { getAllPostMeta, getPostBySlug, formatDate } from "@/lib/posts";
import Giscus from "@/components/Giscus";

const rehypePrettyCodeOptions: RehypePrettyCodeOptions = {
  theme: "github-dark",
  keepBackground: false,
};

const remarkPlugins: Pluggable[] = [remarkGfm];
const rehypePlugins: Pluggable[] = [
  rehypeSlug,
  [rehypePrettyCode, rehypePrettyCodeOptions],
];

const mdxOptions = {
  mdxOptions: { remarkPlugins, rehypePlugins },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPostMeta().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article>
      <header className="article-header">
        <h1>{post.title}</h1>
        <p className="post-meta">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>
      </header>
      <div className="prose">
        <MDXRemote source={post.content} options={mdxOptions} />
      </div>
      <Giscus />
    </article>
  );
}
