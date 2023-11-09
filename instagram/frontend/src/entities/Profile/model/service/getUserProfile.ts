import { ThunkConfig } from "@/app/provider";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserProfile = createAsyncThunk<
  any,
  { id: string },
  ThunkConfig<string>
>("profile/getProfileUser", async ({ id }, thunkApi) => {
  const { rejectWithValue, extra } = thunkApi;

  try {
    const res = await extra.api.get(`/user/${id}`);

    return res.data;
  } catch (err: any) {
    return rejectWithValue(err.response.data.msg);
  }
});
