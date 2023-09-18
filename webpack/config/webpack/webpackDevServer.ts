import { IOptions } from "./types/config";

import type { Configuration as DevConfiguration } from "webpack-dev-server";

export const webpackDevServer = (options: IOptions): DevConfiguration => {
  return {
    port: 3000,
    open: true,
  };
};
