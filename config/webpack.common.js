const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "../src/index.tsx"),
  output: {
    path: path.join(__dirname, "../build"),
    publicPath: "/",
    filename: "assets/js/[name].[chunkhash:8].js",
    chunkFilename: "assets/js/[name].[chunkhash:8].chunk.js"
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 200,
      maxSize: 0,
      minChunks: 1
    },
    runtimeChunk: true
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: "ts-loader"
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/fonts/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "My App",
      inject: true,
      template: "templates/index.html"
    })
  ]
};
