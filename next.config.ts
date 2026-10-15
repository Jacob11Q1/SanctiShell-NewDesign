import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    // The project lives in a OneDrive folder, where Turbopack's on-disk dev cache
    // kept serving stale CSS after edits. Off for dev only; builds still cache.
    turbopackFileSystemCacheForDev: false,
  },
  images: {
    // Serve modern formats (CLAUDE.md §7b); browsers that can't use AVIF get WebP
    formats: ["image/avif", "image/webp"],
    qualities: [75],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
