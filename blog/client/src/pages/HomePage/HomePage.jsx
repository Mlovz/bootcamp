import React, { useEffect, useState } from "react";
import cls from "./HomePage.module.scss";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import Title from "../../components/Title/Title";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("http://localhost:5000/api/home/articles");
      const data = await res.json();
      setPosts(data.articles);
    };
    getPosts();
  }, []);

  return (
    <div className={cls.home}>
      <Title size={24} fw={700} className={cls.title}>
        Unusual blog
      </Title>
      <div className={cls.articles}>
        {posts.length > 0 ? (
          posts.map((post) => (
            <ArticleCard
              title={post.title}
              content={post.content}
              createdAt={post.createdAt}
              id={post._id}
            />
          ))
        ) : (
          <Title as="h2" size={24} fw={700}>
            Постов нет
          </Title>
        )}
      </div>
    </div>
  );
};

export default HomePage;
