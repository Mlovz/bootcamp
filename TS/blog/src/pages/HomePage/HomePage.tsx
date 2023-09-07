import React, { useEffect } from "react";
import { ArticleCard, VStack } from "../../components";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getArticles } from "../../redux/actions/articleAction";
import { getArticlesData } from "../../redux/selectors/getArticlesData";

const HomePage = () => {
  const dispatch = useAppDispatch();

  const articles = useAppSelector(getArticlesData);

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  // if (getArticlesLoading) {
  //   return <h1>Loading...</h1>;
  // }

  console.log(articles);

  return (
    <VStack>
      <h2>Unusual Blog</h2>

      <VStack gap={20}>
        {articles.map((article) => (
          <ArticleCard
            id={article._id}
            title={article.title}
            content={article.content}
            createdAt={article.createdAt}
          />
        ))}
      </VStack>
    </VStack>
  );
};

export default HomePage;
