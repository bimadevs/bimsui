import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true, // Abaikan semua error TypeScript saat build
  },
  eslint: {
    ignoreDuringBuilds: true, // Menonaktifkan ESLint saat build
  },
};

export default nextConfig;
