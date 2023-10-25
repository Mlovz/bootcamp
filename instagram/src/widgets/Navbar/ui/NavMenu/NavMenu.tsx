import React, { useContext } from "react";
import cls from "./NavMenu.module.scss";
import { Avatar, Icon } from "@/shared/ui";
import { INavMenuItem } from "../../model/consts/navMenu";
import { ThemeContext } from "@/app/provider";
import { Theme } from "@/shared/consts/theme";
import { SwitchButton } from "@/features";
import { classNames } from "@/shared/lib/classNames";
// import { nanMenuItems } from "../../model/consts/navMenu";

export const NavMenu = () => {
  const {theme} = useContext(ThemeContext)
  
  
  const nanMenuItems: INavMenuItem[] = [
    {
      href: "/",
      iconType: "Home",
    },
    {
      href: "/",
      iconType: "Messenger",
    },
    {
      iconType: "NewPosts",
    },
    {
      href: "/",
      iconType: "FindPeople",
    },
    {
      href: "/",
      iconType: "Favorite",
    },
  ];

  return (
    <nav className={cls.nav}>
      <ul className={cls.list}>
        {nanMenuItems.map((item) => (
          <li key={item.iconType} className={classNames(cls.item, {[cls.dark]: theme === Theme.DARK}, [])}>
            {item.href ? (
              <a href={item.href} className={cls.link}>
                <Icon type={item.iconType} />
              </a>
            ) : (
              <Icon type={item.iconType} />
            )}
          </li>
        ))}

        <li className={classNames('', {[cls.dark]: theme === Theme.DARK}, [])}>
          <SwitchButton />
        </li>

        <li>
          <Avatar
            src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png"
            size={22}
          />
        </li>
      </ul>
    </nav>
  );
};
