import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure dynamic routes are included
  trailingSlash: false,
};

export default nextConfig;
