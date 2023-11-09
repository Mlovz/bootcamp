import { ThunkConfig } from "@/app/provider";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_TOKEN } from "@/shared/consts/localstorage";

export const logout = createAsyncThunk<any, void, ThunkConfig<string>>(
  "user/getAuthUser",
  async (_, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;

    try {
      const res = await extra.api.post("/logout");

      if (res.data) {
        localStorage.removeItem(LOCAL_STORAGE_TOKEN);
        window.location.href = "/";
      }
    } catch (err: any) {
      return rejectWithValue(err.response.data.msg);
    }
  }
);
