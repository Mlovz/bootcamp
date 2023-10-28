import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { authReducer } from "@/features/auth";

export const createStore = () => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    auth: authReducer,
  };

  const store = configureStore({
    reducer: rootReducers,
  });

  return store;
};

export type AppDispatch = ReturnType<typeof createStore>["dispatch"];
