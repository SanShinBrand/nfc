

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.ufs.sh", // ✅ allow any subdomain under ufs.sh
        pathname: "/f/**",     // ✅ only allow file paths
      },
    ],
  },  
};

export default nextConfig;
