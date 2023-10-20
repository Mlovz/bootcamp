import React, { FC, ReactNode } from "react";
import cls from "./UserCard.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Avatar, HStack, VStack, Text } from "@/shared/ui";
import { AvatarSize } from "@/shared/ui/Avatar/Avatar";

interface UserCardProps {
  title: string;
  content: string;
  children?: ReactNode;
  size?: AvatarSize;
}

export const UserCard: FC<UserCardProps> = ({
  title,
  size,
  content,
  children,
}) => {
  return (
    <HStack className={classNames(cls.userCard)} justify="between" max>
      <HStack gap={8}>
        <Avatar
          src="https://wac-cdn.atlassian.com/ru/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1211"
          size={size}
        />

        <VStack>
          <Text as="h2" fw={400}>
            {title}
          </Text>
          <Text as="span" size={12}>
            {content}
          </Text>
        </VStack>
      </HStack>

      {children}
    </HStack>
  );
};
