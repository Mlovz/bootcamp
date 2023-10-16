import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk<any, any, any>(
  "auth/login",
  async (params, thunkAPI) => {
    try {
      const res = await axios.post("http://localhost:5000/api/login", params);
      console.log(res);

      return res.data;
    } catch (err: any) {}
  }
);
