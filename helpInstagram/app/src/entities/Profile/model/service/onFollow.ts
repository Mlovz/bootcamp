import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { User, userActions } from "@/entities/User";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { profileActions } from "../slice/profileSlice";

interface ProfileOnFollowParams {
  user: User;
  auth: User;
  id: string;
}

export const userOnFollow = createAsyncThunk<
  any,
  ProfileOnFollowParams,
  ThunkConfig<string>
>("profile/onFollow", async (params, thunkApi) => {
  const { rejectWithValue, extra, dispatch, getState } = thunkApi;
  const { user, auth, id } = params;

  const users = getState().profile.users || [];

  try {
    const newUser = {
      ...user,
      followers: user.followers.filter((item: any) => item._id !== auth._id),
    };

    dispatch(profileActions.setUpdateFollow(newUser));

    dispatch(
      userActions.setAuthData({
        ...auth,
        following: auth.following.filter((item) => item._id !== id),
      })
    );

    const res = await extra.api.patch(`/user/${user._id}/unfollow`);
    console.log(res);
  } catch (err) {
    return rejectWithValue(err.response.data.msg);
  }
});
