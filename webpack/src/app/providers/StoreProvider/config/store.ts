import { authReducer } from "@/features/Auth/model/slice/authSlice";
import { configureStore } from "@reduxjs/toolkit";

const rootReducers: any = {
  auth: authReducer,
};

export const store = configureStore({
  reducer: rootReducers,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
