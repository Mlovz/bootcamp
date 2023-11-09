import { ThunkConfig } from "@/app/provider";
import { User } from "@/entities/User/model/types/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { profileActions } from "../slice/profileSlice";
import { userActions } from "@/entities/User";

interface FollowParams {
  user: User;
  auth: User;
}

export const followUser = createAsyncThunk<
  any,
  FollowParams,
  ThunkConfig<string>
>("profile/follow", async (params, thunkApi) => {
  const { rejectWithValue, dispatch, extra } = thunkApi;

  const { user, auth } = params;

  try {
    const newUser = {
      ...user,
      followers: [...user.followers, auth],
    };

    dispatch(profileActions.setUpdateFollow(newUser));

    dispatch(
      userActions.setUpdateUser({
        ...auth,
        following: [...auth.following, user],
      })
    );

    await extra.api.patch(`/user/${user._id}/follow`);
  } catch (err: any) {
    return rejectWithValue(err.response.data.msg);
  }
});
