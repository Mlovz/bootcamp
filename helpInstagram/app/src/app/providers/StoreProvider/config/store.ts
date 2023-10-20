import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { authReducer } from "@/features/Auth";
import { userReducer } from "@/entities/User";
import { profileReducer } from "@/entities/Profile";
import { $api } from "@/shared/api";

export const createStore = () => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
    auth: authReducer,
    profile: profileReducer,
  };

  const extraArg: ThunkExtraArg = {
    api: $api,
  };

  const store = configureStore({
    reducer: rootReducers,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        thunk: {
          extraArgument: extraArg,
        },
      }),
  });

  return store;
};

export type AppDispatch = ReturnType<typeof createStore>["dispatch"];
