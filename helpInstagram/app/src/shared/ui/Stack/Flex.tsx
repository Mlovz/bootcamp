import React, { FC, ReactNode } from "react";
import cls from "./flex.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

type DirectionTypes = "row" | "column";
type AlignTypes = "center" | "end" | "start";
type JustifyTypes = "center" | "end" | "start" | "between" | "around";
type gapTypes = 0 | 5 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 40;

export interface FlexProps {
  gap?: gapTypes;
  align?: AlignTypes;
  justify?: JustifyTypes;
  className?: string;
  direction?: DirectionTypes;
  children: ReactNode;
  max?: boolean;
  onClick?: (value?: any) => void;
}

const Flex: FC<FlexProps> = ({
  gap = 0,
  align = "center",
  justify = "start",
  direction = "row",
  max = false,
  className,
  onClick,
  children,
}) => {
  const gapClasses: Record<gapTypes, string> = {
    0: cls.gap0,
    5: cls.gap5,
    8: cls.gap8,
    12: cls.gap12,
    16: cls.gap16,
    20: cls.gap20,
    24: cls.gap24,
    28: cls.gap28,
    32: cls.gap32,
    40: cls.gap40,
  };

  const alignClasses: Record<AlignTypes, string> = {
    center: cls.center,
    start: cls.start,
    end: cls.end,
  };

  const justifyClasses: Record<JustifyTypes, string> = {
    center: cls.justifyCenter,
    start: cls.justifyStart,
    end: cls.justifyEnd,
    between: cls.between,
    around: cls.around,
  };

  const directionClasses: Record<DirectionTypes, string> = {
    row: cls.row,
    column: cls.column,
  };

  return (
    <div
      className={classNames(
        cls.flex,
        {
          [cls.max]: max,
        },
        [
          gapClasses[gap],
          alignClasses[align],
          justifyClasses[justify],
          directionClasses[direction],
          className,
        ]
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Flex;
