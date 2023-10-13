import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export default (env: any) => {
  const mode = env.mode || "development";
  const port = env.port || 3000;
  const isDev = mode === "development";

  const config = {
    mode: mode,
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
      filename: "[name][contenthash].js",
      path: path.resolve(__dirname, "build"),
      publicPath: "/",
      clean: true,
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
      new webpack.ProgressPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      }),
      new ReactRefreshWebpackPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                icon: true,
                svgoConfig: {
                  plugins: [
                    {
                      name: "convertColors",
                      params: {
                        currentColor: true,
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.s[ac]ss$/i,
          exclude: /node_modules/,
          use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: {
                  auto: (resPath: string) =>
                    Boolean(resPath.includes(".module.")),
                  localIdentName: isDev
                    ? "[path][name]__[local]--[hash:base64:5]"
                    : "[hash:base64:8]",
                },
              },
            },
            "sass-loader",
          ],
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      preferAbsolute: true,
      mainFiles: ["index"],
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev
      ? {
          port: port,
          open: true,
          historyApiFallback: true,
          hot: true,
        }
      : undefined,
  };

  return config;
};
