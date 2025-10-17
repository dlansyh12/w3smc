import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Matikan error dev-mode non-fatal seperti "removeChild"
    config.infrastructureLogging = { level: "error" };
    return config;
  },
};

export default nextConfig;
