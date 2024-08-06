/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.samsung.com",
      },
    ],
  },
};

export default nextConfig;
