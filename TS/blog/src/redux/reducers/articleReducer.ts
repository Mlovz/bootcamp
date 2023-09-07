import {
  ArticleActionType,
  ArticleSchema,
  GET_ARTICLE,
  GET_ARTICLES,
  GET_ARTICLES_LOADING,
  GET_ARTICLE_LOADING,
} from "../types/articleTypes";

const initialState: ArticleSchema = {
  articles: [],
  getArticlesLoading: false,
  article: null,
  getArticleLoading: false,
  newArticles: [],
};

export const articleReducer = (
  state = initialState,
  action: ArticleActionType
): ArticleSchema => {
  switch (action.type) {
    case GET_ARTICLES_LOADING:
      return {
        ...state,
        getArticlesLoading: action.payload,
      };

    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };

    case GET_ARTICLE_LOADING:
      return {
        ...state,
        getArticleLoading: action.payload,
      };

    case GET_ARTICLE:
      return {
        ...state,
        article: action.payload.article,
        newArticles: action.payload.newArticles,
      };

    default:
      return state;
  }
};
