export interface IUser {
  username: string;
  password: string;
  avatar: string;
  role: string;
  story: string;
  followers: any; // У вас не будет
  following: any; // У вас не будет
  saved: any; // У вас не будет
  gender: any; // У вас не будет
  mobile: any; // У вас не будет
  createdAt: any; // У вас не будет
  updatedAt: any; // У вас не будет
  website: any; // У вас не будет
  __v: any;
  _id: string;
  address: any;
}

export interface AuthSchema {
  user: IUser | null;
  token: string;
  loading?: boolean;
}

export const AUTH_TYPES: any = {
  AUTH: "AUTH",
  AUTH_LOADING: "AUTH_LOADING",
};

export interface LoginFetchData {
  msg: string;
  access_token: string;
  user: IUser;
}

export interface IAuthType {
  type: typeof AUTH_TYPES;
  payload: AuthSchema;
}
