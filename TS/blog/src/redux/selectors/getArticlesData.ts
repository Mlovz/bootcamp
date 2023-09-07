import { StateSchema } from "../store";

export const getArticlesData = (state: StateSchema) => state.article.articles;
