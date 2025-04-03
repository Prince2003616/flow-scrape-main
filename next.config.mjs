/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Ensure it's optimized for Vercel
  experimental: {
    appDir: true,
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [{ key: "Cache-Control", value: "no-store" }],
      },
    ];
  },
};

export default nextConfig;
