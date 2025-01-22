import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // Menonaktifkan ESLint saat build
  },
};

export default nextConfig;
