const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? "/starter-react" : "",
  assetPrefix: isProd ? "/starter-react/" : "",
};

export default nextConfig;
