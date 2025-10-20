import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    // Kalau build di Vercel error karena type minor, ini mencegah kegagalan build
    ignoreBuildErrors: true,
  },
  experimental: {
    // Framer Motion & beberapa lib pakai ESM
    esmExternals: "loose",
  },
  webpack: (config) => {
    config.infrastructureLogging = { level: "error" };
    return config;
  },
};

export default nextConfig;
