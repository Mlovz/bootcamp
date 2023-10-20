interface IFollowing {
  _id: string;
  username: string;
  fullname: string
  avatar: string;
  followers: any[]
  followind: any[]
}

export interface User {
  avatar: string;
  role: string;
  gender: string;
  mobile: string;
  address: string;
  story: string;
  website: string;
  followers: IFollowing[];
  following: IFollowing[];
  saved: string[];
  _id: string;
  fullname: string;
  username: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface UserSchema {
  user: User;
  loading: boolean;
}
