/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["live.staticflickr.com"],
  },
  env: {
    API_KEY: process.env.API_KEY,
  },
};

export default nextConfig;
