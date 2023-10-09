import React from "react";
import cls from "./PostCardHeader.module.scss";
import { Avatar, HStack, Icon, Text } from "@/shared/ui";

const PostCardHeader = () => {
  return (
    <HStack max className={cls.header}>
      <HStack gap={12} max>
        <Avatar
          src="https://wac-cdn.atlassian.com/ru/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1211"
          size={32}
        />
        <Text as="span" size={14}>
          terrylucas
        </Text>
      </HStack>
      <Icon type="More" />
    </HStack>
  );
};

export default PostCardHeader;
