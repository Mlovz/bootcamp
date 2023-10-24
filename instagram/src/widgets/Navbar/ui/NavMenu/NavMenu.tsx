import React from "react";
import cls from "./NavMenu.module.scss";
import { Icon } from "@/shared/ui";

export const NavMenu = () => {
  return (
    <div>
      <Icon type="Home" />
      <Icon type="Messenger" />
    </div>
  );
};
