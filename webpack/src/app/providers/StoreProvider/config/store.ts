import { authReducer } from "@/features/Auth/model/slice/authSlice";
import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";

const rootReducers: ReducersMapObject<StateSchema> = {
  auth: authReducer,
};

export const store = configureStore({
  reducer: rootReducers,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
