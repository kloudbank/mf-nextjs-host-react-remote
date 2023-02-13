/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
          new NextFederationPlugin({
            name: 'host-app',
            remotes: {
              ui: 'remote@http://localhost:3030/remoteEntry.js',
            },
            filename: 'static/chunks/remoteEntry.js',
            shared: {
              // react: {
              //   // requiredVersion: false,
              //   singleton: true
              // },
              // "react-dom": {
              //   // requiredVersion: false,
              //   singleton: true
              // }
            },
          }),
      );
    }

    return config;
  },
};
