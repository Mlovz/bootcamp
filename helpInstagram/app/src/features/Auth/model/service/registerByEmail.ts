import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerByEmail = createAsyncThunk<any, any, ThunkConfig<string>>(
  "auth/register",
  async (userData, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;

    delete userData.cf_password;
    try {
      const res = await extra.api.post("/register", userData);

      return res;
    } catch (err) {
      return rejectWithValue(err.response.data.msg);
    }
  }
);
