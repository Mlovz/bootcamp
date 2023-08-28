import { createStore, combineReducers } from "redux";

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  if (action.type === "A") {
    return {
      ...state,
      user: {
        username: action.payload,
      },
    };
  }

  return state;
};

const articleReducer = (state = initialState2, action) => {
  return state;
};

const initialState2 = {
  artilces: null,
};

const rootReducers = combineReducers({
  userReducer: userReducer,
  articleReducer: articleReducer,
});

export const store = createStore(rootReducers);
