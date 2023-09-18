import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { IOptions } from "./types/config";

export const webpackPlugins = (
  options: IOptions
): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: options.paths.html,
    }),
    new webpack.ProgressPlugin(),
  ];
};
