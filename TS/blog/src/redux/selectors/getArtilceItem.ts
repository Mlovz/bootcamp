import { StateSchema } from "../store";

export const getArticleItem = (state: StateSchema) =>
  state.article.article || null;

export const getArticleSameItems = (state: StateSchema) =>
  state.article.newArticles || [];
