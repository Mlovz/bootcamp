import React, { FC } from "react";
import { Post } from "../types/post";

interface ArticleProps {
  post: Post;
}

const Article: FC<ArticleProps> = ({ post }) => {
  return <div>{post.content}</div>;
};

export default Article;
