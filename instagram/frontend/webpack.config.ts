import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

type BuildMode = "development" | "production";

interface BuildEnv {
  mode: BuildMode
  port: number
}

export default (env: BuildEnv) => {
  const mode = env.mode || "development";
  const port = env.port || 3000;
  const isDev = mode === "development";

  const config = {
    mode,
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
      filename: "[name][contenthash].js",
      path: path.resolve(__dirname, "build"),
      clean: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html")
      }),
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css"
      }),
      new webpack.ProgressPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new ReactRefreshWebpackPlugin(),
      new webpack.DefinePlugin({
        DEV: JSON.stringify(isDev)
      })
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // "style-loader",
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: {
                  auto: (resPath: string) =>
                    Boolean(resPath.includes(".module.")),
                  localIdentName: isDev
                    ? "[path][name]__[local]--[hash:base64:5]"
                    : "[hash:base64:8]"
                }
              }
            },
            "sass-loader"
          ]
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader"
            }
          ]
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"]
        }
      ]
    },

    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        "@": path.resolve(__dirname, "src")
      }
    },

    devtool: isDev ? "inline-source-map" : undefined,

    devServer: isDev
      ? {
          port,
          open: true,
          historyApiFallback: true,
          hot: true
        }
      : undefined
  };

  return config;
};
