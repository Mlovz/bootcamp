import React from "react";
import cls from "./PostCardBody.module.scss";
import { Text, VStack } from "@/shared/ui";

const PostCardBody = () => {
  return (
    <VStack className={cls.body}>
      <Text as="span" size={12} fw={700}>
        1.069 Likes
      </Text>
      <Text size={12} as="p">
        <Text fw={700} as="span" size={12} className={cls.userName}>
          terrylucas
        </Text>
        Imperdiet in sit rhoncus, eleifend tellus augue lectus potenti
        pellentesque
        <Text as="span" size={12} className={cls.more}>
          ...more
        </Text>
      </Text>
    </VStack>
  );
};

export default PostCardBody;
