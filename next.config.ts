import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // needed for GitHub Pages
  },
  basePath: "/tesnix",
  assetPrefix: "/tesnix/",
};

export default nextConfig;
