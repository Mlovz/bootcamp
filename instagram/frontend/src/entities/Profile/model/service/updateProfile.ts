import { ThunkConfig } from "@/app/provider";
import { userActions } from "@/entities/User";
import { User } from "@/entities/User/model/types/user";
import { ImageUpload, imageUploade } from "@/shared/lib/imageUpload";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface UpdateProfileParams {
  user: User;
  avatar: File;
}

export const updateProfile = createAsyncThunk<
  any,
  UpdateProfileParams,
  ThunkConfig<string>
>("profile/updateProfile", async (params, thunkApi) => {
  const { rejectWithValue, dispatch, extra } = thunkApi;

  const { user, avatar } = params;

  let newAvatar: ImageUpload[] = [];

  try {
    if (avatar) newAvatar = await imageUploade([avatar]);

    const newUser = {
      ...user,
      avatar: avatar ? newAvatar[0].url : user.avatar,
    };

    const res = await extra.api.patch(`/user`, newUser);
    if (res.data) {
      dispatch(userActions.setUpdateUser(newUser));
    }
    return res.data;
  } catch (err: any) {
    return rejectWithValue(err.response.data.msg);
  }
});
