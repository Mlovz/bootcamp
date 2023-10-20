import React, { FC, JSX, ReactNode, memo } from "react";
import cls from "./Text.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

type AsTypes = "h2" | "h1" | "span" | "p";
type ColorTypes = "solid" | "default" | "blue" | "error";

type SizesType = 24 | 16 | 14 | 12;
type FwType = 800 | 700 | 600 | 500 | 400;
type AlignType = "center" | "left" | "right";

interface TextProps {
  children: ReactNode;
  as?: AsTypes;
  size?: SizesType;
  align?: AlignType;
  fw?: FwType;
  color?: ColorTypes;
  max?: boolean;
  className?: string;
  onClick?: (value?: any) => void;
}

export const Text: FC<TextProps> = memo(
  ({
    children,
    as = "p",
    align = "left",
    size = 14,
    fw = 400,
    color = "default",
    className = "",
    max = false,
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

    const alignClasses: Record<AlignType, string> = {
      center: cls.center,
      left: cls.left,
      right: cls.right,
    };

    const colorClasses: Record<ColorTypes, string> = {
      solid: cls.solid,
      default: cls.default,
      blue: cls.blue,
      error: cls.error,
    };

    const classes = [
      size && sizeClasses[size],
      fw && fwClasses[fw],
      color && colorClasses[color],
      align && alignClasses[align],
      max && cls.max,
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
