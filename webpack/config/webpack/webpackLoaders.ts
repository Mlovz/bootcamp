import webpack from "webpack";
import { IOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const webpackLoaders = (options: IOptions): webpack.RuleSetRule[] => {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? MiniCssExtractPlugin.loader : "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: any) => Boolean(resPath.includes(".module.")),
            localIdentName: "[path][name]__[local]--[hash:base64:5]",
          },
        },
      },
      "sass-loader",
    ],
  };

  return [tsLoader, cssLoader];
};
