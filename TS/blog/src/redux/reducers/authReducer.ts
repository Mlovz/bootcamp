import {
  AUTH,
  AUTH_LOADING,
  AuthSchema,
  IAuthType,
  IAuthTypeLoading,
} from "../types/authTypes";

const initialState: AuthSchema = {
  user: null,
  token: "",
  loading: false,
};

export const authReducer = (
  state = initialState,
  action: IAuthType | IAuthTypeLoading
): AuthSchema => {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };

    case AUTH:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };

    default:
      return state;
  }
};
