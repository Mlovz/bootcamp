type ModeType = "development" | "production";

export interface IPaths {
  entry: string;
  output: string;
  html: string;
}

export interface IEnv {
  mode: ModeType;
}

export interface IOptions {
  paths: IPaths;
  mode: IEnv;
  isDev: boolean;
}
