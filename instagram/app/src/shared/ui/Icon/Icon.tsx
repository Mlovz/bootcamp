import React, { FC, memo } from "react";
import { IconTypes, iconName } from "./IconName";
import { Mods, classNames } from "@/shared/lib/classNames/classNames";
import cls from "./icon.module.scss";

type IconSize = "m" | "l" | "xl";

interface IIconProps {
  type: IconTypes;
  size?: IconSize;
  className?: string;
}

export const Icon: FC<IIconProps> = memo(
  ({ type, size = "m", className = "" }) => {
    const getIcon = (type: IconTypes) => {
      return iconName[type] as JSX.Element;
    };

    const mods: Mods = {
      [cls[size]]: true,
    };
    return (
      <div className={classNames(cls.icon, mods, [className])}>
        {getIcon(type)}
      </div>
    );
  }
);
