import path from "path";

import { IPaths } from "./config/webpack/types/config";
import { webpackConfig } from "./config/webpack/webpackConfig";

export default (env: any) => {
  const mode = env.mode || "development";
  const isDev = mode === "development";

  const paths: IPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const config = webpackConfig({
    mode,
    isDev,
    paths,
  });

  return config;
};
