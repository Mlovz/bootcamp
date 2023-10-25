import { FC } from "react";
import cls from "./Icon.module.scss";
import { IconType, iconName } from "./IconName";
import { classNames } from "@/shared/lib/classNames";

interface IconProps {
  type: IconType;
  className?: string;
}

export const Icon: FC<IconProps> = ({ type, className = '' }) => {
  return <div className={classNames(cls.icon, {}, [className])}>{iconName[type]}</div>;
};
