import { createSlice } from "@reduxjs/toolkit";
import { AuthSchema } from "../type/auth";
import { login } from "../service/loginByEmail";

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
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
