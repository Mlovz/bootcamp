import { Text } from "@/shared/ui";
import type { MenuProps } from "antd";

export const useProfile = (isAuth: boolean) => {
  const profileDotsItems: MenuProps["items"] = [
    {
      label: <Text>Поделится</Text>,
      key: "0",
    },
  ];

  const newItems: MenuProps["items"] = [
    ...profileDotsItems,
    isAuth && {
      label: <Text>Настройки</Text>,
      key: "1",
    },
  ];

  return newItems;
};
