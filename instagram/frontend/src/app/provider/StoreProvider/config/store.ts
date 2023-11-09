import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { authReducer } from "@/features/auth";
import { userReducer } from "@/entities/User";
import { $api } from "@/shared/api";
import { profileReducer } from "@/entities/Profile";

export const createStore = () => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    auth: authReducer,
    user: userReducer,
    profile: profileReducer,
  };

  const extraArg: ThunkExtraArg = {
    api: $api,
  };

  const store = configureStore({
    reducer: rootReducers,
    devTools: DEV,
    // @ts-ignore
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
  });

  return store;
};

export type AppDispatch = ReturnType<typeof createStore>["dispatch"];
