import React from "react";
import cls from "./PostCardIcons.module.scss";
import { HStack, Icon } from "@/shared/ui";

const PostCardIcons = () => {
  return (
    <HStack className={cls.icons} justify="between" max>
      <HStack gap={8}>
        <Icon type="Like" />
        <Icon type="Comment" />
        <Icon type="SharePosts" />
      </HStack>

      <Icon type="Save" />
    </HStack>
  );
};

export default PostCardIcons;
