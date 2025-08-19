import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: "export",
  images: { unoptimized: true },
  // If deploying to a project page (not username.github.io), uncomment and set your repo name:
  // basePath: "/portfolio",
  // assetPrefix: "/portfolio/",
  // trailingSlash helps avoid 404s on GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
