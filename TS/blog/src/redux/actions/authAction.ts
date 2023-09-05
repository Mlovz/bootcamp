import { $api } from "../../api";
import { IStateUserData } from "@/types/auth";
import { Dispatch } from "redux";

export const login =
  (userData: IStateUserData) => async (dispatch: Dispatch<any>) => {
    try {
      // dispatch

      const res = await $api.post("/login", userData);

      if (res.data) {
        // dispatch
      }

      //   dispatch
    } catch (err) {
      // dispatch
      // dispatch
    }
  };
