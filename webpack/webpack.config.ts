import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default (env: any) => {
  const mode = env.mode || "development";
  const isDev = mode === "development";

  const config = {
    mode: mode,
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
      filename: "[name][contenthash].js",
      path: path.resolve(__dirname, "build"),
      clean: true,
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
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
        },
      ],
    },

    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
      new webpack.ProgressPlugin(),
    ],

    devServer: isDev
      ? {
          port: 3000,
          open: true,
        }
      : undefined,
  };

  return config;
};
