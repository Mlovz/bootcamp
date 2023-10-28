import Home from "@/shared/assets/svg/Home.svg";
import Messenger from "@/shared/assets/svg/Messenger.svg";
import Search from "@/shared/assets/svg/Search.svg";
import Favorite from "@/shared/assets/svg/Favorite.svg";
import FindPeople from "@/shared/assets/svg/FindPeople.svg";
import NewPosts from "@/shared/assets/svg/NewPosts.svg";
import Dark from "@/shared/assets/svg/Dark.svg";
import Light from "@/shared/assets/svg/Light.svg";

export type IconType =
  | "Home"
  | "Messenger"
  | "Search"
  | "Favorite"
  | "FindPeople"
  | "Dark"
  | "Light"
  | "NewPosts";

export const iconName: Record<IconType, JSX.Element> = {
  Home: <Home />,
  Messenger: <Messenger />,
  Search: <Search />,
  Favorite: <Favorite />,
  FindPeople: <FindPeople />,
  NewPosts: <NewPosts />,
  Light: <Light />,
  Dark: <Dark />
};
