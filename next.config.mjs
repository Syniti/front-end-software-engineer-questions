/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "img.freepik.com", "tailwindui.com"],
  },
  experimental: { esmExternals: true },
};

export default nextConfig;
