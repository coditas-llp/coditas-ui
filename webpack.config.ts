import * as webpack from 'webpack';
import * as webpackDevServer from 'webpack-dev-server';
import path from 'path';
import { Configuration, DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import Dotenv from 'dotenv-webpack';

const webpackConfig = (): webpack.Configuration => ({
  entry: ['./src/index.tsx'],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
    mainFields: ['module', 'browser', 'main'],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[hash].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
        exclude: /dist/,
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    // HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
    // MiniCssExtractPlugin extracts CSS into separate files to support On-Demand-Loading of CSS and SourceMaps.
    new MiniCssExtractPlugin({
      filename: '[hash].css',
    }),
    // Speeds up TypeScript type checking and ESLint linting (by moving each to a separate process)
    new ForkTsCheckerWebpackPlugin(),
    // Configuring the .env file
    new Dotenv({
      path: '.env',
    }),
  ],
});

export default webpackConfig;
