// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },   images : {
//     remotePatterns : [
//         {
//             protocol : 'https',
//             hostname : "**",
//             port : "",
//             pathname : "**"
//         }
//     ]
// },
// env : {
//     DRIZZLE_DATABASE_URL : process.env.DRIZZLE_DATABASE_URL
// }
// };

// export default nextConfig;

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
  env: {
    DRIZZLE_DATABASE_URL: process.env.DRIZZLE_DATABASE_URL,
  },
};

export default nextConfig;
