import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../types/user";

const initialState: UserState = {
  user: null,
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
