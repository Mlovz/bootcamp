interface ILikes {
  likes: string;
}

interface IUser {
  username: string;
  age: number;
  likes: ILikes[];
  views: number;
  createdAt: string;
}

const user: IUser = {
  username: "",
  age: 20,
  likes: [],
  views: 0,
  createdAt: "",
};
