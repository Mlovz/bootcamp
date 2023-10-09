import React, { FC, memo } from "react";
import cls from "./Avatar.module.scss";
import { Mods, classNames } from "@/shared/lib/classNames/classNames";

export type AvatarSize = 56 | 32;
type AvatarVariant = "story" | "default";

interface AvatarProps {
  size?: AvatarSize;
  className?: string;
  src: string;
  status?: AvatarVariant;
}

export const Avatar: FC<AvatarProps> = memo(
  ({ src, size = 32, className = "", status = "default" }) => {
    const sizesClasses: Record<AvatarSize, string> = {
      56: cls.size56,
      32: cls.size32,
    };

    const variantClasses: Record<AvatarVariant, string> = {
      story: cls.story,
      default: cls.default,
    };

    const classes: any = [
      size && sizesClasses[size],
      status && variantClasses[status],
      className,
    ];

    return (
      <div className={classNames(cls.avatar, {}, classes)}>
        <img src={src} alt="" />
      </div>
    );
  }
);
