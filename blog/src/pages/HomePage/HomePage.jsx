import React from "react";
import cls from "./HomePage.module.scss";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import Title from "../../components/Title/Title";

const HomePage = () => {
  return (
    <div className={cls.home}>
      <Title size={24} fw={700} className={cls.title}>
        Unusual blog
      </Title>
      <div className={cls.articles}>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
};

export default HomePage;
