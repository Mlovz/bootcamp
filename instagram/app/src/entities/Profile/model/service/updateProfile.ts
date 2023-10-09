import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { User, userActions } from "@/entities/User";
import { LOCAL_STORAGE_TOKEN } from "@/shared/consts/localstorage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { profileActions } from "../slice/profileSlice";
import { ImageUpload } from "@/shared/lib";

interface UpdateProfileParams {
  user: User;
  avatar: File;
}

export const updateProfile = createAsyncThunk<
  any,
  UpdateProfileParams,
  ThunkConfig<string>
>("profile/update", async (params, thunkApi) => {
  const { rejectWithValue, extra, dispatch } = thunkApi;
  const { user, avatar } = params;
  let media: ImageUpload[] = [];

  dispatch(profileActions.setClearMessage());

  try {
    if (avatar) media = await ImageUpload([avatar]);

    const newUser = {
      ...user,
      avatar: avatar ? media[0].url : user.avatar,
    };

    const res = await extra.api.patch("/user", newUser);

    if (res.data) {
      dispatch(userActions.setAuthData(newUser));
    }

    return res;
  } catch (err) {
    return rejectWithValue(err.response.data.msg);
  }
});
