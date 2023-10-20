import { IconTypes } from "@/shared/ui/Icon/IconName";

export type tabType = "posts" | "reels" | "tagged";

interface IProfileTabs {
  text: string;
  tabType: tabType;
  iconType: IconTypes;
}

export const tabs: IProfileTabs[] = [
  {
    text: "POSTS",
    tabType: "posts",
    iconType: "Posts",
  },
  {
    text: "REELS",
    tabType: "reels",
    iconType: "Reels",
  },
  {
    text: "TAGGED",
    tabType: "tagged",
    iconType: "Tagged",
  },
];
