import { resolve } from "path";
import { Configuration } from "webpack";
import merge from "webpack-merge";
import { webpackBaseConfig } from "./webpack.base";

const webpackProductionConfig: Configuration = {
  mode: "none",
  output: {
    path: resolve(__dirname, "..", "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

export default merge(webpackBaseConfig, webpackProductionConfig);
