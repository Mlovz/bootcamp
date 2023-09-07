import React, { FC } from "react";
import VStack from "../Stack/VStack";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  title: string;
  content: string;
  createdAt: Date;
  id: string;
}

const ArticleCard: FC<ArticleCardProps> = ({
  title,
  id,
  content,
  createdAt,
}) => {
  return (
    <Link to={`/article/${id}`}>
      <VStack gap={8} className="card">
        <h2>{title}</h2>
        <span>{createdAt.toString()}</span>
        <p>{content}</p>
      </VStack>
    </Link>
  );
};

export default ArticleCard;
