import { ThunkConfig } from "@/app/provider";
import { userActions } from "@/entities/User";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { LoginFormValues } from "../schema/useLoginForm";
import { User } from "@/entities/User/model/types/user";
import { LOCAL_STORAGE_TOKEN } from "@/shared/consts/localstorage";

interface GetFethLoginData {
  user: User;
  token: "";
}

export const loginByEmail = createAsyncThunk<
  any,
  LoginFormValues,
  ThunkConfig<string>
>("auth/login", async (userData, thunkApi) => {
  const { rejectWithValue, dispatch, extra } = thunkApi;

  try {
    const res = await axios.post<GetFethLoginData>(
      "http://localhost:5000/api/login",
      userData
    );

    if (res.data) {
      dispatch(userActions.setAuthData(res.data));
      localStorage.setItem(LOCAL_STORAGE_TOKEN, res.data.token);
    }
  } catch (err: any) {
    return rejectWithValue(err.response.data.msg);
  }
});
