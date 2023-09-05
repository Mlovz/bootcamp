import { AUTH_TYPES, AuthSchema, IAuthType } from "../types/authTypes";

const initialState: AuthSchema = {
  user: null,
  token: "",
  loading: false,
};

export const authReducer = (
  state = initialState,
  action: IAuthType
): AuthSchema => {
  switch (action.type) {
    case AUTH_TYPES.AUTH_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };

    case AUTH_TYPES.AUTH:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };

    default:
      return state;
  }
};
