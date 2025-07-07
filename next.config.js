const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  modularizeImports: {
    lodash: {
      transform: 'lodash/{{member}}',
    },
  },
};

export default nextConfig;
