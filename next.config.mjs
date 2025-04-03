/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Ensure it's optimized for serverless
  experimental: {
    appDir: true, // If using the App Router
  },
  async headers() {
    return [
      {
        source: "/api/:path*", // Apply to all API routes
        headers: [{ key: "Cache-Control", value: "no-store" }],
      },
    ];
  },
};

export default nextConfig;
