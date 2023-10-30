import { type FC, type ReactNode } from "react";
import cls from "./Text.module.scss";
import { classNames } from "@/shared/lib/classNames";

export type AsType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
export type TextSize = 10 | 12 | 13 | 14 | 16 | 18 | 24;
export type TextFw = 300 | 400 | 500 | 600 | 700 | 800;
export type TextAlign = "center" | "left" | "right";
export type TextColor = "default" | "gray" | 'blue';

const sizeClasess: Record<TextSize, string> = {
  10: cls.size10,
  12: cls.size12,
  13: cls.size13,
  14: cls.size14,
  16: cls.size16,
  18: cls.size18,
  24: cls.size24
};

const fWClasess: Record<TextFw, string> = {
  300: cls.fw300,
  400: cls.fw400,
  500: cls.fw500,
  600: cls.fw600,
  700: cls.fw700,
  800: cls.fw800
};

const alignClasess: Record<TextAlign, string> = {
  center: cls.center,
  left: cls.left,
  right: cls.right
};

const colorClasess: Record<TextColor, string> = {
  default: cls.default,
  gray: cls.gray,
  blue: cls.blue
};

interface TextProps {
  children: ReactNode
  as?: AsType
  size?: TextSize
  fw?: TextFw
  className?: string
  align?: TextAlign
  color?: TextColor
}

export const Text: FC<TextProps> = (props) => {
  const {
    children,
    as = "h2",
    size = 14,
    fw = 300,
    className = "",
    align,
    color = "gray"
  } = props;

  const classes = [
    size && sizeClasess[size],
    fw && fWClasess[fw],
    align && alignClasess[align],
    color && colorClasess[color],
    className
  ];

  const getAS = {
    h1: <h1 className={classNames("", {}, classes)}>{children}</h1>,
    h2: <h2 className={classNames("", {}, classes)}>{children}</h2>,
    h3: <h3 className={classNames("", {}, classes)}>{children}</h3>,
    h4: <h4 className={classNames("", {}, classes)}>{children}</h4>,
    h5: <h5 className={classNames("", {}, classes)}>{children}</h5>,
    h6: <h6 className={classNames("", {}, classes)}>{children}</h6>,
    span: <span className={classNames("", {}, classes)}>{children}</span>,
    p: <p className={classNames("", {}, classes)}>{children}</p>
  };

  return getAS[as];
};
