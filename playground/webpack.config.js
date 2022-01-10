const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const mode = process.env.NODE_ENV === 'local' ? 'development' : 'production';
const apiPort = 18001;

module.exports = {
  mode,
  entry: {
    main: './playground/src/index.tsx',
  },
  output: {
    filename: `js/[name].[hash:8].js`,
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/playground/src'),
    },
    extensions: ['.js', '.ts', '.tsx', '.css'],
  },
  devServer: {
    host: 'localhost',
    hot: true,
    historyApiFallback: true,
    port: 8080,
    proxy: {
      '/.api': {
        target: `http://localhost:${apiPort}`,
        pathRewrite: {
          '^/\\.api': '',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.([j|t]sx?|svg)$/,
        use: ['babel-loader'],
        exclude: (path) => {
          if (path.includes('node_modules')) {
            return !path.includes('@fastcampus');
          }
          return false;
        },
      },
      {
        test: /\.(tsx?)$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.playground.json',
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        loader: '@svgr/webpack',
        options: {
          babel: false,
          svgo: {
            plugins: [
              {
                // prevent removal of strokes / fills definitions intended to become useful by css cascading.
                removeUselessStrokeAndFill: false,
              },
              {
                removeUnknownsAndDefaults: false,
              },
            ],
          },
        },
      },
      {
        test: /\.(svg|jpg|jpeg|png)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './playground/public/index.html',
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        REACT_APP_CONFIG: JSON.stringify({}),
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
