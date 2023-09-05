import { $api } from "../../api";
import { IStateUserData } from "@/types/auth";
import { Dispatch } from "redux";
import { AUTH_TYPES, LoginFetchData } from "../types/authTypes";

export const login =
  (userData: IStateUserData) => async (dispatch: Dispatch<any>) => {
    try {
      console.log(userData);

      dispatch({ type: AUTH_TYPES.AUTH_LOADING, payload: { loading: true } });

      const res = await $api.post<LoginFetchData>("/login", userData);

      console.log(res);

      if (res.data) {
        dispatch({
          type: AUTH_TYPES.AUTH,
          payload: {
            user: res.data.user,
            token: res.data.access_token,
          },
        });
      }

      dispatch({ type: AUTH_TYPES.AUTH_LOADING, payload: { loading: false } });
    } catch (err) {
      // dispatch
      dispatch({ type: AUTH_TYPES.AUTH_LOADING, payload: { loading: false } });
    }
  };
