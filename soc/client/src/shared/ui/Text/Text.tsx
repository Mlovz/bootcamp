import React, { FC, JSX, ReactNode, memo } from "react";
import cls from "./Text.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

type AsTypes = "h2" | "h1" | "span" | "p";
type ColorTypes = "solid" | "default" | "blue";

type SizesType = 24 | 16 | 14 | 12;
type FwType = 800 | 700 | 600 | 500 | 400;

interface TextProps {
  children: ReactNode;
  as?: AsTypes;
  size?: SizesType;
  fw?: FwType;
  color?: ColorTypes;
  className?: string;
  onClick?: (value?: any) => void;
}

export const Text: FC<TextProps> = memo(
  ({
    children,
    as = "p",
    size = 14,
    fw = 400,
    color = "default",
    className = "",
    onClick,
  }) => {
    const sizeClasses: Record<SizesType, string> = {
      24: cls.size24,
      16: cls.size16,
      14: cls.size14,
      12: cls.size12,
    };

    const fwClasses: Record<FwType, string> = {
      800: cls.fw800,
      700: cls.fw700,
      600: cls.fw600,
      500: cls.fw500,
      400: cls.fw400,
    };

    const colorClasses: Record<ColorTypes, string> = {
      solid: cls.solid,
      default: cls.default,
      blue: cls.blue,
    };

    const classes = [
      size && sizeClasses[size],
      fw && fwClasses[fw],
      color && colorClasses[color],
      className,
    ];

    const getTag: Record<AsTypes, JSX.Element> = {
      h2: (
        <h2 onClick={onClick} className={classNames(cls.text, {}, classes)}>
          {children}
        </h2>
      ),
      h1: (
        <h1 onClick={onClick} className={classNames(cls.text, {}, classes)}>
          {children}
        </h1>
      ),
      span: (
        <span onClick={onClick} className={classNames(cls.text, {}, classes)}>
          {children}
        </span>
      ),
      p: (
        <p onClick={onClick} className={classNames(cls.text, {}, classes)}>
          {children}
        </p>
      ),
    };

    return getTag[as];
  }
);
