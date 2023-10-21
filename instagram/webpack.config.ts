import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

type BuildMode = "development" | "production";

interface BuildEnv {
  mode: BuildMode;
  port: number;
}

export default (env: BuildEnv) => {
  console.log(env);

  const mode = env.mode || "development";
  const port = env.port || 3000;
  const isDev = mode === "development";

  const config = {
    mode: mode,
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
      filename: "[name][contenthash].js",
      path: path.resolve(__dirname, "build"),
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
    ],
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
    },

    devtool: isDev ? "inline-source-map" : undefined,

    devServer: isDev
      ? {
          port: port,
          open: true,
        }
      : undefined,
  };

  return config;
};
