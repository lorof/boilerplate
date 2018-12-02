const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");

const common = require("./webpack.common.js");

module.exports = merge.smart(common, {
  mode: "development",
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]__[local]--[hash:base64:5]"
            }
          },
          "sass-loader",
          "postcss-loader"
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "../build"),
    compress: false,
    quiet: true,
    port: 8080
  }
});
