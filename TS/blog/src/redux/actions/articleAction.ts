import { Dispatch } from "redux";
import {
  GetArticlesLoadingType,
  GetArticlesType,
  GetArticleType,
  GetArticleLoadingType,
  GET_ARTICLES_LOADING,
  GET_ARTICLES,
  GET_ARTICLE_LOADING,
  GET_ARTICLE,
} from "../types/articleTypes";
import { $api } from "../../api";

export const getArticles =
  () =>
  async (dispatch: Dispatch<GetArticlesType | GetArticlesLoadingType>) => {
    try {
      dispatch({ type: GET_ARTICLES_LOADING, payload: true });

      const res = await $api.get("/home/articles");

      if (res.data) {
        dispatch({
          type: GET_ARTICLES,
          payload: res.data.articles,
        });
        dispatch({ type: GET_ARTICLES_LOADING, payload: false });
      }
    } catch (err) {
      dispatch({ type: GET_ARTICLES_LOADING, payload: false });
    }
  };

export const getArticle =
  (id: string) =>
  async (dispatch: Dispatch<GetArticleType | GetArticleLoadingType>) => {
    try {
      dispatch({ type: GET_ARTICLE_LOADING, payload: true });

      const res = await $api.get(`/article/${id}`);

      if (res.data) {
        dispatch({
          type: GET_ARTICLE,
          payload: {
            article: res.data.article,
            newArticles: res.data.newArticles,
          },
        });
        dispatch({ type: GET_ARTICLE_LOADING, payload: false });
      }
    } catch (err) {
      dispatch({ type: GET_ARTICLE_LOADING, payload: false });
    }
  };
