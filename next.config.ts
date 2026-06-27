import type { NextConfig } from "next";

const apiUrl = process.env.NEXT_PUBLIC_API_URI || "";
const hostname = new URL(apiUrl).hostname;

const nextConfig: NextConfig = {

  async redirects() {
    return [
      {
        source: "/blogs/womens-only-trip-new-orleans-friendship-travel-story",
        destination:
          "/blogs/where-friendship-found-its-rhythm-a-women-s-escape-to-new-orleans",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: hostname,
      },
    ],
  },
};

export default nextConfig;