/** @type {import("next").NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },

  // Vercel için doğru ayarlar:
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ❗ Orchids'in custom loader'ını kaldırıyoruz
  webpack(config) {
    return config;
  },
};

export default nextConfig;
