import { Configuration } from "webpack";
import merge from "webpack-merge";
import { webpackBaseConfig } from "./webpack.base";

export const webpackDevelopmentConfig: Configuration = {
  mode: "development",
  devServer: {
    noInfo: true,
    port: 12138,
    host: "localhost",
    open: true,
  },
};

export default merge(webpackBaseConfig, webpackDevelopmentConfig);
