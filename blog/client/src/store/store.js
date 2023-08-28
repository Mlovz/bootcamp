import { createStore, combineReducers } from "redux";
import { authReducer } from "./reducers/authReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducers = combineReducers({
  auth: authReducer,
});

export const store = createStore(rootReducers, composeWithDevTools());
