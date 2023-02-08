/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
          new NextFederationPlugin({
            name: 'host',
            remotes: {
              remote: 'remote@http://localhost:3030/remoteEntry.js',
            },
            filename: 'static/chunks/remoteEntry.js',
          }),
      );
    }

    return config;
  },
};
