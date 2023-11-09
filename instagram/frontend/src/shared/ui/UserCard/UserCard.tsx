import React, { FC, ReactNode, memo } from "react";
import { HStack } from "../Stack/HStack";
import { VStack } from "../Stack/VStack";
import { AppLink } from "../AppLink/AppLink";
import { Text } from "../Text/Text";
import { classNames } from "@/shared/lib/classNames";

import cls from "./UserCard.module.scss";
import { Avatar, AvatarSize } from "../Avatar/Avatar";

interface UserCardProps {
  className?: string;
  id?: string;
  src?: string;
  alt?: string;
  title: string;
  content: string;
  size?: AvatarSize;
  onClick?: () => void;
  children?: ReactNode;
}

export const UserCard: FC<UserCardProps> = memo((props) => {
  const {
    src,
    className = "",
    id,
    alt,
    size,
    title,
    content,
    onClick,
    children,
  } = props;

  return (
    <HStack justify="between">
      <HStack
        gap={16}
        className={classNames(cls.userCard, {}, [className])}
        max
        onClick={onClick}
      >
        <Avatar src={src && src} size={size} />

        <VStack max>
          <Text color="default" fw={700} as="span">
            <AppLink to={`/profile/${id}`} className={cls.title}>
              {title}
            </AppLink>
          </Text>

          <Text>{content}</Text>
        </VStack>
      </HStack>

      {children}
    </HStack>
  );
});
