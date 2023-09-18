import webpack from "webpack";
import { IOptions } from "./types/config";

export const webpackResolve = (options: IOptions): webpack.ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    // alias: {},
  };
};
