import type { NextConfig } from "next";

const apiUrl = process.env.NEXT_PUBLIC_API_URI;

let hostname: string | undefined;
try {
 hostname = apiUrl ? new URL(apiUrl).hostname : undefined;
} catch {
 hostname = undefined;
}

const nextConfig: NextConfig = {
 output: "standalone",
 images: {
 remotePatterns: hostname
 ? [{ protocol: "https", hostname }]
 : [],
 },
};

export default nextConfig;


//hided below code for hostinger node app deploying issue fix and added above code 17-03-2026
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