import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { authReducer } from "@/features/auth";
import { userReducer } from "@/entities/User";

export const createStore = () => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    auth: authReducer,
    user: userReducer,
  };

  const store = configureStore({
    reducer: rootReducers,
  });

  return store;
};

export type AppDispatch = ReturnType<typeof createStore>["dispatch"];
