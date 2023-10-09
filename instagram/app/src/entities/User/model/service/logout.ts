import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { userActions } from "@/entities/User";
import { LOCAL_STORAGE_TOKEN } from "@/shared/consts/localstorage";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface GetLoginFetchData {
  user: any;
  token: string;
}

export const logout = createAsyncThunk<any, void, ThunkConfig<string>>(
  "user/logout",
  async (_, thunkApi) => {
    const { rejectWithValue, extra, dispatch } = thunkApi;

    try {
      const res = await extra.api.post("/logout");
      console.log(res);

      if (res.data) {
        dispatch(userActions.setAuthData(null));
        localStorage.removeItem(LOCAL_STORAGE_TOKEN);
      }

      return res;
    } catch (err) {
      return rejectWithValue(err.response.data.msg);
    }
  }
);
