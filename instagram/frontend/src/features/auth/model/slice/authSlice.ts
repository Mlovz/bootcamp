import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../types/auth";

const initialState: AuthState = {
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
