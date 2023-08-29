import { createStore, combineReducers, applyMiddleware } from "redux";
import { authReducer } from "./reducers/authReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { globalReducer } from "./reducers/globalReducer";

const rootReducers = combineReducers({
  auth: authReducer,
  global: globalReducer,
});

export const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
