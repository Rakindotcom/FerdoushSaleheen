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
    // Assets are pre-compressed WebPs; serve them directly because the Netlify
    // Next.js image optimizer rejects the deployed WebP sources with HTTP 400.
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi_webp/**",
      },
    ],
  },
};

export default nextConfig;
