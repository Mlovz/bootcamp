export interface IUser {
  username: string;
  password: string;
  avatar: string;
  role: string;
  story: string;
}

export interface AuthSchema {
  user: IUser | null;
  token: string;
  loading?: boolean;
}

export const AUTH_TYPES = {
  AUTH: "AUTH",
};

export interface IAuthType {
  type: typeof AUTH_TYPES;
  payload: AuthSchema;
}
