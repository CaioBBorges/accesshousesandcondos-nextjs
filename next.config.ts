import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'accesshousesandcondos.local',
      },
      {
        protocol: 'http',
        hostname: 'accesshousesandcondos.local',
      },
    ],
  },
};

export default nextConfig;