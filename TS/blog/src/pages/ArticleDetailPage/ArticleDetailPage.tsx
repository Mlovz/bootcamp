import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
import { getArticle } from "../../redux/actions/articleAction";
import { useSelector } from "react-redux";
import {
  getArticleItem,
  getArticleSameItems,
} from "../../redux/selectors/getArtilceItem";
import { ArticleCard } from "../../components";

const ArticleDetailPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const article = useSelector(getArticleItem);
  const articleSameItems = useSelector(getArticleSameItems);

  useEffect(() => {
    if (id) {
      dispatch(getArticle(id));
    }
  }, [id, dispatch]);

  return (
    <div>
      {article && <div>Item</div>}

      {articleSameItems.length ? (
        articleSameItems.map((item) => (
          <ArticleCard
            key={item._id}
            id={item._id}
            title={item.title}
            content={item.content}
            createdAt={item.createdAt}
          />
        ))
      ) : (
        <h2>Похожих статьей нет</h2>
      )}
    </div>
  );
};

export default ArticleDetailPage;
