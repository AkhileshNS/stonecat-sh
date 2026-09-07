import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export interface PostFrontmatter {
  title: string;
  date: string;
  description?: string;
  /** Optional hero image, e.g. "/images/<slug>/hero.jpeg". */
  hero?: string;
}

export interface PostMeta extends PostFrontmatter {
  slug: string;
}

export interface Post extends PostMeta {
  content: string;
}

function slugFromFilename(filename: string): string {
  return filename.replace(/\.mdx?$/, "");
}

function readPostFile(filename: string): Post {
  const filePath = path.join(POSTS_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const fm = data as Partial<PostFrontmatter> & { slug?: string };

  if (!fm.title) {
    throw new Error(`Post "${filename}" is missing a required "title" field.`);
  }
  if (!fm.date) {
    throw new Error(`Post "${filename}" is missing a required "date" field.`);
  }

  return {
    slug: fm.slug ?? slugFromFilename(filename),
    title: fm.title,
    date: fm.date,
    description: fm.description,
    hero: fm.hero,
    content,
  };
}

function getPostFilenames(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs.readdirSync(POSTS_DIR).filter((f) => /\.mdx?$/.test(f));
}

/** All posts, sorted newest first. */
export function getAllPosts(): Post[] {
  return getPostFilenames()
    .map(readPostFile)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Lightweight metadata for every post (for the home feed). */
export function getAllPostMeta(): PostMeta[] {
  return getAllPosts().map(({ content: _content, ...meta }) => meta);
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

/** Format an ISO date for display, e.g. "September 6, 2026". */
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
