import { createSlice } from "@reduxjs/toolkit";
import { AuthSchema } from "../types/auth";
import { loginByEmail } from "../service/loginByEmail";

const initialState: AuthSchema = {
  loading: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (buidlder) => {
    buidlder
      .addCase(loginByEmail.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginByEmail.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(loginByEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;
