/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a fully static site in ./out so it can be served by GitHub Pages.
  output: "export",
  // GitHub Pages has no image optimization server, so images must be unoptimized.
  images: { unoptimized: true },
  // Emit /posts/my-post/index.html instead of /posts/my-post.html for stable routing.
  trailingSlash: true,
};

export default nextConfig;
