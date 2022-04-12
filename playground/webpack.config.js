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
        test: /\.(tsx?)$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        loader: '@svgr/webpack',
        options: {
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
        test: /\.(svg|jpe?g|png)$/,
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
