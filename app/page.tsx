import Link from "next/link";
import { getAllPostMeta, formatDate } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPostMeta();

  return (
    <>
      <div className="home-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/stonecat-sh.jpeg"
          alt="A cat in an apron chiseling the letters SH into a large stone"
        />
      </div>
      <ul className="feed">
        {posts.length === 0 && <p>No posts yet.</p>}
      {posts.map((post) => (
        <li key={post.slug} className="feed-item">
          <h2>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </h2>
          <p className="post-meta">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </p>
          {post.description && (
            <p className="post-description">{post.description}</p>
          )}
          </li>
        ))}
      </ul>
    </>
  );
}
