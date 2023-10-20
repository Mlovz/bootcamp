import React, { FC } from "react";
import cls from "./PostCard.module.scss";
import PostCardHeader from "../PostCardHeader/PostCardHeader";
import PostCardImages from "../PostCardImages/PostCardImages";
import PostCardIcons from "../PostCardIcons/PostCardIcons";
import PostCardBody from "../PostCardBody/PostCardBody";
import { classNames } from "@/shared/lib/classNames/classNames";
import { VStack } from "@/shared/ui";
import AddComment from "@/features/AddComment/AddComment";

interface PostCardProps {
  className?: string;
}

const PostCard: FC<PostCardProps> = ({ className = "" }) => {
  return (
    <VStack className={classNames(cls.postCard, {}, [className])} max>
      <PostCardHeader />
      <PostCardImages />
      <PostCardIcons />
      <PostCardBody />
      <AddComment />
    </VStack>
  );
};

export default PostCard;
