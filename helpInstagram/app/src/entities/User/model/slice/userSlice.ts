import { createSlice } from "@reduxjs/toolkit";
import { UserSchema } from "../types/user";
import { refreshToken } from "../service/resfreshToken";

const initialState: UserSchema = {
  user: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.user = action.payload;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(refreshToken.pending, (state) => {
        state.loading = true;
      })
      .addCase(refreshToken.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(refreshToken.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
