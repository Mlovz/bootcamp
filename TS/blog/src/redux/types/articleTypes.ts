export const GET_ARTICLES = "GET_ARTICLES";
export const GET_ARTICLES_LOADING = "GET_ARTICLES_LOADING";
export const GET_ARTICLE = "GET_ARTICLE";
export const GET_ARTICLE_LOADING = "GET_ARTICLE_LOADING";

export interface Article {
  _id: string;
  title: string;
  content: string;
  createdAt: any;
}

export interface ArticleSchema {
  articles: Article[];
  getArticlesLoading: boolean;
  article: Article | null;
  getArticleLoading: boolean;
  newArticles: Article[];
}

export interface GetArticlesType {
  type: typeof GET_ARTICLES;
  payload: Article[];
}

export interface GetArticlesLoadingType {
  type: typeof GET_ARTICLES_LOADING;
  payload: boolean;
}

export interface GetArticleLoadingType {
  type: typeof GET_ARTICLE_LOADING;
  payload: boolean;
}

export interface GetArticleType {
  type: typeof GET_ARTICLE;
  payload: {
    article: Article;
    newArticles: Article[];
  };
}

export type ArticleActionType =
  | GetArticlesType
  | GetArticlesLoadingType
  | GetArticleLoadingType
  | GetArticleType;
