import { IconTypes } from "@/shared/ui/Icon/IconName";

export interface INavMenuItems {
  path?: string;
  iconType: IconTypes;
}

export const navMenuItems: INavMenuItems[] = [
  {
    path: "",
    iconType: "Home",
  },

  {
    path: "",
    iconType: "FindPeople",
  },

  {
    iconType: "NewPosts",
  },

  {
    path: "",
    iconType: "Messenger",
  },

  {
    path: "",
    iconType: "Like",
  },
];
