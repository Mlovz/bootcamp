const initialState = {
  user: null,
  token: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };

    default:
      return state;
  }
};
