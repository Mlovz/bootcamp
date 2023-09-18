import webpack from "webpack";
import { IOptions } from "./types/config";

export const webpackLoaders = (options: IOptions): webpack.RuleSetRule[] => {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: any) => Boolean(resPath.includes(".module.")),
          },
        },
      },
      "sass-loader",
    ],
  };

  return [tsLoader, cssLoader];
};
