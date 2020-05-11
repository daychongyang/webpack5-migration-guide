import { resolve } from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const context = resolve(__dirname, "..", "src");
const publicPath = resolve(__dirname, "..", "public");
const template = resolve(publicPath, "index.html");

export const webpackBaseConfig: Configuration = {
  context,
  entry: "./index.ts",
  stats: "errors-warnings",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack5 升级指南",
      filename: "index.html",
      template,
      hash: true,
      minify: true,
    }),
  ],
};
