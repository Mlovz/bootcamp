export interface User {
  address: string;
  avatar: string;
  createdAt: Date;
  email: string;
  followers: User[];
  following: User[];
  fullname: string;
  gender: string;
  mobile: string;
  password: string;
  role: string;
  saved: string[];
  story: string;
  updatedAt: Date;
  username: string;
  website: string;
  __v: number;
  _id: string;
}

export interface UserState {
  user: User;
  token: string;
  loading: boolean;
}
