const path = require("path");
const fs = require("fs");
const dirTree = require("directory-tree");
const webpack = require("webpack");

const DEFAULT_PASS_DIR = require("os").homedir() + "/.password-store";
const PASS_DIR_TREE = dirTree(DEFAULT_PASS_DIR, {
  exclude: /\.DS_Store|\.gpg-id/,
});

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      tree: JSON.stringify(PASS_DIR_TREE),
    }),
  ],
};
