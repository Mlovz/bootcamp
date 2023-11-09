import React, { useContext } from "react";
import cls from "./NavMenu.module.scss";
import { AppLink, Avatar, DropDown, Icon, Text } from "@/shared/ui";
import { type INavMenuItem } from "../../model/consts/navMenu";
import { ThemeContext } from "@/app/provider";
import { Theme } from "@/shared/consts/theme";
import { SwitchButton } from "@/features";
import { classNames } from "@/shared/lib/classNames";

import { Link } from "react-router-dom";
import { LangSwitch } from "@/widgets/LangSwitch/ui/LangSwitch";
import { useSelector } from "react-redux";
import { getAuthData, logout } from "@/entities/User";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";

export const NavMenu = () => {
  const { theme } = useContext(ThemeContext);

  const authData = useSelector(getAuthData);
  const dispatch = useAppDispatch();

  const nanMenuItems: INavMenuItem[] = [
    {
      href: "/",
      iconType: "Home",
    },
    {
      href: "/login",
      iconType: "Messenger",
    },
    {
      iconType: "NewPosts",
    },
    {
      href: "/register",
      iconType: "FindPeople",
    },
    {
      href: "/",
      iconType: "Favorite",
    },
  ];

  const dropDownItems: MenuProps["items"] = [
    {
      label: <Text color="blue">{authData.fullname}</Text>,
      key: "0",
    },
    {
      label: (
        <AppLink to={`/profile/${authData._id}`}>
          <Text color="default">Профиль</Text>
        </AppLink>
      ),
      key: "1",
    },
    {
      label: <Text color="default">Сменить тему</Text>,
      key: "2",
    },
    {
      label: <Text color="default">Настройки</Text>,
      key: "3",
    },
    {
      label: <Text color="default">Выйти</Text>,
      onClick: () => dispatch(logout()),
      key: "4",
    },
  ];

  return (
    <nav className={cls.nav}>
      <ul className={cls.list}>
        {nanMenuItems.map((item) => (
          <li
            key={item.iconType}
            className={classNames(
              cls.item,
              { [cls.dark]: theme === Theme.DARK },
              []
            )}
          >
            {item.href ? (
              <Link to={item.href} className={cls.link}>
                <Icon type={item.iconType} />
              </Link>
            ) : (
              <Icon type={item.iconType} />
            )}
          </li>
        ))}

        <li
          className={classNames("", { [cls.dark]: theme === Theme.DARK }, [])}
        >
          <SwitchButton />
        </li>

        <li>
          <LangSwitch />
        </li>

        <li>
          <DropDown items={dropDownItems} placement="bottomRight">
            <Avatar src={authData?.avatar} size={22} />
          </DropDown>
        </li>
      </ul>
    </nav>
  );
};
