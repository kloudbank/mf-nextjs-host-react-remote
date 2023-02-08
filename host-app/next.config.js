/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  webpack(config, options) {
    config.resolve.fallback = {
      ui: false
    };
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'host-app',
          remotes: {
            ui: 'remote@http://localhost:3030/remoteEntry.js',
          },
          filename: 'static/chunks/remoteEntry.js',
          shared: {},
          extraOptions: {
            // enableImageLoaderFix: true,
            // enableUrlLoaderFix: true,
            // automaticAsyncBoundary: true,
          },
        }),
      );
    }

    return config;
  },
}

module.exports = nextConfig;
