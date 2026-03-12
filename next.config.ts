// import type { NextConfig } from "next";

// const apiUrl = process.env.NEXT_PUBLIC_API_URI || "";
// const hostname = new URL(apiUrl).hostname;

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: hostname,
//       },
//     ],
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    domains: [ "steelblue-cheetah-101023.hostingersite.com"],
  },
};

export default nextConfig;