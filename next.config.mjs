/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns:[],
    domains: ["images.unsplash.com", "img.freepik.com", "tailwindui.com"],
  },
  experimental: { esmExternals: true },
};

export default nextConfig;
