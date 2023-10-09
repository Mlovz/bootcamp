import React, { FC, memo } from "react";
import cls from "./Avatar.module.scss";
import { Mods, classNames } from "@/shared/lib/classNames/classNames";

export type AvatarSize = 150 | 56 | 32 | 22;
type AvatarVariant = "story" | "personal" | "default";

interface AvatarProps {
  size?: AvatarSize;
  className?: string;
  src: string;
  variant?: AvatarVariant;
}

export const Avatar: FC<AvatarProps> = memo(
  ({ src, size = 32, className = "", variant = "default" }) => {
    const sizesClasses: Record<AvatarSize, string> = {
      150: cls.size150,
      56: cls.size56,
      32: cls.size32,
      22: cls.size22,
    };

    const variantClasses: Record<AvatarVariant, string> = {
      story: cls.story,
      default: cls.default,
      personal: cls.personal,
    };

    const classes: any = [
      size && sizesClasses[size],
      variant && variantClasses[variant],
      className,
    ];

    return (
      <div className={classNames(cls.avatar, {}, classes)}>
        <img src={src} alt="" />
      </div>
    );
  }
);
