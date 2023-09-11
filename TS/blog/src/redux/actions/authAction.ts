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
import { tokenExp } from "../../utils/tokenExp";

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
        dispatch({ type: AUTH_LOADING, payload: { loading: false } });
        window.location.href = "/";
      }
    } catch (err) {
      // dispatch
      dispatch({ type: AUTH_LOADING, payload: { loading: false } });
    }
  };

export const getUser = () => async (dispatch: Dispatch<any>) => {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const err = tokenExp(token);
      if (err) {
        localStorage.removeItem("token");
        window.location.href = "/";
        return;
      }

      // const res = await axios.get("");
    } catch (err) {}
  }
};
