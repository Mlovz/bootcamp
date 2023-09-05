import { AuthSchema, IAuthType } from "../types/authTypes";

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
    default:
      return state;
  }
};
