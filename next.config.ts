import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
    useTypeScriptCli: false,
    webpackBuildWorker: false,
  },
  // Keep development output separate from production builds. This prevents a
  // running dev server from overwriting production manifests and static chunks.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
