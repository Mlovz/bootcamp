import Home from "@/shared/assets/svg/Home.svg";
import Messenger from "@/shared/assets/svg/Messenger.svg";

export type IconType = "Home" | "Messenger";

export const iconName: Record<IconType, JSX.Element> = {
  Home: <Home />,
  Messenger: <Messenger />,
};
