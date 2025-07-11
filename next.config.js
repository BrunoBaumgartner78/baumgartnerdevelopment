/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // hier nur andere Optionen, keine Booleans
    optimizeCss: true,
    // serverActions: true, // Entfernen oder auskommentieren!
  },
};

export default nextConfig;
