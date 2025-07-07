const nextConfig = {
  experimental: {
    legacyBrowsers: false,
    optimizeCss: true,
  },
  modularizeImports: {
    lodash: {
      transform: 'lodash/{{member}}',
    },
  },
};

export default nextConfig;
