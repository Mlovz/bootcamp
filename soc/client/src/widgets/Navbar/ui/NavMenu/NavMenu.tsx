import React, { FC, memo } from "react";
import cls from "./NavMenu.module.scss";
import { navMenuItems } from "../../model/consts";
import { Icon } from "@/shared/ui";

interface INavMenuProps {}

export const NavMenu: FC<INavMenuProps> = memo(({}) => {
  return (
    <nav className={cls.menu}>
      <ul className={cls.list}>
        {navMenuItems.map((item) => (
          <li>
            {item.path ? (
              <a href="">
                <Icon type={item.iconType} />
              </a>
            ) : (
              <Icon type={item.iconType} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
});
