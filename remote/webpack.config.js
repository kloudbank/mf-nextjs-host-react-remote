const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const packageJsonDeps = require("./package.json")
const path = require("path")

module.exports = {
  entry: './src/index',
  entry: {
    app: {
      import: './src/index',
    },
  },
  cache: false,

  mode: 'development',
  devtool: 'source-map',

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: 'auto',
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json', '.mjs', '.css'],
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        exclude: /node_modules/,
        options: {
          presets: [require.resolve('@babel/preset-react')],
        },
      },
      {
        test: /\.css?$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ],
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './Nav': './src/components/Nav',
        './Logo': './src/components/Logo',
        './GlobalNav': './src/components/GlobalNav',
        './ExternalLink': './src/ui/ExternalLink',
        './Tab': './src/ui/Tab',
        './TabGroup': './src/ui/TabGroup',
      },
      // shared: {},
      shared: {
        react: {
          // eager: true,
          // requiredVersion: packageJsonDeps["react"],
          requiredVersion: false,
          singleton: true
        },
        "react-dom": {
          // eager: true,
          // requiredVersion: packageJsonDeps["react-dom"],
          requiredVersion: false,
          singleton: true
        }
      }
    }),
  ],
};
