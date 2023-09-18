import { IOptions } from "./types/config";
import { webpackLoaders } from "./webpackLoaders";
import { webpackResolve } from "./webpackResolve";
import { webpackPlugins } from "./webpackPlugins";
import { webpackDevServer } from "./webpackDevServer";

export const webpackConfig = (options: IOptions) => {
  const { paths, isDev, mode } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: "[name][contenthash].js",
      path: paths.output,
      clean: true,
    },

    module: {
      rules: webpackLoaders(options),
    },

    resolve: webpackResolve(options),

    plugins: webpackPlugins(options),

    devServer: isDev ? webpackDevServer(options) : undefined,
  };
};
