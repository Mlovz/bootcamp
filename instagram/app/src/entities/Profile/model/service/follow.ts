import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { User, userActions } from "@/entities/User";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { profileActions } from "../slice/profileSlice";

interface ProfileFollowParams {
  user: User;
  auth: User;
  id: string;
}

export const userFollow = createAsyncThunk<
  any,
  ProfileFollowParams,
  ThunkConfig<string>
>("profile/follow", async (params, thunkApi) => {
  const { rejectWithValue, extra, dispatch, getState } = thunkApi;
  const { user, auth, id } = params;

  const users = getState().profile.users || [];

  try {
    const newUser = { ...user, followers: [...user.followers, auth] };

    dispatch(profileActions.setUpdateFollow(newUser));

    dispatch(
      userActions.setAuthData({
        ...auth,
        following: [...auth.following, newUser],
      })
    );

    const res = await extra.api.patch(`/user/${user._id}/follow`);
    console.log(res);
  } catch (err) {
    return rejectWithValue(err.response.data.msg);
  }
});
