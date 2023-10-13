import { createSlice } from "@reduxjs/toolkit";
import { AuthSchema } from "../type/auth";

const initialState: AuthSchema = {
  user: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.user = action.payload;
    },

    setAuthLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
