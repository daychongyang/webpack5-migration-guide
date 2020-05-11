import { Configuration } from "webpack";
import merge from "webpack-merge";
import { webpackBaseConfig } from "./webpack.base";

export const webpackDevelopmentConfig: Configuration = {
  mode: "development",
  devServer: {
    port: 12138,
    host: "0.0.0.0",
    open: true,
  },
};

export default merge(webpackBaseConfig, webpackDevelopmentConfig);
