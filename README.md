# Stonecat

A simple statically-exported [Next.js](https://nextjs.org) blog deployed to
GitHub Pages, with [Giscus](https://giscus.app) comments backed by GitHub
Discussions.

## Structure

- `app/page.tsx` — home page, a feed of all posts.
- `app/posts/[slug]/page.tsx` — an individual post, rendered from MDX.
- `content/posts/*.mdx` — the posts themselves (frontmatter: `title`, `date`, `description`).
- `lib/posts.ts` — reads and sorts posts.
- `lib/config.ts` — site + Giscus configuration.
- `components/Giscus.tsx` — comments widget.
- `.github/workflows/deploy.yml` — builds and deploys to GitHub Pages.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Writing a post

Add a new `.mdx` file under `content/posts/` with frontmatter:

```mdx
---
title: "My Post"
date: "2026-09-06"
description: "A short summary shown in the feed."
---

Your content here.
```

The filename (without extension) becomes the URL slug, unless you set a `slug`
field in the frontmatter.

## Deployment

The site deploys automatically on every push to `main` via GitHub Actions.

1. In the repo settings, set **Pages → Build and deployment → Source** to
   **GitHub Actions**.
2. Update `public/CNAME` and `lib/config.ts` with your custom domain, then
   configure the domain's DNS per
   [GitHub's docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Comments (Giscus)

1. Make the repository public and enable the **Discussions** feature.
2. Install the [giscus GitHub App](https://github.com/apps/giscus) on the repo.
3. Go to [giscus.app](https://giscus.app), enter your repo, and copy the
   generated `repo`, `repoId`, `category`, and `categoryId` values into
   `lib/config.ts`.

## License

This project is dual-licensed:

- **Code** (everything that makes the site work, including code snippets within
  posts) is licensed under the [MIT License](LICENSE).
- **Content and media** (the prose in `content/posts/` and associated images,
  diagrams, and other media) are licensed under
  [CC BY 4.0](LICENSE-CONTENT.md).
