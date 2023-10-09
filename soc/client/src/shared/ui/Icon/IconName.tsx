import Comment from "@/shared/assets/svg/Comment.svg";
import Emoji from "@/shared/assets/svg/Emoji.svg";
import FindPeople from "@/shared/assets/svg/FindPeople.svg";
import Home from "@/shared/assets/svg/Home-fill.svg";
import Like from "@/shared/assets/svg/Like.svg";
import Messenger from "@/shared/assets/svg/Messenger.svg";
import NewPosts from "@/shared/assets/svg/NewPosts.svg";
import Save from "@/shared/assets/svg/Save.svg";
import Search from "@/shared/assets/svg/Search.svg";
import SharePosts from "@/shared/assets/svg/SharePosts.svg";
import More from "@/shared/assets/svg/More.svg";
import Google from "@/shared/assets/svg/google.svg";
import Facebook from "@/shared/assets/svg/facebook.svg";

export type IconTypes =
  | "Comment"
  | "Emoji"
  | "FindPeople"
  | "Home"
  | "Like"
  | "Messenger"
  | "NewPosts"
  | "Save"
  | "Search"
  | "SharePosts"
  | "Google"
  | "Facebook"
  | "More";

export const iconName: Record<IconTypes, JSX.Element> = {
  Comment: <Comment />,
  Google: <Google />,
  Facebook: <Facebook />,
  Emoji: <Emoji />,
  FindPeople: <FindPeople />,
  Home: <Home />,
  Like: <Like />,
  Messenger: <Messenger />,
  NewPosts: <NewPosts />,
  Save: <Save />,
  Search: <Search />,
  SharePosts: <SharePosts />,
  More: <More />,
};
