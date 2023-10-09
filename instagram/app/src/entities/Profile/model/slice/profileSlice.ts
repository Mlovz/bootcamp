import { createSlice } from "@reduxjs/toolkit";
import { ProfileSchema } from "../types/profile";
import { updateProfile } from "../service/updateProfile";
import { getProfileUser } from "../service/getProfileUser";

const initialState: ProfileSchema = {
  loading: false,
  posts: [],
  users: [],
  ids: [],
  success: "",
  error: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUpdateProfile: (state, action) => {},
    setUpdateIDS: (state, action) => {
      state.ids = [...state.ids, action.payload];
    },

    setUpdateFollow: (state, action) => {
      state.users = state.users.map((user) =>
        user._id === action.payload._id ? action.payload : user
      );
    },

    setClearMessage: (state) => {
      state.success = "";
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateProfile.pending, (state) => {
        state.error = "";
      })
      .addCase(updateProfile.fulfilled, (state) => {
        state.error = "";
        state.success = "Профиль обновлен.";
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(getProfileUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProfileUser.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = [...state.posts, action.payload.resPosts];
        state.users = [...state.users, action.payload.resUsers.user];
      })
      .addCase(getProfileUser.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
