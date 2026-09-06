// Central site configuration. Update these values for your own deployment.

export const siteConfig = {
  title: "Stonecat",
  description: "A blog about tech. You can thank tailscale's random name generator for the name.",
  // Used for the CNAME file / canonical links. Update to your custom domain.
  domain: "stonecat.sh",
  url: "https://stonecat.sh",

  // Giscus configuration.
  // Fill these in after you:
  //   1. Make the repo public and enable the "Discussions" feature.
  //   2. Install the giscus GitHub App: https://github.com/apps/giscus
  //   3. Visit https://giscus.app, enter your repo, and copy the generated values.
  giscus: {
    repo: "AkhileshNS/stonecat-sh" as `${string}/${string}`, // e.g. "nsakh/stonecat-sh"
    repoId: "R_kgDOUQlU1w", // e.g. "R_kgDO..."
    category: "Announcements", // the Discussions category name
    categoryId: "DIC_kwDOUQlU184DFCB3", // e.g. "DIC_kwDO..."
  },
} as const;
