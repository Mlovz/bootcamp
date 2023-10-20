import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { User, userActions } from "@/entities/User";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { profileActions } from "../slice/profileSlice";

interface GetProfileParams {
  user: User;
  id: string;
}

export const getProfileUser = createAsyncThunk<
  any,
  GetProfileParams,
  ThunkConfig<string>
>("profile/getUser", async (params, thunkApi) => {
  const { rejectWithValue, extra, dispatch } = thunkApi;
  const { user, id } = params;

  dispatch(profileActions.setUpdateIDS(id));

  try {
    const res = await extra.api.get(`/user/${id}`);
    const res1 = await extra.api.get(`/user_posts/${id}`);

    return { resUsers: res.data, resPosts: { ...res1.data, page: 2, _id: id } };
  } catch (err) {
    return rejectWithValue(err.response.data.msg);
  }
});
