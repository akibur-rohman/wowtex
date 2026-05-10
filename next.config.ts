import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = "wowtex";

const nextConfig: NextConfig = {
  // Optional: Vercel supports standard Next.js out of the box. 
  // You can remove `output: "export"` if you want to use Next.js Image Optimization or Server Components on Vercel.
  // output: "export", 
  
  images: {
    unoptimized: true
  },
  basePath: isGithubActions ? `/${repoName}` : "",
  assetPrefix: isGithubActions ? `/${repoName}/` : ""
};

export default nextConfig;
