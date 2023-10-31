import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../types/auth";
import { registerByEmail } from "../service/registerByEmail";
import { loginByEmail } from "../service/loginByEmail";

const initialState: AuthState = {
  loading: false,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(registerByEmail.pending, (state, _) => {
        state.loading = true;
      })
      .addCase(registerByEmail.fulfilled, (state, _) => {
        state.loading = false;
        state.error = "";
      })
      .addCase(registerByEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(loginByEmail.pending, (state, _) => {
        state.loading = true;
      })
      .addCase(loginByEmail.fulfilled, (state, _) => {
        state.loading = false;
        state.error = "";
      })
      .addCase(loginByEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
