import { $api } from "../../api";
import { IStateUserData } from "../../types/auth";
import { Dispatch } from "redux";
import {
  AUTH,
  AUTH_LOADING,
  IAuthType,
  IAuthTypeLoading,
  LoginFetchData,
} from "../types/authTypes";

export const login =
  (userData: IStateUserData) =>
  async (dispatch: Dispatch<IAuthType | IAuthTypeLoading>) => {
    try {
      dispatch({ type: AUTH_LOADING, payload: { loading: true } });

      const res = await $api.post<LoginFetchData>("/login", userData);

      if (res.data) {
        dispatch({
          type: AUTH,
          payload: {
            user: res.data.user,
            token: res.data.access_token,
          },
        });
      }

      dispatch({ type: AUTH_LOADING, payload: { loading: false } });
    } catch (err) {
      // dispatch
      dispatch({ type: AUTH_LOADING, payload: { loading: false } });
    }
  };
