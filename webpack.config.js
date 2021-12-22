const path = require('path');
const merge = require('webpack-merge').merge;
const crypto = require('crypto');
const dotenv = require('dotenv');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const DefinePlugin = require('webpack').DefinePlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

const isBundleAnalyser = process.env.BUNDLE_ANALYSER;
const isDevMode = process.env.NODE_ENV === 'development';

const buildDate = new Intl.DateTimeFormat('ru', {
  timeStyle: 'medium',
  dateStyle: 'short',
})
  .format(new Date())
  .toString();

const buildHash = crypto.createHash('md5').update(buildDate).digest('hex');

const getEnvKeys = (params, condition = '') =>
  Object.keys(params).reduce((prev, next) => {
    if (!!condition) {
      if (next.includes(condition)) {
        prev[`process.env.${next}`] = JSON.stringify(process.env[next]);
      }
    } else {
      prev[`process.env.${next}`] = JSON.stringify(params[next]);
    }
    return prev;
  }, {});

const env = dotenv.config().parsed || {};
const envKeys = getEnvKeys(env);
const processEnvKeys = getEnvKeys(process.env, 'REACT_APP_');

const config = {
  target: ['web', 'es5'],
  mode: isDevMode ? 'development' : 'production',
  entry: ['core-js/stable', './src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: process.env.REACT_APP_SITE_URL || process.env.REACT_APP_PUBLIC_URL,
    filename: 'bundle-[fullhash].js',
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  optimization: {
    usedExports: true,
  },
  devServer: {
    hot: false,
    open: true,
    liveReload: true,
    host: '127.0.0.1',
    port: 3001,
    historyApiFallback: true,
    proxy: [
      {
        context: ['/api/v1'],
        target: 'http://127.0.0.1:8080',
        secure: false,
        changeOrigin: true,
        headers: {
          Connection: 'keep-alive',
        },
      },
    ],
  },
  devtool: isDevMode ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: { ie: 11 },
                },
              ],
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-transform-classes',
              '@babel/plugin-transform-runtime',
            ],
          },
        },
        include: [path.resolve('src')],
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/',
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(svg)$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.(png|gif|jpe?g)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    isBundleAnalyser ? new BundleAnalyzerPlugin() : false,
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css',
    }),
    new HTMLWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
    new NodePolyfillPlugin(),
    new CleanWebpackPlugin(),
    new DefinePlugin({
      REACT_APP_BUILD_DATE: JSON.stringify(buildDate),
      REACT_APP_BUILD_HASH: JSON.stringify(buildHash),
      REACT_APP_BUILD_VERSION: JSON.stringify(process.env.npm_package_version),
    }),
    new DefinePlugin(envKeys),
    new DefinePlugin(processEnvKeys),
  ].filter(Boolean),
};

module.exports = merge([config]);
