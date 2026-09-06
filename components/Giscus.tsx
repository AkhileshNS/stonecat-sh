"use client";

import GiscusReact from "@giscus/react";
import { siteConfig } from "@/lib/config";

/**
 * Giscus-powered comments backed by GitHub Discussions.
 *
 * Comments will not render until the placeholder IDs in `lib/config.ts` are
 * replaced with the real values generated at https://giscus.app.
 */
export default function Giscus() {
  const { repo, repoId, category, categoryId } = siteConfig.giscus;

  return (
    <div className="giscus-wrapper">
      <GiscusReact
        repo={repo}
        repoId={repoId}
        category={category}
        categoryId={categoryId}
        mapping="pathname"
        strict="1"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
