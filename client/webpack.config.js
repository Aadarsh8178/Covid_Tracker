const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const port = process.env.PORT || 3000;
var config = {
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].js",
    chunkFilename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  devtool: "source-map",
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    open: true,
    proxy: { "/api/**": { target: "http://localhost:8080", secure: false } },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/public/index.html",
    }),
    new Dotenv(),
    new CopyPlugin({
      patterns: [
        { from: "./src/public/favicon.ico", to: "" },
        { from: "./src/public/manifest.json", to: "" },
        { from: "./src/public/logo192.png", to: "public" },
        { from: "./src/public/logo192.png", to: "" },
        { from: "./src/public/logo512.png", to: "" },
      ],
    }),
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: "./src/src-sw.js",
      swDest: "sw.js",
      maximumFileSizeToCacheInBytes: 5000000,
    }),
  ],
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/, ///< put all used node_modules modules in this chunk
          name: "vendor", ///< name of bundle
          chunks: "all", ///< type of code to put in this bundle
        },
      },
    },
  },
};
module.exports = (env, args) => {
  return config;
};
