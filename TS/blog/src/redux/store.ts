import {
  createStore,
  applyMiddleware,
  combineReducers,
  AnyAction,
} from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducers/authReducer";
import { articleReducer } from "./reducers/articleReducer";
import { AuthSchema } from "./types/authTypes";
import { ArticleSchema } from "./types/articleTypes";

const rootReducers = combineReducers({
  auth: authReducer,
  article: articleReducer,
});

export interface StateSchema {
  auth: AuthSchema;
  article: ArticleSchema;
}

export const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

type AppState = ReturnType<typeof rootReducers>;
type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;

export const useAppDispatch = () => useDispatch<TypedDispatch<AppState>>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
