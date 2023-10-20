import React, { FC, Fragment, ReactNode } from "react";
import { Menu } from "@headlessui/react";
import { classNames } from "@/shared/lib";
import popupCls from "../../styles/popup.module.scss";
import { DropdownDirection } from "@/shared/types/ui";
import cls from "./DropDown.module.scss";
import { mapDirectionClass } from "../../styles/consts";
import { Icon } from "@/shared/ui/Icon/Icon";
import { Link } from "react-router-dom";

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
  icon?: any;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  direction?: DropdownDirection;
  trigger: ReactNode;
  menuClass?: string;
}

export const DropDown: FC<DropdownProps> = (props) => {
  const {
    className,
    items,
    direction = "bottom left",
    trigger,
    menuClass,
  } = props;

  const menuClasses = [mapDirectionClass[direction], popupCls.menu, menuClass];

  return (
    <Menu
      as="div"
      className={classNames(cls.Dropdown, {}, [className, popupCls.popup])}
    >
      <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              disabled={item.disabled}
              onClick={item.onClick}
              className={classNames(cls.item, {
                [popupCls.active]: active,
              })}
            >
              {item.icon && <Icon type={item.icon} />}
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item
                as={Link}
                to={item.href}
                disabled={item.disabled}
                key={`dropdown-key-${index}`}
                className={cls.link}
              >
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item
              key={`dropdown-key-${index}`}
              as={Fragment}
              disabled={item.disabled}
            >
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};
