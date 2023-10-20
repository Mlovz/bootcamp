import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { userActions } from "@/entities/User";
import { LOCAL_STORAGE_TOKEN } from "@/shared/consts/localstorage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginFormValues } from "../schema/useLoginFormSchema";

interface GetLoginFetchData {
  user: any;
  token: string;
}

export const loginByEmail = createAsyncThunk<
  any,
  LoginFormValues,
  ThunkConfig<string>
>("auth/login", async (userData, thunkApi) => {
  const { rejectWithValue, extra, dispatch } = thunkApi;

  try {
    const res = await extra.api.post<GetLoginFetchData>("/login", userData);

    console.log(res);

    if (res.data) {
      dispatch(userActions.setAuthData(res.data.user));
      localStorage.setItem(LOCAL_STORAGE_TOKEN, res.data.token);
    }

    return res;
  } catch (err) {
    return rejectWithValue(err.response.data.msg);
  }
});
